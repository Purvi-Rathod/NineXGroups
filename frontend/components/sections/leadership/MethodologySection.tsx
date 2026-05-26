"use client";

import React from "react";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";

const steps = [
    {
        number: "01",
        title: "Self-Awareness",
        description: "Understand your leadership style, strengths, and growth areas through comprehensive assessments.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Decision Making",
        description: "Master frameworks for making high-stakes decisions with clarity and confidence.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Influence & Communication",
        description: "Develop your executive presence and ability to inspire action across all stakeholders.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Strategic Thinking",
        description: "Build capacity to see the bigger picture and drive long-term organizational success.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Execution Excellence",
        description: "Translate vision into results through effective team leadership and accountability systems.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
];

export default function MethodologySection() {
    return (
        <section id="methodology" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-px h-[70%] bg-gradient-to-b from-transparent via-leadership-cream to-transparent -translate-y-1/2 hidden lg:block" />
            <div className="absolute top-1/2 right-0 w-px h-[70%] bg-gradient-to-b from-transparent via-leadership-cream to-transparent -translate-y-1/2 hidden lg:block" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    <motion.span
                        variants={bobUp}
                        className="inline-block text-leadership-accent font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-leadership-text mb-6"
                    >
                        The NineXFold Leadership Framework
                    </motion.h2>
                    <motion.p
                        variants={bobUp}
                        className="text-lg text-leadership-muted"
                    >
                        A proven five-pillar approach to developing well-rounded, impactful leaders.
                    </motion.p>
                </motion.div>

                {/* Desktop: Horizontal Timeline */}
                <div className="hidden lg:block">
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {/* Timeline Line */}
                        <div className="absolute top-12 left-0 right-0 h-0.5 bg-leadership-cream" />

                        {/* Steps */}
                        <div className="grid grid-cols-5 gap-4">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={bobUp}
                                    className="relative"
                                >
                                    {/* Connector Dot */}
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-leadership-accent border-4 border-white shadow-lg z-10" />

                                    {/* Number */}
                                    <div className="text-center mb-8">
                                        <span className="font-manrope text-5xl font-bold text-leadership-cream">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Card */}
                                    <div className="mt-8 p-6 rounded-2xl bg-leadership-beige/50 hover:bg-leadership-beige transition-colors text-center h-full">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-leadership-accent/10 text-leadership-accent mb-4">
                                            {step.icon}
                                        </div>
                                        <h3 className="font-manrope text-xl font-semibold text-leadership-text mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-leadership-muted leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Mobile/Tablet: Vertical Timeline */}
                <div className="lg:hidden">
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={staggerFadeUp}
                    >
                        {/* Timeline Line */}
                        <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-leadership-cream" />

                        {/* Steps */}
                        <div className="space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    variants={bobUp}
                                    className="relative flex gap-6"
                                >
                                    {/* Connector Dot */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-leadership-beige flex items-center justify-center border-4 border-white shadow-lg">
                                            <span className="font-manrope text-xl font-bold text-leadership-accent">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <div className="p-6 rounded-2xl bg-leadership-beige/50">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-10 h-10 rounded-full bg-leadership-accent/10 text-leadership-accent flex items-center justify-center">
                                                    {step.icon}
                                                </div>
                                                <h3 className="font-manrope text-xl font-semibold text-leadership-text">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-leadership-muted leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
