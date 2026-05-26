"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";
import { ArrowRight, Target, Heart, Users, Compass } from "lucide-react";

export default function PurposeLedPage() {
    const pillars = [
        {
            icon: Target,
            title: "Impact-Focused",
            description: "Every choice we make is grounded in our dedication to deliver transformative value for our partners and society.",
        },
        {
            icon: Heart,
            title: "Ethics-Driven",
            description: "We emphasize transparency, responsibility, and principled approaches in all that we undertake.",
        },
        {
            icon: Users,
            title: "People-First",
            description: "Our achievement is defined by the advancement and wellbeing of those we collaborate with and support.",
        },
        {
            icon: Compass,
            title: "Vision-Led",
            description: "We remain committed to our strategic direction while evolving to address changing industry demands.",
        },
    ];

    const stats = [
        { value: "100%", label: "CLIENT RETENTION" },
        { value: "+500", label: "PROJECTS DELIVERED" },
        { value: "98%", label: "SATISFACTION RATE" },
        { value: "15+", label: "YEARS EXPERIENCE" },
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
                            Our Mission
                        </motion.span>
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1F1F1F] mb-6 tracking-tight leading-tight"
                            variants={bobUp}
                        >
                            Innovation <span className="text-[#00A8E8]">First</span>
                        </motion.h1>
                        <motion.p
                            className="text-[#4B5563] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
                            variants={bobUp}
                        >
                            We believe that organizations succeed when they embrace bold innovation. Our framework integrates creativity with execution at every touchpoint, fostering lasting impact and remarkable outcomes.
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
                        {/* Dynamic Background Elements */}
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

                        {/* Content Overlay */}
                        <div className="relative z-20 text-center px-6 max-w-3xl">
                            <motion.div
                                className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,168,232,0.15)] text-white"
                                variants={bobUp}
                                whileHover={{ scale: 1.05, rotate: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            >
                                <Target className="w-12 h-12 text-[#00A8E8]" />
                            </motion.div>

                            <motion.h2
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                                variants={bobUp}
                            >
                                Driven by <span className="text-[#00A8E8]">Results</span>
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
                                We don&apos;t just develop plans; we create momentum. Our commitment is centered on the certainty that deliberate strategy produces measurable impact.
                            </motion.p>
                        </div>

                        {/* Interactive Floating Particles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-[#00A8E8]/40 rounded-full hidden md:block"
                                animate={{
                                    y: [0, -40, 0],
                                    x: [0, (i % 2 === 0 ? 20 : -20), 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 4 + i,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 0.5,
                                }}
                                style={{
                                    top: `${20 + (i * 12)}%`,
                                    left: `${15 + (i * 14)}%`,
                                }}
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Purpose Matters Section */}
            <section className="py-16 sm:py-24 px-4 bg-white">
                <div className="container max-w-6xl mx-auto">
                    <motion.div
                        className="grid md:grid-cols-2 gap-12 items-center"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        <motion.div variants={bobUp} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/contact_work_with_us.png"
                                alt="Team working together"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="text-lg font-medium">Meaningful Growth Starts Here</p>
                            </div>
                        </motion.div>
                        <motion.div variants={bobUp}>
                            <div className="w-12 h-1 bg-[#00A8E8] mb-8 rounded-full"></div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] mb-6">
                                Meaningful Growth Starts Here
                            </h2>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
                                In an era where authenticity matters most, both clients and teams seek organizations committed to purpose beyond profits. Our mission serves as the foundation that influences every strategy, initiative, and partnership we forge.
                            </p>
                            <p className="text-[#6B7280] text-lg leading-relaxed mb-8">
                                Through aligning corporate vision with genuine values, we enable you to seize emerging opportunities, cultivate lasting relationships, and build an enduring legacy that shapes the future.
                            </p>
                            <ul className="space-y-4">
                                {["Strategic Growth", "Active Collaboration", "Principled Leadership", "Sustained Success"].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#1F1F1F] font-medium">
                                        <div className="w-2 h-2 rounded-full bg-[#00A8E8]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Pillars Section */}
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
                            Our Core Principles
                        </motion.h2>
                        <motion.p
                            className="text-[#6B7280] text-lg max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            The principles that inform every choice we make
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
                                variants={bobUp}
                            >
                                <div className="w-14 h-14 rounded-xl bg-[#E8F7FC] flex items-center justify-center text-[#00A8E8] mb-6 group-hover:bg-[#00A8E8] group-hover:text-white transition-colors duration-300">
                                    <pillar.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#1F1F1F] mb-3">
                                    {pillar.title}
                                </h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">
                                    {pillar.description}
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
                                className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#E8F7FC] to-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
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
                            Ready to Grow Your Business with Excellence?
                        </motion.h2>
                        <motion.p
                            className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                            variants={bobUp}
                        >
                            Let&apos;s join forces together to establish something remarkable that achieves sustained impact.

                        </motion.p>
                        <motion.div variants={bobUp}>
                            <Link
                                href="/legal/contact-us"
                                className="inline-flex items-center gap-2 bg-[#00A8E8] hover:bg-[#0090CC] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                            >
                                Get Started
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
