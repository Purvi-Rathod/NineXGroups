"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const cases = [
  { client: "Global Automotive OEM", result: "1M+", label: "vehicles connected", title: "Building a software-defined vehicle platform", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop", tag: "Automotive" },
  { client: "Regional Bank · $50B", result: "5 min", label: "account opening, from 2 weeks", title: "A cloud-native digital banking turnaround", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop", tag: "Fintech" },
  { client: "$10B Omnichannel Retailer", result: "300%", label: "online revenue growth", title: "Unifying store and digital into one experience", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop", tag: "Retail" },
  { client: "$5B Aerospace Manufacturer", result: "$80M", label: "annual savings", title: "Predictive maintenance across the line", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop", tag: "Manufacturing" },
  { client: "Series B SaaS", result: "3X", label: "revenue, year-over-year", title: "From monolith to product-led growth", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop", tag: "Technology" },
  { client: "Blue Tree Health", result: "+", label: "conversion on every funnel", title: "A premium telehealth funnel, rebuilt", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop", tag: "Healthcare" },
];

export default function Page() {
  const reduce = useReducedMotion();
  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: EASE, delay: i * 0.06 },
  });

  return (
    <main style={FONT} className="w-full overflow-x-hidden bg-[#f3f3f1] text-[#0A1633]">
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[48px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
            Insights · Case Studies
          </span>
        </div>

        <motion.h1 {...rise()} className="max-w-[15ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          Proof, not{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            promises
          </span>
          .
        </motion.h1>

        <motion.p {...rise(1)} className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          Real engagements, real outcomes. Each study breaks down the challenge,
          what we built, and the measurable result it delivered.
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#0A1633]/10">
          {cases.map((c, i) => (
            <motion.a
              href="#"
              key={c.title}
              {...rise(i)}
              className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#0A1633] p-7 sm:p-10 text-white"
            >
              <Image src={c.img} alt={c.client} fill className="object-cover opacity-30 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633] via-[#0A1633]/70 to-[#0A1633]/30" />

              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[2px] text-white/70">
                  {c.tag}
                </span>
                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:bg-white group-hover:text-[#0A1633]">
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </span>
              </div>

              <div className="relative">
                <p className="text-[12px] uppercase tracking-[1.5px] text-white/60">{c.client}</p>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-[56px] sm:text-[72px] font-medium leading-[0.85] tracking-[-0.04em] bg-gradient-to-r from-white to-[#7db5ff] bg-clip-text text-transparent">
                    {c.result}
                  </span>
                  <span className="mb-2 max-w-[160px] text-[12px] leading-[1.3] text-white/70">{c.label}</span>
                </div>
                <h2 className="mt-5 max-w-[26ch] text-[20px] sm:text-[24px] font-medium leading-[1.15] tracking-[-0.02em]">
                  {c.title}
                </h2>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}