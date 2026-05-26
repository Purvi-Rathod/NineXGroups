"use client";

import { motion } from "framer-motion";

interface PhaseItem {
  number: string;
  title: string;
  duration: string;
  points: string[];
}

interface OurApproachSectionProps {
  eyebrow: string;

  title: string;

  quote: string[];

  bottomText: string;

  phases: PhaseItem[];
}

export default function OurApproachSection({
  eyebrow,
  title,
  quote,
  bottomText,
  phases,
}: OurApproachSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f1]">
      {/* SOFT GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff6a3d]/10 blur-[120px]" />

      {/* CONTAINER */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-10 py-[64px] lg:py-[72px]">
        <div className="grid lg:grid-cols-[260px_820px] gap-[48px] justify-between items-start">
          {/* LEFT SIDE */}
          {/* LEFT SIDE */}
          <div className="pt-[10px] max-w-[320px]">
            {/* EYEBROW */}
            <div className="flex items-center gap-[10px] mb-[54px]">
              <div className="w-[6px] h-[6px] bg-[#ff5b2e]" />

              <span className="uppercase tracking-[5px] text-[11px] leading-none font-medium text-[#ff5b2e]">
                {eyebrow}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-[24px] sm:text-[30px] lg:text-[34px] leading-[1.08] tracking-[-1.2px] font-light text-black max-w-[300px]">
              {title}
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* CARD */}
            <div className="bg-[#f7f7f5] border border-black/6  px-[22px] sm:px-[32px] py-[26px] sm:py-[34px]">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`
                    flex flex-col sm:flex-row gap-[22px] sm:gap-[28px]
                    ${index !== phases.length - 1
                      ? "border-b border-black/8 pb-[28px] mb-[28px]"
                      : ""
                    }
                  `}
                >
                  {/* NUMBER */}
                  <div className="shrink-0">
                    <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-[#ff9d73] to-[#ff5b2e] flex items-center justify-center text-white text-[22px] font-medium">
                      {phase.number}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    {/* HEADING */}
                    <h3 className="text-[17px] sm:text-[18px] leading-[1.5] text-black font-medium mb-[14px]">
                      {phase.title}

                      <span className="text-black/55 font-normal">
                        {" "}
                        ({phase.duration})
                      </span>
                    </h3>

                    {/* POINTS */}
                    <ul className="space-y-[8px]">
                      {phase.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-[10px] text-[13px] leading-[1.75] text-black/72"
                        >
                          <span className="w-[4px] h-[4px] rounded-full bg-black/40 mt-[9px] shrink-0" />

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}

              {/* FOOTER */}
              <div className="pt-[10px] text-[11px] uppercase tracking-[2px] text-black/35">
                Your Transformation Partner
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
