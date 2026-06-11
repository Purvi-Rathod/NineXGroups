"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0A1633";
const ACCENT = "#2348F2";
const BODY = "#566179";
const QUOTE = "#7C879D";
const HAIR = "#E8ECF6";

type IconProps = SVGProps<SVGSVGElement>;

const ic = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const HandshakeIcon = (props: IconProps) => (
  <svg viewBox="0 0 40 40" {...ic} {...props}>
    <path d="M20 15l-3-2.3a3.3 3.3 0 0 0-3.8-.1L6 17v8l3.5 3.5" />
    <path d="M20 15l3-2.3a3.3 3.3 0 0 1 3.8-.1L34 17v8l-3.5 3.5" />
    <path d="M9.5 25.5l4.6 4.6a2 2 0 0 0 2.8 0" />
    <path d="M16.5 30l2.8 2.8a2 2 0 0 0 2.8 0l7.4-7.3" />
    <path d="M15 23l3.5 3.5" />
  </svg>
);

const PuzzleIcon = (props: IconProps) => (
  <svg viewBox="0 0 36 36" {...ic} {...props}>
    <path d="M9 9h6.2v-.8a2.8 2.8 0 0 1 5.6 0V9H27v6.2h.8a2.8 2.8 0 0 1 0 5.6H27V27h-6.2v.8a2.8 2.8 0 0 1-5.6 0V27H9z" />
  </svg>
);

