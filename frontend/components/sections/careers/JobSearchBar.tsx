"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

interface JobSearchBarProps {
    searchQuery: string;
    onSearchChange: (value: string) => void;
    onSearch: () => void;
    variant?: "hero" | "compact";
    className?: string;
}

export default function JobSearchBar({
    searchQuery,
    onSearchChange,
    onSearch,
    variant = "hero",
    className = "",
}: JobSearchBarProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            onSearch();
        }
    };

    const isHero = variant === "hero";

    return (
        <div
            className={`
        ${isHero
                    ? "bg-white rounded-xl shadow-2xl p-2 sm:p-3"
                    : "bg-white/10 backdrop-blur-md rounded-lg p-1.5"
                }
        ${className}
      `}
        >
            <div className={`flex flex-col ${isHero ? "sm:flex-row" : "md:flex-row"} gap-2 sm:gap-3`}>
                {/* Single Search Input */}
                <div className={`flex items-center flex-1 ${isHero ? "bg-gray-50" : "bg-white/10"} rounded-lg px-4 py-3`}>
                    <Search className={`w-5 h-5 ${isHero ? "text-gray-400" : "text-white/60"} mr-3 flex-shrink-0`} />
                    <input
                        type="text"
                        placeholder="Search by job title, skill, or city"
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className={`
              w-full bg-transparent outline-none text-sm sm:text-base font-lato
              ${isHero ? "text-gray-800 placeholder-gray-400" : "text-white placeholder-white/60"}
            `}
                        aria-label="Search by job title, skill, or city"
                    />
                </div>

                {/* Search Button */}
                <motion.button
                    onClick={onSearch}
                    className={`
            gradient-btn text-white font-semibold rounded-lg transition-all
            ${isHero
                            ? "px-8 py-3 sm:py-4 text-base"
                            : "px-6 py-3 text-sm"
                        }
          `}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(18, 212, 255, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Search jobs"
                >
                    Search Jobs
                </motion.button>
            </div>
        </div>
    );
}
