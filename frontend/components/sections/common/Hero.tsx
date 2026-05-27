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
    <section className="relative overflow-hidden text-white min-h-screen lg:min-h-[660px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 w-full max-w-[1250px] mx-auto px-5 sm:px-2 md:px-8 lg:px-12 xl:px-14 pt-2 md:pt-4 lg:pt-6 pb-8 md:pb-10">
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
              <span className="uppercase tracking-[4px] text-[10px] sm:text-[11px] text-white/70 border-white/25 px-3 py-1">
                {subheadline}
              </span>

              <div className="w-10 h-px bg-white/30" />
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[32px] sm:text-[46px] md:text-[58px] lg:text-[68px] leading-[0.92] tracking-[-2px] font-semibold max-w-[760px]"
            >
              {headline}
            </motion.h1>

            {/* BODY */}
            <div className="mt-8 pt-6 border-t border-white/10 max-w-[760px]">
              <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.9] text-white/70 max-w-[920px]">
                {body}
              </p>
            </div>
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
                className="rounded-[18px] border border-white/15 bg-white/[0.08] backdrop-blur-md px-6 py-6 hover:bg-white/[0.12] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-[28px] md:text-[34px] leading-none tracking-[-1px] font-medium">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-[13px] text-white/70 leading-relaxed">
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