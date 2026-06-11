"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties, ComponentType, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0B1533";
const ACCENT = "#1E4DF5";
const QUOTE = "#98A1B4";
const RULE = "#D8DEEA";

const ORBIT_DUR = 44; // seconds, badges revolution
const DOTS_DUR = 62;
const RING_DUR = 120;

type IconProps = SVGProps<SVGSVGElement>;

const ic = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.9,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const TargetIcon = (props: IconProps) => (
  <svg viewBox="0 0 28 28" {...ic} {...props}>
    <circle cx="13" cy="15" r="8" />
    <circle cx="13" cy="15" r="3.4" />
    <path d="M13 15l8-8" />
    <path d="M17 5.5h4v4" />
  </svg>
);

const ChartIcon = (props: IconProps) => (
  <svg viewBox="0 0 28 28" {...ic} {...props}>
    <path d="M5 22h18" />
    <rect x="6.5" y="13" width="3.4" height="7" rx="1" />
    <rect x="12.4" y="9" width="3.4" height="11" rx="1" />
    <rect x="18.3" y="5" width="3.4" height="15" rx="1" />
  </svg>
);

const PeopleIcon = (props: IconProps) => (
  <svg viewBox="0 0 28 28" {...ic} {...props}>
    <circle cx="10.5" cy="10" r="3.1" />
    <path d="M4.5 21c0-3.3 2.7-5.6 6-5.6s6 2.3 6 5.6" />
    <circle cx="19" cy="11" r="2.5" />
    <path d="M18 15.6c2.6.2 4.5 2.2 4.5 5" />
  </svg>
);

