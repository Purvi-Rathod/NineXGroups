"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentType, ReactNode, SVGProps } from "react";

/* ------------------------------------------------------------------ */
/*  Tokens                                                            */
/* ------------------------------------------------------------------ */
const INK = "#0E1A3A";
const BLUE = "#2348E6";
const DARK = "#0A1738";
const BODY = "#586079";
const MUTE = "#8A93A8";
const DEFAULT_BUILDING_SRC =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop";

type IconProps = SVGProps<SVGSVGElement>;
const ic = { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const User = (p: IconProps) => (<svg {...ic} {...p}><circle cx="12" cy="8" r="3.4" /><path d="M5.5 20c0-3.6 2.9-6.2 6.5-6.2s6.5 2.6 6.5 6.2" /></svg>);
const Target = (p: IconProps) => (<svg {...ic} {...p}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.4" /><circle cx="12" cy="12" r="1" /></svg>);
const Book = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 6c-2-1.4-5-1.6-7.5-1.2v13C7 17.4 10 17.6 12 19" /><path d="M12 6c2-1.4 5-1.6 7.5-1.2v13C17 17.4 14 17.6 12 19" /><path d="M12 6v13" /></svg>);
const Shield = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 3l8 3v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>);
const Bolt = (p: IconProps) => (<svg {...ic} {...p}><path d="M13 3 5 13h5l-1 8 8-10h-5z" /></svg>);
const Users = (p: IconProps) => (<svg {...ic} {...p}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" /><path d="M16 6.2a3 3 0 0 1 0 5.6" /><path d="M16.5 14.2c2.3.4 4 2.3 4 4.8" /></svg>);
const Handshake = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 8.5 9.5 6.6a2 2 0 0 0-2.3 0L3 9.6v5l2 2" /><path d="M12 8.5 14.5 6.6a2 2 0 0 1 2.3 0L21 9.6v5l-2 2" /><path d="M6 16.5l2.8 2.8a1.4 1.4 0 0 0 2 0" /><path d="M10.6 19.6l1.8 1.8a1.4 1.4 0 0 0 2 0l4.6-4.6" /></svg>);
const Network = (p: IconProps) => (<svg {...ic} {...p}><circle cx="6" cy="7" r="2.2" /><circle cx="6" cy="17" r="2.2" /><circle cx="18" cy="12" r="2.2" /><path d="M8 8l8 3M8 16l8-3" /></svg>);
const Gauge = (p: IconProps) => (<svg {...ic} {...p}><path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 14l4-3" /><circle cx="12" cy="14" r="1.2" /></svg>);
const Gem = (p: IconProps) => (<svg {...ic} {...p}><path d="M7 4h10l4 5-9 11L3 9z" /><path d="M3 9h18M9 4 7 9l5 11 5-11-2-5" /></svg>);
const Scales = (p: IconProps) => (<svg {...ic} {...p}><path d="M12 4v16M7 20h10" /><path d="M6 6l-3 6a3 3 0 0 0 6 0z" /><path d="M18 6l3 6a3 3 0 0 1-6 0z" /><path d="M6 6h12" /></svg>);
const Dollar = (p: IconProps) => (<svg {...ic} {...p}><circle cx="12" cy="12" r="9" /><path d="M14.5 9.2c-.6-.8-1.6-1.2-2.7-1.2-1.6 0-2.8.9-2.8 2.1 0 3 5.8 1.3 5.8 4.2 0 1.3-1.3 2.2-2.9 2.2-1.2 0-2.3-.5-2.9-1.4" /><path d="M12 6.2v11.6" /></svg>);
const TrendUp = (p: IconProps) => (<svg {...ic} {...p}><path d="M4 18h16" /><rect x="5.5" y="13" width="2.6" height="4.5" rx="0.6" /><rect x="10.7" y="10" width="2.6" height="7.5" rx="0.6" /><rect x="15.9" y="6.5" width="2.6" height="11" rx="0.6" /><path d="M5 9l4-3 3 2 6-5" /><path d="M16 3h4v4" /></svg>);

const QuoteMark = ({ color }: { color: string }) => (
  <svg width="44" height="34" viewBox="0 0 40 32" fill={color} aria-hidden>
    <path d="M0 32V17.5C0 7 6.4 1 16 0v6.4C10.2 7.3 7.4 10.6 7.4 15H14v17z" />
    <path d="M21 32V17.5C21 7 27.4 1 37 0v6.4c-5.8.9-8.6 4.2-8.6 8.6H35v17z" />
  </svg>
);

const Wordmark = ({ className }: { className?: string }) => (
  <span className={className} style={{ color: INK, letterSpacing: "0.02em" }}>
    NINE<span style={{ color: BLUE }}>X</span>GROUP
  </span>
);

const BrandX = ({ className, style, from = "#5B7CFF", to = "#1A24C4" }: { className?: string; style?: React.CSSProperties; from?: string; to?: string }) => {
  const id = `bx-${from}-${to}`.replace(/[^a-z0-9]/gi, "");
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={from} /><stop offset="1" stopColor={to} /></linearGradient></defs>
      <path d="M24 16 82 84" stroke={`url(#${id})`} strokeWidth="15" strokeLinecap="round" />
      <path d="M82 16 24 84" stroke={`url(#${id})`} strokeWidth="15" strokeLinecap="round" />
    </svg>
  );
};

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
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color }}>{text}</span>
      <span className="h-px w-9" style={{ background: color }} />
    </div>
  );
}

