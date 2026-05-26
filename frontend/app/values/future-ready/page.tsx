"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";
import { ArrowRight, Rocket, Cpu, Globe, Layers } from "lucide-react";

export default function FutureReadyPage() {
    const innovations = [
        {
            icon: Rocket,
            title: "Technology First",
            description: "We stay ahead of evolution, embracing cutting-edge solutions before they dominate industries.",
        },
        {
            icon: Cpu,
            title: "Smart Integration",
            description: "Harnessing machine learning and intelligent systems to create faster, more powerful platforms.",
        },
        {
            icon: Globe,
            title: "Worldwide Expansion",
            description: "Strategies built to grow effortlessly across regions and territories.",
        },
        {
            icon: Layers,
            title: "Adaptive Infrastructure",
            description: "Agile, evolution-ready frameworks that respond to emerging demands.",
        },
    ];

    const stats = [
        { value: "50+", label: "TECH PARTNERS" },
        { value: "12", label: "AI SOLUTIONS" },
        { value: "8", label: "PATENTS FILED" },
        { value: "2025", label: "VISION YEAR" },
    ];

    const timeline = [
        { year: "2020", milestone: "Machine Learning Integration" },
        { year: "2021", milestone: "Scalable Architecture Shift" },
        { year: "2022", milestone: "Workflow Optimization Launch" },
        { year: "2023", milestone: "International Market Expansion" },
        { year: "2024", milestone: "Predictive Intelligence Suite" },
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
                            Innovation <span className="text-[#00A8E8]">Focused</span>
                        </motion.h1>
                        <motion.p
                            className="text-[#4B5563] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                            variants={bobUp}
                        >
                            We design for the future, now. Our progressive strategy guarantees your enterprise stays constantly equipped for emerging opportunities.
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
                                <Rocket className="w-12 h-12 text-[#00A8E8]" />
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                                variants={bobUp}
                            >
                                Shaping <span className="text-[#00A8E8]">Tomorrow</span>
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
                                Innovation evolves rapidly. We empower you to advance quicker. From intelligence to efficiency, we implement the breakthroughs that drive success.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Innovation Cards Section */}
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
                            Future-Ready Foundations
                        </motion.h2>
                        <motion.p
                            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            The capabilities and frameworks driving tomorrow&apos;s success
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {innovations.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                variants={bobUp}
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#E8F7FC] flex items-center justify-center text-[#00A8E8] mb-6 group-hover:bg-[#00A8E8] group-hover:text-white transition-colors duration-300">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Strategic Foresight Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            variants={staggerFadeUp}
                        >
                            <motion.h2
                                className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-6"
                                variants={bobUp}
                            >
                                Visionary Planning
                            </motion.h2>
                            <motion.p
                                className="text-[#6B7280] text-lg leading-relaxed mb-6"
                                variants={bobUp}
                            >
                                Being tomorrow-focused isn&apos;t just about implementing new technologies; it&apos;s about foreseeing the coming wave of transformation. We guide you through complexity with clarity.
                            </motion.p>
                            <motion.ul className="space-y-4" variants={bobUp}>
                                {[
                                    { title: "Market Intelligence", desc: "Recognizing indicators of evolution before they reshape landscapes." },
                                    { title: "Future Modeling", desc: "Developing for various possible outcomes to maintain adaptability." },
                                    { title: "Rapid Evolution", desc: "Creating frameworks that can transform quickly as conditions change." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#E8F7FC] flex items-center justify-center flex-shrink-0 text-[#00A8E8] font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-[#1F1F1F] font-bold">{item.title}</h4>
                                            <p className="text-gray-500 text-sm">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </motion.ul>
                        </motion.div>
                        <motion.div
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            variants={bobUp}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0F0F1A] to-[#1A1A2E]"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 bg-[#00A8E8] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
                            </div>
                            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="text-6xl font-bold opacity-10 mb-2">2030</div>
                                <div className="text-xl font-bold">Charting the path forward</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-16 sm:py-24 px-4 bg-[#F9FAFB]">
                <div className="container max-w-4xl mx-auto">
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
                            Our Progress Roadmap
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00A8E8] to-[#E8F7FC]"></div>
                        {timeline.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                variants={bobUp}
                            >
                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                        <div className="text-[#00A8E8] font-bold text-lg mb-1">{item.year}</div>
                                        <div className="text-[#1F1F1F] font-semibold">{item.milestone}</div>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00A8E8] rounded-full border-4 border-white shadow-md"></div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-5xl mx-auto">
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
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#E8F7FC] to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                                variants={bobUp}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#0F0F1A] to-[#00A8E8]">
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
                            Ready to Design Tomorrow&apos;s Success?
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            Collaborate with us to reimagine your business with intelligent solutions and visionary strategies.
                        </motion.p>
                        <motion.div variants={bobUp}>
                            <Link
                                href="/legal/contact-us"
                                className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Innovating
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
