"use client";

import { motion } from "framer-motion";

interface SubPageHeroProps {
  backgroundImage: string;

  headline: string;

  subheadline: string;
}

export default function SubPageHero({
  backgroundImage,
  headline,
  subheadline,
}: SubPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="min-h-[640px] sm:min-h-[600px] lg:min-h-[660px] flex items-end">

          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 pb-[42px] sm:pb-[54px] lg:pb-[72px]">

            {/* LEFT */}
            <div className="max-w-[520px]">

              {/* HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-[30px] sm:text-[42px] lg:text-[50px] leading-[0.95] tracking-[-1px] font-light"
              >
                {headline}
              </motion.h1>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[340px] lg:pb-[10px]"
            >
              <p className="text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8]">
                {subheadline}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}