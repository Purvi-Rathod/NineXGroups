"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewportOnce } from "@/animations";

export default function PlatformValueCard() {
    return (
        <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={scaleIn}
                    className="relative bg-gradient-to-br from-[#12D4FF]/10 to-[#1959FA]/5 rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden"
                >
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 space-y-8">
                            <motion.div variants={fadeUp} className="space-y-4">
                                <h2 className="font-manrope text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Our tech ecosystem
                                    <br />
                                    <span className="bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">
                                        evolves continuously
                                    </span>
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                    We don&apos;t just use modern tools; we build them. Our engineering culture encourages experimentation,
                                    continuous learning, and staying ahead of the technology curve.
                                </p>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                                {[
                                    "Microservices Architecture",
                                    "Cloud Native",
                                    "AI-First Approach",
                                    "DevOps Culture",
                                ].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white rounded-xl shadow-sm text-sm font-semibold text-gray-700 border border-gray-100 flex items-center gap-2"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-green-500" />
                                        {tag}
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div variants={fadeUp}>
                                <a
                                    href="#culture"
                                    className="inline-flex items-center gap-2 text-[#1959FA] font-bold text-lg hover:gap-3 transition-all group"
                                >
                                    View Engineering Culture
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>

                        {/* Illustration/Mockup */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-lg">
                                {/* Main Card */}
                                <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900">Innovation Pipeline</p>
                                                <p className="text-xs text-gray-500">Active Projects</p>
                                            </div>
                                        </div>
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">Live</span>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            { name: "AI Recommendation Engine", progress: 92, color: "bg-purple-500" },
                                            { name: "Real-time Analytics", progress: 78, color: "bg-blue-500" },
                                            { name: "Cloud Infrastructure", progress: 85, color: "bg-cyan-500" },
                                        ].map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="font-medium text-gray-700">{item.name}</span>
                                                    <span className="font-bold text-gray-900">{item.progress}%</span>
                                                </div>
                                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${item.progress}%` }}
                                                        transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                                                        className={`h-full ${item.color} rounded-full`}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                    className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl">🚀</span>
                                        <div>
                                            <p className="text-xs text-gray-500 uppercase font-bold">Deployments</p>
                                            <p className="text-lg font-bold text-gray-900">124/day</p>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 z-20"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
                                            ))}
                                        </div>
                                        <div className="pl-2">
                                            <p className="text-xs text-gray-500 uppercase font-bold">Contributors</p>
                                            <p className="text-lg font-bold text-gray-900">350+</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