function IconCircle({ Icon, size = 44 }: { Icon: ComponentType<IconProps>; size?: number }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-full" style={{ width: size, height: size, background: "#EEF2FB", color: BLUE }}>
      <Icon style={{ width: size * 0.5, height: size * 0.5 }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const values = [
  { n: "01", Icon: User, title: "Client success comes first.", body: "We judge ourselves by the results our clients get, not the hours we bill. A project is not done when the invoice clears. It is done when the client hits the goal they came to us for. In practice this means we define success in real numbers at the start of every engagement, we say no to work that will not move those numbers, and we stay accountable to them all the way through." },
  { n: "02", Icon: Target, title: "We sweat the execution.", body: "Ideas are cheap. Execution is where transformation lives or dies, so that is where we put our energy. We bring real expertise, proper methods, and genuine attention to detail to every engagement. No shortcuts that come back to bite the client later, and no quietly lowering the standard when a deadline gets tight. If it has our name on it, it is built right." },
  { n: "03", Icon: Book, title: "We keep learning.", body: "Technology moves fast, so we do too. We invest in our people and bring current thinking to the table, not last year's playbook dressed up as insight. Everyone here is expected to stay sharp, and we make room for that, because a team that stops learning starts giving clients advice that has quietly gone stale." },
  { n: "04", Icon: Shield, title: "We tell the truth.", body: "We are straight with clients even when the honest answer is the harder one. If a timeline is unrealistic, we say so. If an idea will not work, we say that too, and we explain why. We treat your data like it is our own, and we act in your interest, full stop. Trust is the entire business, and we are not willing to trade it for a comfortable conversation." },
  { n: "05", Icon: Bolt, title: "We move fast without getting sloppy.", body: "We work with the urgency of a startup and the care of a firm you would trust with your core systems. We do not believe speed and rigor are enemies. The trick is knowing which corners can never be cut, the architecture, the security, the testing, and protecting those while moving quickly on everything else." },
  { n: "06", Icon: Users, title: "We want different people in the room.", body: "Better teams come from different backgrounds and perspectives. It is not a compliance box for us, it is how we get to better answers. We are building a place where people can show up as themselves and do their best work, and we hire for that on purpose." },
  { n: "07", Icon: Handshake, title: "We own what we take on.", body: "When we sign up for a problem, we own it end to end. There are no seams to hide behind here, and no other vendor to blame, because we are the whole stack. That can be uncomfortable, and that is the point. Ownership is what makes us careful, and careful is what makes us good." },
];

const workFeel = [
  { Icon: User, title: "Ownership early.", body: "You will get real responsibility sooner than you would at a bigger firm, with senior people around you to learn from." },
  { Icon: Network, title: "Cross-discipline by default.", body: "Strategists, engineers, and designers sit close together, so you learn well beyond your own lane." },
  { Icon: TrendUp, title: "Results over politics.", body: "What you ship matters more than how good you are at meetings. We reward the work." },
  { Icon: Gauge, title: "Fast, but not reckless.", body: "We keep the pace high and the standards higher. People who like both tend to thrive here." },
];

const hireSteps = [
  { Icon: Gem, title: "CRAFT", body: "You are excellent in your discipline and take pride in what you build." },
  { Icon: Target, title: "OWNERSHIP", body: "You think beyond tasks and take responsibility for the result." },
  { Icon: Users, title: "TRUST", body: "You tell the truth, keep commitments, and earn trust quickly." },
];

const diItems = [
  { Icon: Scales, label: "Fair practices" },
  { Icon: Dollar, label: "Pay equity" },
  { Icon: Users, label: "Belonging" },
  { Icon: Shield, label: "Respect" },
  { Icon: TrendUp, label: "Opportunity" },
];

/* ------------------------------------------------------------------ */
/*  Section                                                           */
/* ------------------------------------------------------------------ */
export default function ValuesSection() {
  const reduce = useReducedMotion();
  const buildingSrc = DEFAULT_BUILDING_SRC;

  return (
    <section className="bg-[#FBFCFE] text-[15px]">
      {/* ===================== Header ===================== */}
      <div className="mx-auto max-w-[1300px]">
        <div className="grid lg:grid-cols-2">
          {/* left */}
          <Reveal className="px-6 pb-10 pt-10 lg:px-12 lg:pb-16 lg:pt-12">
            <Wordmark className="text-[19px] font-extrabold" />
            <div className="mt-10"><Eyebrow text="Our Values & Culture" /></div>
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
                The standards we hire for, reward, and live by.
            </h1>
            <span className="mt-6 block h-[5px] w-16 rounded-full" style={{ background: BLUE }} />
            <p className="mt-5 text-[13px]" style={{ color: MUTE }}>ninex-group.com&nbsp;&nbsp;|&nbsp;&nbsp;Founded 2024</p>
          </Reveal>

          {/* right */}
          <div className="flex flex-col">
            <Reveal>
              <div
                className="relative h-[260px] w-full overflow-hidden rounded-bl-[28px] sm:h-[330px] lg:h-[440px]"
                style={{ background: buildingSrc ? undefined : "linear-gradient(150deg,#9DB4E8,#5E7BC8 55%,#3A538F)" }}
              >
                {buildingSrc ? (
                  <img src={buildingSrc} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "repeating-linear-gradient(125deg, rgba(255,255,255,0.3) 0 1px, transparent 1px 26px)" }} />
                )}
                <motion.div
                  className="absolute right-6 top-5"
                  animate={reduce ? {} : { y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                >
                  <BrandX className="h-20 w-20" from="rgba(255,255,255,0.55)" to="rgba(255,255,255,0.12)" />
                </motion.div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="px-6 pb-10 pt-7 lg:pl-12 lg:pr-12 lg:pt-9">
              <span className="mb-3 block h-px w-9" style={{ background: BLUE }} />
              <p className="text-[19px] font-bold" style={{ color: INK }}>
                Not slogans. <span style={{ color: BLUE }}>Operating principles.</span>
              </p>
              <p className="mt-4 max-w-[440px] text-[14px] leading-[1.7]" style={{ color: BODY }}>
                The standards we hire against, promote against, and hold each other to. Here is what each one means in practice, not in theory.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ===================== Values list ===================== */}
      <div className="mx-auto mt-14 max-w-[1300px] px-6 lg:px-8">
        <Reveal><Eyebrow text="Our Values" /></Reveal>
        <div className="mt-6 rounded-[22px] border border-[#ECEFF6] bg-white px-6 sm:px-8">
          {values.map((v, i) => {
            const Icon = v.Icon;
            return (
              <motion.div
                key={v.n}
                className="group grid items-start gap-x-6 gap-y-3 border-b border-[#EEF1F8] py-6 last:border-0 lg:grid-cols-[52px_56px_200px_1fr] lg:items-center lg:gap-y-0"
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.06, ease: "easeOut" }}
              >
                <span className="text-[26px] font-bold" style={{ color: "#23304F" }}>{v.n}</span>
                <div className="row-start-1 lg:row-auto"><div className="transition-transform duration-300 group-hover:scale-105"><IconCircle Icon={Icon} /></div></div>
                <h3 className="text-[16.5px] font-bold leading-[1.25]" style={{ color: INK }}>{v.title}</h3>
                <p className="text-[12.8px] leading-[1.62]" style={{ color: BODY }}>{v.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== Culture banner ===================== */}
      <div className="mx-auto mt-12 max-w-[1300px] px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[22px] p-8 sm:p-10" style={{ background: DARK }}>
            <svg className="pointer-events-none absolute -right-6 top-0 h-full w-56 opacity-40" viewBox="0 0 200 300" fill="none" aria-hidden>
              {Array.from({ length: 7 }).map((_, k) => (
                <path key={k} d={`M${40 + k * 16} 0 C ${120 + k * 10} 80, ${120 + k * 10} 220, ${40 + k * 16} 300`} stroke="#2A3A66" strokeWidth="1" />
              ))}
            </svg>
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <Eyebrow text="Our Culture" color="#5E7BFF" />
                <h2 className="mt-5 text-[28px] font-bold leading-[1.2] sm:text-[32px] text-white">
                  NineXGroup is a place for people who like to build.
                </h2>
              </div>
              <p className="self-center text-[13.5px] leading-[1.8]" style={{ color: "#AEB9D6" }}>
                We tend to attract operators who would rather fix a hard problem than manage around it, and who take pride in work that ships and holds up. Our structure is flat and quick, which means talented people get real ownership early, work next to experts in other disciplines, and get rewarded for results rather than politics. We are growing fast, and we are being careful to keep what makes this place good as we get bigger.
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ===================== What it feels like ===================== */}
      <div className="mx-auto mt-12 max-w-[1300px] px-6 lg:px-8">
        <Reveal><Eyebrow text="What It Feels Like To Work Here" /></Reveal>
        <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {workFeel.map((w, i) => {
            const Icon = w.Icon;
            return (
              <motion.div key={w.title} className="group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
                <div className="transition-transform duration-300 group-hover:scale-105"><IconCircle Icon={Icon} size={48} /></div>
                <h3 className="mt-4 text-[15.5px] font-bold leading-[1.25]" style={{ color: INK }}>{w.title}</h3>
                <p className="mt-2.5 text-[13px] leading-[1.65]" style={{ color: BODY }}>{w.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ===================== How we hire ===================== */}
      <div className="mx-auto mt-14 max-w-[1300px] border-t border-[#ECEFF6] px-6 pt-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[300px_1fr]">
          <Reveal>
            <Eyebrow text="How We Hire" />
            <p className="mt-5 text-[13.5px] leading-[1.72]" style={{ color: BODY }}>
              We are deliberate about who joins, because at our stage every hire shapes the culture. We look for three things above all: genuine craft in your discipline, the judgment to own an outcome rather than just a task, and the kind of straightforwardness that makes you easy to trust. Titles and pedigree help, but they do not get you in the door on their own. The work and the way you carry yourself do.
            </p>
          </Reveal>

          <div>
            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-3 sm:gap-y-0">
              {hireSteps.map((s, i) => {
                const Icon = s.Icon;
                const t = i * 0.5; // sequence anchor for this step
                return (
                  <div key={s.title} className="group relative px-2 text-center">
                    {/* connector to the next step */}
                    {i < hireSteps.length - 1 && (
                      <div className="absolute left-[calc(50%+44px)] right-[-44px] top-[40px] hidden items-center sm:flex">
                        <motion.span
                          className="h-px flex-1 origin-left"
                          style={{ borderTop: "1.5px dashed #C5D0EC" }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.45, delay: t + 0.3, ease: "easeInOut" }}
                        />
                        <motion.svg
                          width="9" height="9" viewBox="0 0 10 10" className="ml-1 shrink-0"
                          initial={{ opacity: 0, x: -3 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: t + 0.7 }}
                        >
                          <path d="M1 1l4 4-4 4" fill="none" stroke="#97A3C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </motion.svg>
                        {!reduce && (
                          <motion.span
                            className="absolute left-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 rounded-full"
                            style={{ background: BLUE }}
                            initial={{ left: "0%", opacity: 0 }}
                            animate={{ left: ["0%", "90%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 + i * 0.4 }}
                          />
                        )}
                      </div>
                    )}

                    {/* icon badge */}
                    <motion.div
                      className="mx-auto w-fit"
                      initial={{ opacity: 0, y: 18, scale: 0.88 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: t, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div
                        className="flex h-[78px] w-[78px] items-center justify-center rounded-full ring-1 ring-[#E1E8F7] shadow-[0_14px_30px_-16px_rgba(35,72,230,0.45)] transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: "linear-gradient(160deg,#F1F5FF,#E4ECFB)" }}
                      >
                        <Icon className="h-7 w-7" style={{ color: BLUE }} />
                      </div>
                    </motion.div>

                    {/* text */}
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: t + 0.16, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <h3 className="mt-5 text-[14px] font-extrabold tracking-[0.12em]" style={{ color: INK }}>{s.title}</h3>
                      <p className="mx-auto mt-2.5 max-w-[210px] text-[12.5px] leading-[1.6]" style={{ color: BODY }}>{s.body}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <p className="mt-10 text-[13px] leading-[1.7]" style={{ color: BODY }}>
                As we scale, this is the standard the founders guard most carefully. It is far easier to protect a good culture than to rebuild one that drifted.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ===================== Diversity & Inclusion ===================== */}
      <div className="mx-auto mt-12 max-w-[1300px] px-6 pb-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr]">
          <Reveal>
            <Eyebrow text="Diversity & Inclusion" />
            <h2 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.01em] sm:text-[28px]" style={{ color: INK }}>
              Different perspectives create better outcomes.
            </h2>
            <p className="mt-4 text-[13px] leading-[1.72]" style={{ color: BODY }}>
              We believe diverse teams deliver better outcomes, and we are building a workplace where everyone feels valued, respected, and able to do their best work. That means fair and transparent practices, including pay equity, an environment where people can be themselves, and a deliberate effort to bring different perspectives into the room rather than hire the same person ten times over. We are early in this journey and we intend to do it properly, not performatively.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-5">
              {diItems.map((d, i) => {
                const Icon = d.Icon;
                return (
                  <motion.div key={d.label} className="group flex w-[88px] flex-col items-center text-center"
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}>
                    <div className="transition-transform duration-300 group-hover:scale-110"><IconCircle Icon={Icon} size={46} /></div>
                    <span className="mt-2 text-[12px] font-semibold" style={{ color: INK }}>{d.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>

          {/* quote card */}
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-[22px] p-9" style={{ background: DARK, minHeight: 280 }}>
              <motion.div className="pointer-events-none absolute -bottom-10 -right-8" animate={reduce ? {} : { y: [0, -10, 0], opacity: [0.9, 1, 0.9] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <BrandX className="h-64 w-64" from="#3E64FF" to="#1A1FA8" />
              </motion.div>
              <div className="relative">
                <QuoteMark color="#3E64FF" />
                <p className="mt-5 text-[23px] font-bold leading-[1.3] text-white">
                  These values come straight from the founders.
                </p>
                <p className="mt-5 text-[14px] text-[#AEB9D6]">
                  To meet them, read the <span className="font-semibold" style={{ color: "#5E83FF" }}>Leadership Team</span> page.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===================== Footer ===================== */}
      <div className="mx-auto max-w-[1300px] border-t border-[#ECEFF6] px-6 py-6 lg:px-8">
        <p className="text-[12px]" style={{ color: MUTE }}>© 2024–2026 NineXGroup. Built for intelligent growth.</p>
      </div>
    </section>
  );
}
