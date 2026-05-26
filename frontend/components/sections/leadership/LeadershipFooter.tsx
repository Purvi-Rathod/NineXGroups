"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/animations";

const footerLinks = {
    programmes: [
        { name: "Executive Leadership", href: "#programmes" },
        { name: "Emerging Leaders", href: "#programmes" },
        { name: "One-to-One Coaching", href: "#programmes" },
        { name: "Team Programmes", href: "#programmes" },
    ],
    company: [
        { name: "About NineXFold", href: "/ninexFold" },
        { name: "Our Methodology", href: "#methodology" },
        { name: "Success Stories", href: "#testimonials" },
        { name: "Contact Us", href: "/legal/contact-us" },
    ],
    resources: [
        { name: "Leadership Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Events Calendar", href: "#events" },
        { name: "FAQ", href: "#" },
    ],
};

const socialLinks = [
    {
        name: "LinkedIn",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "#",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
];

export default function LeadershipFooter() {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.replace("#", "");
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="bg-leadership-text py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                >
                    {/* Brand Column */}
                    <motion.div variants={fadeUp} className="lg:col-span-2">
                        <Link href="/ninexFold" className="inline-block mb-6">
                            <span className="font-manrope text-2xl font-bold text-white">
                                NineX<span className="text-leadership-accent">Fold</span>
                            </span>
                        </Link>
                        <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
                            Transforming leaders, transforming organizations. Join our community
                            of exceptional professionals committed to leadership excellence.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-leadership-accent flex items-center justify-center text-white/60 hover:text-white transition-all"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Programmes */}
                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold text-white mb-4">Programmes</h4>
                        <ul className="space-y-3">
                            {footerLinks.programmes.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    {link.href.startsWith("/") ? (
                                        <Link
                                            href={link.href}
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className="text-white/60 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Resources */}
                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-white/60 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                >
                    <p className="text-white/40 text-sm">
                        © {new Date().getFullYear()} NineXFold. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/legal/privacy-policy" className="text-white/40 hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/legal/terms-of-service" className="text-white/40 hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/legal/disclaimer" className="text-white/40 hover:text-white transition-colors">
                            Disclaimer
                        </Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
