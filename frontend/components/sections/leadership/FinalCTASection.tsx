"use client";

import React from "react";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";

export default function FinalCTASection() {


    return (
        <section id="apply" className="py-20 md:py-32 bg-leadership-beige relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-leadership-cream/60 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white/50 translate-x-1/4 translate-y-1/4 blur-3xl" />

            {/* Decorative Circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-leadership-cream/50 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-leadership-cream/50 opacity-50" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {/* Badge */}
                    <motion.div
                        variants={bobUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-leadership-cream mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-leadership-muted">
                            Applications Now Open
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-4xl sm:text-5xl md:text-6xl font-bold text-leadership-text mb-6 leading-tight"
                    >
                        Ready to Transform
                        <br />
                        <span className="italic text-leadership-accent">Your Leadership?</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={bobUp}
                        className="text-lg md:text-xl text-leadership-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Take the first step toward becoming the leader you were meant to be.
                        Our admissions team is ready to guide you through the application process.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={bobUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#"
                            className="leadership-btn-primary px-10 py-4 rounded-full text-lg w-full sm:w-auto text-center"
                        >
                            Apply for Programme
                        </a>
                        <a
                            href="#"
                            className="leadership-btn-secondary px-10 py-4 rounded-full text-lg w-full sm:w-auto text-center"
                        >
                            Schedule a Call
                        </a>
                    </motion.div>

                    {/* Additional Info */}
                    <motion.div
                        variants={bobUp}
                        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-leadership-muted"
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>30-min discovery call</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>No commitment required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                            <span>Confidential discussion</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
