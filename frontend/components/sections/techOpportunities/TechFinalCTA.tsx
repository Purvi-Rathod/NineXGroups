"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, viewportOnce } from "@/animations";

export default function TechFinalCTA() {
    return (
        <section className="py-20 md:py-32 bg-[#0A1628] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-500/20 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />

            {/* Abstract Grid */}
            <div className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={fadeUp}
                        className="mb-8"
                    >
                        <h2 className="font-manrope text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Ready to Build the Future
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12D4FF] to-[#1959FA]">
                                with NineXFold?
                            </span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join a team where your code impacts millions. We are looking for dreamers, doers, and innovators.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={scaleIn}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <a
                            href="#apply"
                            className="inline-flex items-center justify-center h-[56px] bg-[linear-gradient(33deg,rgb(18,212,255)_0%,rgb(25,89,250)_100%)] text-white font-bold text-lg px-10 rounded-full w-full sm:w-auto text-center shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-1"
                        >
                            Apply for Tech Roles
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center h-[56px] border-2 border-[#12D4FF] text-[#12D4FF] font-bold text-lg px-10 rounded-full w-full sm:w-auto text-center hover:bg-[#12D4FF]/10 transition-all"
                        >
                            Talk to Hiring Team
                        </a>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-sm mt-8"
                    >
                        Not ready to apply? <a href="#" className="text-[#12D4FF] hover:underline">Join our talent community</a> to stay updated.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
