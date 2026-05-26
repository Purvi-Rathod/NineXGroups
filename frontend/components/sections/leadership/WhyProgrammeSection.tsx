"use client";

import React from "react";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";

const features = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Proven Framework",
        description: "Built on decades of research in leadership psychology and organizational excellence.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: "Peer Learning",
        description: "Connect with a cohort of like-minded leaders from diverse industries and backgrounds.",
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Immediate Impact",
        description: "Apply learnings directly to your work with real-world projects and challenges.",
    },
];

export default function WhyProgrammeSection() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #8B7355 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {/* Section Label */}
                    <motion.span
                        variants={bobUp}
                        className="inline-block text-leadership-accent font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        Why NineXFold
                    </motion.span>

                    {/* Main Heading */}
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-leadership-text mb-6 leading-tight"
                    >
                        Transform Your Leadership,
                        <br />
                        Transform Your Organization
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={bobUp}
                        className="text-lg text-leadership-muted leading-relaxed max-w-2xl mx-auto"
                    >
                        The NineXFold Leadership Programme is designed for ambitious professionals
                        who want to elevate their leadership capabilities. Whether you&apos;re a founding
                        CEO, a senior executive, or an emerging leader, our programme provides the
                        tools, frameworks, and community you need to lead with excellence.
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={bobUp} className="mt-8">
                        <a
                            href="#programmes"
                            onClick={(e) => handleSmoothScroll(e, "#programmes")}
                            className="inline-flex items-center gap-2 text-leadership-accent font-semibold hover:gap-4 transition-all group"
                        >
                            View Programme Structure
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={bobUp}
                            className="text-center p-8 rounded-2xl bg-leadership-beige/50 hover:bg-leadership-beige transition-colors"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-leadership-accent/10 text-leadership-accent mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="font-manrope text-xl font-semibold text-leadership-text mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-leadership-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
