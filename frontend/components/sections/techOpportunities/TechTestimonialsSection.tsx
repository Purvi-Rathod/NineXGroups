"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

const testimonials = [
    {
        quote: "Working at NineXFold has pushed me to think bigger. The scale of problems we solve here is unmatched, and the team culture is incredibly supportive.",
        author: "Sarah Chen",
        role: "Senior Frontend Engineer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        quote: "I joined for the technology stack, but I stayed for the people. It's rare to find a place where innovation and work-life balance coexist so perfectly.",
        author: "James Wilson",
        role: "Lead DevOps Architect",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        quote: "From day one, I was given ownership of critical projects. If you want to grow fast and make a real impact, this is the place to be.",
        author: "Elena Rodriguez",
        role: "Product Manager",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
];

export default function TechTestimonialsSection() {
    return (
        <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    <motion.h2 variants={fadeUp} className="font-manrope text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                        Hear from our Engineers
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-gray-600">
                        Real stories from the people building the future at NineXFold.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <svg className="w-8 h-8 text-blue-300 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21L14.017 18C14.017 16.05 14.321 15.636 15.109 14.996C15.895 14.356 16.782 14.017 17.769 13.978V12.78C17.769 12.333 17.653 11.956 17.42 11.648C17.188 11.339 16.913 11.185 16.596 11.185C15.939 11.185 15.522 11.533 15.345 12.229L14.125 11.965C14.381 10.741 14.885 9.878 15.637 9.375C16.388 8.872 17.473 8.62 18.891 8.62C20.404 8.62 21.365 9.074 21.774 9.982C22.183 10.89 22.387 11.776 22.387 12.641V21H14.017ZM8.017 21L8.017 18C8.017 16.05 8.321 15.636 9.109 14.996C9.895 14.356 10.782 14.017 11.769 13.978V12.78C11.769 12.333 11.653 11.956 11.42 11.648C11.188 11.339 10.913 11.185 10.596 11.185C9.939 11.185 9.522 11.533 9.345 12.229L8.125 11.965C8.381 10.741 8.885 9.878 9.637 9.375C10.388 8.872 11.473 8.62 12.891 8.62C14.404 8.62 15.365 9.074 15.774 9.982C16.183 10.89 16.387 11.776 16.387 12.641V21H8.017Z" />
                                </svg>
                                <p className="text-gray-700 leading-relaxed pt-2">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                            </div>

                            <div className="mt-auto flex items-center gap-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        fill
                                        className="object-cover"
                                        unoptimized // Using randomuser.me which might not be configured in next.config.js
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                                    <p className="text-sm text-blue-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
