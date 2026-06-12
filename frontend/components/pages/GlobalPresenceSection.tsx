"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Region {
  name: string;
}

interface Pin {
  top: string;
  left: string;
}

interface GlobalPresenceSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  regions: Region[];
  pins?: Pin[];
}

export default function GlobalPresenceSection({
  eyebrow = "GLOBAL PRESENCE",
  title,
  description,
  regions,
  pins = [
    { top: "30%", left: "20%" }, // North America
    { top: "55%", left: "24%" }, // South America
    { top: "24%", left: "52%" }, // Europe
    { top: "22%", left: "60%" }, // Middle East
    { top: "35%", left: "74%" }, // India / APAC
    { top: "62%", left: "84%" }, // Australia
  ],
}: GlobalPresenceSectionProps) {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-[42%_58%]">

          {/* LEFT */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-600">
              {eyebrow}
            </p>

            <h2 className="max-w-[340px] text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0A1633] md:text-[34px]">
              {title}
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 md:grid-cols-4">
              {regions.map((region) => (
                <div key={region.name}>
                  <h3 className="text-[14px] font-medium tracking-[-0.01em] text-[#0A1633]">
                    {region.name}
                  </h3>

                  <div className="mt-3 h-[2px] w-6 bg-blue-500" />
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[420px] text-[13px] font-normal leading-7 text-slate-600">
              {description}
            </p>
          </div>

          {/* RIGHT MAP */}
          <div className="relative">
            <div className="relative h-[280px] md:h-[340px] lg:h-[380px]">

              {/* World Map SVG */}
              <svg
                viewBox="0 0 1000 500"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <path
                  d="M132 170L205 140L270 165L255 235L185 245L132 170Z"
                  fill="#EEF3FF"
                />
                <path
                  d="M310 270L360 250L385 320L340 370L295 340L310 270Z"
                  fill="#EEF3FF"
                />
                <path
                  d="M470 125L640 110L730 150L720 280L580 310L470 240L470 125Z"
                  fill="#EEF3FF"
                />
                <path
                  d="M735 150L870 170L900 250L820 300L735 260L735 150Z"
                  fill="#EEF3FF"
                />
                <path
                  d="M810 330L885 340L910 390L850 420L800 390L810 330Z"
                  fill="#EEF3FF"
                />
              </svg>

              {/* Pins */}
              {pins.map((pin, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{
                    top: pin.top,
                    left: pin.left,
                  }}
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300"
                    />

                    <MapPin
                      size={18}
                      strokeWidth={2}
                      className="relative text-blue-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}