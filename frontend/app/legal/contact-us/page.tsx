"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";
import Toast, { ToastType } from "@/components/ui/toast";
import { CONTACT } from "@/lib/contact";

export default function ContactUsPage() {
  const [contact, setContact] = useState(CONTACT);

  useEffect(() => {
    fetch("/api/settings/contact")
      .then((r) => r.json())
      .then((data) => {
        if (data && (data.address || data.email || data.phone)) {
          setContact({
            address: data.address ?? CONTACT.address,
            email: data.email ?? CONTACT.email,
            phone: data.phone ?? CONTACT.phone,
          });
        }
      })
      .catch(() => {});
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [toast, setToast] = useState<{ message: string; type: ToastType; isVisible: boolean }>({
    message: "",
    type: "info",
    isVisible: false,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type, isVisible: true });
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "" });
      showToast("Thank you! we will get back to you soon", "success");

      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again later.");
      showToast("Something went wrong. Please try again later.", "error");
    }
  };

  const stats = [
    { value: "+10", label: "AWARDS" },
    { value: "+190", label: "CASE STUDIES" },
    { value: "+2,781", label: "CUSTOMERS" },
    { value: "4", label: "OFFICES" },
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden font-sans">
      <Navigation />

      {/* Hero / Global Presence Section */}
      <section className="relative bg-gradient-to-b from-[#E8F7FC] to-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>
        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12 px-4"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerFadeUp}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6 tracking-tight leading-tight"
              variants={bobUp}
            >
              Let&apos;s Build What&apos;s Next - <span className="text-[#00A8E8]">Together</span>
            </motion.h1>
            <motion.p
              className="text-[#4B5563] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              variants={bobUp}
            >
              Whether you&apos;re looking to scale faster, optimize performance, or explore new growth opportunities, our team is ready to help. Connect with NineXGroup and take the next confident step forward.
            </motion.p>
          </motion.div>

          {/* Full-width Globe Container */}
          <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] -mb-12 sm:-mb-16">
            <motion.div
              className="relative w-full"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={bobUp}
            >
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[900px] -mt-24 sm:-mt-32 md:-mt-36 lg:-mt-48 pointer-events-none">
                <Image
                  src="/images/contact_globe.png"
                  alt="Global Presence"
                  fill
                  className="object-cover w-full h-full opacity-90"
                  priority
                  sizes="100vw"
                />
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 max-w-5xl mx-auto px-4 mt-24"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={staggerFadeUp}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={bobUp}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#1F1F1F] to-[#4B5563]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[#00A8E8] font-bold tracking-widest uppercase mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-12 sm:py-20 md:py-24 px-4 bg-[#F9FAFB]">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto ring-1 ring-gray-100"
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={bobUp}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-72 md:h-auto overflow-hidden group">
                <Image
                  src="/images/contact_work_with_us.png"
                  alt="Work With Us"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">Join Our Team</h3>
                  <p className="text-white/80 text-sm">Build the future with us.</p>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
                <span className="text-[#00A8E8] font-semibold tracking-wider text-sm uppercase mb-3">Careers</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-4 leading-tight">
                  Ready To Build Your Business<br />With Confidence?
                </h3>
                <p className="text-[#6B7280] text-base mb-8 leading-relaxed">
                  Our distributed presence allows us to support clients across time zones with speed, clarity, and consistency.
                </p>
                <button
                  className="bg-[#1F1F1F] hover:bg-[#000000] text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 w-fit shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get Started Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-12 sm:py-20 md:py-24 px-4 bg-white relative">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* Left Column - Info */}
            <motion.div
              className="flex flex-col justify-center sticky top-24"
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerFadeUp}
            >
              <div className="w-12 h-1 bg-[#00A8E8] mb-8 rounded-full"></div>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-[#1F1F1F] mb-6"
                variants={bobUp}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                className="text-[#6B7280] text-lg leading-relaxed mb-8"
                variants={bobUp}
              >
                Need more information about our services? Looking to partner with us? We are here to answer any questions you may have.
              </motion.p>

              <motion.div variants={bobUp} className="space-y-6">
                <div className="flex items-center space-x-4 text-[#4B5563]">
                  <div className="w-10 h-10 rounded-full bg-[#E8F7FC] flex items-center justify-center text-[#00A8E8] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href={`mailto:${contact.email}`} className="hover:text-[#00A8E8] transition-colors">{contact.email}</a>
                </div>
                <div className="flex items-center space-x-4 text-[#4B5563]">
                  <div className="w-10 h-10 rounded-full bg-[#E8F7FC] flex items-center justify-center text-[#00A8E8] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>{contact.address}</span>
                </div>
                <div className="flex items-center space-x-4 text-[#4B5563]">
                  <div className="w-10 h-10 rounded-full bg-[#E8F7FC] flex items-center justify-center text-[#00A8E8] shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.5a2 2 0 012 2v2M3 5v12a2 2 0 002 2h14a2 2 0 002-2V5M7 5h10M12 19l4-4m0 0l4-4m-4 4V9" />
                    </svg>
                  </div>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-[#00A8E8] transition-colors">{contact.phone}</a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={staggerFadeUp}
              className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={bobUp} className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#00A8E8] transition-colors">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-[#F9FAFB] text-[#1F1F1F] rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/20 focus:border-[#00A8E8] transition-all placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div className="grid sm:grid-cols-2 gap-6" variants={bobUp}>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#00A8E8] transition-colors">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-[#F9FAFB] text-[#1F1F1F] rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/20 focus:border-[#00A8E8] transition-all placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#00A8E8] transition-colors">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-[#F9FAFB] text-[#1F1F1F] rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/20 focus:border-[#00A8E8] transition-all placeholder:text-gray-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </motion.div>

                <motion.div variants={bobUp} className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 group-focus-within:text-[#00A8E8] transition-colors">Subject</label>
                  <div className="relative">
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-[#F9FAFB] text-[#1F1F1F] rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8E8]/20 focus:border-[#00A8E8] transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services</option>
                      <option value="partnership">Partnership</option>
                      <option value="support">Support</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={bobUp} className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={`w-full font-semibold px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2
                      ${status === 'success'
                        ? 'bg-green-500 text-white cursor-default'
                        : 'bg-[#00A8E8] hover:bg-[#0090CC] text-white hover:shadow-lg hover:-translate-y-0.5'
                      }
                      disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none
                    `}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>

                  <AnimatePresence>
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl flex items-center space-x-2 text-sm"
                      >
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-green-50 text-green-600 rounded-xl flex items-center space-x-2 text-sm"
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                        <span>Thank you! We&apos;ve received your message and sent a confirmation to your email.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={closeToast}
      />
    </main>
  );
}