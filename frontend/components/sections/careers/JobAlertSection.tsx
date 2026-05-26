"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bell, UserPlus, Settings, CheckCircle2, Mail } from "lucide-react";
import { fadeUp, viewportOnce } from "@/animations";

export default function JobAlertSection() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (email.trim() && email.includes("@")) {
            setIsSubscribed(true);
            // In real implementation, this would call an API
        }
    };

    const steps = [
        {
            icon: UserPlus,
            title: "Create Account",
            description: "Sign up with your email to get started",
        },
        {
            icon: Settings,
            title: "Set Preferences",
            description: "Choose job categories and locations",
        },
        {
            icon: Bell,
            title: "Get Notified",
            description: "Receive alerts when new jobs match",
        },
    ];

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Gradient Background */}
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(135deg, #0A1628 0%, #0D1B2A 50%, #0A1628 100%)",
                }}
            />

            {/* Decorative Elements */}
            <div
                className="absolute top-0 right-0 w-96 h-96 opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(18, 212, 255, 0.3) 0%, transparent 70%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-80 h-80 opacity-15"
                style={{
                    background: "radial-gradient(circle, rgba(25, 89, 250, 0.4) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={fadeUp}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                            <Bell className="w-4 h-4 text-[#12D4FF]" />
                            <span className="text-white/80 text-sm">Job Alerts</span>
                        </div>

                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4 font-manrope"
                        >
                            Don&apos;t Miss Your{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)",
                                }}
                            >
                                Dream Job
                            </span>
                        </h2>

                        <p
                            className="text-white/70 text-lg mb-8 font-lato"
                        >
                            If you don&apos;t see a role that aligns with your qualifications, subscribe
                            to job alerts and be the first to know when new positions open up.
                        </p>

                        {/* Email Subscription */}
                        {!isSubscribed ? (
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                                        className="w-full pl-12 pr-4 py-3.5 bg-white rounded-lg text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#12D4FF]/50"
                                        aria-label="Email for job alerts"
                                    />
                                </div>
                                <motion.button
                                    onClick={handleSubscribe}
                                    className="gradient-btn text-white font-semibold px-8 py-3.5 rounded-lg whitespace-nowrap"
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(18, 212, 255, 0.4)" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-5 py-4"
                            >
                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                                <span className="text-emerald-300 font-medium">
                                    You&apos;re subscribed! We&apos;ll notify you of new opportunities.
                                </span>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Right - Steps */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                            },
                        }}
                        className="grid gap-4"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
                            >
                                {/* Step Number */}
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(18, 212, 255, 0.2), rgba(25, 89, 250, 0.2))",
                                    }}
                                >
                                    <step.icon className="w-6 h-6 text-[#12D4FF]" />
                                </div>

                                {/* Content */}
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-[#12D4FF] text-sm font-medium">Step {index + 1}</span>
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                                    <p className="text-white/60 text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
