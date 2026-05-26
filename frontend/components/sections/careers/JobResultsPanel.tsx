"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, List, SlidersHorizontal, ChevronDown, SearchX } from "lucide-react";
import { Job } from "@/lib/jobs/jobTypes";
import JobCard from "./JobCard";
import dynamic from "next/dynamic";

const JobMap = dynamic(() => import("./JobMap"), {
    ssr: false,
    loading: () => <div className="h-[350px] bg-gray-100 rounded-xl animate-pulse" />
});

interface JobResultsPanelProps {
    jobs: Job[];
    isLoading?: boolean;
    highlightedJobId: string | null;
    onJobHover: (job: Job | null) => void;
    onJobClick: (job: Job) => void;
    onOpenFilters: () => void;
}

type SortOption = "relevance" | "date" | "title";

export default function JobResultsPanel({
    jobs,
    isLoading = false,
    highlightedJobId,
    onJobHover,
    onJobClick,
    onOpenFilters,
}: JobResultsPanelProps) {
    const [showMap, setShowMap] = useState(true);
    const [sortBy, setSortBy] = useState<SortOption>("relevance");
    const [showSortDropdown, setShowSortDropdown] = useState(false);

    const sortedJobs = React.useMemo(() => {
        const jobsCopy = [...jobs];
        switch (sortBy) {
            case "date":
                return jobsCopy.sort(
                    (a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
                );
            case "title":
                return jobsCopy.sort((a, b) => a.title.localeCompare(b.title));
            default:
                return jobsCopy;
        }
    }, [jobs, sortBy]);

    const sortLabels: Record<SortOption, string> = {
        relevance: "Relevance",
        date: "Most Recent",
        title: "Job Title (A-Z)",
    };

    return (
        <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    {/* Left: Results count & Mobile filter button */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onOpenFilters}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                        >
                            <SlidersHorizontal className="w-4 h-4" />
                            Filters
                        </button>
                        <div className="text-sm text-gray-600">
                            <span className="font-semibold text-gray-900">{jobs.length}</span>{" "}
                            job{jobs.length !== 1 ? "s" : ""} found
                        </div>
                    </div>

                    {/* Right: Sort & Map toggle */}
                    <div className="flex items-center gap-3">
                        {/* Sort Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSortDropdown(!showSortDropdown)}
                                onBlur={() => setTimeout(() => setShowSortDropdown(false), 150)}
                                className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                            >
                                <span className="hidden sm:inline text-gray-500">Sort:</span>
                                <span className="font-medium">{sortLabels[sortBy]}</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${showSortDropdown ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {showSortDropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 top-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg py-1 z-20 min-w-[160px]"
                                    >
                                        {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => {
                                                    setSortBy(option);
                                                    setShowSortDropdown(false);
                                                }}
                                                className={`w-full text-left px-4 py-2 text-sm transition-colors ${sortBy === option
                                                    ? "bg-[#12D4FF]/10 text-[#1959FA]"
                                                    : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                            >
                                                {sortLabels[option]}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Map Toggle */}
                        <button
                            onClick={() => setShowMap(!showMap)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${showMap
                                ? "bg-[#1959FA] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {showMap ? <List className="w-4 h-4" /> : <Map className="w-4 h-4" />}
                            <span className="hidden sm:inline">{showMap ? "Hide Map" : "Show Map"}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Map (collapsible) */}
            <AnimatePresence>
                {showMap && jobs.length > 0 && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 350, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4 overflow-hidden"
                    >
                        <JobMap
                            jobs={jobs}
                            highlightedJobId={highlightedJobId}
                            onMarkerHover={onJobHover}
                            onMarkerClick={onJobClick}
                            className="h-[350px]"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Job Cards */}
            {isLoading ? (
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 animate-pulse">
                            <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
                            <div className="h-4 bg-gray-100 rounded w-full mb-2" />
                            <div className="h-4 bg-gray-100 rounded w-2/3" />
                        </div>
                    ))}
                </div>
            ) : jobs.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-xl border border-gray-100 p-12 text-center"
                >
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <SearchX className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 font-manrope">
                        No jobs match your search criteria
                    </h3>
                    <p className="text-gray-500 text-sm max-w-md mx-auto">
                        Try adjusting your filters or search terms to find more opportunities.
                        You can also subscribe to job alerts to be notified when new positions open up.
                    </p>
                </motion.div>
            ) : (
                <div className="space-y-4">
                    {sortedJobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <JobCard
                                job={job}
                                isHighlighted={highlightedJobId === job.id}
                                onHover={onJobHover}
                                onClick={onJobClick}
                            />
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
