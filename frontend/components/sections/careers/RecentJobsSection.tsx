"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2, Clock } from "lucide-react";
import { fadeUp, viewportOnce } from "@/animations";
import { workModeLabels } from "@/lib/jobs/jobTypes";
import type { Job } from "@/lib/jobs/jobTypes";

interface RecentJobsSectionProps {
    jobs?: Job[];
    loading?: boolean;
}

export default function RecentJobsSection({ jobs = [], loading = false }: RecentJobsSectionProps) {
    const recentJobs = [...jobs]
        .sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
        .slice(0, 4);

    const workModeColors: Record<string, string> = {
        remote: "bg-emerald-100 text-emerald-700",
        hybrid: "bg-blue-100 text-blue-700",
        onsite: "bg-amber-100 text-amber-700",
    };

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={viewportOnce}
                    variants={fadeUp}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 bg-[#12D4FF]/10 text-[#1959FA] text-sm font-medium rounded-full mb-4">
                        Latest Opportunities
                    </span>
                    <h2
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-manrope"
                    >
                        Recently Posted{" "}
                        <span
                            className="bg-clip-text text-transparent"
                            style={{ backgroundImage: "linear-gradient(98deg, #12D4FF 10%, #1959FA 90%)" }}
                        >
                            Jobs
                        </span>
                    </h2>
                    <p
                        className="text-gray-600 text-lg max-w-2xl mx-auto font-lato"
                    >
                        Explore our newest openings and take the next step in your career with NineXFold
                    </p>
                </motion.div>

                {/* Jobs Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                    {loading ? (
                        [...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white rounded-md p-6 border border-[#bdbdbd] animate-pulse">
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                                <div className="h-4 bg-gray-100 rounded w-1/2 mb-4" />
                                <div className="h-4 bg-gray-100 rounded w-full mb-2" />
                                <div className="h-4 bg-gray-100 rounded w-2/3" />
                            </div>
                        ))
                    ) : recentJobs.length === 0 ? (
                        <p className="col-span-2 text-center text-gray-500 py-8">No recent jobs posted yet. Check back soon.</p>
                    ) : (
                    recentJobs.map((job, index) => (
                        <Link key={job.id} href={`/ninexFold/careers/find-a-job/${job.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={viewportOnce}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-md p-6 border border-[#bdbdbd] hover:shadow-lg transition-all duration-300 cursor-pointer group h-full"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3
                                            className="text-lg font-semibold text-gray-900 group-hover:text-[#1959FA] transition-colors mb-2 font-manrope"
                                        >
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Building2 className="w-4 h-4" />
                                            <span>{job.department}</span>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${workModeColors[job.workMode]}`}>
                                        {workModeLabels[job.workMode]}
                                    </span>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-gray-400" />
                                        <span>{job.location.city}, {job.location.country}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span>{formatDate(job.postedDate)}</span>
                                    </div>
                                </div>

                                <p className="text-sm text-gray-500 line-clamp-2 mb-4 font-lato">
                                    {job.description}
                                </p>

                                <motion.div
                                    className="flex items-center gap-1 text-sm font-medium text-[#1959FA]"
                                    whileHover={{ x: 5 }}
                                >
                                    View Details & Apply
                                    <ArrowRight className="w-4 h-4" />
                                </motion.div>
                            </motion.div>
                        </Link>
                    ))
                    )}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportOnce}
                    className="text-center"
                >
                    <Link href="/ninexFold/careers/find-a-job">
                        <motion.span
                            className="inline-flex items-center gap-2 px-8 py-3.5 gradient-btn text-white font-semibold rounded-lg"
                            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(18, 212, 255, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View All Open Positions
                            <ArrowRight className="w-5 h-5" />
                        </motion.span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
