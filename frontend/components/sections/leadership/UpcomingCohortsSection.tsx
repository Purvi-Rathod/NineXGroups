"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { bobUp, staggerFadeUp, viewportOnce } from "@/animations";

const cohorts = [
    {
        name: "Executive Cohort Q1",
        startDate: "March 15, 2026",
        duration: "12 weeks",
        location: "Hybrid (Mumbai + Online)",
        spots: 8,
        status: "Enrolling",
        image: "/images/ninexfoldImages/hero.png",
    },
    {
        name: "Emerging Leaders Spring",
        startDate: "April 5, 2026",
        duration: "8 weeks",
        location: "100% Online",
        spots: 15,
        status: "Enrolling",
        image: "/images/recognition1.png",
    },
    {
        name: "Executive Cohort Q2",
        startDate: "June 10, 2026",
        duration: "12 weeks",
        location: "Hybrid (Bangalore + Online)",
        spots: 8,
        status: "Coming Soon",
        image: "/images/recognition2.png",
    },
];

export default function UpcomingCohortsSection() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="events" className="py-20 md:py-32 bg-leadership-beige relative overflow-hidden">
            {/* Background Shapes */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-white/40 translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        Upcoming Cohorts
                    </motion.span>
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-leadership-text mb-6"
                    >
                        Join Our Next Cohort
                    </motion.h2>
                    <motion.p
                        variants={bobUp}
                        className="text-lg text-leadership-muted"
                    >
                        Limited seats available. Secure your place in our upcoming programmes.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="space-y-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {cohorts.map((cohort, index) => (
                        <motion.div
                            key={index}
                            variants={bobUp}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                        >
                            <div className="flex flex-col lg:flex-row">
                                {/* Image */}
                                <div className="relative lg:w-72 h-48 lg:h-auto flex-shrink-0">
                                    <Image
                                        src={cohort.image}
                                        alt={cohort.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent lg:bg-gradient-to-t" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                    <div className="flex-1">
                                        {/* Status Badge */}
                                        <div className="mb-3">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${cohort.status === "Enrolling"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-leadership-cream text-leadership-muted"
                                                }`}>
                                                {cohort.status}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-manrope text-2xl font-bold text-leadership-text mb-4">
                                            {cohort.name}
                                        </h3>

                                        {/* Details Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                            <div>
                                                <p className="text-xs text-leadership-muted uppercase tracking-wider mb-1">Start Date</p>
                                                <p className="font-semibold text-leadership-text">{cohort.startDate}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-leadership-muted uppercase tracking-wider mb-1">Duration</p>
                                                <p className="font-semibold text-leadership-text">{cohort.duration}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-leadership-muted uppercase tracking-wider mb-1">Location</p>
                                                <p className="font-semibold text-leadership-text">{cohort.location}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-leadership-muted uppercase tracking-wider mb-1">Available Spots</p>
                                                <p className="font-semibold text-leadership-text">{cohort.spots} remaining</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex-shrink-0">
                                        <a
                                            href="#apply"
                                            onClick={(e) => handleSmoothScroll(e, "#apply")}
                                            className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold transition-all ${cohort.status === "Enrolling"
                                                ? "leadership-btn-primary"
                                                : "bg-leadership-cream text-leadership-muted cursor-not-allowed"
                                                }`}
                                        >
                                            {cohort.status === "Enrolling" ? "Reserve Your Seat" : "Notify Me"}
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={bobUp}
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-leadership-accent font-semibold hover:gap-3 transition-all"
                    >
                        View All Upcoming Events
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
