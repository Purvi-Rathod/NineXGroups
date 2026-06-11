"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { ComponentType, ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0E1A3A";
const BLUE = "#2348E6";
const DARK = "#0A1738";
const BODY = "#586079";
const MUTE = "#8A93A8";
const HAIR = "#E9EDF6";

type IconProps = SVGProps<SVGSVGElement>;
const ic = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const Wrench = (p: IconProps) => (<svg {...ic} {...p}><path d="M15 7a4 4 0 0 1-5.2 4.6L5 16.4a2 2 0 0 0 2.6 2.6l4.8-4.8A4 4 0 0 0 17 9a4 4 0 0 0-.5-2l-2.3 2.3-2-2L14.5 5A4 4 0 0 0 15 7z" /></svg>);
const Layers = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 16.5l9 5 9-5" /></svg>);
const Shield = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>);
const Cloud = (p: IconProps) => (<svg {...ic} {...p}><path d="M7 18a4 4 0 0 1-.4-8A5.5 5.5 0 0 1 17 9.2 3.9 3.9 0 0 1 17 18z" /></svg>);
const Grid = (p: IconProps) => (<svg {...ic} {...p}><rect x="4" y="4" width="6.5" height="6.5" rx="1.4" /><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" /><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" /><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" /></svg>);
const Bars = (p: IconProps) => (<svg {...ic} {...p}><path d="M4 20h16" /><rect x="5.5" y="11" width="3" height="7" rx="1" /><rect x="10.5" y="7" width="3" height="11" rx="1" /><rect x="15.5" y="13" width="3" height="5" rx="1" /></svg>);
const Users = (p: IconProps) => (<svg {...ic} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M16.5 14.2c2.3.4 4 2.3 4 4.8" /></svg>);
const Repeat = (p: IconProps) => (<svg {...ic} {...p}><path d="M4 9a5 5 0 0 1 5-5h7l-2-2m2 2-2 2" /><path d="M20 15a5 5 0 0 1-5 5H8l2 2m-2-2 2-2" /></svg>);
const Link = (p: IconProps) => (<svg {...ic} {...p}><path d="M10 13a4 4 0 0 0 6 .5l2-2a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 11a4 4 0 0 0-6-.5l-2 2A4 4 0 0 0 11.7 18l1-1" /></svg>);

/* brand X */
function BrandX({ className, style, from = "#5B7CFF", to = "#1A24C4" }: { className?: string; style?: React.CSSProperties; from?: string; to?: string }) {
  const id = `px-${from}-${to}`.replace(/[^a-z0-9]/gi, "");
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={from} /><stop offset="1" stopColor={to} /></linearGradient></defs>
      <path d="M26 18 78 82" stroke={`url(#${id})`} strokeWidth="14" strokeLinecap="round" />
      <path d="M78 18 26 82" stroke={`url(#${id})`} strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Isometric illustrations (stylised)                                */
/* ------------------------------------------------------------------ */
function HeaderArt({ reduce }: { reduce: boolean | null }) {
  return (
    <motion.svg viewBox="0 0 320 280" className="h-auto w-full max-w-[340px]" animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} aria-hidden>
      <defs>
        <linearGradient id="ha-face" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#DCE5FB" /><stop offset="1" stopColor="#C2D0F4" /></linearGradient>
      </defs>
      {[0, 1, 2].map((k) => {
        const oy = k * 34;
        return (
          <g key={k} opacity={0.5 + k * 0.18}>
            <path d={`M160 ${40 + oy} 250 ${85 + oy} 160 ${130 + oy} 70 ${85 + oy} z`} fill="url(#ha-face)" stroke="#B7C6EE" />
          </g>
        );
      })}
      <g>
        <path d="M160 74 250 119 160 164 70 119 z" fill="#EEF3FE" stroke="#C7D4F2" />
        <BrandX className="h-[64px] w-[64px]" style={{ transform: "translate(128px, 86px)" } as React.CSSProperties} from="#5B7CFF" to="#2235C8" />
      </g>
    </motion.svg>
  );
}

function PanelArt({ kind, reduce }: { kind: "cloud" | "apps" | "data"; reduce: boolean | null }) {
  return (
    <motion.svg viewBox="0 0 300 230" className="h-auto w-full max-w-[300px]" animate={reduce ? {} : { y: [0, -8, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }} aria-hidden>
      <defs>
        <linearGradient id={`pa-top-${kind}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2F4FE0" /><stop offset="1" stopColor="#1A2BB0" /></linearGradient>
        <linearGradient id={`pa-plat-${kind}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22305C" /><stop offset="1" stopColor="#16224A" /></linearGradient>
      </defs>
      {/* base platform */}
      <path d="M150 150 270 200 150 250 30 200 z" fill={`url(#pa-plat-${kind})`} opacity="0.9" transform="translate(0,-40)" />
      <path d="M150 110 270 160 150 210 30 160 z" fill="#1C2A56" opacity="0.6" />
      {kind === "cloud" && (
        <g>
          <ellipse cx="150" cy="86" rx="52" ry="20" fill={`url(#pa-top-${kind})`} />
          <path d="M118 92a14 14 0 0 1 2-26 20 20 0 0 1 38 4 12 12 0 0 1-2 23z" fill="#3A5BF2" stroke="#6E8CFF" strokeWidth="1.5" />
        </g>
      )}
      {kind === "apps" && (
        <g>
          {[0, 1, 2, 3].map((n) => (
            <path key={n} d={`M150 ${60 + n * 14} 196 ${83 + n * 14} 150 ${106 + n * 14} 104 ${83 + n * 14} z`} fill={`url(#pa-top-${kind})`} opacity={0.55 + n * 0.12} stroke="#6E8CFF" strokeWidth="0.8" />
          ))}
        </g>
      )}
      {kind === "data" && (
        <g>
          {[[120, 70], [144, 56], [168, 80]].map(([x, y], n) => (
            <g key={n}>
              <path d={`M${x} ${y} ${x + 18} ${y + 9} ${x + 18} ${y + 9 + (150 - y)} ${x} ${y + (150 - y)} z`} fill="#2A45D8" opacity="0.85" />
              <path d={`M${x} ${y} ${x + 18} ${y + 9} ${x + 36} ${y} ${x + 18} ${y - 9} z`} fill={`url(#pa-top-${kind})`} />
            </g>
          ))}
        </g>
      )}
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee                                                           */
/* ------------------------------------------------------------------ */
const platforms: { name: string; domain: string }[] = [
  { name: "OpenAI", domain: "openai.com" },
  { name: "Anthropic", domain: "anthropic.com" },
  { name: "AWS", domain: "aws.amazon.com" },
  { name: "Microsoft Azure", domain: "azure.microsoft.com" },
  { name: "Google Cloud", domain: "cloud.google.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Databricks", domain: "databricks.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "HighLevel", domain: "gohighlevel.com" },
];

/* Pulls each brand logo from an online logo service (Clearbit) by domain,
   and falls back to the name as text if a logo doesn't resolve. */
function LogoChip({ name, domain }: { name: string; domain: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return <span className="whitespace-nowrap text-[15px] font-semibold text-[#5A6478]">{name}</span>;
  }
  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      onError={() => setErr(true)}
      loading="lazy"
      className="h-[30px] w-auto max-w-[150px] shrink-0 object-contain"
    />
  );
}

function Marquee() {
  const MORE = "__more__";
  const base = [...platforms, MORE];
  const loop = [...base, ...base];
  return (
    <div className="border-y border-[#EDF1F8] bg-white py-7">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-8">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: MUTE }}>Platforms we work with</p>
        <div className="pe-mask group relative overflow-hidden">
          <div className="pe-track flex w-max items-center gap-x-14">
            {loop.map((item, i) =>
              typeof item === "string" ? (
                <span key={i} className="flex shrink-0 items-center rounded-full border border-[#E4E9F4] bg-[#F6F8FD] px-3.5 py-1 text-[12.5px] font-semibold" style={{ color: BLUE }}>+ More</span>
              ) : (
                <LogoChip key={i} name={item.name} domain={item.domain} />
              )
            )}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pe-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .pe-track { animation: pe-scroll 34s linear infinite; }
        .pe-mask:hover .pe-track { animation-play-state: paused; }
        .pe-mask { -webkit-mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent); mask-image: linear-gradient(to right, transparent, #000 7%, #000 93%, transparent); }
        @media (prefers-reduced-motion: reduce) { .pe-track { animation: none; } }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
function Eyebrow({ text, color = BLUE }: { text: string; color?: string }) {
  return (<div className="flex items-center gap-3"><span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color }}>{text}</span><span className="h-px w-9" style={{ background: color }} /></div>);
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const approach = [
  { Icon: Wrench, title: "Right tool, honest advice.", body: "We start from your problem and pick the platform that fits, not the other way around." },
  { Icon: Layers, title: "Real depth, not surface familiarity.", body: "Our teams know these systems well enough to make them do things the average implementer cannot." },
  { Icon: Shield, title: "Built to last.", body: "We implement for maintainability and scale, so your platform is an asset in three years, not a rebuild." },
];

const categories = [
  {
    n: "01", title: "AI & Cloud", kind: "cloud" as const,
    body: "The foundation of almost everything we build. We work across the leading AI platforms and the major clouds to design infrastructure and intelligence that is secure, scalable, and cost-aware.",
    bullets: ["Leading AI platforms, including OpenAI, Anthropic, and the wider generative AI ecosystem", "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud"],
  },
  {
    n: "02", title: "Enterprise Applications & CRM", kind: "apps" as const,
    body: "The systems that run the business day to day. We implement, customize, and connect the platforms that power sales, service, marketing, and operations.",
    bullets: ["Salesforce", "Microsoft Dynamics", "HubSpot", "GoHighLevel", "Leading ERP and business-systems platforms"],
  },
  {
    n: "03", title: "Data & Analytics", kind: "data" as const,
    body: "Transformation runs on trustworthy data. We build the platforms that collect, unify, and make sense of it, then put intelligence on top.",
    bullets: ["Modern data platforms and warehousing", "Business intelligence and visualization tools", "AI and ML model deployment"],
  },
];

const meansForYou = [
  { Icon: Users, title: "Senior teams who know the platform in depth.", body: "We use more than the demo flow. We know where these systems bend and where they break, and we build accordingly." },
  { Icon: Repeat, title: "Patterns from real engagements.", body: "We bring proven approaches and hard-won judgment, not theory pulled from a vendor pitch." },
  { Icon: Layers, title: "Architecture built to scale and stay maintainable.", body: "What we build is designed to grow with you and to be supportable long after go-live." },
  { Icon: Link, title: "One partner for the whole stack.", body: "Strategy, platform, build, and outcome ownership in a single group, with no finger-pointing between vendors." },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function PartnerEcosystem() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#FBFCFE] text-[15px]">
      {/* ===================== Header ===================== */}
      <div className="mx-auto max-w-[1300px] px-6 pt-14 lg:px-8 lg:pt-16">
        <Reveal><Eyebrow text="Partner Ecosystem" /></Reveal>
        <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1fr_0.9fr_0.8fr]">
          <Reveal>
           <h1
              className="
                text-[46px]
                md:text-[54px]
                lg:text-[64px]
                font-medium
                leading-[0.92]
                tracking-[-0.045em]
                text-[#0A1633]
              "
            >              
                We build on the <span style={{ color: BLUE }}>platforms</span> that run modern business.
            </h1>
            <p className="mt-5 text-[15px] font-semibold" style={{ color: INK }}>Great platforms. Senior teams. Real outcomes.</p>
            <p className="mt-4 text-[12.5px]" style={{ color: MUTE }}>ninex-group.com&nbsp;&nbsp;|&nbsp;&nbsp;Founded 2024</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[12px] leading-[1.75] w-[350px]" style={{ color: BODY }}>
              Great transformation work is built on good platforms. We do not believe in technology for its own sake. We select tools with senior teams who actually know them, rather than learning the manual on your dime. This page lays out the platforms we work across, what each category delivers, and what our approach to the ecosystem means for you.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="flex justify-center lg:justify-end"><HeaderArt reduce={reduce} /></div>
          </Reveal>
        </div>
      </div>

      {/* ===================== Marquee ===================== */}
      <div className="mt-12"><Marquee /></div>

      {/* ===================== Approach ===================== */}
      <div className="mx-auto mt-14 max-w-[1300px] px-6 lg:px-8">
        <Reveal><Eyebrow text="Our Approach To Platforms" /></Reveal>
        <Reveal delay={0.05}>
          <h2
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
            Platform fluent, <span style={{ color: BLUE }}>not platform religious.</span>
          </h2>
        </Reveal>
        <div className="mt-9 grid gap-9 sm:grid-cols-3">
          {approach.map((a, i) => {
            const Icon = a.Icon;
            return (
              <motion.div key={a.title} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ background: "#EEF2FB", color: BLUE }}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-[15.5px] font-bold leading-[1.25]" style={{ color: INK }}>{a.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.65]" style={{ color: BODY }}>{a.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== Category panels ===================== */}
      <div className="mx-auto mt-12 max-w-[1300px] space-y-6 px-6 lg:px-8">
        {categories.map((c, idx) => (
          <Reveal key={c.n}>
            <motion.div
              className="overflow-hidden rounded-[22px] p-8 sm:p-10"
              style={{ background: `linear-gradient(120deg, ${DARK}, #122152)` }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
            >
              <div className={`grid items-center gap-8 lg:grid-cols-[1fr_0.8fr] ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <span className="text-[12px] font-bold tracking-[0.16em]" style={{ color: "#5E7BFF" }}>{c.n}</span>
                  <h3 className="mt-2 text-[24px] font-bold text-white sm:text-[26px]">{c.title}</h3>
                  <p className="mt-3 max-w-[520px] text-[13px] leading-[1.7]" style={{ color: "#AEB9D6" }}>{c.body}</p>
                  <ul className="mt-5 space-y-2.5">
                    {c.bullets.map((b, i) => (
                      <motion.li key={i} className="flex items-start gap-2.5 text-[12.8px]" style={{ color: "#C4CCE2" }}
                        initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.4, delay: i * 0.07 }}>
                        <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: "#5E7BFF" }} />
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end"><PanelArt kind={c.kind} reduce={reduce} /></div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {/* ===================== What this means ===================== */}
      <div className="mx-auto mt-14 max-w-[1300px] border-t border-[#ECEFF6] px-6 pt-12 lg:px-8">
        <Reveal><Eyebrow text="What This Means For You" /></Reveal>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {meansForYou.map((m, i) => {
            const Icon = m.Icon;
            return (
              <motion.div key={m.title} className="group" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105" style={{ background: "#EEF2FB", color: BLUE }}><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 text-[14px] font-bold leading-[1.3]" style={{ color: INK }}>{m.title}</h3>
                <p className="mt-2.5 text-[12.5px] leading-[1.62]" style={{ color: BODY }}>{m.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== Commitment band ===================== */}
      <div className="mx-auto mt-14 max-w-[1300px] px-6 pb-14 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[22px] p-9 sm:p-12" style={{ background: `linear-gradient(120deg, ${DARK}, #16245A)` }}>
            <motion.div className="pointer-events-none absolute -bottom-12 -right-10" animate={reduce ? {} : { y: [0, -10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <BrandX className="h-60 w-60" from="#3E64FF" to="#1A1FA8" />
            </motion.div>
            <div className="relative grid gap-6 lg:grid-cols-[0.55fr_1fr]">
              <div>
                <Eyebrow text="As We Grow The Ecosystem" color="#5E7BFF" />
                <p className="mt-4 text-[12.5px] leading-[1.7] w-[360px]" style={{ color: "#9FAACB" }}>
                  As we grow, we keep deepening and formalizing these relationships across the ecosystem, and we add new platforms as our clients&lsquo; needs evolve.
                </p>
              </div>
              <p className="text-[22px] font-bold leading-[1.35] text-white sm:text-[26px] w-[600px]">
                Our commitment is not to any single vendor.{" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(100deg,#6E8CFF,#3E64FF)" }}>
                  It is to bringing the best capabilities in the market to the problems our clients are trying to solve.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}