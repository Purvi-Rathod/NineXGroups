"use client";

import { motion, useReducedMotion } from "framer-motion";

const FONT = { fontFamily: "'Inter', sans-serif" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const values = [
  ["01", "Ownership over orders", "We hire people who take responsibility without being asked. You own the outcome, not just the task — and we trust you to make the call."],
  ["02", "Craft is non-negotiable", "Good enough isn't. We sweat pixels, copy, and code because the details are what separate work people tolerate from work people love."],
  ["03", "Speed with intent", "We move fast, but never carelessly. Velocity comes from cutting the right corners and removing friction, not from rushing."],
  ["04", "Candor, kindly", "We say the real thing — to clients and to each other — early and directly. Honesty delivered with respect beats polite silence every time."],
  ["05", "Obsess over the client", "Their win is our scoreboard. We think like owners of their business, not vendors filling a brief."],
  ["06", "Always be growing", "The day you stop learning is the day you stall. We invest in growth and expect everyone to keep stretching."],
];

export default function Page() {
  const reduce = useReducedMotion();
  const rise = (i = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.6, ease: EASE, delay: i * 0.05 },
  });

  return (
    <main style={FONT} className="w-full overflow-x-hidden bg-[#f3f3f1] text-[#0A1633]">
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pt-[72px] sm:pt-[96px] pb-[40px]">
        <div className="flex items-center gap-[10px] mb-7">
          <span className="h-[7px] w-[7px] bg-[#2563EB]" />
          <span className="text-[11px] font-medium uppercase tracking-[3px] text-[#0A1633]/60">Careers · Culture &amp; Values</span>
        </div>
        <motion.h1 {...rise()} className="max-w-[16ch] text-[42px] sm:text-[60px] lg:text-[76px] font-medium leading-[0.92] tracking-[-0.045em]">
          How we work, what we{" "}
          <span className="bg-gradient-to-r from-[#0A1633] to-[#2563EB] bg-clip-text text-transparent">stand for</span>.
        </motion.h1>
        <motion.p {...rise(1)} className="mt-7 max-w-[600px] text-[15px] sm:text-[16px] leading-[1.7] text-[#0A1633]/70">
          Culture isn&lsquo;t a poster on the wall — it&lsquo;s the set of defaults we fall back on when no one&apos;s watching. These are ours.
        </motion.p>
      </section>

      {/* PULL QUOTE */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[64px]">
        <motion.blockquote {...rise()} className="max-w-[24ch] text-[28px] sm:text-[40px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A1633]">
          <span className="text-[#2563EB]">&ldquo;</span>The work we&apos;re proudest of came from people who acted like owners.<span className="text-[#2563EB]">&rdquo;</span>
        </motion.blockquote>
      </section>

      {/* VALUES */}
      <section className="mx-auto w-full max-w-[1220px] px-5 sm:px-6 lg:px-8 pb-[100px]">
        <div className="border-t border-[#0A1633]/15">
          {values.map((v, i) => (
            <motion.div key={v[0]} {...rise(i)} className="group grid grid-cols-[44px_1fr] sm:grid-cols-[90px_360px_1fr] items-start gap-5 border-b border-[#0A1633]/15 py-9 transition-colors duration-300 hover:bg-white">
              <span className="text-[16px] tabular-nums text-[#0A1633]/30">{v[0]}</span>
              <h2 className="text-[24px] sm:text-[32px] font-medium leading-[1.06] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#2563EB]">{v[1]}</h2>
              <p className="text-[14px] leading-[1.75] text-[#0A1633]/65 sm:pt-1">{v[2]}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}