"use client";

import React from "react";
import { motion } from "framer-motion";
import JobSearchBar from "./JobSearchBar";
import Image from "next/image";
import { float } from "@/animations";

interface JobSearchHeroProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    onSearch: () => void;
    onBrowseAll?: () => void;
}

export default function JobSearchHero({
    searchQuery,
    onSearchChange,
    onSearch,
    onBrowseAll,
}: JobSearchHeroProps) {
    return (
        <section className="relative bg-[#000C2B] min-h-[600px] md:min-h-[700px] lg:min-h-[calc(100vh-89px)] flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <motion.div
                className="absolute inset-0 z-[10] pointer-events-none"
                variants={float}
                animate="animate"
            >
                <Image
                    src={"/images/maskGroup.webp"}
                    alt=""
                    fill
                    className="object-cover sm:object-contain"
                    unoptimized
                    priority
                />
                <div
                    className="absolute z-[-10] inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(-59.54562666736092deg, rgba(0, 12, 43, 1) 40.387%, rgba(0, 41, 145, 1) 93.078%)",
                    }}
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                >
                    <span className="w-2 h-2 bg-[#12D4FF] rounded-full animate-pulse" />
                    <span className="text-white/80 text-sm font-medium">Join the NineXFold Team</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight font-manrope"
                >
                    Find Your Next{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{
                            backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)",
                        }}
                    >
                        Opportunity
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 font-lato"
                >
                    Explore exciting career opportunities across our global offices.
                    Join a team that&apos;s redefining business growth and innovation.
                </motion.p>

                {/* Search Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    <JobSearchBar
                        searchQuery={searchQuery}
                        onSearchChange={onSearchChange}
                        onSearch={onSearch}
                        variant="hero"
                    />
                    {onBrowseAll && (
                        <p className="mt-4 text-white/70 text-sm">
                            or{" "}
                            <button
                                type="button"
                                onClick={onBrowseAll}
                                className="text-[#12D4FF] font-medium hover:underline focus:outline-none focus:underline"
                            >
                                browse all open positions
                            </button>
                        </p>
                    )}
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12"
                >
                    {[
                        { value: "50+", label: "Open Positions" },
                        { value: "6", label: "Locations" },
                        { value: "4", label: "Departments" },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)",
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
