"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Zap, BookOpen } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const benefits = [
  { icon: <Zap size={20} strokeWidth={1.6} />, title: "Signal, not noise", text: "One sharp edition, twice a month. The trends and moves that actually matter — nothing filler." },
  { icon: <BookOpen size={20} strokeWidth={1.6} />, title: "Built by practitioners", text: "Written by the team shipping this work daily, not a content desk. Real frameworks you can apply." },
  { icon: <Mail size={20} strokeWidth={1.6} />, title: "First access", text: "New research, reports, and webinars land in your inbox before they go anywhere else." },
];

const issues = [
  { n: "#24", title: "The AI agent reality check", meta: "Mar 2026" },
  { n: "#23", title: "GEO, and the death of the blue link", meta: "Feb 2026" },
  { n: "#22", title: "Why funnels fail on facts", meta: "Feb 2026" },
  { n: "#21", title: "The build-vs-buy spreadsheet", meta: "Jan 2026" },
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
      {/* HERO + SUBSCRIBE */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[460px] w-[460px] bg-[#2563EB]/15 blur-[150px]" />
        <div className="relative mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[80px] sm:pt-[110px] pb-[64px]">
          <div className="flex items-center gap-[10px] mb-7">
            <span className="h-[7px] w-[7px] bg-[#2563EB]" />
            <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
              Insights · Newsletter
            </span>
          </div>

          <motion.h1 {...rise()} className="max-w-[18ch] text-[42px] sm:text-[60px] lg:text-[78px] font-medium leading-[0.92] tracking-[-0.045em]">
            The signal in your{" "}
            <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
              inbox
            </span>
            .
          </motion.h1>

          <motion.p {...rise(1)} className="mt-7 max-w-[540px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
            Twice a month, the sharpest thinking on AI, growth, and enterprise
            technology — from the people actually building it. No fluff, ever.
          </motion.p>

          <motion.div {...rise(2)} className="mt-10 flex w-full max-w-[520px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="you@company.com"
              className="h-[56px] flex-1 border border-[#0A1633]/20 bg-white px-5 text-[15px] text-[#0A1633] outline-none transition-colors duration-300 placeholder:text-[#0A1633]/40 focus:border-[#2563EB]"
            />
            <button className="group flex h-[56px] items-center justify-center gap-2 bg-[#0A1633] px-7 text-[13px] font-semibold uppercase tracking-[1px] text-white transition-colors duration-300 hover:bg-[#2563EB]">
              Subscribe
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>

          <motion.p {...rise(3)} className="mt-4 text-[12px] text-[#0A1633]/45">
            Join 12,000+ operators and founders. Unsubscribe anytime.
          </motion.p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {benefits.map((b, i) => (
            <motion.div key={b.title} {...rise(i)} className="bg-[#f7f6f4] p-8 sm:p-9">
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB]">
                {b.icon}
              </span>
              <h3 className="mt-6 text-[20px] font-medium tracking-[-0.02em]">{b.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#0A1633]/65">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="mb-7 flex items-end justify-between border-t border-[#0A1633]/15 pt-7">
          <h2 className="text-[13px] font-semibold uppercase tracking-[2px] text-[#0A1633]/60">Recent Editions</h2>
          <a href="#" className="text-[12px] font-medium uppercase tracking-[1px] text-[#2563EB] hover:underline">View archive</a>
        </div>

        {issues.map((it, i) => (
          <motion.a
            href="#"
            key={it.n}
            {...rise(i)}
            className="group flex items-center justify-between border-b border-[#0A1633]/15 py-6 transition-colors duration-300 hover:bg-white"
          >
            <div className="flex items-baseline gap-5">
              <span className="text-[13px] tabular-nums text-[#0A1633]/35">{it.n}</span>
              <h3 className="text-[20px] sm:text-[26px] font-medium leading-[1.1] tracking-[-0.025em] transition-colors duration-300 group-hover:text-[#2563EB]">
                {it.title}
              </h3>
            </div>
            <div className="flex items-center gap-5">
              <span className="hidden sm:inline text-[12px] uppercase tracking-[1px] text-[#0A1633]/45">{it.meta}</span>
              <ArrowRight size={17} className="text-[#0A1633]/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]" />
            </div>
          </motion.a>
        ))}
      </section>
    </main>
  );
}