const XLogo = ({ style }: { style?: CSSProperties }) => (
  <svg viewBox="0 0 100 100" style={style} aria-hidden>
    <defs>
      <linearGradient id="nx-x" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3E7BFF" />
        <stop offset="0.55" stopColor="#2A4DE6" />
        <stop offset="1" stopColor="#4322C8" />
      </linearGradient>
    </defs>
    <path
      d="M24 16 L82 84"
      stroke="url(#nx-x)"
      strokeWidth="17"
      strokeLinecap="round"
    />
    <path
      d="M82 16 L24 84"
      stroke="url(#nx-x)"
      strokeWidth="17"
      strokeLinecap="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Orbit                                                             */
/* ------------------------------------------------------------------ */
interface Badge {
  angle: number;
  Icon: ComponentType<IconProps>;
}

const badges: Badge[] = [
  { angle: 32, Icon: TargetIcon },
  { angle: 145, Icon: ChartIcon },
  { angle: 244, Icon: PeopleIcon },
];

const dots = [
  { angle: 318, r: 0.31 },
  { angle: 90, r: 0.5 },
  { angle: 176, r: 0.42 },
  { angle: 24, r: 0.5 },
];

function Ring({ frac, dashed, style }: { frac: number; dashed?: boolean; style?: CSSProperties }) {
  return (
    <div
      className="absolute left-1/2 top-1/2 rounded-full"
      style={{
        width: `calc(var(--s) * ${frac})`,
        height: `calc(var(--s) * ${frac})`,
        transform: "translate(-50%, -50%)",
        border: `1px ${dashed ? "dashed" : "solid"} #E4E9F4`,
        ...style,
      }}
    />
  );
}

function Orbit() {
  const reduce = useReducedMotion();

  const rootStyle = {
    width: "var(--s)",
    height: "var(--s)",
    "--s": "clamp(290px, 82vw, 520px)",
  } as CSSProperties;

  return (
    <div className="relative mx-auto" style={rootStyle}>
      {/* soft glow */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "calc(var(--s) * 0.72)",
          height: "calc(var(--s) * 0.72)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(40,80,230,0.12), rgba(40,80,230,0) 70%)",
            filter: "blur(6px)",
          }}
          animate={reduce ? {} : { opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* concentric rings */}
      <Ring frac={0.62} />
      <Ring frac={0.82} />
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: RING_DUR, repeat: Infinity, ease: "linear" }}
      >
        <Ring frac={1} dashed />
      </motion.div>

      {/* central core */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "calc(var(--s) * 0.5)",
          height: "calc(var(--s) * 0.5)",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.div
          className="flex h-full w-full items-center justify-center rounded-full bg-white"
          style={{
            boxShadow:
              "0 34px 70px -24px rgba(40,70,180,0.28), 0 12px 26px -14px rgba(0,0,0,0.08), inset 0 2px 2px #ffffff",
          }}
          animate={reduce ? {} : { y: [0, -6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <XLogo style={{ width: "calc(var(--s) * 0.22)", height: "calc(var(--s) * 0.22)" }} />
        </motion.div>
      </div>

      {/* revolving badges */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { rotate: 360 }}
        transition={{ duration: ORBIT_DUR, repeat: Infinity, ease: "linear" }}
      >
        {badges.map((b, i) => {
          const Icon = b.Icon;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                width: 0,
                height: 0,
                transform: `rotate(${b.angle}deg) translateY(calc(var(--s) * -0.41))`,
              }}
            >
              <motion.div
                className="flex items-center justify-center rounded-full bg-white"
                style={{
                  position: "absolute",
                  left: "calc(var(--s) * -0.062)",
                  top: "calc(var(--s) * -0.062)",
                  width: "calc(var(--s) * 0.124)",
                  height: "calc(var(--s) * 0.124)",
                  color: ACCENT,
                  boxShadow:
                    "0 14px 26px -12px rgba(40,70,180,0.3), 0 4px 10px -6px rgba(0,0,0,0.08)",
                }}
                animate={reduce ? { rotate: -b.angle } : { rotate: [-b.angle, -b.angle - 360] }}
                transition={reduce ? undefined : { duration: ORBIT_DUR, repeat: Infinity, ease: "linear" }}
              >
                <Icon style={{ width: "calc(var(--s) * 0.058)", height: "calc(var(--s) * 0.058)" }} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* drifting marker dots */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? {} : { rotate: -360 }}
        transition={{ duration: DOTS_DUR, repeat: Infinity, ease: "linear" }}
      >
        {dots.map((d, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transform: `rotate(${d.angle}deg) translateY(calc(var(--s) * ${-d.r}))`,
            }}
          >
            <span
              className="absolute rounded-full"
              style={{
                left: "calc(var(--s) * -0.011)",
                top: "calc(var(--s) * -0.011)",
                width: "calc(var(--s) * 0.022)",
                height: "calc(var(--s) * 0.022)",
                background: ACCENT,
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function MissionSection() {
  return (
    <section className="bg-gradient-to-br from-[#FBFCFF] to-[#F1F4FC] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* ---------------- Left ---------------- */}
        <div className="order-2 lg:order-1">
          <motion.div className="flex items-center gap-3" {...reveal(0)}>
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#1E4DF5]">
              Our Purpose
            </span>
            <span className="h-px w-9" style={{ background: ACCENT }} />
          </motion.div>

          <motion.h2
            className="mt-5 text-[36px] font-medium leading-[0.92] tracking-[-0.045em] text-[#0A1633] md:text-[44px] lg:text-[54px]"
            {...reveal(0.06)}
          >
            Our <span style={{ color: ACCENT }}>Mission</span>
          </motion.h2>

          <motion.span
            className="mt-5 block h-[5px] w-12 rounded-full"
            style={{ background: ACCENT }}
            {...reveal(0.12)}
          />

          <motion.p
            className="mt-8 max-w-[600px] text-[16px] leading-[1.5] sm:text-[20px] lg:text-[22px]"
            style={{ color: INK }}
            {...reveal(0.18)}
          >
            To give enterprises the systems, technology, and strategy they need
            to compete and win in a digital economy, delivered as{" "}
            <span style={{ color: ACCENT, fontWeight: 600 }}>one partnership</span>{" "}
            that is accountable to{" "}
            <span style={{ color: ACCENT, fontWeight: 600 }}>one set of results</span>.
          </motion.p>

          {/* quote + statement */}
          <motion.div className="relative mt-11 max-w-[600px]" {...reveal(0.26)}>
            {/* quote mark */}
            <svg
              width="40"
              height="32"
              viewBox="0 0 40 32"
              fill={ACCENT}
              className="absolute left-0 top-0"
              aria-hidden
            >
              <path d="M0 32V17.5C0 7 6.4 1 16 0v6.4C10.2 7.3 7.4 10.6 7.4 15H14v17z" />
              <path d="M21 32V17.5C21 7 27.4 1 37 0v6.4c-5.8.9-8.6 4.2-8.6 8.6H35v17z" />
            </svg>

            {/* vertical rule */}
            <span
              className="absolute left-[7px] top-[64px] bottom-0 w-px"
              style={{ background: RULE }}
            />

            <p
              className="pl-[38px] text-[15px] leading-[1.75]"
              style={{ color: QUOTE }}
            >
              Read that again, because the second half matters as much as the
              first. Plenty of firms can give you systems and strategy. The
              difference is the single line of accountability.
            </p>

            <div className="relative mt-7 pl-[58px]">
              <span
                className="absolute left-[2px] top-[8px] h-[11px] w-[11px] rounded-full ring-4 ring-[#F4F6FC]"
                style={{ background: ACCENT }}
              />
              <p className="text-[15px] font-bold leading-[1.5]" style={{ color: INK }}>
                When you work with{" "}
                <span style={{ color: ACCENT }}>NineXGroup,</span> there is one
                group answerable for whether the thing actually worked.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ---------------- Right ---------------- */}
        <div className="order-1 flex justify-center lg:order-2">
          <Orbit />
        </div>
      </div>
    </section>
  );
}