import React from "react";
import { headingStyleHeading1 } from "@/lib/sharedStyles";
import { motion } from "framer-motion";
import { bobUp, viewportOnce } from "@/animations";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  descriptionClassName?: string;
}

/**
 * Reusable Section Header Component
 * Standardizes section headers across the codebase while preserving exact styling
 */
export default function SectionHeader({
  title,
  description,
  className = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`text-center mb-8 sm:mb-10 md:mb-12 ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px]"
        style={headingStyleHeading1}
        variants={bobUp}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={`text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4 max-w-3xl mx-auto ${descriptionClassName}`}
          variants={bobUp}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

