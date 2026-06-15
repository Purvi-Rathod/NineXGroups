"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const sectors = [
  { n: "01", sector: "Fintech & Banking", title: "The Digital Banking Inflection", meta: "2026 Outlook · 16 pages" },
  { n: "02", sector: "Healthcare", title: "Connected Care & the EHR Shift", meta: "2026 Outlook · 14 pages" },
  { n: "03", sector: "Retail & Commerce", title: "Omnichannel Economics", meta: "2026 Outlook · 18 pages" },
  { n: "04", sector: "Manufacturing", title: "Industry 4.0 Adoption Index", meta: "2026 Outlook · 20 pages" },
  { n: "05", sector: "Energy & Utilities", title: "Grid, Storage & the Transition", meta: "2026 Outlook · 15 pages" },
  { n: "06", sector: "Logistics", title: "Supply-Chain Visibility Report", meta: "2026 Outlook · 13 pages" },
];

export default function Page() {
  const reduce = useReducedMotion();
  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.55, ease: EASE, delay: i * 0.05 },
  });

  return (
    <main style={FONT} className="w-full overflow-x-hidden bg-[#f3f3f1] text-[#0A1633]">
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[40px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
            Insights · Industry Reports
          </span>
        </div>

        <motion.h1 {...rise()} className="max-w-[16ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          Sector intelligence,{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            decoded
          </span>
          .
        </motion.h1>

        <motion.p {...rise(1)} className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          Deep, vertical-specific reports that map the forces, benchmarks, and
          opportunities defining each industry we work in.
        </motion.p>
      </section>

      {/* INDEX LIST */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="border-t border-[#0A1633]/15">
          {sectors.map((s, i) => (
            <motion.a
              href="#"
              key={s.n}
              {...rise(i)}
              className="group grid grid-cols-[44px_1fr_auto] sm:grid-cols-[64px_220px_1fr_auto] items-center gap-4 border-b border-[#0A1633]/15 py-7 sm:py-9 transition-colors duration-300 hover:bg-white"
            >
              <span className="text-[14px] tabular-nums text-[#0A1633]/35">{s.n}</span>

              <span className="hidden sm:block text-[11px] font-semibold uppercase tracking-[2px] text-[#2563EB]">
                {s.sector}
              </span>

              <div>
                <span className="block sm:hidden mb-1 text-[10px] font-semibold uppercase tracking-[2px] text-[#2563EB]">
                  {s.sector}
                </span>
                <h2 className="text-[22px] sm:text-[30px] lg:text-[36px] font-medium leading-[1.05] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#2563EB]">
                  {s.title}
                </h2>
                <p className="mt-2 text-[12px] uppercase tracking-[1px] text-[#0A1633]/45">{s.meta}</p>
              </div>

              <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#0A1633]/20 transition-all duration-300 group-hover:bg-[#0A1633] group-hover:text-white">
                <ArrowUpRight size={18} strokeWidth={1.6} />
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}