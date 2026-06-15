"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const gallery = [
  { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop", span: "lg:col-span-2 lg:row-span-2", h: "h-[260px] lg:h-full" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop", span: "", h: "h-[200px] lg:h-[230px]" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=900&auto=format&fit=crop", span: "", h: "h-[200px] lg:h-[230px]" },
  { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop", span: "", h: "h-[200px] lg:h-[230px]" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop", span: "", h: "h-[200px] lg:h-[230px]" },
];

const stats = [
  ["6", "sub-brands, one team"],
  ["1", "shared mission"],
  ["Indore", "our home base"],
  ["20+", "clients across the globe"],
];

const pillars = [
  { t: "Ownership from day one", d: "No waiting your turn. You own real accounts, real builds, and real outcomes from the moment you join." },
  { t: "Work across brands", d: "From SaaS to healthcare to consulting — you touch a range of work most agencies can't offer in a decade." },
  { t: "Build things that ship", d: "We don't make slideware. What you design and build goes live, gets used, and moves the numbers." },
  { t: "Grow at startup speed", d: "Two years in and scaling fast. The people who lean in grow into the roles the company is creating." },
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
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">Careers · Life at NineX</span>
        </div>
        <motion.h1 {...rise()} className="max-w-[17ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          Where ambitious work feels like{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">home</span>.
        </motion.h1>
        <motion.p {...rise(1)} className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          We&lsquo;re a young, fast-moving group building real products and brands out of Indore. Small enough that you matter, ambitious enough that you&lsquo;ll grow.
        </motion.p>
      </section>

      {/* MOSAIC */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:auto-rows-[230px]">
          {gallery.map((g, i) => (
            <motion.div key={i} {...rise(i)} className={`relative overflow-hidden bg-[#0A1633]/5 ${g.span} ${g.h}`}>
              <Image src={g.src} alt="Life at NineX" fill className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.05]" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[72px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {stats.map((s, i) => (
            <motion.div key={s[0]} {...rise(i)} className="bg-[#f7f6f4] px-6 py-9 text-center sm:text-left">
              <div className="text-[40px] sm:text-[52px] font-medium leading-[0.9] tracking-[-0.04em] bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">{s[0]}</div>
              <p className="mt-2 text-[12px] uppercase tracking-[1px] text-[#0A1633]/55">{s[1]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.h2 {...rise()} className="max-w-[18ch] text-[30px] sm:text-[42px] font-medium leading-[1.04] tracking-[-0.035em] mb-12">
          What life here actually looks like
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {pillars.map((p, i) => (
            <motion.div key={p.t} {...rise(i)} className="bg-[#f7f6f4] p-8 sm:p-10">
              <span className="text-[13px] tabular-nums text-[#0A1633]/30">0{i + 1}</span>
              <h3 className="mt-4 text-[23px] font-medium tracking-[-0.025em]">{p.t}</h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-[#0A1633]/65">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <motion.div {...rise()} className="relative overflow-hidden bg-[#0A1633] p-10 sm:p-14 text-white">
          <div className="absolute -right-32 -top-32 h-[360px] w-[360px] bg-[#2563EB]/30 blur-[140px]" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <h3 className="max-w-[20ch] text-[28px] sm:text-[40px] font-medium leading-[1.05] tracking-[-0.035em]">
              Like the sound of it? Come build with us.
            </h3>
            <a href="#" className="group inline-flex shrink-0 items-center gap-2 bg-white px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[1px] text-[#0A1633] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white">
              See open roles <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}