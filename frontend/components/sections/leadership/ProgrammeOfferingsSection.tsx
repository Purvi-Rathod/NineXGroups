"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, viewportOnce, cardHover } from "@/animations";

const programmes = [
    {
        title: "Executive Leadership",
        description: "For C-suite executives and senior leaders ready to drive organizational transformation.",
        image: "/images/ninexfoldImages/hero.png",
        duration: "12 weeks",
        format: "Hybrid",
        features: ["Strategic vision", "Board dynamics", "Legacy building"],
    },
    {
        title: "Emerging Leaders",
        description: "For high-potential managers stepping into greater leadership responsibilities.",
        image: "/images/recognition1.png",
        duration: "8 weeks",
        format: "Online",
        features: ["Team leadership", "Decision making", "Executive presence"],
    },
    {
        title: "One-to-One Coaching",
        description: "Personalized coaching for leaders seeking focused, confidential development.",
        image: "/images/recognition2.png",
        duration: "Flexible",
        format: "Virtual / In-person",
        features: ["Custom curriculum", "360° feedback", "Action planning"],
    },
    {
        title: "Team Programmes",
        description: "Transform your leadership team's collective effectiveness and alignment.",
        image: "/images/recognition3.png",
        duration: "Custom",
        format: "On-site",
        features: ["Team dynamics", "Shared vision", "Collaboration"],
    },
];

export default function ProgrammeOfferingsSection() {
    return (
        <section id="programmes" className="py-20 md:py-32 bg-leadership-beige relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/30 translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-leadership-cream/50 -translate-x-1/2 translate-y-1/2 blur-2xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    <motion.span
                        variants={bobUp}
                        className="inline-block text-leadership-accent font-semibold text-sm tracking-wider uppercase mb-4"
                    >
                        Our Programmes
                    </motion.span>
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-leadership-text mb-6"
                    >
                        Choose Your Leadership Path
                    </motion.h2>
                    <motion.p
                        variants={bobUp}
                        className="text-lg text-leadership-muted"
                    >
                        Tailored programmes designed to meet you where you are and take you where you want to go.
                    </motion.p>
                </motion.div>

                {/* Programme Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {programmes.map((programme, index) => (
                        <motion.div
                            key={index}
                            variants={bobUp}
                            className="group leadership-card cursor-pointer"
                            whileHover={cardHover}
                        >
                            {/* Image */}
                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <Image
                                    src={programme.image}
                                    alt={programme.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                                {/* Duration Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm">
                                    <span className="text-sm font-medium text-leadership-text">{programme.duration}</span>
                                </div>

                                {/* Format Badge */}
                                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-leadership-accent/90 backdrop-blur-sm">
                                    <span className="text-sm font-medium text-white">{programme.format}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8">
                                <h3 className="font-manrope text-2xl font-bold text-leadership-text mb-3">
                                    {programme.title}
                                </h3>
                                <p className="text-leadership-muted mb-6 leading-relaxed">
                                    {programme.description}
                                </p>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {programme.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-sm rounded-full bg-leadership-beige text-leadership-muted"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="#apply"
                                    className="inline-flex items-center gap-2 text-leadership-accent font-semibold group-hover:gap-3 transition-all"
                                >
                                    Learn More
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
