"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface OverviewSectionProps {
  eyebrow: string;
  leftTitle: string[];
  title: string;
  description: string;
  image: string;
}

export default function OurVision({
  eyebrow,
  leftTitle,
  title,
  description,
  image,
}: OverviewSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f6f4f8]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.28),_transparent_42%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.55),_transparent_38%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0.16)_58%)]" />

      {/* LEFT GLOW */}
      <div className="absolute bottom-[-180px] left-[-180px] w-[500px] h-[500px] bg-[#22D3EE]/25 blur-[150px]" />

      {/* RIGHT GLOW */}
      <div className="absolute top-[-180px] right-[-180px] w-[420px] h-[420px] bg-[#22D3EE]/20 blur-[160px]" />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-white/10" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 lg:px-8 pt-[50px] sm:pt-[60px] lg:pt-[70px] pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-[40px] lg:gap-[70px] items-start">
          {/* LEFT SIDE */}
          <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[520px] flex items-center">
            <div className="relative lg:absolute lg:left-0 lg:top-[85%] lg:-translate-y-1/2 w-full">
              {leftTitle.map((item, index) => (
                <div key={index} className="mb-[8px]">
                  <h2 className="text-[42px] sm:text-[56px] lg:text-[70px] leading-[0.88] tracking-[-2px] lg:tracking-[-3px] font-bold uppercase py-[6px] text-white/90">
                    {item}
                  </h2>

                  {index !== leftTitle.length - 1 && (
                    <div className="w-[180px] sm:w-[220px] lg:w-[230px] h-[3px] bg-white/70" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="pt-[6px]">
            {/* EYEBROW */}
            <div className="flex items-center gap-[10px] mb-[24px] lg:mb-[34px]">
              <div className="w-[7px] h-[7px] bg-[#22D3EE]" />

              <span className="uppercase tracking-[3px] text-[11px] font-medium text-[#22D3EE]">
                {eyebrow}
              </span>
            </div>

            {/* TITLE */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-full text-[30px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.02] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.4px] font-normal text-[#0b0d39]"
            >
              {title}
            </motion.h2>

            {/* DESCRIPTION */}
            <p className="text-[13px] sm:text-[14px] leading-[1.8] sm:leading-[1.9] text-[#555555] max-w-[720px] mb-[18px]">
              {description}
            </p>

            {/* IMAGE */}
            <div className="relative overflow-hidden leading-none">
              <Image
                src={image}
                alt="overview"
                width={1200}
                height={800}
                className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}