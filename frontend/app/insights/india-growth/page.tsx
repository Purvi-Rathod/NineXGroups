"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  ["120", "pages of original research"],
  ["14", "sectors analysed in depth"],
  ["2026", "outlook through 2030"],
  ["50+", "data sources & interviews"],
];

const chapters = [
  ["01", "The Macro Picture", "Growth drivers, capital flows, and the forces reshaping the Indian economy through 2030."],
  ["02", "Sector Deep Dives", "Fourteen industries — where momentum is building, where it is stalling, and why."],
  ["03", "The Technology Shift", "How AI, automation, and digital infrastructure are rewriting competitive advantage."],
  ["04", "Capital & Investment", "Where money is moving, the new funding patterns, and what investors now expect."],
  ["05", "The Talent Equation", "Skills, hiring, and the workforce transformation underway across enterprises."],
  ["06", "Outlook & Playbook", "Scenarios for the decade ahead and a practical playbook for leaders."],
];

export default function Page() {
  const reduce = useReducedMotion();
  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
  });

  return (
    <main style={FONT} className="w-full overflow-x-hidden bg-[#f3f3f1] text-[#0A1633]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A1633] text-white">
        <div className="absolute -left-40 -bottom-40 h-[520px] w-[520px] bg-[#2563EB]/30 blur-[160px]" />
        <div className="relative mx-auto grid w-full max-w-[1220px] grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 px-5 sm:px-6 lg:px-8 pt-[80px] sm:pt-[104px] pb-[72px] items-center">
          <div>
            <div className="flex items-center gap-[10px] mb-7">
              <span className="h-[7px] w-[7px] bg-[#2563EB]" />
              <span className="text-[11px] font-medium uppercase tracking-[3px] text-white/60">
                Flagship Research · Free
              </span>
            </div>

            <motion.h1 {...rise()} className="text-[44px] sm:text-[62px] lg:text-[78px] font-medium leading-[0.92] tracking-[-0.045em]">
              The India{" "}
              <span className="bg-gradient-to-r from-white to-[#7db5ff] bg-clip-text text-transparent">
                Growth Report
              </span>{" "}
              2026
            </motion.h1>

            <motion.p {...rise(1)} className="mt-7 max-w-[52ch] text-[15px] sm:text-[17px] leading-[1.7] text-white/75">
              A 120-page deep dive into the sectors, capital flows, and
              technology shifts reshaping Indian enterprise over the next decade.
            </motion.p>

            <motion.div {...rise(2)} className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#" className="group inline-flex items-center gap-2 bg-white px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[1px] text-[#0A1633] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white">
                <Download size={16} strokeWidth={1.8} /> Download the report
              </a>
              <span className="text-[12px] uppercase tracking-[1.5px] text-white/55">
                Mar 2026 · PDF · 120 pages
              </span>
            </motion.div>
          </div>

          <motion.div {...rise(2)} className="relative mx-auto w-full max-w-[360px]">
            <div className="relative aspect-[3/4] overflow-hidden border border-white/15 shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1000&auto=format&fit=crop" alt="India Growth Report 2026 cover" fill className="object-cover opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-[10px] uppercase tracking-[2px] text-white/60">NineXGroup Research</p>
                <p className="mt-2 text-[26px] font-medium leading-[1.05] tracking-[-0.03em]">India Growth Report</p>
                <p className="text-[42px] font-medium leading-[0.9] tracking-[-0.04em] text-[#7db5ff]">2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 -mt-px">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] border-x border-b border-[#0A1633]/10 bg-[#0A1633]/10">
          {stats.map((s, i) => (
            <motion.div key={s[0]} {...rise(i)} className="bg-[#f7f6f4] px-6 py-9 text-center sm:text-left">
              <div className="text-[44px] sm:text-[56px] font-medium leading-[0.9] tracking-[-0.04em] bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
                {s[0]}
              </div>
              <p className="mt-2 text-[12px] uppercase tracking-[1px] text-[#0A1633]/55">{s[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[80px] pb-[100px]">
        <motion.h2 {...rise()} className="max-w-[16ch] text-[32px] sm:text-[44px] font-medium leading-[1.02] tracking-[-0.035em]">
          What&apos;s inside the report
        </motion.h2>

        <div className="mt-12 border-t border-[#0A1633]/15">
          {chapters.map((c, i) => (
            <motion.div key={c[0]} {...rise(i)} className="group grid grid-cols-[44px_1fr] sm:grid-cols-[80px_320px_1fr] items-start gap-5 border-b border-[#0A1633]/15 py-8 transition-colors duration-300 hover:bg-white">
              <span className="text-[15px] tabular-nums text-[#0A1633]/30">{c[0]}</span>
              <h3 className="text-[22px] sm:text-[27px] font-medium leading-[1.1] tracking-[-0.025em]">{c[1]}</h3>
              <p className="text-[14px] leading-[1.7] text-[#0A1633]/65 sm:pt-1">{c[2]}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...rise()} className="mt-14 flex flex-col items-start justify-between gap-6 border border-[#0A1633]/10 bg-white p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h3 className="text-[24px] sm:text-[30px] font-medium tracking-[-0.03em]">Get the full report, free.</h3>
            <p className="mt-2 text-[14px] text-[#0A1633]/65">Download instantly — no paywall, no sales call.</p>
          </div>
          <a href="#" className="group inline-flex shrink-0 items-center gap-2 bg-[#0A1633] px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[1px] text-white transition-colors duration-300 hover:bg-[#2563EB]">
            <Download size={16} strokeWidth={1.8} /> Download now
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}