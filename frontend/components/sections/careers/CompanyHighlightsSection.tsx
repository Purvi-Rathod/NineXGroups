"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Rocket,
    Users,
    Globe,
    Award,
    TrendingUp,
    Heart,
    Zap,
    Shield,
    LucideIcon
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

interface Highlight {
    icon: LucideIcon;
    title: string;
    description: string;
    image: string;
}

export default function CompanyHighlightsSection() {
    const highlights: Highlight[] = [
        {
            icon: Rocket,
            title: "Innovation First",
            description: "Work on cutting-edge projects using the latest technologies and methodologies.",
            image: "/jobs/innov.png",
        },
        {
            icon: Users,
            title: "Collaborative Culture",
            description: "Join a diverse team where every voice matters and collaboration drives success.",
            image: "/jobs/collab.jpeg",
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Make a difference on a global scale with clients across 100+ countries.",
            image: "/jobs/globe.jpeg",
        },
        {
            icon: TrendingUp,
            title: "Career Growth",
            description: "Clear growth paths with mentorship, training, and leadership opportunities.",
            image: "/jobs/grow.jpeg",
        },
    ];

    const stats = [
        { value: "4", label: "Business Verticals", icon: Zap },
        { value: "3+", label: "Global Locations", icon: Globe },
        { value: "50+", label: "Team Members", icon: Users },
        { value: "98%", label: "Client Satisfaction", icon: Award },
    ];

    const values = [
        { icon: Heart, label: "People First" },
        { icon: Shield, label: "Integrity" },
        { icon: Rocket, label: "Innovation" },
        { icon: TrendingUp, label: "Excellence" },
    ];

    return (
        <section id="life-at-ninex" className="relative py-16 md:py-24 overflow-hidden bg-[#E9F7FF]">
            {/* Decorative Elements */}
            <div
                className="absolute top-20 left-[5%] w-64 h-64 opacity-30 rounded-full blur-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #12D4FF, #1959FA)" }}
            />
            <div
                className="absolute bottom-20 right-[5%] w-80 h-80 opacity-20 rounded-full blur-3xl pointer-events-none"
                style={{ background: "linear-gradient(135deg, #1959FA, #12D4FF)" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#1959FA]/10 text-[#1959FA] text-sm font-medium rounded-full mb-4">
                        Why Join Us
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-manrope">
                        Life at{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)" }}
                        >
                            NineXFold
                        </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto font-lato">
                        We&apos;re not just building products — we&apos;re building careers and empowering businesses worldwide.
                    </p>
                </motion.div>

                {/* Highlights Grid with Images */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUp}
                            className="bg-white rounded-md overflow-hidden border border-gray-100 hover:border-[#12D4FF]/30 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative  h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover  group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                {/* Icon Badge */}
                                <div
                                    className="absolute bottom-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center"
                                    style={{ background: "linear-gradient(135deg, #12D4FF, #1959FA)" }}
                                >
                                    <item.icon className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-manrope">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm font-lato">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-8 mb-16 border border-gray-100 shadow-sm"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent mb-2"
                                    style={{ backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)" }}
                                >
                                    {stat.value}
                                </div>
                                <div className="text-gray-600 text-sm font-lato">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Our Values */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="text-center"
                >
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 font-manrope">
                        Our Core Values
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full text-gray-700 text-sm shadow-sm hover:border-[#12D4FF]/30 hover:shadow-md transition-all duration-300"
                            >
                                <value.icon className="w-4 h-4 text-[#1959FA]" />
                                {value.label}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
