"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, subtleScale } from "@/animations";

export default function LeadershipHero() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen bg-leadership-beige overflow-hidden pt-20 md:pt-24"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-leadership-cream/50 -translate-y-1/4 translate-x-1/4 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-leadership-cream/30 translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-12 lg:py-0 gap-12 lg:gap-8">
                    {/* Left: Text Content */}
                    <motion.div
                        className="w-full lg:w-[55%] space-y-6 md:space-y-8 text-center lg:text-left"
                        initial="hidden"
                        animate="show"
                        variants={staggerFadeUp}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={bobUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-leadership-cream"
                        >
                            <span className="w-2 h-2 rounded-full bg-leadership-accent animate-pulse" />
                            <span className="text-sm font-medium text-leadership-muted">
                                Now Enrolling • Cohort 2026
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={bobUp}
                            className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-leadership-text leading-[1.1]"
                        >
                            Leadership isn&apos;t given.
                            <br />
                            <span className="italic text-leadership-accent">It&apos;s built.</span>
                        </motion.h1>

                        {/* Supporting Text */}
                        <motion.p
                            variants={bobUp}
                            className="text-lg md:text-xl text-leadership-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            An exclusive programme for founders, executives, and senior leaders
                            ready to unlock their full potential and lead with confidence, clarity,
                            and impact.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={bobUp}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                        >
                            <a
                                href="#apply"
                                onClick={(e) => handleSmoothScroll(e, "#apply")}
                                className="leadership-btn-primary px-8 py-4 rounded-full text-base w-full sm:w-auto text-center"
                            >
                                Apply for Programme
                            </a>
                            <a
                                href="#programmes"
                                onClick={(e) => handleSmoothScroll(e, "#programmes")}
                                className="leadership-btn-secondary px-8 py-4 rounded-full text-base w-full sm:w-auto text-center"
                            >
                                Download Brochure
                            </a>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            variants={bobUp}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 border-t border-leadership-cream/50"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full bg-gradient-to-br from-leadership-accent to-leadership-accent-dark border-2 border-leadership-beige flex items-center justify-center"
                                    >
                                        <span className="text-white text-xs font-bold">
                                            {String.fromCharCode(64 + i)}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center sm:text-left">
                                <p className="text-leadership-text font-semibold">500+ Leaders Transformed</p>
                                <p className="text-leadership-muted text-sm">From Fortune 500 companies</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Leader Image with Circular Background */}
                    <motion.div
                        className="w-full lg:w-[45%] relative flex justify-center lg:justify-end"
                        initial="hidden"
                        animate="show"
                        variants={subtleScale}
                    >
                        {/* Circular Background */}
                        <div className="relative">
                            <div className="absolute inset-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-leadership-cream to-white -translate-x-4 translate-y-4" />
                            <div className="absolute inset-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-leadership-accent/20 translate-x-4 -translate-y-4" />

                            {/* Image Container */}
                            <div className="relative w-[280px] h-[350px] sm:w-[350px] sm:h-[440px] md:w-[450px] md:h-[560px] lg:w-[500px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/ninexfoldImages/hero.png"
                                    alt="Leadership Programme"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-leadership-accent-dark/30 to-transparent" />
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                variants={bobUp}
                                className="absolute -left-4 sm:-left-8 bottom-16 sm:bottom-24 bg-white rounded-xl p-4 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-leadership-accent/10 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-leadership-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-leadership-text">12-Week</p>
                                        <p className="text-sm text-leadership-muted">Intensive Programme</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <a
                    href="#about"
                    onClick={(e) => handleSmoothScroll(e, "#about")}
                    className="flex flex-col items-center gap-2 text-leadership-muted hover:text-leadership-accent transition-colors"
                >
                    <span className="text-sm">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
}
