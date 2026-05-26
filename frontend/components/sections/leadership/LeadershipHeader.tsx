"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programmes", href: "#programmes" },
    { name: "Methodology", href: "#methodology" },
    { name: "Events", href: "#events" },
    { name: "Testimonials", href: "#testimonials" },
];

export default function LeadershipHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-leadership-beige/95 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/ninexFold" className="flex items-center">
                            <Image
                                src="https://c.animaapp.com/mja25s0wQvjgBd/img/frame-21-1.png"
                                alt="NineXFold"
                                width={150}
                                height={30}
                                className="h-7 md:h-8 w-auto"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-leadership-text hover:text-leadership-accent transition-colors text-sm font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* CTA Button - Desktop */}
                        <div className="hidden lg:flex items-center gap-4">
                            <a
                                href="#apply"
                                onClick={(e) => handleSmoothScroll(e, "#apply")}
                                className="hidden lg:flex items-center justify-center
                  h-[44px]
                  bg-[linear-gradient(33deg,rgb(18,212,255)_0%,rgb(25,89,250)_100%)]
                  px-6 rounded-md"
                            >
                                Apply Now
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-leadership-text"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMobileMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div
                            className="absolute inset-0 bg-black/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="absolute top-16 right-0 w-64 bg-leadership-beige shadow-xl rounded-bl-2xl p-6"
                        >
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-leadership-text hover:text-leadership-accent transition-colors text-base font-medium py-2"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <hr className="border-leadership-cream my-2" />
                                <a
                                    href="#apply"
                                    onClick={(e) => handleSmoothScroll(e, "#apply")}
                                    className="leadership-btn-primary px-6 py-3 rounded-full text-sm text-center"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
