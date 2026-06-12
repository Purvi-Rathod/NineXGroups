"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";

interface StatItem {
  value: string;
  label: string;
  icon?: ReactNode;
}

interface EnterpriseHeroProps {
  backgroundImage: string;
  subheadline: string;
  headline: string;
  body: string;
  sideText?: string;
  stats: StatItem[];
}

export default function EnterpriseHero({
  backgroundImage,
  subheadline,
  headline,
  body,
  sideText,
  stats,
}: EnterpriseHeroProps) {
  return (
    <section className="relative overflow-hidden text-white min-h-[560px] lg:min-h-[660px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Readability wash — navy-tinted to stay on brand */}
        {/* <div className="absolute inset-0 bg-[#0A1628]/55" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/30 to-[#0A1628]/60" /> */}
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-14 pt-10 md:pt-12 lg:pt-14 pb-8 md:pb-10">
        {/* HERO GRID */}
        <div className="grid lg:grid-cols-[62%_38%] gap-6 xl:gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* SUBTITLE */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="uppercase tracking-[0.14em] text-[12px] sm:text-[13px] font-semibold text-white/80">
                {subheadline}
              </span>

              <div className="h-px w-10 bg-gradient-to-r from-[#12D4FF] to-[#1959FA]" />
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[58px] leading-[1.06] tracking-[-0.03em] font-semibold max-w-[760px] [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]"
            >
              {headline}
            </motion.h1>

            {/* BODY */}
            <div className="mt-8 pt-6 border-t border-white/15 max-w-[760px]">
              <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.75] tracking-[-0.01em] text-white/75 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
                {body}
              </p>
            </div>

            {sideText && (
              <p className="mt-4 text-[13px] leading-[1.6] text-white/60 max-w-[520px]">
                {sideText}
              </p>
            )}
          </div>

          {/* EMPTY RIGHT SIDE */}
          <div className="hidden lg:block" />
        </div>

        {/* STATS */}
        <div className="mt-10 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[18px] border border-white/15 bg-white/[0.08] backdrop-blur-md px-6 py-6 hover:bg-white/[0.12] hover:border-[#12D4FF]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[#12D4FF] shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[28px] md:text-[32px] leading-none tracking-[-0.02em] font-semibold tabular-nums">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-[13px] sm:text-[14px] text-white/70 leading-[1.6] tracking-[-0.01em]">
                      {item.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}