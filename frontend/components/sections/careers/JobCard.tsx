"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Building2, Clock, Briefcase, ChevronRight } from "lucide-react";
import { Job, workModeLabels, employmentTypeLabels } from "@/lib/jobs/jobTypes";

interface JobCardProps {
    job: Job;
    isHighlighted?: boolean;
    onHover?: (job: Job | null) => void;
    onClick?: (job: Job) => void;
}

export default function JobCard({ job, isHighlighted = false, onHover, onClick }: JobCardProps) {
    const workModeColors: Record<string, string> = {
        remote: "bg-emerald-100 text-emerald-700",
        hybrid: "bg-blue-100 text-blue-700",
        onsite: "bg-amber-100 text-amber-700",
    };

    return (
        <motion.div
            onMouseEnter={() => onHover?.(job)}
            onMouseLeave={() => onHover?.(null)}
            onClick={() => onClick?.(job)}
            className={`
        bg-white rounded-xl p-5 border cursor-pointer transition-all duration-300
        ${isHighlighted
                    ? "border-[#12D4FF] shadow-lg shadow-[#12D4FF]/10 scale-[1.01]"
                    : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                }
      `}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            role="article"
            aria-label={`Job: ${job.title} at ${job.location.city}`}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick?.(job);
                }
            }}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1 min-w-0">
                    <h3
                        className="text-lg font-semibold text-gray-900 mb-1 truncate font-manrope"
                    >
                        {job.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Building2 className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{job.department}</span>
                    </div>
                </div>

                {/* Work Mode Badge */}
                <span className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${workModeColors[job.workMode]}`}>
                    {workModeLabels[job.workMode]}
                </span>
            </div>

            {/* Details */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{job.location.city}, {job.location.country}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span>{employmentTypeLabels[job.employmentType]}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{formatPostedDate(job.postedDate)}</span>
                </div>
            </div>

            {/* Description Preview */}
            <p
                className="text-sm text-gray-500 line-clamp-2 mb-4 font-lato"
            >
                {job.description}
            </p>

            {/* CTA */}
            <div className="flex items-center justify-between">
                {job.salary && (
                    <span className="text-sm text-gray-600">
                        ₹{formatSalary(job.salary.min)} - ₹{formatSalary(job.salary.max)} /yr
                    </span>
                )}
                <motion.button
                    className="ml-auto flex items-center gap-1 text-sm font-medium text-[#1959FA] hover:text-[#12D4FF] transition-colors"
                    whileHover={{ x: 3 }}
                >
                    View Job
                    <ChevronRight className="w-4 h-4" />
                </motion.button>
            </div>
        </motion.div>
    );
}

function formatPostedDate(dateStr: string): string {
    const date = new Date(dateStr);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
}

function formatSalary(amount: number): string {
    if (amount >= 100000) {
        return `${(amount / 100000).toFixed(1)}L`;
    }
    return amount.toLocaleString("en-IN");
}
