"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

const steps = [
    {
        number: "01",
        title: "Discover the Right Tech Role",
        description:
            "AI-driven role matching based on your skills, experience, and career interests. Our intelligent platform connects you with opportunities that align with your goals.",
        features: ["Smart Matching", "Skill Analysis", "Career Path Suggestions"],
        image: "/images/recognition1.png",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Seamless Application Experience",
        description:
            "Simple, transparent, and fast application workflows. Track your application status in real-time and receive personalized feedback at every step.",
        features: ["One-Click Apply", "Real-time Tracking", "Interview Scheduling"],
        image: "/images/recognition2.png",
        gradient: "from-purple-500 to-blue-500",
    },
    {
        number: "03",
        title: "Grow with Advanced Tech Teams",
        description:
            "Work on real-world products using modern stacks. Join collaborative teams that push boundaries and foster continuous learning.",
        features: ["Modern Tech Stack", "Mentorship Programs", "Learning Budget"],
        image: "/images/recognition3.png",
        gradient: "from-cyan-500 to-teal-500",
    },
];

export default function StepFeaturesSection() {
    return (
        <section id="features" className="py-20 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    <motion.span
                        variants={fadeUp}
                        className="inline-block text-blue-500 font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                    >
                        Your Journey to
                        <span className="bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent"> Tech Excellence</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="text-lg text-gray-600"
                    >
                        Three simple steps to launch your tech career at NineXFold
                    </motion.p>
                </motion.div>

                {/* Steps */}
                <div className="space-y-20 md:space-y-32">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="show"
                            viewport={viewportOnce}
                            variants={staggerContainer}
                            className={`flex flex-col gap-12 lg:gap-16 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } items-center`}
                        >
                            {/* Text Content */}
                            <motion.div
                                variants={fadeUp}
                                className="w-full lg:w-1/2 space-y-6"
                            >
                                {/* Step Number */}
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.gradient} text-white font-bold text-2xl shadow-lg`}>
                                    {step.number}
                                </div>

                                <h3 className="font-manrope text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                                    {step.title}
                                </h3>

                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Features Tags */}
                                <div className="flex flex-wrap gap-3">
                                    {step.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="#tech-areas"
                                    className="inline-flex items-center gap-2 text-blue-500 font-semibold hover:gap-3 transition-all group"
                                >
                                    Learn More
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>

                            {/* Image */}
                            <motion.div
                                variants={fadeUp}
                                className="w-full lg:w-1/2"
                            >
                                <div className="relative">
                                    {/* Background Shape */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-10 scale-105 -rotate-2`} />

                                    {/* Card */}
                                    <div className="relative bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                                        <div className="aspect-[4/3] relative">
                                            <Image
                                                src={step.image}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${step.gradient} opacity-20`} />
                                        </div>
                                    </div>

                                    {/* Decorative Element */}
                                    <div className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-2xl opacity-20 blur-xl`} />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