const TrophyIcon = (props: IconProps) => (
  <svg viewBox="0 0 40 40" {...ic} {...props}>
    <path d="M13 8h14v6.5a7 7 0 0 1-14 0z" />
    <path d="M13 10.5H8.5a3 3 0 0 0 3.4 3.2" />
    <path d="M27 10.5h4.5a3 3 0 0 1-3.4 3.2" />
    <path d="M20 21.5V26" />
    <path d="M16.5 30h7l-.6-4h-5.8z" />
    <path d="M14.5 32h11" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Hero visual                                                       */
/* ------------------------------------------------------------------ */
function VisionHero() {
  const reduce = useReducedMotion();

  return (
    <svg viewBox="0 0 720 660" className="h-auto w-full max-w-[660px]" role="img" aria-label="NineXGroup vision">
      <defs>
        <radialGradient id="vh-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#C9D4FA" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#C9D4FA" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vh-xa" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6E8CFF" />
          <stop offset="1" stopColor="#2C49E6" />
        </linearGradient>
        <linearGradient id="vh-xb" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3E59F2" />
          <stop offset="1" stopColor="#241BB6" />
        </linearGradient>
        <linearGradient id="vh-podtop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EEF2FB" />
        </linearGradient>
        <linearGradient id="vh-podside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7ECF8" />
          <stop offset="1" stopColor="#D7DEEF" />
        </linearGradient>
      </defs>

      {/* radar glow + static rings */}
      <circle cx="400" cy="330" r="300" fill="url(#vh-glow)" />
      {[160, 245, 330, 415].map((r, i) => (
        <circle
          key={r}
          cx="400"
          cy="330"
          r={r}
          fill="none"
          stroke="#D7DEF1"
          strokeOpacity={0.85 - i * 0.16}
        />
      ))}

      {/* pulsing sonar rings */}
      {!reduce &&
        [0, 1].map((i) => (
          <motion.circle
            key={i}
            cx="400"
            cy="330"
            fill="none"
            stroke={ACCENT}
            strokeWidth={1.2}
            initial={{ r: 160, opacity: 0 }}
            animate={{ r: [160, 415], opacity: [0.3, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeOut", delay: i * 2.1 }}
          />
        ))}

      {/* mountains */}
      <path
        d="M150 470 L250 360 L320 430 L400 330 L470 430 L560 380 L660 470 Z"
        fill="#E6EBF5"
      />
      <path
        d="M210 478 L300 400 L370 460 L455 392 L540 470 Z"
        fill="#DCE3F1"
        opacity="0.8"
      />

      {/* podium */}
      <ellipse cx="400" cy="540" rx="186" ry="26" fill="#000" opacity="0.05" />
      <path d="M236 500 a164 36 0 0 0 328 0 v22 a164 36 0 0 1 -328 0 z" fill="url(#vh-podside)" />
      <ellipse cx="400" cy="500" rx="164" ry="36" fill="url(#vh-podtop)" />
      <ellipse cx="400" cy="500" rx="164" ry="36" fill="none" stroke="#E2E8F5" />

      {/* floating X */}
      <motion.g
        animate={reduce ? {} : { y: [0, -9, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M318 262 l92 132 -34 24 -92 -132 z" fill="url(#vh-xa)" />
        <path d="M482 262 l-176 252 34 24 176 -252 z" fill="url(#vh-xb)" />
        <path d="M318 262 l92 132 -16 11 -76 -109 z" fill="#fff" opacity="0.12" />
      </motion.g>

      {/* trajectory */}
      <path
        d="M250 410 Q 392 296 556 286"
        fill="none"
        stroke="#9FB3EE"
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
      <path d="M548 278 l12 8 -9 11" fill="none" stroke="#8AA0E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* start dot */}
      <circle cx="250" cy="410" r="5.5" fill={ACCENT} stroke="#fff" strokeWidth="2.5" />
      {/* travelling dot */}
      {!reduce && (
        <circle r="5" fill={ACCENT} opacity="0">
          <animateMotion dur="4.6s" repeatCount="indefinite" path="M250 410 Q 392 296 556 286" />
          <animate
            attributeName="opacity"
            dur="4.6s"
            repeatCount="indefinite"
            values="0;1;1;0"
            keyTimes="0;0.12;0.85;1"
          />
        </circle>
      )}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                          */
/* ------------------------------------------------------------------ */
interface Feature {
  title: string;
  body: string;
  Icon: ComponentType<IconProps>;
}

const features: Feature[] = [
  { title: "Trusted Partner", body: "We earn trust through outcomes, not size or noise.", Icon: HandshakeIcon },
  { title: "Unified Advantage", body: "Strategy, technology, and execution—one team, one mindset.", Icon: PuzzleIcon },
  { title: "Reputation-Driven", body: "We build a reputation for solving the problems that matter most.", Icon: TrophyIcon },
];

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function VisionSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-[#FCFDFF] via-white to-[#F2F5FC] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-[1340px]">
        {/* ---------- top: text + hero ---------- */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* left */}
          <div>
            <motion.div className="flex items-center gap-3" {...reveal(0)}>
              <span className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: INK }}>
                Our Direction
              </span>
              <span className="h-px w-9" style={{ background: ACCENT }} />
            </motion.div>

            <motion.h2
              className="mt-5 text-[36px] font-medium leading-[0.92] tracking-[-0.045em] text-[#0A1633] md:text-[44px] lg:text-[54px]"
              {...reveal(0.05)}
            >
              Our{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(118deg,#4B6BFF 8%,#2A45EC 52%,#1A24C4 100%)",
                }}
              >
                Vision
              </span>
            </motion.h2>

            <motion.span
              className="mt-5 block h-[5px] w-16 rounded-full"
              style={{ backgroundImage: "linear-gradient(90deg,#4B6BFF,#1A24C4)" }}
              {...reveal(0.1)}
            />

            <motion.p
              className="mt-7 max-w-[540px] text-[19px] font-semibold leading-[1.45] sm:text-[21px]"
              style={{ color: INK }}
              {...reveal(0.16)}
            >
              To become the partner{" "}
              <span style={{ color: ACCENT }}>enterprises trust most for transformation</span>.
            </motion.p>

            <motion.p
              className="mt-4 max-w-[500px] text-[15.5px] leading-[1.7]"
              style={{ color: BODY }}
              {...reveal(0.22)}
            >
              Not because we are the biggest, but because of the value we create
              when strategy, technology, and execution come from the same place.
            </motion.p>

            {/* quote */}
            <motion.div className="mt-9 flex gap-5" {...reveal(0.28)}>
              <div
                className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
                style={{ background: "#EDF1FB" }}
              >
                <svg width="26" height="20" viewBox="0 0 40 32" fill={ACCENT} aria-hidden>
                  <path d="M0 32V17.5C0 7 6.4 1 16 0v6.4C10.2 7.3 7.4 10.6 7.4 15H14v17z" />
                  <path d="M21 32V17.5C21 7 27.4 1 37 0v6.4c-5.8.9-8.6 4.2-8.6 8.6H35v17z" />
                </svg>
              </div>
              <p className="self-center text-[15px] leading-[1.7]" style={{ color: QUOTE }}>
                We are not chasing a headcount number or a logo on a billboard.
                We are chasing a reputation:
              </p>
            </motion.div>

            {/* statement */}
            <motion.div className="relative mt-7 max-w-[560px] pl-6" {...reveal(0.34)}>
              <span
                className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                style={{ background: ACCENT }}
              />
              <p className="text-[17.5px] font-semibold leading-[1.55]" style={{ color: INK }}>
                that when a serious organization has a hard problem,{" "}
                <span style={{ color: ACCENT }}>NineXGroup</span> is the name that
                comes up because{" "}
                <span style={{ color: ACCENT }}>we are the ones who actually deliver</span>.
              </p>
            </motion.div>
          </div>

          {/* right hero */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <VisionHero />
          </motion.div>
        </div>

        {/* ---------- feature row ---------- */}
        <div className="mt-14 grid gap-y-10 border-t pt-12 md:grid-cols-3" style={{ borderColor: HAIR }}>
          {features.map((f, i) => {
            const Icon = f.Icon;
            return (
              <motion.div
                key={f.title}
                className={`flex gap-5 ${i > 0 ? "md:border-l md:pl-10" : "md:pr-10"}`}
                style={i > 0 ? { borderColor: HAIR } : undefined}
                {...reveal(0.1 * i)}
              >
                <div
                  className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full"
                  style={{ background: "#EEF2FB", color: ACCENT }}
                >
                  <Icon className="h-[30px] w-[30px]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[19px] font-bold tracking-[-0.01em]" style={{ color: INK }}>
                    {f.title}
                  </h3>
                  <div className="mt-3 h-px w-full" style={{ background: HAIR }} />
                  <p className="mt-3 text-[14.5px] leading-[1.65]" style={{ color: BODY }}>
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}