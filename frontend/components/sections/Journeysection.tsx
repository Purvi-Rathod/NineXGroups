"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0E1B3D";
const ICON = "#2D55D6";
const LINE = "#D5DEF2";
const RING = "#D9E1F1";
const BODY = "#5C6B86";

const STEP = 0.7; // delay between milestones revealing (one section fully opens, then the next)

type IconProps = SVGProps<SVGSVGElement>;

const svgBase = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FlagIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <path d="M12 5v30" />
    <path d="M12 6.5h16l-3.2 4.8 3.2 4.8H12" />
  </svg>
);

const GroupIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <circle cx="20" cy="13" r="3.6" />
    <path d="M13.5 25c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
    <circle cx="10" cy="16" r="2.8" />
    <path d="M5 25c0-2.8 2-4.8 4.6-4.9" />
    <circle cx="30" cy="16" r="2.8" />
    <path d="M35 25c0-2.8-2-4.8-4.6-4.9" />
  </svg>
);

const GlobeIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <circle cx="20" cy="20" r="12" />
    <path d="M8 20h24" />
    <ellipse cx="20" cy="20" rx="5" ry="12" />
    <path d="M10.6 14h18.8M10.6 26h18.8" />
  </svg>
);

const ArrowIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <path d="M8 23c8 0.5 15-3 20-11" />
    <path d="M22 11.5l6.2-0.8-0.4 6.2" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
interface Milestone {
  when: string;
  body: string;
  Icon: ComponentType<IconProps>;
  future?: boolean;
}

const milestones: Milestone[] = [
  {
    when: "2024 — Founded.",
    body: "Pratyush Nayak founds NineXGroup in Indore with co-founder Prabhash Nayak, built on a single conviction: strategy, technology, and execution belong together.",
    Icon: FlagIcon,
  },
  {
    when: "2024–2025 — Building the brands.",
    body: "The group takes shape across enterprise business systems, technology and engineering, sales and customer experience, and growth strategy, with early clients across multiple markets.",
    Icon: GroupIcon,
  },
  {
    when: "2025 — Going multi-brand and multi-market.",
    body: "NineXFold, NineXDevOps, NineXConnect, and NineXScale operate as one connected engine while serving clients across regions.",
    Icon: GlobeIcon,
  },
  {
    when: "Next — Scaling deliberately.",
    body: "We are widening our footprint, deepening platform partnerships, and growing the team, while protecting the speed and quality that got us here.",
    Icon: ArrowIcon,
    future: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Node (circle + icon)                                              */
/* ------------------------------------------------------------------ */
function Node({
  item,
}: {
  item: Milestone;
}) {
  const { Icon } = item;
  return (
    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_-8px_rgba(45,85,214,0.35)] lg:h-[76px] lg:w-[76px] ${
        item.future ? "border border-dashed" : "border"
      }`}
      style={{ borderColor: RING }}
    >
      <Icon className="h-7 w-7 lg:h-8 lg:w-8" style={{ color: ICON }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function JourneySection() {
  const reduce = useReducedMotion();

  const circleAnim = (i: number) => ({
    initial: { opacity: 0, scale: 0.55 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.45, delay: i * STEP, ease: [0.22, 1, 0.36, 1] as const },
  });

  const textAnim = (i: number) => ({
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 },
    transition: { duration: 0.5, delay: i * STEP + 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-[1300px]">
        {/* ---------- Header ---------- */}
        <div className="text-center">
          <h1
              className="
                text-[36px]
                md:text-[44px]
                lg:text-[54px]
                font-medium
                leading-[0.92]
                tracking-[-0.045em]
                text-[#0A1633]
              "
            >
            Our Journey So Far
          </h1>
          <p className="mx-auto mt-3 max-w-[760px] text-[13px] leading-[1.6] text-[#5C6B86] lg:text-[14px]">
            We are deliberately honest about being young. Here is the shape of
            our path since founding, and the direction we are heading.
          </p>
        </div>

        {/* ================= Desktop (horizontal) ================= */}
        <div className="mt-14 hidden md:block">
          {/* icons row */}
          <div className="relative h-[76px]">
            {/* drawn connector line */}
            <motion.span
              className="absolute left-[38px] top-1/2 h-px w-[75%] origin-left -translate-y-1/2"
              style={{ background: LINE }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: milestones.length * STEP, ease: "linear" }}
            />

            {/* dots flowing along the line, one after another */}
            {!reduce && (
              <div className="absolute left-[38px] top-1/2 h-px w-[75%] -translate-y-1/2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full"
                    style={{ background: ICON, boxShadow: `0 0 8px ${ICON}55` }}
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 2.6,
                      times: [0, 0.08, 0.9, 1],
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.9,
                    }}
                  />
                ))}
              </div>
            )}

            {/* circles */}
            <div className="grid h-full grid-cols-4 items-center">
              {milestones.map((m, i) => (
                <motion.div key={i} className="relative z-10 flex justify-start" {...circleAnim(i)}>
                  <Node item={m} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* text row */}
          <div className="mt-7 grid grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div key={i} className="pr-6 lg:pr-10" {...textAnim(i)}>
                <h3 className="text-[15px] font-bold leading-snug text-[#0E1B3D] lg:text-[16px]">
                  {m.when}
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.75] text-[#5C6B86] lg:text-[13px]">
                  {m.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Mobile (vertical) ================= */}
        <div className="mt-10 md:hidden">
          <div className="flex flex-col">
            {milestones.map((m, i) => {
              const isLast = i === milestones.length - 1;
              return (
                <div key={i} className="flex gap-4">
                  {/* rail: circle + connecting line */}
                  <div className="flex flex-col items-center">
                    <motion.div className="z-10" {...circleAnim(i)}>
                      <Node item={m} />
                    </motion.div>
                    {!isLast && (
                      <motion.span
                        className="my-1 w-px flex-1 origin-top"
                        style={{ background: LINE }}
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: false, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: i * STEP + 0.3 }}
                      />
                    )}
                  </div>

                  {/* content */}
                  <motion.div className={isLast ? "pt-2" : "pb-9 pt-2"} {...textAnim(i)}>
                    <h3 className="text-[15px] font-bold leading-snug text-[#0E1B3D]">
                      {m.when}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.7] text-[#5C6B86]">
                      {m.body}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}