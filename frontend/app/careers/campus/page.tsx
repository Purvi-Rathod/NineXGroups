"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const roles = [
  ["Design", "Brand, UI/UX, and motion roles building real client work from week one."],
  ["Engineering", "Front-end, full-stack, and automation — shipping production code, not toy projects."],
  ["Marketing & Growth", "Funnels, content, performance, and SEO/GEO across a portfolio of brands."],
  ["Operations & Accounts", "Run real client relationships and learn how an agency actually works."],
];

const steps = [
  ["01", "Apply", "Send us your work, not just a CV. We care more about what you've made than where you studied."],
  ["02", "Skills task", "A short, real-world task so you can show how you think and build — no trick questions."],
  ["03", "Conversations", "Meet the team you'd work with. We talk craft, curiosity, and how you handle real problems."],
  ["04", "Offer", "Move fast — strong candidates get a clear yes, quickly, with no endless rounds."],
  ["05", "Onboard", "Paired with a mentor and dropped into real work from day one. You learn by building."],
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
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[48px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">Careers · Campus / Freshers</span>
        </div>
        <motion.h1 {...rise()} className="max-w-[16ch] text-[42px] sm:text-[58px] lg:text-[74px] font-medium leading-[0.92] tracking-[-0.045em]">
          Start your career building{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">real things</span>.
        </motion.h1>
        <motion.p {...rise(1)} className="mt-7 max-w-[600px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          No coffee runs, no busywork. Freshers at NineX work on live client projects from week one, mentored by people who&apos;ve shipped real work. The fastest way to learn is to build.
        </motion.p>
      </section>

      {/* ROLES */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2 {...rise()} className="text-[13px] font-semibold uppercase tracking-[2px] text-[#0A1633]/60 mb-8 border-t border-[#0A1633]/10 pt-7">
          Where you can start
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {roles.map((r, i) => (
            <motion.div key={r[0]} {...rise(i)} className="bg-[#f7f6f4] p-8">
              <h3 className="text-[22px] font-medium tracking-[-0.025em]">{r[0]}</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#0A1633]/65">{r[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2 {...rise()} className="max-w-[16ch] text-[30px] sm:text-[42px] font-medium leading-[1.04] tracking-[-0.035em] mb-12">
          How hiring works
        </motion.h2>
        <div className="border-t border-[#0A1633]/15">
          {steps.map((s, i) => (
            <motion.div key={s[0]} {...rise(i)} className="grid grid-cols-[44px_1fr] sm:grid-cols-[80px_200px_1fr] items-start gap-5 border-b border-[#0A1633]/15 py-7">
              <span className="text-[15px] tabular-nums text-[#2563EB]">{s[0]}</span>
              <h3 className="text-[20px] sm:text-[24px] font-medium tracking-[-0.025em]">{s[1]}</h3>
              <p className="text-[14px] leading-[1.7] text-[#0A1633]/65 sm:pt-1">{s[2]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <motion.div {...rise()} className="relative overflow-hidden bg-[#0A1633] p-10 sm:p-14 text-white">
          <div className="absolute -left-32 -bottom-32 h-[360px] w-[360px] bg-[#2563EB]/30 blur-[140px]" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h3 className="max-w-[20ch] text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.035em]">
              Fresh out, full of ideas? Let&apos;s talk.
            </h3>
            <a href="#" className="group inline-flex shrink-0 items-center gap-2 bg-white px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[1px] text-[#0A1633] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white">
              Apply now <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}