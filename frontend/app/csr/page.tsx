"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens — NineXGroup brand + CSR pillar accents                    */
/* ------------------------------------------------------------------ */
const INK = "#0B1A3A";
const BODY = "rgba(11,26,58,0.70)";
const MUTE = "rgba(11,26,58,0.45)";

const C = {
  people: "#1959FA", // brand blue
  communities: "#0E9C8A", // CSR accent — teal
  environment: "#1F9D55", // CSR accent — green
  governance: "#6B4FD6", // CSR accent — purple
};

/** Brand-blue → teal sustainability gradient used for highlights/CTAs on this page */
const CSR_GRADIENT = "linear-gradient(120deg,#1959FA,#0E9C8A)";

/* default online imagery — swap via props */
const IMG = {
  building:
    "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1400&auto=format&fit=crop",
  people:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  communities:
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
  environment:
    "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
  governance:
    "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop",
  forest:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop",
  plant:
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=800&auto=format&fit=crop",
};

type IconProps = SVGProps<SVGSVGElement>;
const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const People = (p: IconProps) => (
  <svg {...ic} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 6.2a3 3 0 0 1 0 5.6" />
    <path d="M16.5 14.2c2.3.4 4 2.3 4 4.8" />
  </svg>
);
const Leaf = (p: IconProps) => (
  <svg {...ic} {...p}>
    <path d="M5 19c-1-7 4-13 15-13 0 11-6 15-13 14" />
    <path d="M5 19c2-5 5-7 9-8" />
  </svg>
);
const ShieldI = (p: IconProps) => (
  <svg {...ic} {...p}>
    <path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const Check = (p: IconProps) => (
  <svg {...ic} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8.5 12l2.5 2.5 5-5" />
  </svg>
);
const Book = (p: IconProps) => (
  <svg {...ic} {...p}>
    <path d="M12 6c-2-1.4-5-1.6-7.5-1.2v13C7 17.4 10 17.6 12 19" />
    <path d="M12 6c2-1.4 5-1.6 7.5-1.2v13C17 17.4 14 17.6 12 19" />
    <path d="M12 6v13" />
  </svg>
);
const Arrow = (p: IconProps) => (
  <svg {...ic} {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
function Photo({ src, className }: { src: string; className?: string }) {
  return (
    <div className={`group overflow-hidden ${className ?? ""}`}>
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
        loading="lazy"
      />
    </div>
  );
}

function Pill({
  text,
  color,
  light = false,
}: {
  text: string;
  color: string;
  light?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] ${
        light
          ? "border border-white/25 bg-white/10 text-white/90 backdrop-blur-sm"
          : "border border-[#E2E8F6] bg-white"
      }`}
      style={light ? undefined : { color }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: light ? "#7FE3B0" : color }}
      />{" "}
      {text}
    </span>
  );
}

type Bullet = { lead: string; rest: string };
function Checklist({ items, color }: { items: Bullet[]; color: string }) {
  return (
    <ul className="space-y-4">
      {items.map((b, i) => (
        <motion.li
          key={i}
          className="flex gap-3.5"
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <span
            className="mt-[1px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full"
            style={{ background: `${color}14` }}
          >
            <Check className="h-[15px] w-[15px]" style={{ color }} />
          </span>
          <p
            className="self-center text-[14px] sm:text-[15px] leading-[1.65] tracking-[-0.01em]"
            style={{ color: BODY }}
          >
            <span className="font-semibold" style={{ color: INK }}>
              {b.lead}
            </span>{" "}
            {b.rest}
          </p>
        </motion.li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const pillars = [
  {
    Icon: People,
    title: "Our People",
    color: C.people,
    body: "Building a workplace where talent grows, thrives, and feels they belong.",
  },
  {
    Icon: People,
    title: "Our Communities",
    color: C.communities,
    body: "Investing in education, skills, and causes that strengthen the communities we're part of.",
  },
  {
    Icon: Leaf,
    title: "Our Environment",
    color: C.environment,
    body: "Operating responsibly today while building a more sustainable tomorrow.",
  },
  {
    Icon: ShieldI,
    title: "Our Governance",
    color: C.governance,
    body: "Upholding the highest standards of integrity, security, and accountability.",
  },
];

const peopleB: Bullet[] = [
  {
    lead: "Merit over politics.",
    rest: "Quality of work is the deciding factor.",
  },
  {
    lead: "Real investment in growth.",
    rest: "Learning and skills that create long-term careers.",
  },
  {
    lead: "Fair and transparent.",
    rest: "Pay equity and fair practices, built in as we scale.",
  },
  {
    lead: "A workplace people can belong to.",
    rest: "Be yourself, contribute, and do your best work.",
  },
];
const commB: Bullet[] = [
  {
    lead: "Skills and education.",
    rest: "Technology and digital skills education for students and early-career talent.",
  },
  {
    lead: "Support for good causes.",
    rest: "Pro-bono and discounted work for nonprofits and mission-driven organizations.",
  },
  {
    lead: "Growing local talent.",
    rest: "Active investment in India's technology talent, starting in our own region.",
  },
];
const envB: Bullet[] = [
  {
    lead: "Low-footprint operations.",
    rest: "Running lean and responsibly as we expand.",
  },
  {
    lead: "Digital-first by design.",
    rest: "Paperless, cloud-based ways of working built into how we run.",
  },
  {
    lead: "Measurable commitments over time.",
    rest: "A clear path toward sustainability we can track and report.",
  },
];
const govB: Bullet[] = [
  {
    lead: "Integrity, non-negotiable.",
    rest: "Transparency and honesty are standards, not aspirations.",
  },
  {
    lead: "Security and data protection.",
    rest: "Strong practices to protect client data and the trust placed in us.",
  },
  {
    lead: "Real accountability.",
    rest: "Clear ethical standards and genuine accountability across the company.",
  },
];

/* ------------------------------------------------------------------ */
/*  Detail section (alternating image / content)                      */
/* ------------------------------------------------------------------ */
function Detail({
  n,
  title,
  color,
  bullets,
  img,
  imageSide,
}: {
  n: string;
  title: string;
  color: string;
  bullets: Bullet[];
  img: string;
  imageSide: "left" | "right";
}) {
  const image = (
    <div className="px-6 py-8 lg:px-10 lg:py-12">
      <div className="relative">
        <div
          className="absolute -inset-3 rounded-[30px] opacity-60 blur-2xl"
          style={{
            background: `linear-gradient(135deg, ${color}26, transparent 70%)`,
          }}
        />
        <Photo
          src={img}
          className="relative h-[280px] w-full rounded-[24px] ring-1 ring-black/5 lg:h-[420px]"
        />
      </div>
    </div>
  );
  const content = (
    <div className="relative px-6 py-12 lg:px-16 lg:py-16">
      <span
        className="pointer-events-none absolute right-6 top-8 select-none text-[92px] font-semibold leading-none tracking-tight lg:right-12"
        style={{ color: `${color}12` }}
      >
        {n}
      </span>
      <div className="relative max-w-[560px]">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em]"
          style={{ background: `${color}14`, color }}
        >
          {title.replace("Our ", "")}
        </span>
        <h2
          className="mt-4 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[32px]"
          style={{ color: INK }}
        >
          {title}
        </h2>
        <span
          className="mt-3 block h-[4px] w-12 rounded-full"
          style={{ background: color }}
        />
        <div className="mt-7">
          <Checklist items={bullets} color={color} />
        </div>
      </div>
    </div>
  );
  return (
    <Reveal>
      <div className="grid items-center lg:grid-cols-2">
        {imageSide === "left" ? (
          <>
            {image}
            {content}
          </>
        ) : (
          <>
            <div className="order-2 lg:order-1">{content}</div>
            <div className="order-1 lg:order-2">{image}</div>
          </>
        )}
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function CsrSection() {
  const reduce = useReducedMotion();
  const im = IMG;

  return (
    <section className="bg-white">
      {/* ===================== Header ===================== */}
      <div className="mx-auto max-w-[1300px]">
        <div className="grid lg:grid-cols-2">
          <Reveal className="relative px-6 pb-10 pt-12 lg:px-12 lg:pb-16 lg:pt-14">
            <div
              className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(25,89,250,0.16), transparent 70%)",
              }}
            />
            <div className="relative">
              <Pill text="CSR & Sustainability" color={C.people} />
              <h1 className="mt-6 text-[32px] font-medium leading-[1.06] tracking-[-0.03em] text-[#0B1A3A] sm:text-[40px] md:text-[48px] lg:text-[56px]">
                Building a company that&apos;s{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: CSR_GRADIENT }}
                >
                  good for everyone
                </span>{" "}
                it touches.
              </h1>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { Icon: People, t: "People", c: C.people },
                  { Icon: People, t: "Communities", c: C.communities },
                  { Icon: Leaf, t: "Environment", c: C.environment },
                  { Icon: ShieldI, t: "Governance", c: C.governance },
                ].map((x, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 rounded-full border border-[#EAEEF7] bg-[#F8FAFE] px-3.5 py-1.5 text-[13px] font-semibold"
                    style={{ color: INK }}
                  >
                    <x.Icon className="h-4 w-4" style={{ color: x.c }} /> {x.t}
                  </span>
                ))}
              </div>
              <p
                className="mt-8 text-[15px] sm:text-[16px] font-semibold tracking-[-0.01em]"
                style={{ color: INK }}
              >
                Built responsibly from day one.
              </p>
              <p className="mt-3 text-[13px]" style={{ color: MUTE }}>
                ninex-group.com&nbsp;&nbsp;|&nbsp;&nbsp;Founded 2024
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative h-[260px] w-full overflow-hidden rounded-bl-[40px] sm:h-[360px] lg:h-[480px]">
              <img
                src={im.building}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(10,22,40,0) 45%, rgba(10,22,40,0.4))",
                }}
              />
              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur-md">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  Responsible by design
                </p>
                <p className="text-[15px] font-semibold text-white">
                  People · Planet · Governance
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===================== Commitment ===================== */}
      <div className="relative overflow-hidden bg-[#F6F8FC] py-16 lg:py-20">
        <div
          className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(14,156,138,0.14), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[1300px] px-6 lg:px-8">
          <Reveal>
            <Pill text="Our Commitment" color={C.people} />
          </Reveal>
          <div className="mt-7 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="relative pl-6">
                <span
                  className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-[3px] rounded-full"
                  style={{
                    background: "linear-gradient(180deg,#1959FA,#0E9C8A)",
                  }}
                />
                <h2 className="text-[26px] font-medium leading-[1.12] tracking-[-0.03em] text-[#0B1A3A] sm:text-[32px] lg:text-[38px]">
                  We are a young company. We are not claiming a decade of
                  impact. We are{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{ backgroundImage: CSR_GRADIENT }}
                  >
                    building responsibility
                  </span>{" "}
                  into the company from the start.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <p
                className="self-center text-[14px] sm:text-[15px] leading-[1.75] tracking-[-0.01em]"
                style={{ color: BODY }}
              >
                We started NineXGroup believing a good company should create
                value for more than its clients and its owners. That includes
                its people, the communities around it, and the environment. We
                are a young company, so we are not going to pretend we have a
                decade of impact behind us. What we can do is build
                responsibility into how we operate from the start, set
                commitments we can actually keep, and report honestly on how we
                are doing. That is the approach on this page.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ===================== Pillars ===================== */}
      <div className="mx-auto max-w-[1300px] px-6 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-[#ECEFF6] bg-white p-6 transition-shadow duration-300 hover:shadow-[0_24px_50px_-26px_rgba(11,26,58,0.25)]"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: p.color }}
                />
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `${p.color}14`, color: p.color }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3
                  className="mt-5 text-[13px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: p.color }}
                >
                  {p.title}
                </h3>
                <p
                  className="mt-2.5 text-[14px] leading-[1.65] tracking-[-0.01em]"
                  style={{ color: BODY }}
                >
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== Detail sections ===================== */}
      <div className="border-t border-[#EFF2F8]">
        <Detail
          n="01"
          title="Our People"
          color={C.people}
          bullets={peopleB}
          img={im.people}
          imageSide="left"
        />
        <Detail
          n="02"
          title="Our Communities"
          color={C.communities}
          bullets={commB}
          img={im.communities}
          imageSide="right"
        />
        <Detail
          n="03"
          title="Our Environment"
          color={C.environment}
          bullets={envB}
          img={im.environment}
          imageSide="left"
        />
        <Detail
          n="04"
          title="Our Governance"
          color={C.governance}
          bullets={govB}
          img={im.governance}
          imageSide="right"
        />
      </div>

      {/* ===================== Under-promise band ===================== */}
      <div className="relative overflow-hidden">
        <img
          src={im.forest}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(15,42,32,0.95), rgba(18,54,40,0.78))",
          }}
        />
        <Reveal className="relative mx-auto max-w-[1300px] px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <Pill text="Honest Progress" color={C.environment} light />
              <h2 className="mt-6 text-[28px] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:text-[36px] lg:text-[44px]">
                We would rather under-promise and show progress than publish
                targets we can&apos;t hit.
              </h2>
            </div>
            <div
              className="space-y-4 self-center text-[14px] sm:text-[15px] leading-[1.75] tracking-[-0.01em]"
              style={{ color: "#CFE0D6" }}
            >
              <p>
                We are early in this journey, and we plan to do it honestly. We
                will set commitments we can keep, report our progress openly,
                and raise the bar as we grow.
              </p>
              <p>
                We would rather under-promise and show real movement than
                publish glossy targets we have no path to hit. As NineXGroup
                matures, this page will grow into a fuller account of what we
                committed to and what we actually delivered.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ===================== Closing ===================== */}
      <div className="mx-auto max-w-[1300px] px-6 py-16 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-[#ECEFF6] bg-gradient-to-br from-[#F8FAFE] to-[#F1F5FC] px-6 py-12 lg:px-14 lg:py-14">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-50 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(25,89,250,0.14), transparent 70%)",
              }}
            />
            <div className="relative grid items-center gap-10 lg:grid-cols-[170px_1fr_330px]">
              <div className="relative hidden lg:block">
                <div
                  className="absolute -inset-2 rounded-[26px] opacity-60 blur-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(31,157,85,0.25), transparent)",
                  }}
                />
                <Photo
                  src={im.plant}
                  className="relative h-[160px] w-[160px] rounded-[22px] ring-1 ring-black/5"
                />
              </div>
              <h2 className="text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0B1A3A] sm:text-[30px] lg:text-[36px]">
                The company we&apos;re building is measured not only by what it
                creates, but{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: CSR_GRADIENT }}
                >
                  by how it creates it.
                </span>
              </h2>
              <div className="rounded-2xl border border-[#E6EBF6] bg-white p-5">
                <div className="flex items-start gap-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: "#E9F7FF", color: C.people }}
                  >
                    <Book className="h-6 w-6" />
                  </div>
                  <p
                    className="text-[14px] leading-[1.65] tracking-[-0.01em]"
                    style={{ color: BODY }}
                  >
                    This is the kind of company we are trying to build. To
                    understand the values underneath it:
                  </p>
                </div>
                <a
                  href="/values"
                  className="group mt-4 inline-flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                  style={{ background: CSR_GRADIENT }}
                >
                  Read Our Values &amp; Culture
                  <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}