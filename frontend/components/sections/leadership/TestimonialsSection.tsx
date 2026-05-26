"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bobUp, fadeUp, staggerFadeUp, viewportOnce } from "@/animations";

const testimonials = [
    {
        quote: "The NineXFold programme transformed how I think about leadership. The frameworks are practical, the coaching is world-class, and the peer network is invaluable.",
        author: "Priya Sharma",
        title: "CEO",
        company: "TechVentures India",
        avatar: "PS",
    },
    {
        quote: "As a first-time founder, this programme gave me the confidence and skills to lead my team through hypergrowth. I recommend it to every ambitious leader.",
        author: "Rahul Mehta",
        title: "Founder & CEO",
        company: "FinServe Solutions",
        avatar: "RM",
    },
    {
        quote: "The executive coaching component was a game-changer. My 360° feedback scores improved dramatically, and my board has noticed the difference.",
        author: "Anita Desai",
        title: "Managing Director",
        company: "GlobalCorp Asia",
        avatar: "AD",
    },
    {
        quote: "I've attended leadership programmes at top business schools, but NineXFold offers something different—a truly transformative, action-oriented experience.",
        author: "Vikram Singh",
        title: "VP of Operations",
        company: "Manufacturing Plus",
        avatar: "VS",
    },
    {
        quote: "The cohort model created deep connections with other leaders facing similar challenges. We still meet monthly, two years after the programme ended.",
        author: "Meera Krishnan",
        title: "Chief People Officer",
        company: "Digital Dynamics",
        avatar: "MK",
    },
    {
        quote: "ROI was immediate. Within weeks, I was applying the decision-making frameworks to real business challenges and seeing measurable results.",
        author: "Arun Patel",
        title: "Country Head",
        company: "Retail Giants Inc",
        avatar: "AP",
    },
];

export default function TestimonialsSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* Background Quote */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-manrope text-leadership-cream/30 select-none pointer-events-none">
                &quot;
            </div>

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
                        Success Stories
                    </motion.span>
                    <motion.h2
                        variants={bobUp}
                        className="font-manrope text-3xl sm:text-4xl md:text-5xl font-bold text-leadership-text mb-6"
                    >
                        What Our Leaders Say
                    </motion.h2>
                </motion.div>

                {/* Mobile/Tablet: Carousel */}
                <div className="lg:hidden">
                    <motion.div
                        className="relative max-w-xl mx-auto"
                        initial="hidden"
                        whileInView="show"
                        viewport={viewportOnce}
                        variants={bobUp}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                                className="bg-leadership-beige rounded-2xl p-8"
                            >
                                {/* Quote */}
                                <p className="text-lg text-leadership-text leading-relaxed mb-6 italic">
                                    &quot;{testimonials[activeIndex].quote}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full bg-leadership-accent flex items-center justify-center">
                                        <span className="font-semibold text-white text-lg">
                                            {testimonials[activeIndex].avatar}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-leadership-text">
                                            {testimonials[activeIndex].author}
                                        </p>
                                        <p className="text-sm text-leadership-muted">
                                            {testimonials[activeIndex].title}, {testimonials[activeIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-leadership-cream hover:border-leadership-accent text-leadership-muted hover:text-leadership-accent transition-colors flex items-center justify-center"
                                aria-label="Previous testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Dots */}
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-leadership-accent" : "bg-leadership-cream"
                                            }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full border-2 border-leadership-cream hover:border-leadership-accent text-leadership-muted hover:text-leadership-accent transition-colors flex items-center justify-center"
                                aria-label="Next testimonial"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Desktop: Grid */}
                <motion.div
                    className="hidden lg:grid grid-cols-3 gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerFadeUp}
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={bobUp}
                            className="bg-leadership-beige/50 hover:bg-leadership-beige rounded-2xl p-8 transition-colors"
                        >
                            {/* Quote */}
                            <p className="text-leadership-text leading-relaxed mb-6">
                                &quot;{testimonial.quote}&quot;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-leadership-accent flex items-center justify-center flex-shrink-0">
                                    <span className="font-semibold text-white">
                                        {testimonial.avatar}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-leadership-text">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-leadership-muted">
                                        {testimonial.title}, {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    className="mt-16 pt-12 border-t border-leadership-cream"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <p className="text-center text-leadership-muted mb-8">
                        Trusted by leaders from
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
                        {["Fortune 500", "Top Startups", "Government", "Academia", "Non-Profits"].map((org, i) => (
                            <span key={i} className="text-lg font-semibold text-leadership-text">
                                {org}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
