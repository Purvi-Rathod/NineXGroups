"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";
import { ArrowRight, Zap, TrendingUp, BarChart3, Gauge } from "lucide-react";

export default function PerformanceDrivenPage() {
    const metrics = [
        {
            icon: Zap,
            title: "Velocity & Quality",
            description: "We streamline every workflow to achieve superior outcomes without sacrificing excellence.",
        },
        {
            icon: TrendingUp,
            title: "Quantifiable Impact",
            description: "Evidence-based approaches that convert immediately into meaningful business results.",
        },
        {
            icon: BarChart3,
            title: "Insights-Led",
            description: "Each choice is supported by thorough data evaluation and industry intelligence.",
        },
        {
            icon: Gauge,
            title: "Relentless Enhancement",
            description: "We never stop—perpetually testing and advancing effectiveness standards.",
        },
    ];

    const stats = [
        { value: "3x", label: "AVERAGE ROI" },
        { value: "40%", label: "EFFICIENCY GAIN" },
        { value: "99.9%", label: "UPTIME" },
        { value: "24/7", label: "MONITORING" },
    ];

    const features = [
        "Live analytics monitoring",
        "Smart automation workflows",
        "Advanced insights integration",
        "Tailored metric frameworks",
        "Split-test protocols",
        "Success measurement tracking",
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
                            OUR PHILOSOPHY
                        </motion.span>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-6 tracking-tight leading-tight"
                            variants={bobUp}
                        >
                            Results <span className="text-[#00A8E8]">Focused</span>
                        </motion.h1>
                        <motion.p
                            className="text-[#4B5563] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                            variants={bobUp}
                        >
                            We prioritize outcomes that count. Our data-driven approach guarantees every project achieves tangible success and exceptional value.
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
                                <Zap className="w-12 h-12 text-[#00A8E8]" />
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                                variants={bobUp}
                            >
                                Crafted for <span className="text-[#00A8E8]">Impact</span>
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
                                Every moment matters. We craft strategic solutions that execute flawlessly, ensuring your organization never loses momentum.
                            </motion.p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics Visual Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.div variants={bobUp}>
                            <div className="w-12 h-1 bg-[#00A8E8] mb-8 rounded-full"></div>
                            <h2
                                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-6"
                            >
                                Data That Drives Results
                            </h2>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                                We don&apos;t just monitor outcomes—we optimize them. Our strategic methodology guarantees every indicator is synchronized with your growth targets.
                            </p>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center gap-3 text-[#4B5563]">
                                        <div className="w-2 h-2 rounded-full bg-[#00A8E8]"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="relative"
                            variants={bobUp}
                        >
                            <div className="bg-gradient-to-br from-[#E8F7FC] to-white p-8 rounded-3xl shadow-xl border border-gray-100">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: "Load Time", value: "0.3s", color: "bg-green-500" },
                                        { label: "Conversion", value: "+42%", color: "bg-[#00A8E8]" },
                                        { label: "Bounce Rate", value: "-28%", color: "bg-green-500" },
                                        { label: "Engagement", value: "+67%", color: "bg-[#00A8E8]" },
                                    ].map((item, index) => (
                                        <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                                            <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                                            <div className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00A8E8] to-[#0090CC]`}>
                                                {item.value}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Optimization Cycle Section */}
            <section className="py-16 sm:py-24 px-4 bg-white text-[#1F1F1F]">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.h2
                            className="text-3xl sm:text-4xl font-bold mb-6 text-[#1F1F1F]"
                            variants={bobUp}
                        >
                            Our Performance Framework
                        </motion.h2>
                        <motion.p
                            className="text-gray-500 text-lg"
                            variants={bobUp}
                        >
                            Constant evolution is embedded in our culture. We implement a structured approach to ensure your results consistently exceed expectations.
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {[
                            { title: "Discover", desc: "Thoroughly examine insights to pinpoint gaps and potential wins." },
                            { title: "Enhance", desc: "Deploy focused methodologies to boost performance and productivity." },
                            { title: "Grow", desc: "Replicate winning approaches throughout the entire infrastructure." }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                className="bg-[#F9FAFB] p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all"
                                variants={bobUp}
                            >
                                <div className="text-5xl font-bold text-[#00A8E8]/20 mb-4">0{i + 1}</div>
                                <h3 className="text-xl font-bold mb-3 text-[#1F1F1F]">{step.title}</h3>
                                <p className="text-gray-500">{step.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Core Metrics Section */}
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
                            Achievement Essentials
                        </motion.h2>
                        <motion.p
                            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            The essential values powering our results-driven approach
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                variants={bobUp}
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#1F1F1F] flex items-center justify-center text-[#00A8E8] mb-6 group-hover:bg-[#00A8E8] group-hover:text-white transition-colors duration-300">
                                    <metric.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                                    {metric.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {metric.description}
                                </p>
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
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#1F1F1F] to-[#2D2D2D] shadow-lg"
                                variants={bobUp}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00A8E8] mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400 font-semibold tracking-widest uppercase mt-2">
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
                            Ready to Elevate Your Success?
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            Let&apos;s activate your business momentum with performance-driven approaches that create impact.
                        </motion.p>
                        <motion.div variants={bobUp}>
                            <Link
                                href="/legal/contact-us"
                                className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Start Optimizing
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
