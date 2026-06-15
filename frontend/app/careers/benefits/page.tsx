"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeartPulse, GraduationCap, Clock, Laptop, Palmtree, Trophy, Sparkles, Users } from "lucide-react";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const perks = [
  { icon: <HeartPulse size={22} strokeWidth={1.5} />, t: "Health cover", d: "Medical insurance for you, so you can focus on work without worrying about the basics." },
  { icon: <GraduationCap size={22} strokeWidth={1.5} />, t: "Learning budget", d: "A dedicated budget for courses, books, and tools — because your growth is the company's growth." },
  { icon: <Clock size={22} strokeWidth={1.5} />, t: "Flexible hours", d: "We care about output, not clock-watching. Work when you do your sharpest thinking." },
  { icon: <Laptop size={22} strokeWidth={1.5} />, t: "Top-tier gear", d: "The machine and tools you need to do great work — no fighting IT for a decent laptop." },
  { icon: <Palmtree size={22} strokeWidth={1.5} />, t: "Real time off", d: "Generous, genuinely-encouraged leave. Rested people do the best work." },
  { icon: <Trophy size={22} strokeWidth={1.5} />, t: "Performance rewards", d: "When the work wins, you win. Recognition and rewards tied to real impact." },
  { icon: <Users size={22} strokeWidth={1.5} />, t: "Team retreats", d: "We come together to build, celebrate, and reset — the way our anniversary events do." },
  { icon: <Sparkles size={22} strokeWidth={1.5} />, t: "Real ownership", d: "Meaningful work and a real stake in outcomes — not a cog in a machine." },
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
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">Careers · Benefits &amp; Perks</span>
        </div>
        <motion.h1 {...rise()} className="max-w-[18ch] text-[42px] sm:text-[58px] lg:text-[72px] font-medium leading-[0.92] tracking-[-0.045em]">
          Taken care of, so you can do your{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">best work</span>.
        </motion.h1>
        <motion.p {...rise(1)} className="mt-7 max-w-[560px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          We keep it simple and real: the support, tools, and flexibility that let good people do great work — and actually enjoy it.
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] border border-[#0A1633]/10 bg-[#0A1633]/10">
          {perks.map((p, i) => (
            <motion.div key={p.t} {...rise(i)} className="group bg-[#f7f6f4] p-7 sm:p-8 transition-colors duration-300 hover:bg-white">
              <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                {p.icon}
              </span>
              <h3 className="mt-6 text-[20px] font-medium tracking-[-0.02em]">{p.t}</h3>
              <p className="mt-3 text-[13px] leading-[1.7] text-[#0A1633]/65">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}