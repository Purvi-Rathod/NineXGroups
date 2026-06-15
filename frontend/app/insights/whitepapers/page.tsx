"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const papers = [
  { n: "01", title: "The Enterprise Automation Playbook", desc: "A practical framework for mapping, prioritising, and deploying automation across marketing and sales operations.", meta: "PDF · 28 pages" },
  { n: "02", title: "GEO: Winning the Generative Search Era", desc: "How to structure content, build citation authority, and appear inside AI-generated answers.", meta: "PDF · 22 pages" },
  { n: "03", title: "A CFO's Guide to AI ROI", desc: "Modelling the real return on AI initiatives — costs, payback, and the metrics that matter.", meta: "PDF · 19 pages" },
  { n: "04", title: "Designing Conversion-First Funnels", desc: "The psychology and structure behind funnels that convert on emotion, not feature lists.", meta: "PDF · 24 pages" },
  { n: "05", title: "Modern Data Architecture for Scale", desc: "Reference patterns for building data platforms that stay fast, governed, and observable.", meta: "PDF · 31 pages" },
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
            Insights · Whitepapers
          </span>
        </div>

        <motion.h1 {...rise()} className="max-w-[16ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          Frameworks you can{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            actually use
          </span>
          .
        </motion.h1>

        <motion.p {...rise(1)} className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          In-depth, practitioner-grade papers that go beyond opinion — methods,
          models, and reference architectures, free to download.
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="border-t border-[#0A1633]/15">
          {papers.map((p, i) => (
            <motion.div
              key={p.n}
              {...rise(i)}
              className="group grid grid-cols-1 sm:grid-cols-[64px_1fr_auto] items-center gap-5 border-b border-[#0A1633]/15 py-8 transition-colors duration-300 hover:bg-white"
            >
              <div className="flex items-center gap-4">
                <span className="text-[14px] tabular-nums text-[#0A1633]/35">{p.n}</span>
                <FileText size={18} strokeWidth={1.5} className="text-[#2563EB] sm:hidden" />
              </div>

              <div>
                <h2 className="text-[22px] sm:text-[28px] font-medium leading-[1.1] tracking-[-0.025em]">
                  {p.title}
                </h2>
                <p className="mt-2 max-w-[60ch] text-[13px] leading-[1.65] text-[#0A1633]/65">{p.desc}</p>
                <span className="mt-2 inline-block text-[11px] uppercase tracking-[1px] text-[#0A1633]/40">{p.meta}</span>
              </div>

              <a
                href="#"
                className="inline-flex w-fit items-center gap-2 border border-[#0A1633] px-5 py-[11px] text-[12px] font-semibold uppercase tracking-[1px] transition-colors duration-300 group-hover:bg-[#0A1633] group-hover:text-white"
              >
                <Download size={15} strokeWidth={1.8} /> Download
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}