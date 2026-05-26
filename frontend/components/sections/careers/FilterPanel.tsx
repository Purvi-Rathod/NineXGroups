"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Filter, MapPin, RotateCcw } from "lucide-react";
import {
    JobFilters,
    JobCategory,
    WorkMode,
    EmploymentType,
    categoryLabels,
    workModeLabels,
    employmentTypeLabels,
    distanceOptions,
} from "@/lib/jobs/jobTypes";

interface FilterPanelProps {
    filters: JobFilters;
    onFiltersChange: (filters: JobFilters) => void;
    onClearFilters: () => void;
    jobCount: number;
    isMobileOpen?: boolean;
    onMobileClose?: () => void;
}

export default function FilterPanel({
    filters,
    onFiltersChange,
    onClearFilters,
    jobCount,
    isMobileOpen = false,
    onMobileClose,
}: FilterPanelProps) {
    const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
        location: true,
        category: true,
        workMode: true,
        employmentType: true,
    });

    const toggleSection = useCallback((section: string) => {
        setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }));
    }, []);

    const updateFilter = useCallback(<K extends keyof JobFilters>(key: K, value: JobFilters[K]) => {
        onFiltersChange({ ...filters, [key]: value });
    }, [filters, onFiltersChange]);

    const toggleArrayFilter = useCallback(<T extends string>(
        key: "categories" | "workModes" | "employmentTypes",
        value: T
    ) => {
        const current = filters[key] as T[];
        const updated = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        updateFilter(key, updated as JobFilters[typeof key]);
    }, [filters, updateFilter]);

    const hasActiveFilters = useMemo(() =>
        filters.location !== "" ||
        filters.categories.length > 0 ||
        filters.workModes.length > 0 ||
        filters.employmentTypes.length > 0,
        [filters]);

    // Filter content as JSX (not a component to avoid re-creation)
    const filterContent = (
        <div className="space-y-6">
            {/* Location & Distance */}
            <FilterSection
                title="Location"
                isExpanded={expandedSections.location}
                onToggle={() => toggleSection("location")}
            >
                <div className="space-y-3">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="City or location"
                            value={filters.location}
                            onChange={(e) => updateFilter("location", e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#12D4FF] focus:ring-1 focus:ring-[#12D4FF]/20 transition-all"
                            aria-label="Filter by location"
                        />
                    </div>
                    <div>
                        <label className="text-xs text-gray-500 mb-1 block">Distance (km)</label>
                        <select
                            value={filters.distance}
                            onChange={(e) => updateFilter("distance", Number(e.target.value))}
                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#12D4FF] transition-all cursor-pointer"
                            aria-label="Filter by distance"
                        >
                            {distanceOptions.map((d) => (
                                <option key={d} value={d}>
                                    Within {d} km
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </FilterSection>

            {/* Job Category */}
            <FilterSection
                title="Job Category"
                isExpanded={expandedSections.category}
                onToggle={() => toggleSection("category")}
                count={filters.categories.length}
            >
                <div className="space-y-2">
                    {(Object.keys(categoryLabels) as JobCategory[]).map((cat) => (
                        <CheckboxItem
                            key={cat}
                            label={categoryLabels[cat]}
                            checked={filters.categories.includes(cat)}
                            onChange={() => toggleArrayFilter("categories", cat)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Work Mode */}
            <FilterSection
                title="Work Mode"
                isExpanded={expandedSections.workMode}
                onToggle={() => toggleSection("workMode")}
                count={filters.workModes.length}
            >
                <div className="space-y-2">
                    {(Object.keys(workModeLabels) as WorkMode[]).map((mode) => (
                        <CheckboxItem
                            key={mode}
                            label={workModeLabels[mode]}
                            checked={filters.workModes.includes(mode)}
                            onChange={() => toggleArrayFilter("workModes", mode)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Employment Type */}
            <FilterSection
                title="Employment Type"
                isExpanded={expandedSections.employmentType}
                onToggle={() => toggleSection("employmentType")}
                count={filters.employmentTypes.length}
            >
                <div className="space-y-2">
                    {(Object.keys(employmentTypeLabels) as EmploymentType[]).map((type) => (
                        <CheckboxItem
                            key={type}
                            label={employmentTypeLabels[type]}
                            checked={filters.employmentTypes.includes(type)}
                            onChange={() => toggleArrayFilter("employmentTypes", type)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    onClick={onClearFilters}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                    <RotateCcw className="w-4 h-4" />
                    Clear All Filters
                </button>
            )}
        </div>
    );

    // Render both layouts, use CSS to show/hide based on screen size
    return (
        <>
            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                            onClick={onMobileClose}
                        />
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed top-0 left-0 h-full w-[320px] max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-5 h-5 text-[#1959FA]" />
                                    <span className="font-semibold text-gray-900">Filters</span>
                                    <span className="text-sm text-gray-500">({jobCount} jobs)</span>
                                </div>
                                <button
                                    onClick={onMobileClose}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="Close filters"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>
                            {/* Content */}
                            <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
                                {filterContent}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar - use CSS lg:block to show only on desktop */}
            <div className="hidden lg:block w-[280px] flex-shrink-0">
                <div className="sticky top-[160px] bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                    <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-2">
                            <Filter className="w-5 h-5 text-[#1959FA]" />
                            <span className="font-semibold text-gray-900">Filters</span>
                        </div>
                        <span className="text-sm text-gray-500">{jobCount} jobs</span>
                    </div>
                    {filterContent}
                </div>
            </div>
        </>
    );
}

// Filter Section Component - memoized to prevent re-renders
const FilterSection = React.memo(function FilterSection({
    title,
    children,
    isExpanded,
    onToggle,
    count,
}: {
    title: string;
    children: React.ReactNode;
    isExpanded: boolean;
    onToggle: () => void;
    count?: number;
}) {
    return (
        <div className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-2 text-left"
                aria-expanded={isExpanded}
            >
                <span className="font-medium text-gray-800 text-sm flex items-center gap-2">
                    {title}
                    {count && count > 0 && (
                        <span className="bg-[#12D4FF]/10 text-[#1959FA] text-xs px-2 py-0.5 rounded-full">
                            {count}
                        </span>
                    )}
                </span>
                <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
            </button>
            <AnimatePresence initial={false}>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-2">{children}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
});

// Checkbox Item Component - memoized to prevent re-renders
const CheckboxItem = React.memo(function CheckboxItem({
    label,
    checked,
    onChange,
}: {
    label: string;
    checked: boolean;
    onChange: () => void;
}) {
    return (
        <label className="flex items-center gap-3 py-1.5 cursor-pointer group">
            <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${checked
                    ? "bg-[#1959FA] border-[#1959FA]"
                    : "border-gray-300 group-hover:border-[#12D4FF]"
                    }`}
            >
                {checked && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
                aria-label={label}
            />
            <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {label}
            </span>
        </label>
    );
});
