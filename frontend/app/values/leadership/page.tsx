"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";
import { ArrowRight, Crown, Users, Award, Lightbulb } from "lucide-react";

export default function LeadershipPage() {
    const principles = [
        {
            icon: Crown,
            title: "Future Orientation",
            description: "We navigate with purpose, predicting market evolution and establishing the path for organizational growth.",
        },
        {
            icon: Users,
            title: "People Development",
            description: "Genuine leadership requires empowering others and building environments where potential thrives.",
        },
        {
            icon: Award,
            title: "Excellence Focus",
            description: "We raise the standard high and encourage colleagues to exceed expectations at each stage.",
        },
        {
            icon: Lightbulb,
            title: "Visionary Guidance",
            description: "Communicating knowledge and forward-thinking strategies that define the direction of our field.",
        },
    ];

    const stats = [
        { value: "20+", label: "INDUSTRY AWARDS" },
        { value: "50+", label: "SPEAKING EVENTS" },
        { value: "50+", label: "TEAM MEMBERS" },
        { value: "5", label: "GLOBAL OFFICES" },
    ];

    const testimonials = [
        {
            quote: "NineXFold's strategic guidance revolutionized our business operations. They don't just advise—they empower.",
            author: "Elena Martinez",
            role: "CEO, InnovateTech Solutions",
        },
        {
            quote: "Collaborating with them felt like gaining an addition to our leadership team. Genuine allies in every aspect.",
            author: "David Thompson",
            role: "Founder, GrowthEdge Ventures",
        },
        {
            quote: "Their forward-thinking approach enabled us to scale efficiently and achieve greater results than anticipated.",
            author: "Anika Patel",
            role: "COO, CloudNext Systems",
        },
    ];

    return (
        <main className="bg-white min-h-screen overflow-x-hidden font-sans">
            <Navigation />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-[#E8F7FC] to-white py-16 sm:py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] z-0"></div>
                <div className="container mx-auto relative z-10 px-4">
                    <motion.div
                        className="text-center max-w-4xl mx-auto"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.span
                            className="inline-block text-[#00A8E8] font-semibold tracking-wider text-sm uppercase mb-4"
                            variants={bobUp}
                        >
                            OUR PRINCIPLES
                        </motion.span>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-6 tracking-tight leading-tight"
                            variants={bobUp}
                        >
                            <span className="text-[#00A8E8]">Visionary</span>
                        </motion.h1>
                        <motion.p
                            className="text-[#4B5563] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                            variants={bobUp}
                        >
                            We don&apos;t just adapt to change—we create it. Our leadership approach is founded on strategy, authenticity, and the boldness to explore uncharted paths.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Visual Impact Section */}
            <section className="py-20 relative overflow-hidden bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        className="relative w-full aspect-[16/9] sm:aspect-[21/9] min-h-[450px] rounded-[2.5rem] overflow-hidden bg-[#1F1F1F] flex items-center justify-center group shadow-2xl"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00A8E8]/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-1000"></div>
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                            <motion.div
                                className="absolute -top-1/2 -left-1/4 w-full h-full bg-[#00A8E8]/10 rounded-full blur-[120px]"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#00A8E8]/10 rounded-full blur-[120px]"
                                animate={{
                                    scale: [1.1, 1, 1.1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                            />
                        </div>

                        <div className="relative z-20 text-center px-6 max-w-3xl">
                            <motion.div
                                className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,168,232,0.15)] text-white"
                                variants={bobUp}
                                whileHover={{ scale: 1.05, rotate: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <Crown className="w-12 h-12 text-[#00A8E8]" />
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                                variants={bobUp}
                            >
                                Guiding by <span className="text-[#00A8E8]">Action</span>
                            </motion.h2>

                            <motion.div
                                className="h-1.5 w-24 bg-gradient-to-r from-[#00A8E8] to-cyan-400 mx-auto rounded-full mb-8"
                                variants={bobUp}
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: 96, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 1 }}
                            />

                            <motion.p
                                className="text-white/70 text-lg sm:text-xl font-light leading-relaxed"
                                variants={bobUp}
                            >
                                At NineXFold, leadership isn&apos;t a position—it&apos;s a commitment. We cultivate greatness through purposeful guidance.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Programs Section */}
            <section className="px-4 bg-[#F9FAFB]">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.div variants={bobUp} className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto">
                            <Image
                                src="/images/contact_work_with_us.png"
                                alt="Executive Training"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Executive Training</h3>
                                <p className="text-white/80 mb-4">Empowering the next generation of C-suite leaders with strategic vision.</p>
                                <span className="text-[#00A8E8] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                        <motion.div variants={bobUp} className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto">
                            <Image
                                src="/images/contact_globe.png"
                                alt="Global Mentorship"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Global Mentorship</h3>
                                <p className="text-white/80 mb-4">Connecting emerging talent with established industry veterans worldwide.</p>
                                <span className="text-[#00A8E8] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Join Program <ArrowRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Principles Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4"
                            variants={bobUp}
                        >
                            Leadership Foundations
                        </motion.h2>
                        <motion.p
                            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            The principles that shape how we guide and empower
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                variants={bobUp}
                            >
                                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00A8E8] to-[#0090CC] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <principle.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                                    {principle.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {principle.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 px-4 bg-[#F9FAFB]">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4"
                            variants={bobUp}
                        >
                            Client Success Stories
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6 sm:gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-gradient-to-br from-[#E8F7FC] to-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                variants={bobUp}
                            >
                                <div className="text-4xl text-[#00A8E8] mb-4">&ldquo;</div>
                                <p className="text-[#4B5563] text-base leading-relaxed mb-6">
                                    {testimonial.quote}
                                </p>
                                <div>
                                    <div className="font-bold text-[#1F1F1F]">{testimonial.author}</div>
                                    <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4"
                            variants={bobUp}
                        >
                            Achievement Highlights
                        </motion.h2>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                variants={bobUp}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#00A8E8] to-[#0090CC]">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-[#4B5563] font-semibold tracking-widest uppercase mt-2">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-24 px-4 bg-slate-100">
                <div className="container max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6"
                            variants={bobUp}
                        >
                            Shape the Future of Your Market?
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            Join forces with experts who understand what it necessitates to generate substantial impact and lasting achievement.
                        </motion.p>
                        <motion.div variants={bobUp}>
                            <Link
                                href="/legal/contact-us"
                                className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Connect With Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
