"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const tracks = [
  { n: "01", name: "Emerging Leaders", who: "High-potential individual contributors", dur: "12 weeks", d: "For people ready to lead before they have the title. Build the judgment, communication, and ownership that turn strong contributors into people others follow." },
  { n: "02", name: "Manager Accelerator", who: "First-time and new managers", dur: "16 weeks", d: "The jump from doing the work to leading the people who do it. Practical training in coaching, feedback, delegation, and running a team that delivers." },
  { n: "03", name: "Practice Leadership", who: "Senior leads across brands", dur: "6 months", d: "For those running a function or sub-brand. Strategy, P&L thinking, and cross-brand leadership for the people shaping where NineX goes next." },
  { n: "04", name: "Mentorship Network", who: "Everyone, always on", dur: "Ongoing", d: "A structured pairing of every team member with a more experienced mentor — so growth isn't left to chance, it's built into how we work." },
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
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[48px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">Careers · Leadership Programs</span>
        </div>
        <motion.h1 {...rise()} className="max-w-[16ch] text-[42px] sm:text-[58px] lg:text-[74px] font-medium leading-[0.92] tracking-[-0.045em]">
          Built to grow{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">leaders</span>, not just employees.
        </motion.h1>
        <motion.p {...rise(1)} className="mt-7 max-w-[600px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          We promote from within whenever we can — which only works if we deliberately build leaders. These are the tracks that do it.
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {tracks.map((t, i) => (
            <motion.div key={t.n} {...rise(i)} className="group flex min-h-[320px] flex-col justify-between bg-[#f7f6f4] p-8 sm:p-10 transition-colors duration-300 hover:bg-white">
              <div className="flex items-start justify-between">
                <span className="text-[15px] tabular-nums text-[#0A1633]/30">{t.n}</span>
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#0A1633]/20 transition-all duration-300 group-hover:bg-[#0A1633] group-hover:text-white">
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </span>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="border border-[#0A1633]/15 px-3 py-[5px] text-[10px] font-semibold uppercase tracking-[1px] text-[#0A1633]/60">{t.who}</span>
                  <span className="border border-[#2563EB]/30 px-3 py-[5px] text-[10px] font-semibold uppercase tracking-[1px] text-[#2563EB]">{t.dur}</span>
                </div>
                <h2 className="text-[26px] sm:text-[32px] font-medium leading-[1.05] tracking-[-0.03em]">{t.name}</h2>
                <p className="mt-4 max-w-[46ch] text-[14px] leading-[1.7] text-[#0A1633]/65">{t.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}