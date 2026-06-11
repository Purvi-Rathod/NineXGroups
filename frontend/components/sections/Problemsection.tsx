"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const ACCENT = "#1B5BFF";
const TILE = "#EDF1FF";

type IconProps = SVGProps<SVGSVGElement>;

const svgBase = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Two people + a left arrow → the handoff */
const HandoffIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <circle cx="16" cy="12" r="4" />
    <path d="M9 23.8c0-3.9 3.1-6.6 7-6.6" />
    <circle cx="26" cy="15.4" r="3.6" />
    <path d="M19 27.4c0-3.8 3.1-6.3 7-6.3s7 2.5 7 6.3" />
    <path d="M17 32H8.2" />
    <path d="M12 28l-4 4 4 4" />
  </svg>
);

/* Shield with a person → accountability */
const ShieldUserIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <path d="M20 4.6l12.8 4.1v8.7c0 8.3-5.5 14-12.8 16.3C12.7 31.4 7.2 25.7 7.2 17.4V8.7z" />
    <circle cx="20" cy="16.4" r="3.5" />
    <path d="M13.6 27.4c0-3.5 2.9-6 6.4-6s6.4 2.5 6.4 6" />
  </svg>
);

/* Document with a circled X → shelf-ware */
const FileXIcon = (props: IconProps) => (
  <svg {...svgBase} {...props}>
    <path d="M11 4.6h11.4L31 13v19a3.4 3.4 0 0 1-3.4 3.4H11A3.4 3.4 0 0 1 7.6 32V8A3.4 3.4 0 0 1 11 4.6z" />
    <path d="M22.4 4.6V13H31" />
    <circle cx="29.6" cy="29.6" r="6.4" fill={TILE} />
    <circle cx="29.6" cy="29.6" r="6.4" />
    <path d="M27.3 27.3l4.6 4.6M31.9 27.3l-4.6 4.6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
interface Problem {
  num: string;
  title: string;
  body: string;
  Icon: ComponentType<IconProps>;
}

const problems: Problem[] = [
  {
    num: "01",
    title: "The handoff tax.",
    body: "Every time work passes from a strategy firm to a systems integrator to a development shop, something is lost in translation and time and money are spent re-explaining the same thing. We removed the handoffs by putting all of it under one roof.",
    Icon: HandoffIcon,
  },
  {
    num: "02",
    title: "The accountability gap.",
    body: "When three vendors share a project, no single one truly owns the outcome. If the result disappoints, each can credibly blame the others. We took that excuse away by owning the whole thing.",
    Icon: ShieldUserIcon,
  },
  {
    num: "03",
    title: "The shelf-ware problem.",
    body: "Strategy decks that never ship and platforms that nobody adopts are the usual graveyard of transformation budgets. Because our strategists and engineers work together, we only recommend what we can actually build and make stick.",
    Icon: FileXIcon,
  },
];

/* ------------------------------------------------------------------ */
/*  Animated dashed connector                                         */
/* ------------------------------------------------------------------ */
function Connector() {
  const reduce = useReducedMotion();
  const travellers = [0, 1, 2];

  return (
    <div
      aria-hidden
      className="relative hidden h-3 w-[134px] shrink-0 items-center sm:flex md:w-[160px] lg:w-[200px]"
    >
      {/* static dashed track */}
      <div
        className="absolute left-0 right-[12px] top-1/2 h-px -translate-y-1/2"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, #A9BBE6 0 5px, transparent 5px 11px)",
        }}
      />

      {/* dots flowing toward the node, one after another */}
      {travellers.map((i) => (
        <motion.span
          key={i}
          className="absolute top-1/2 h-[7px] w-[7px] -translate-y-1/2 rounded-full"
          style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}55` }}
          initial={{ left: "0%", opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0 }
              : { left: ["0%", "90%"], opacity: [0, 1, 1, 0] }
          }
          transition={{
            duration: 1.9,
            times: [0, 0.12, 0.82, 1],
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.63,
          }}
        />
      ))}

      {/* end node with a soft pulse */}
      <span className="absolute right-0 top-1/2 -translate-y-1/2">
        {!reduce && (
          <motion.span
            className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: ACCENT }}
            animate={{ scale: [1, 2.4], opacity: [0.45, 0] }}
            transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span
          className="relative block h-[10px] w-[10px] rounded-full"
          style={{ background: ACCENT }}
        />
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card                                                              */
/* ------------------------------------------------------------------ */
function ProblemCard({ item, index }: { item: Problem; index: number }) {
  const { Icon } = item;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col rounded-[18px] border border-[#ECEFF6] bg-white p-6 lg:p-8"
    >
      <div
        className="flex h-[68px] w-[68px] items-center justify-center rounded-[18px] lg:h-[74px] lg:w-[74px]"
        style={{ background: TILE }}
      >
        <Icon className="h-9 w-9" style={{ color: ACCENT }} />
      </div>

      <div className="mt-7 flex items-center gap-2.5">
        <span
          className="flex h-[34px] min-w-[32px] items-center justify-center rounded-[6px] px-2 text-[12px] font-bold tracking-wide text-white"
          style={{ background: ACCENT }}
        >
          {item.num}
        </span>
        <h3 className="text-[18px] font-bold tracking-[-0.01em] text-[#0A1633] lg:text-[20px]">
          {item.title}
        </h3>
      </div>

      <p className=" text-[14px] leading-[1.7] text-[#51607A] lg:text-[15.5px] pl-10">
        {item.body}
      </p>

      <div className="mt-auto pt-8">
        <div className="border-t border-[#EEF1F8]" />
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function ProblemSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-[1300px]">
        {/* ---------- Header ---------- */}
        <div className="flex items-start gap-4 sm:gap-2 lg:gap-4">
          <div className="flex items-center pt-1 sm:pt-1.5 lg:pt-2.5">
            <Connector />
          </div>

          <div className="min-w-0 flex-1">
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
                The Problem We Exist To Solve
            </h1>
            <p className="mt-3.5 max-w-[700px] text-[15px] leading-[1.55] text-[#5B6B86] lg:mt-4 lg:text-[18px]">
              The traditional way enterprises buy transformation is broken in
              three predictable ways, and we built the company specifically to
              fix each one.
            </p>
          </div>
        </div>

        {/* ---------- Cards ---------- */}
        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-11 lg:gap-6">
          {problems.map((item, i) => (
            <ProblemCard key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}