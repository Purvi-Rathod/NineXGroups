"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const filters = ["All", "AI & Automation", "Growth", "Markets", "Operations"];

const featured = {
  category: "Flagship Research",
  title: "The India Growth Report 2026",
  excerpt:
    "A 120-page deep dive into the sectors, capital flows, and technology shifts reshaping Indian enterprise over the next decade.",
  meta: "Mar 2026 · 120 pages · 18 min read",
  image:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
};

const reports = [
  { cat: "AI & Automation", title: "AI for Business India", excerpt: "How Indian enterprises are deploying AI beyond pilots into measurable revenue.", meta: "Feb 2026 · 14 min", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop" },
  { cat: "Growth", title: "Digital Marketing Trends", excerpt: "The channels, formats, and budgets defining performance marketing this year.", meta: "Feb 2026 · 11 min", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" },
  { cat: "Markets", title: "The State of D2C Commerce", excerpt: "Unit economics, retention, and the path to profitability for digital-first brands.", meta: "Jan 2026 · 9 min", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop" },
  { cat: "Operations", title: "Automation Maturity Index", excerpt: "Benchmarking how far enterprises have actually automated their core workflows.", meta: "Jan 2026 · 12 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" },
  { cat: "Growth", title: "GEO & the New Search Frontier", excerpt: "Why generative engines are the most important search shift in a decade.", meta: "Dec 2025 · 10 min", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop" },
  { cat: "Markets", title: "Capital & Climate 2026", excerpt: "Where sustainability-linked capital is flowing and what it expects in return.", meta: "Dec 2025 · 13 min", img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop" },
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
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[48px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
            Insights · Research Reports
          </span>
        </div>

        <motion.h1
          {...rise()}
          className="max-w-[14ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]"
        >
          Research that{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            moves markets
          </span>
          .
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70"
        >
          Original, data-led research on the technology, capital, and growth
          shifts shaping enterprise. Free to read. Built to be used.
        </motion.p>

        <motion.div {...rise(2)} className="mt-10 flex flex-wrap items-center gap-[10px]">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`border px-[16px] py-[9px] text-[12px] font-medium uppercase tracking-[1px] transition-colors duration-300 ${
                i === 0
                  ? "border-[#0A1633] bg-[#0A1633] text-white"
                  : "border-[#0A1633]/15 text-[#0A1633]/70 hover:border-[#0A1633]/40 hover:text-[#0A1633]"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[56px]">
        <motion.a
          href="#"
          {...rise()}
          className="group grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] overflow-hidden border border-[#0A1633]/10 bg-white"
        >
          <div className="relative min-h-[280px] lg:min-h-[460px] overflow-hidden bg-[#0A1633]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover opacity-90 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute left-5 top-5 bg-[#2563EB] px-3 py-[6px] text-[10px] font-semibold uppercase tracking-[1.5px] text-white">
              {featured.category}
            </span>
          </div>

          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-medium leading-[1.02] tracking-[-0.035em]">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-[44ch] text-[14px] sm:text-[15px] leading-[1.75] text-[#0A1633]/70">
                {featured.excerpt}
              </p>
            </div>

            <div className="mt-10 flex items-center justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[1.5px] text-[#0A1633]/50">
                {featured.meta}
              </span>
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-[#0A1633]/20 transition-all duration-300 group-hover:bg-[#0A1633] group-hover:text-white">
                <ArrowUpRight size={18} strokeWidth={1.6} />
              </span>
            </div>
          </div>
        </motion.a>
      </section>

      {/* GRID */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="mb-8 flex items-end justify-between border-t border-[#0A1633]/10 pt-7">
          <h3 className="text-[13px] font-semibold uppercase tracking-[2px] text-[#0A1633]/60">
            All Reports
          </h3>
          <span className="text-[13px] tabular-nums text-[#0A1633]/40">
            {String(reports.length).padStart(2, "0")} / {String(reports.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#0A1633]/10">
          {reports.map((r, i) => (
            <motion.a
              href="#"
              key={r.title}
              {...rise(i)}
              className="group flex flex-col bg-[#f7f6f4] p-6 sm:p-7 transition-colors duration-300 hover:bg-white"
            >
              <div className="relative mb-6 h-[180px] overflow-hidden bg-[#0A1633]/5">
                <Image src={r.img} alt={r.title} fill className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]" />
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#2563EB]">
                {r.cat}
              </span>

              <h4 className="mt-3 text-[20px] sm:text-[22px] font-medium leading-[1.12] tracking-[-0.02em]">
                {r.title}
              </h4>

              <p className="mt-3 flex-1 text-[13px] leading-[1.65] text-[#0A1633]/65">
                {r.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-[#0A1633]/10 pt-4">
                <span className="text-[11px] uppercase tracking-[1px] text-[#0A1633]/45">
                  {r.meta}
                </span>
                <ArrowRight size={16} strokeWidth={1.6} className="text-[#0A1633]/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#2563EB]" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}