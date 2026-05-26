"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUpSpring, fadeUp, scaleIn } from "@/animations";

export default function TechHero() {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden pt-24 md:pt-28">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/40 -translate-y-1/4 translate-x-1/4 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-cyan-100/30 translate-y-1/2 -translate-x-1/2 blur-2xl" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(#12D4FF 1px, transparent 1px), linear-gradient(90deg, #12D4FF 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-112px)] py-12 lg:py-0 gap-12 lg:gap-8">
                    {/* Left: Text Content */}
                    <motion.div
                        className="w-full lg:w-[50%] space-y-6 md:space-y-8 text-center lg:text-left"
                        initial="hidden"
                        animate="show"
                        variants={fadeUpSpring}
                    >
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-medium text-gray-600">
                                Now Hiring • Multiple Positions Open
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUpSpring}
                            className="font-manrope text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-bold text-gray-900 leading-[1.1]"
                        >
                            Explore Tech
                            <br />
                            <span className="bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">
                                Opportunities
                            </span>
                            <br />
                            at NineXFold
                        </motion.h1>

                        {/* Supporting Text */}
                        <motion.p
                            variants={fadeUp}
                            className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Build, innovate, and scale with cutting-edge technologies.
                            Join a team that&apos;s shaping the future of digital transformation.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={scaleIn}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
                        >
                            <a
                                href="#tech-areas"
                                className="inline-flex items-center justify-center h-[52px] bg-[linear-gradient(33deg,rgb(18,212,255)_0%,rgb(25,89,250)_100%)] text-white font-semibold px-8 rounded-xl w-full sm:w-auto text-center shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
                            >
                                Explore Open Roles
                            </a>
                            <a
                                href="#cta"
                                className="inline-flex items-center justify-center h-[52px] border-2 border-blue-200 text-gray-700 font-semibold px-8 rounded-xl w-full sm:w-auto text-center hover:border-blue-400 hover:bg-blue-50 transition-all"
                            >
                                Join Talent Pool
                            </a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8"
                        >
                            {[
                                { value: "50+", label: "Open Positions" },
                                { value: "12", label: "Countries" },
                                { value: "95%", label: "Employee Satisfaction" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left">
                                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">
                                        {stat.value}
                                    </p>
                                    <p className="text-sm text-gray-500">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Platform Illustration */}
                    <motion.div
                        className="w-full lg:w-[50%] relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative w-full max-w-[550px]">
                            {/* Background Shape */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl -rotate-3 scale-105" />

                            {/* Main Card */}
                            <div className="relative bg-white rounded-3xl shadow-2xl shadow-blue-500/10 p-6 md:p-8">
                                {/* Browser-style Header */}
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                    <div className="flex-1 ml-4 h-8 bg-gray-100 rounded-lg" />
                                </div>

                                {/* Mock Dashboard Content */}
                                <div className="space-y-4">
                                    <div className="h-32 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-[#12D4FF] to-[#1959FA] rounded-2xl flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                </svg>
                                            </div>
                                            <p className="text-sm font-medium text-gray-600">Tech Dashboard</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        {["Frontend", "Backend", "AI/ML", "Cloud"].map((tech, i) => (
                                            <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                                                <p className="text-xs text-gray-500 mb-1">Roles</p>
                                                <p className="font-semibold text-gray-800">{tech}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -left-4 md:-left-8 bottom-12 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">Fast Apply</p>
                                        <p className="text-xs text-gray-500">AI-powered matching</p>
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
                    href="#features"
                    className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
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
