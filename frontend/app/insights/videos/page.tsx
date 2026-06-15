"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, Calendar } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const featured = {
  title: "Inside Enterprise AI: From Pilot to Production",
  desc: "A 45-minute session on the operating model that turns AI experiments into deployed, revenue-generating systems.",
  meta: "Webinar · On demand · 45 min",
  img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1600&auto=format&fit=crop",
};

const items = [
  { type: "Video", title: "Building a software-defined vehicle", meta: "12 min", img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop", live: false },
  { type: "Webinar", title: "GEO & the future of search", meta: "Apr 18 · Live", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop", live: true },
  { type: "Video", title: "Designing funnels that convert", meta: "9 min", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop", live: false },
  { type: "Webinar", title: "Modern data architecture, explained", meta: "May 02 · Live", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", live: true },
  { type: "Video", title: "Inside a digital banking rebuild", meta: "15 min", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop", live: false },
  { type: "Video", title: "Smart factory in 8 minutes", meta: "8 min", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop", live: false },
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
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">
            Insights · Videos &amp; Webinars
          </span>
        </div>

        <motion.h1 {...rise()} className="max-w-[15ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          Watch, learn,{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">
            apply
          </span>
          .
        </motion.h1>
      </section>

      {/* FEATURED PLAYER */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[56px]">
        <motion.a href="#" {...rise()} className="group relative block min-h-[320px] sm:min-h-[460px] overflow-hidden bg-[#0A1633] text-white">
          <Image src={featured.img} alt={featured.title} fill className="object-cover opacity-55 transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1633] via-[#0A1633]/50 to-transparent" />

          <div className="relative flex h-full flex-col justify-between p-7 sm:p-10 lg:p-12 min-h-[320px] sm:min-h-[460px]">
            <span className="w-fit bg-[#2563EB] px-3 py-[6px] text-[10px] font-semibold uppercase tracking-[1.5px]">
              Featured Webinar
            </span>

            <div className="flex items-end justify-between gap-6">
              <div>
                <h2 className="max-w-[20ch] text-[28px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.02] tracking-[-0.035em]">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.7] text-white/75">{featured.desc}</p>
                <span className="mt-5 inline-block text-[11px] uppercase tracking-[1.5px] text-white/60">{featured.meta}</span>
              </div>

              <span className="hidden sm:flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-white text-[#0A1633] transition-transform duration-300 group-hover:scale-110">
                <Play size={26} strokeWidth={1.6} className="ml-1" fill="currentColor" />
              </span>
            </div>
          </div>
        </motion.a>
      </section>

      {/* GRID */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
          {items.map((v, i) => (
            <motion.a href="#" key={v.title} {...rise(i)} className="group flex flex-col">
              <div className="relative mb-4 h-[200px] overflow-hidden bg-[#0A1633]">
                <Image src={v.img} alt={v.title} fill className="object-cover opacity-85 transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white/90 text-[#0A1633] transition-transform duration-300 group-hover:scale-110">
                    <Play size={18} className="ml-0.5" fill="currentColor" />
                  </span>
                </span>
                {v.live && (
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 bg-[#2563EB] px-2.5 py-[5px] text-[10px] font-semibold uppercase tracking-[1px] text-white">
                    <Calendar size={11} /> Live
                  </span>
                )}
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-[2px] text-[#2563EB]">{v.type}</span>
              <h3 className="mt-2 text-[19px] font-medium leading-[1.18] tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#2563EB]">
                {v.title}
              </h3>
              <span className="mt-3 text-[11px] uppercase tracking-[1px] text-[#0A1633]/45">{v.meta}</span>
            </motion.a>
          ))}
        </div>
      </section>
    </main>
  );
}