"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0E1730";
const BLUE = "#2C49E6";
const VIOLET = "#6B4FD6";
const BODY = "#5A6478";
const HAIR = "#ECEFF6";

type IconProps = SVGProps<SVGSVGElement>;
const ic = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Eye = (p: IconProps) => (<svg {...ic} {...p}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>);
const Users = (p: IconProps) => (<svg {...ic} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M16.5 14.2c2.3.4 4 2.3 4 4.8" /></svg>);
const Layers = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>);
const Bars = (p: IconProps) => (<svg {...ic} {...p}><path d="M4 20h16" /><rect x="5" y="12" width="3" height="6" rx="1" /><rect x="10.5" y="8" width="3" height="10" rx="1" /><rect x="16" y="4" width="3" height="14" rx="1" /></svg>);
const Code = (p: IconProps) => (<svg {...ic} {...p}><path d="M9 8l-4 4 4 4" /><path d="M15 8l4 4-4 4" /></svg>);
const Shield = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>);
const Cube = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></svg>);
const Lock = (p: IconProps) => (<svg {...ic} {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>);
const Check = (p: IconProps) => (<svg {...ic} {...p}><circle cx="12" cy="12" r="9" /><path d="M8.5 12l2.5 2.5 5-5" /></svg>);
const Rocket = (p: IconProps) => (<svg {...ic} {...p}><path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z" /><path d="M12 15l-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" /><path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0" /></svg>);
const Search = (p: IconProps) => (<svg {...ic} {...p}><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.5-4.5" /><circle cx="11" cy="11" r="2" /></svg>);
const Target = (p: IconProps) => (<svg {...ic} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.4" /><path d="M12 12l7-7" /><path d="M16 5h4v4" /></svg>);

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0, className, hover = false }: { children: ReactNode; delay?: number; className?: string; hover?: boolean }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={
        hover
          ? { y: -6, boxShadow: "0 26px 55px -28px rgba(22,42,120,0.28)", transition: { duration: 0.28, ease: "easeOut" } }
          : undefined
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Avatar({ src, accent }: { src?: string; accent: string }) {
  return (
    <div className="relative">
      <div
        className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[26px]"
        style={{ background: accent, clipPath: "polygon(0 0, 100% 0, 0 100%)", opacity: 0.85 }}
      />
      <div
        className="absolute -bottom-3 right-6 h-16 w-24 rounded-br-[26px]"
        style={{ background: accent, clipPath: "polygon(100% 0, 100% 100%, 0 100%)", opacity: 0.7 }}
      />
      <div className="relative overflow-hidden rounded-[22px] border border-[#E7EAF3]" style={{ background: "linear-gradient(160deg,#EEF1FB,#E3E8F6)" }}>
        {src ? (
          <img src={src} alt="" className="h-[330px] w-full object-cover" />
        ) : (
          <div className="flex h-[330px] w-full items-end justify-center">
            <svg viewBox="0 0 120 120" className="h-[88%] w-auto" style={{ color: "#C2CADF" }} fill="currentColor">
              <circle cx="60" cy="44" r="24" />
              <path d="M16 120c0-26 20-44 44-44s44 18 44 44z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Founder data                                                      */
/* ------------------------------------------------------------------ */
interface FocusItem { Icon: ComponentType<IconProps>; label: string }
interface Founder {
  name: string;
  role: string;
  accent: string;
  quoteBg: string;
  image?: string;
  imageSide: "left" | "right";
  bio: string[];
  focus: FocusItem[];
  quote: string;
}

const pratyush: Founder = {
  name: "Pratyush Nayak",
  role: "Founder & Chief Executive Officer",
  accent: BLUE,
  quoteBg: "#EEF2FE",
  imageSide: "left",
  bio: [
    "Pratyush founded NineXGroup in 2024 on a simple bet: the enterprises of the next decade need a partner who can think, build, and ship as one team rather than three. As Founder and CEO, he owns the vision for the group and decides how its brands fit together to solve the hardest problems his clients face.",
    "What sets Pratyush apart is that he holds ambition and discipline in the same hand. He is convinced that consulting only matters if it produces results you can measure, and he has built the company to chase long-term partnerships instead of one-off projects. Under his leadership, NineXGroup has gone from a single consultancy to a multi-brand group serving clients across industries and regions in a short space of time.",
    "Inside the company, he is the person who sets bold goals and then refuses to let the execution slip. He pushes for clarity, expects ownership, and has little patience for work that looks impressive but does not move the needle. He believes the best work comes from teams that are diverse, trusted, and given real responsibility early, and he has wired that belief into how NineXGroup hires and runs.",
    "With clients, his focus is relentlessly practical. He wants to know what success actually looks like in numbers, and he builds the engagement backward from there. That outcome-first instinct is the reason so many NineXGroup relationships start as a single project and grow into something much larger.",
  ],
  focus: [
    { Icon: Eye, label: "Company vision and strategy" },
    { Icon: Users, label: "Client partnerships" },
    { Icon: Layers, label: "Brand architecture" },
    { Icon: Bars, label: "Growth" },
    { Icon: Users, label: "Building the culture" },
  ],
  quote:
    "We didn't set out to build the biggest firm. We set out to build the one our clients can't picture transforming without.",
};

const prabhash: Founder = {
  name: "Prabhash Nayak",
  role: "Co-Founder & Chief Technology Officer",
  accent: VIOLET,
  quoteBg: "#F2EFFC",
  imageSide: "right",
  bio: [
    "Prabhash is Co-Founder of NineXGroup and the engineer behind everything the company builds. As CTO and technical lead, he owns the architecture, the engineering standards, and the technology strategy that turn the company's promises into systems that actually work in production.",
    "He leads the group's engineering across cloud, AI, integration, and product work. His non-negotiable is that everything gets built to scale from the start, so a client's platform grows with the business instead of becoming the thing that holds it back. That hands-on technical depth is a real advantage for clients, who get a partner whose senior leadership can talk strategy in the morning and read the code in the afternoon.",
    "Prabhash is practical, deeply technical, and a little obsessed with reliability. He sets the engineering culture that keeps delivery honest: solid methods, security built in from day one, and a quality bar nobody is allowed to lower. He would rather take an extra day to build something properly than ship something that will quietly fail under load six months later.",
    "He is also the bridge between what the business wants and what the technology can actually deliver. When a client has an ambitious idea, Prabhash is the one who can tell them honestly what it will take, then build it. With Pratyush, he has made sure strategy and engineering are never two separate conversations at NineXGroup.",
  ],
  focus: [
    { Icon: Code, label: "Technology strategy and architecture" },
    { Icon: Shield, label: "Engineering standards" },
    { Icon: Cube, label: "Platform and product delivery" },
    { Icon: Lock, label: "Security" },
    { Icon: Check, label: "Reliability" },
  ],
  quote: "Strategy without engineering is just a nice slide. Our job is to make it ship.",
};

/* ------------------------------------------------------------------ */
/*  Sub-blocks                                                        */
/* ------------------------------------------------------------------ */
function FocusList({ data }: { data: Founder }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: data.accent }}>
        Focus Areas
      </p>
      <ul className="mt-4 space-y-3.5">
        {data.focus.map((f, i) => {
          const Icon = f.Icon;
          return (
            <motion.li
              key={i}
              className="group flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Icon
                className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ color: data.accent }}
              />
              <span className="text-[13.5px]" style={{ color: INK }}>{f.label}</span>
            </motion.li>
          );
        })}
      </ul>
      <div className="mt-6 rounded-2xl p-5" style={{ background: data.quoteBg }}>
        <svg width="22" height="17" viewBox="0 0 40 32" fill={data.accent} aria-hidden>
          <path d="M0 32V17.5C0 7 6.4 1 16 0v6.4C10.2 7.3 7.4 10.6 7.4 15H14v17z" />
          <path d="M21 32V17.5C21 7 27.4 1 37 0v6.4c-5.8.9-8.6 4.2-8.6 8.6H35v17z" />
        </svg>
        <p className="mt-2 text-[15px] font-semibold leading-[1.5]" style={{ color: INK }}>{data.quote}</p>
        <p className="mt-4 text-[13px] font-bold" style={{ color: data.accent }}>{data.name}</p>
        <p className="text-[12px]" style={{ color: BODY }}>{data.role.replace("Chief Executive Officer", "CEO").replace("Chief Technology Officer", "CTO")}</p>
      </div>
    </div>
  );
}

function FounderCard({ data }: { data: Founder }) {
  const photo = <Avatar src={data.image} accent={data.accent} />;
  const main = (
    <div>
      <h3 className="text-[26px] font-bold tracking-[-0.01em]" style={{ color: INK }}>{data.name}</h3>
      <p className="mt-1 text-[15px] font-semibold" style={{ color: data.accent }}>{data.role}</p>
      <div className="mt-5 space-y-4">
        {data.bio.map((para, i) => (
          <p key={i} className="text-[13.5px] leading-[1.72]" style={{ color: BODY }}>{para}</p>
        ))}
      </div>
    </div>
  );
  const focus = <FocusList data={data} />;

  return (
    <Reveal hover className="rounded-[24px] border border-[#ECEFF6] bg-white p-6 sm:p-8 lg:p-10">
      {data.imageSide === "left" ? (
        <div className="grid gap-8 lg:grid-cols-[290px_1fr_250px] lg:gap-10">
          <div className="mx-auto w-full max-w-[330px] lg:mx-0">{photo}</div>
          <div className="order-3 lg:order-2">{main}</div>
          <div className="order-2 lg:order-3">{focus}</div>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[250px_1fr_290px] lg:gap-10">
          <div className="order-2 lg:order-1">{focus}</div>
          <div className="order-3 lg:order-2">{main}</div>
          <div className="order-1 lg:order-3 mx-auto w-full max-w-[330px] lg:mx-0">{photo}</div>
        </div>
      )}
    </Reveal>
  );
}

/* ----- How They Work Together (Venn) ----- */
function WorkTogether() {
  const reduce = useReducedMotion();
  return (
    <Reveal hover className="rounded-[24px] border border-[#ECEFF6] bg-white p-6 sm:p-8 lg:p-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr_0.85fr]">
        {/* left text */}
        <div>
          <h3 className="text-[28px] font-bold leading-[1.1] tracking-[-0.01em]" style={{ color: INK }}>
            How They<br />Work Together
          </h3>
          <span className="mt-4 block h-[4px] w-12 rounded-full" style={{ background: BLUE }} />
          <p className="mt-5 text-[13.5px] leading-[1.7]" style={{ color: BODY }}>
            The partnership between Pratyush and Prabhash is the reason the whole thing works. Pratyush sets the destination and Prabhash builds the vehicle that gets there.
          </p>
          <p className="mt-4 text-[13.5px] leading-[1.7]" style={{ color: BODY }}>
            One is always asking whether something is worth doing for the client and the business. The other is always asking whether it can be built to last. Most of NineXGroup&apos;s best work happens in the conversation between those two questions.
          </p>
        </div>

        {/* venn */}
        <div className="relative mx-auto h-[330px] w-full max-w-[470px]">
          {/* dotted arcs */}
          <svg viewBox="0 0 470 330" className="absolute inset-0 h-full w-full" aria-hidden>
            <motion.path d="M120 70 C 180 18, 290 18, 350 70" fill="none" stroke={BLUE} strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="2 7"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: "easeInOut" }} />
            <motion.path d="M150 96 C 210 56, 260 56, 320 96" fill="none" stroke={VIOLET} strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="2 7"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, delay: 0.3, ease: "easeInOut" }} />
            {!reduce && (
              <>
                <circle r="3.4" fill={BLUE}>
                  <animateMotion dur="3.4s" repeatCount="indefinite" path="M120 70 C 180 18, 290 18, 350 70" />
                </circle>
                <circle r="3" fill={VIOLET}>
                  <animateMotion dur="3.4s" begin="0.6s" repeatCount="indefinite" path="M320 96 C 260 56, 210 56, 150 96" />
                </circle>
              </>
            )}
          </svg>

          {/* circles */}
          <motion.div className="absolute left-0 top-[55px] h-[230px] w-[230px] rounded-full border" style={{ borderColor: "#C9D3F6", background: "rgba(44,73,230,0.05)" }}
            animate={reduce ? {} : { scale: [1, 1.025, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute right-0 top-[55px] h-[230px] w-[230px] rounded-full border" style={{ borderColor: "#D6CCF2", background: "rgba(107,79,214,0.05)" }}
            animate={reduce ? {} : { scale: [1, 1.025, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }} />

          {/* left content */}
          <div className="absolute left-[16px] top-[96px] w-[140px] text-center">
            <Eye className="mx-auto h-6 w-6" style={{ color: BLUE }} />
            <p className="mt-2 text-[11px] font-bold tracking-[0.14em]" style={{ color: BLUE }}>VISION</p>
            <p className="text-[16px] font-bold" style={{ color: INK }}>Pratyush</p>
            <p className="mt-1 text-[11.5px] leading-[1.5]" style={{ color: BODY }}>Sets the destination. Focuses on what matters most.</p>
          </div>

          {/* right content */}
          <div className="absolute right-[16px] top-[96px] w-[140px] text-center">
            <Code className="mx-auto h-6 w-6" style={{ color: VIOLET }} />
            <p className="mt-2 text-[11px] font-bold tracking-[0.14em]" style={{ color: VIOLET }}>EXECUTION</p>
            <p className="text-[16px] font-bold" style={{ color: INK }}>Prabhash</p>
            <p className="mt-1 text-[11.5px] leading-[1.5]" style={{ color: BODY }}>Builds the vehicle. Focuses on what makes it last.</p>
          </div>

          {/* core glow */}
          {!reduce && (
            <motion.div
              className="absolute left-1/2 top-[170px] h-[155px] w-[155px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(44,73,230,0.22), rgba(44,73,230,0) 70%)" }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          {/* center */}
          <div className="absolute left-1/2 top-[105px] flex h-[130px] w-[130px] -translate-x-1/2 flex-col items-center justify-center rounded-full text-center" style={{ background: "#0F1B3A" }}>
            <svg viewBox="0 0 100 100" className="h-8 w-8">
              <defs><linearGradient id="lx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5B7CFF" /><stop offset="1" stopColor="#3A1FC0" /></linearGradient></defs>
              <path d="M26 18 L74 82" stroke="url(#lx)" strokeWidth="16" strokeLinecap="round" />
              <path d="M74 18 L26 84" stroke="url(#lx)" strokeWidth="16" strokeLinecap="round" />
            </svg>
            <p className="mt-1.5 px-3 text-[11px] font-semibold leading-[1.35] text-white">Better Outcomes. Stronger Together.</p>
          </div>
        </div>

        {/* right text */}
        <div>
          <Users className="h-7 w-7" style={{ color: INK }} />
          <p className="mt-4 text-[13.5px] leading-[1.75]" style={{ color: BODY }}>
            It also means a client never has to choose between vision and feasibility. The two sit at the same table from the first meeting, which is exactly why nothing falls into the gap between the slide and the system.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ----- How We Lead ----- */
const principles = [
  { num: "01", Icon: Rocket, title: "Think big, act fast.", body: "We aim high, then move quickly toward it. Ambition without momentum is just a wish." },
  { num: "02", Icon: Search, title: "Decide with evidence.", body: "We ground recommendations in data and reasoning, not opinion or fashion." },
  { num: "03", Icon: Shield, title: "Own the outcome.", body: "Leaders here take responsibility for results, not just activity." },
  { num: "04", Icon: Users, title: "Build people, not just projects.", body: "We give responsibility early, mentor deliberately, and grow the next layer of leaders as fast as we grow the company." },
  { num: "05", Icon: Target, title: "Stay close to the work.", body: "Senior leadership stays close enough to the actual delivery to know whether it is good. We do not lead from a distance." },
];

function HowWeLead() {
  return (
    <Reveal hover className="rounded-[24px] border border-[#ECEFF6] bg-white p-7 sm:p-9 lg:p-12">
      <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
        {/* intro */}
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: VIOLET }}>Our Principles</span>
            <span className="h-px w-8" style={{ background: VIOLET }} />
          </div>
          <h3 className="mt-4 text-[34px] font-bold leading-[1.05] tracking-[-0.015em]" style={{ color: INK }}>How We Lead</h3>
          <span className="mt-4 block h-[5px] w-14 rounded-full" style={{ backgroundImage: "linear-gradient(90deg,#2C49E6,#6B4FD6)" }} />
          <p className="mt-5 text-[15.5px] leading-[1.7]" style={{ color: BODY }}>
            The founders run NineXGroup on a small set of principles that shape how decisions get made at every level.
          </p>
        </div>

        {/* principles */}
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0">
          {principles.map((p, i) => {
            const Icon = p.Icon;
            return (
              <motion.div
                key={p.num}
                className={`group relative ${i > 0 ? "lg:border-l lg:border-[#EEF1F8] lg:pl-7" : "lg:pr-3"}`}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                transition={{ duration: 0.55, delay: i * 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* icon tile */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-[#E4E9F6] transition-all duration-300 group-hover:ring-[#C7D3FB]"
                  style={{ backgroundImage: "linear-gradient(160deg,#F3F6FF,#E7EDFC)" }}
                >
                  <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" style={{ color: BLUE }} />
                </div>

                <h4 className="relative mt-5 text-[16.5px] font-bold leading-[1.22]" style={{ color: INK }}>
                  {p.title}
                </h4>

                {/* animated accent underline */}
                <span
                  className="mt-3 block h-[3px] w-9 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{ backgroundImage: "linear-gradient(90deg,#2C49E6,#6B4FD6)" }}
                />

                <p className="relative mt-3 text-[14px] leading-[1.66]" style={{ color: BODY }}>{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

/* ----- Building The Team ----- */
function BuildingTeam() {
  const reduce = useReducedMotion();
  return (
    <Reveal hover className="relative overflow-hidden rounded-[24px] border border-[#ECEFF6] bg-white p-6 sm:p-8 lg:p-10">
      {/* dotted decoration */}
      <div className="pointer-events-none absolute right-8 top-8 hidden gap-[7px] lg:grid lg:grid-cols-10">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="h-[4px] w-[4px] rounded-full"
            style={{ background: BLUE }}
            animate={reduce ? { opacity: 0.12 + (i % 10) * 0.05 } : { opacity: [0.1, 0.1 + (i % 7) * 0.07, 0.1] }}
            transition={
              reduce
                ? undefined
                : { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: (i % 10) * 0.16 + Math.floor(i / 10) * 0.12 }
            }
          />
        ))}
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-[260px_1fr]">
        <div className="flex items-center gap-4">
          <Users className="h-9 w-9" style={{ color: BLUE }} />
          <h3 className="text-[26px] font-bold leading-[1.1]" style={{ color: INK }}>Building<br />The Team</h3>
        </div>
        <div className="relative rounded-2xl bg-[#F7F8FC] p-6 lg:bg-transparent lg:p-0">
          <p className="text-[17px] font-bold leading-[1.45]" style={{ color: INK }}>
            NineXGroup is growing, and the leadership team is intentional about who joins.
          </p>
          <p className="mt-3 max-w-[760px] text-[13.5px] leading-[1.72]" style={{ color: BODY }}>
            We look for operators who would rather solve a hard problem than manage around it, people who take pride in work that ships and holds up, and people who can be trusted with real ownership. As the company scales, that bar is the thing the founders guard most carefully, because culture is far easier to keep than to rebuild.
          </p>
        </div>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function LeadershipSection() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#FBFCFE] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1240px]">
        {/* header */}
        <div className="relative">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: BLUE }}>Our Leadership</span>
              <span className="h-px w-9" style={{ background: BLUE }} />
            </div>
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
                Leadership Team
            </h1>
            
            <span className="mt-5 block h-[4px] w-12 rounded-full" style={{ background: BLUE }} />
            <span className="font-bold" style={{ color: BLUE }}>The people who set the direction and own the standard.</span>
            <p className="mt-5 text-[14px] leading-[1.6] w-[650px]" style={{ color: INK }}>
              NineXGroup was founded by two people who decided strategy and engineering should never be separate conversations, and then built a company to prove it. One owns the vision and the business. The other owns the technology and the build. Together they make sure neither side of the house ever loses sight of the other.
            </p>
          </Reveal>

          {/* X watermark */}
          <motion.svg
            viewBox="0 0 100 100"
            className="pointer-events-none absolute right-2 top-0 hidden h-52 w-52 lg:block"
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <defs>
              <linearGradient id="wm" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#C7D2F7" />
                <stop offset="1" stopColor="#E7EBF8" />
              </linearGradient>
            </defs>
            <path d="M24 16 L82 84" stroke="url(#wm)" strokeWidth="16" strokeLinecap="round" />
            <path d="M82 16 L24 84" stroke="url(#wm)" strokeWidth="16" strokeLinecap="round" />
          </motion.svg>
        </div>

        {/* body */}
        <div className="mt-10 space-y-8">
          <FounderCard data={pratyush} />
          <FounderCard data={prabhash} />
          <WorkTogether />
          <HowWeLead />
          <BuildingTeam />
        </div>
      </div>
    </section>
  );
}