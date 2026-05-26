"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

const opportunities = [
    {
        title: "Frontend Development",
        description: "Build beautiful, responsive, and performant user interfaces using React, Next.js, and modern CSS frameworks.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        color: "bg-blue-500",
        count: 12,
    },
    {
        title: "Backend Engineering",
        description: "Design robust APIs, scalable microservices, and high-performance systems using Node.js, Go, and Python.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        color: "bg-purple-500",
        count: 8,
    },
    {
        title: "AI & Machine Learning",
        description: "Develop cutting-edge models, recommendation engines, and intelligent automation solutions.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: "bg-indigo-500",
        count: 6,
    },
    {
        title: "Cloud & DevOps",
        description: "Architect secure cloud infrastructure and build efficient CI/CD pipelines on AWS, Azure, and GCP.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        color: "bg-cyan-500",
        count: 5,
    },
    {
        title: "Data Engineering",
        description: "Build scalable data pipelines, innovative analytics platforms, and manage complex data architectures.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
        color: "bg-teal-500",
        count: 4,
    },
    {
        title: "Product Management",
        description: "Lead product strategy, define roadmaps, and work closely with engineering to deliver value to users.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
        ),
        color: "bg-orange-500",
        count: 7,
    },
];

export default function TechAreasGrid() {
    return (
        <section id="tech-areas" className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp} className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Find Your Place in
                        <span className="block bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">Tech at NineXFold</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-gray-600">
                        Explore diverse roles across our engineering ecosystem.
                        We&apos;re hiring for passion, potential, and proficiency.
                    </motion.p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {opportunities.map((area, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-xl ${area.color} bg-opacity-10 flex items-center justify-center text-white`}>
                                    <div className={`${area.color} w-full h-full rounded-xl flex items-center justify-center`}>
                                        {area.icon}
                                    </div>
                                </div>
                                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-bold">
                                    {area.count} Roles
                                </span>
                            </div>

                            <h3 className="font-manrope text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {area.title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {area.description}
                            </p>

                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors"
                            >
                                View Roles
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
