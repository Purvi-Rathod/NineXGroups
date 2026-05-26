"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

const locations = [
    { name: "New York", x: "28%", y: "35%", type: "HQ" },
    { name: "London", x: "47%", y: "25%", type: "Product Hub" },
    { name: "Mumbai", x: "65%", y: "45%", type: "Engineering" },
    { name: "Bangalore", x: "67%", y: "50%", type: "R&D Center" },
    { name: "Singapore", x: "75%", y: "55%", type: "Innovation Lab" },
    { name: "San Francisco", x: "15%", y: "38%", type: "Tech Hub" },
];

const stats = [
    { label: "Engineering Hub", value: "India", desc: "Bangalore & Mumbai" },
    { label: "Product & R&D", value: "Europe", desc: "London" },
    { label: "Platform Scaling", value: "APAC", desc: "Singapore" },
    { label: "Global Teams", value: "Remote", desc: "Worldwide" },
];

export default function GlobalPresenceSection() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp} className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Building Technology
                        <br />
                        <span className="bg-gradient-to-r from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">Across the Globe</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-gray-600">
                        Join a truly global team. Collaborate with brilliant minds from different cultures, time zones, and backgrounds.
                    </motion.p>
                </motion.div>

                {/* Map Visualization */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-blue-50/50 rounded-3xl border border-blue-100 overflow-hidden mb-16">
                    {/* Abstract Map Background Grid */}
                    <div className="absolute inset-0 opacity-[0.4]"
                        style={{
                            backgroundImage: 'radial-gradient(#1959FA 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }}
                    />

                    {/* World Map Image Overlay */}
                    <div className="absolute inset-0 opacity-20">
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                            alt="World Map"
                            fill
                            className="object-cover object-center"
                            style={{ filter: "invert(42%) sepia(93%) saturate(1352%) hue-rotate(190deg) brightness(100%) contrast(119%)" }} // Blue tinged style
                        />
                    </div>

                    {/* Location Markers */}
                    {locations.map((loc, i) => (
                        <motion.div
                            key={i}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                            style={{ top: loc.y, left: loc.x }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={viewportOnce}
                        >
                            <div className="relative">
                                <span className="absolute w-4 h-4 rounded-full bg-blue-500 animate-ping opacity-75" />
                                <span className="relative block w-4 h-4 rounded-full bg-gradient-to-tr from-[#12D4FF] to-[#1959FA] border-2 border-white shadow-lg" />

                                {/* Tooltip */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-3 py-2 rounded-lg shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                    <p className="text-sm font-bold text-gray-900">{loc.name}</p>
                                    <p className="text-xs text-blue-500">{loc.type}</p>
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45 border-t border-l border-gray-100" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center hover shadow-md transition-shadow"
                        >
                            <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">{stat.label}</p>
                            <p className="font-manrope text-2xl font-bold bg-gradient-to-br from-[#12D4FF] to-[#1959FA] bg-clip-text text-transparent">
                                {stat.value}
                            </p>
                            <p className="text-sm text-gray-400 mt-1">{stat.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
