"use client";

import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ReelFrame {
  line1: string;
  line2?: string;
  sub?: string;
  isCta?: boolean;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const LIST_ITEMS: string[] = [
  "Diagnose growth, market, operations, technology & AI, and people",
  "See where AI creates value — not generic advice, your business",
  "Deep audits with findings, keywords, checklists and a fix roadmap",
  "A consulting-grade report, free to start, in minutes",
];

const REEL_FRAMES: ReelFrame[] = [
  { line1: "WHAT IS YOUR", line2: "BUSINESS HIDING?" },
  { line1: "LEADS GOING COLD", sub: "est. $18K / mo leak" },
  { line1: "WHERE YOUR", line2: "AD SPEND LEAKS" },
  { line1: "CAN AI EVEN", line2: "FIND YOU?" },
  { line1: "FOUNDER IS THE", line2: "BOTTLENECK" },
  { line1: "NO MAP FOR", line2: "WHERE AI FITS" },
  { line1: "YOUR SITE IS", line2: "LOSING BUYERS" },
  { line1: "SYSTEMS LIVE IN", line2: "PEOPLE'S HEADS" },
  { line1: "SCORE: 46/100", sub: "below industry median" },
  { line1: "YOUR DIAGNOSIS ▶", isCta: true },
];

const TICKER_TEXT =
  "GROWTH · MARKET · OPERATIONS · TECHNOLOGY & AI · PEOPLE · WASTED AD SPEND · AI VISIBILITY · LEAD LEAKS · FOUNDER DEPENDENCY ·  ";

// ─── Sub-components ───────────────────────────────────────────────────────────

function ReelFrameEl({ frame, index }: { frame: ReelFrame; index: number }) {
  return (
    <div
      className={`nxk-frame${frame.isCta ? " nxk-frame-go" : ""}`}
      style={{ animationDelay: `${index * 2}s` }}
    >
      {frame.line1}
      {frame.line2 !== undefined && (
        <>
          <br />
          {frame.line2}
        </>
      )}
      {frame.sub && <span className="nxk-sub">{frame.sub}</span>}
    </div>
  );
}

function VintageTV() {
  return (
    <div className="nxk-right">
      <div className="nxk-tv">
        <div className="nxk-tv-screen">
          <div className="nxk-scan" aria-hidden="true" />
          <div className="nxk-noise" aria-hidden="true" />

          <div className="nxk-tv-top">
            <span className="nxk-rec">
              <i />
              LIVE
            </span>
            <span className="nxk-ch">CH 09 · KIWI</span>
          </div>

          <div className="nxk-reel">
            {REEL_FRAMES.map((frame, i) => (
              <ReelFrameEl key={i} frame={frame} index={i} />
            ))}
          </div>

          <div className="nxk-ticker">
            <div className="nxk-ticker-in">
              {TICKER_TEXT}
              {TICKER_TEXT}
            </div>
          </div>
        </div>

        <div className="nxk-tv-base">
          <div className="nxk-grille">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="nxk-knobs">
            <span />
            <span />
          </div>
        </div>
      </div>

      <p className="nxk-tv-cap">
        Trained on 5,119 real businesses across every industry
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NineXKiwiHomepageSection() {
  return (
    <section className="nxk-sec">
      <div className="nxk-wrap">
        {/* LEFT: copy */}
        <div className="nxk-left">
          <span className="nxk-kicker">
            NINEX<span className="nxk-kicker-x">KIWI</span>
          </span>

          <h2 className="nxk-head">
            Know exactly where your business is{" "}
            <span className="nxk-em">leaking</span> &mdash; and where{" "}
            <span className="nxk-em">AI</span> actually fits.
          </h2>

          <p className="nxk-body">
            Most businesses are not failing. They are leaking &mdash; demand,
            revenue, time, and clarity. Kiwi diagnoses your whole business
            across five pillars, benchmarks you against 5,119 real businesses,
            and shows you precisely what is stopping you from scaling and where
            AI belongs.
          </p>

          <ul className="nxk-list">
            {LIST_ITEMS.map((item) => (
              <li key={item}>
                <span className="nxk-tick">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <a href="https://ninexkiwi.in/" className="nxk-btn">
            Run your free diagnosis &nbsp;&rarr;
          </a>

          <p className="nxk-note">
            Free diagnostic &middot; no call required &middot; reserved for
            established businesses
          </p>
        </div>

        {/* RIGHT: vintage TV */}
        <VintageTV />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

        /* ── Tokens ── */
        .nxk-sec {
          --paper: #ffffff;
          --ink: #0a1733;
          --kiwi: #2f6bff;
          --kiwi-soft: #dbe6ff;
          --muted: #5b6781;
          --shadow: 5px 5px 0 var(--ink);
          background: var(--paper);
          color: var(--ink);
          font-family: 'Instrument Sans', system-ui, sans-serif;
          padding: 72px 28px;
          border-top: 1px solid #e6ebf5;
          border-bottom: 1px solid #e6ebf5;
          box-sizing: border-box;
        }
        .nxk-sec * { box-sizing: border-box; }

        /* ── Layout ── */
        .nxk-wrap {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1.05fr 0.95fr;
          gap: 54px; align-items: center;
        }

        /* ── Left / copy ── */
        .nxk-kicker {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 13px; letter-spacing: 0.22em; font-weight: 500;
          background: var(--ink); color: var(--paper);
          padding: 6px 14px; border: 2px solid var(--ink);
        }
        .nxk-kicker-x { color: var(--kiwi); }

        .nxk-head {
          font-family: 'Instrument Serif', Georgia, serif;
          font-weight: 400;
          font-size: clamp(30px, 4.2vw, 50px);
          line-height: 1.06; letter-spacing: -0.01em;
          margin: 22px 0 18px;
        }

        .nxk-em {
          font-style: italic;
          position: relative;
          color: #2f6bff;
        }
        .nxk-em::after {
          content: "";
          position: absolute; left: -2px; right: -2px; bottom: 0.06em;
          height: 0.30em;
          background: var(--kiwi-soft);
          z-index: -1;
        }

        .nxk-body {
          font-size: 16.5px; line-height: 1.65;
          color: #46506b; max-width: 30em; margin: 0 0 22px;
        }

        .nxk-list {
          list-style: none; padding: 0; margin: 0 0 28px;
          display: grid; gap: 11px;
        }
        .nxk-list li {
          font-size: 15px; line-height: 1.45;
          display: flex; gap: 11px; align-items: flex-start;
        }

        .nxk-tick {
          flex: 0 0 22px; height: 22px;
          display: grid; place-items: center;
          background: var(--kiwi); color: #fff;
          border: 1.5px solid var(--ink);
          font-size: 12px; font-weight: 700; margin-top: 1px;
        }

        .nxk-btn {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 14px; letter-spacing: 0.12em;
          text-transform: uppercase; font-weight: 500;
          text-decoration: none;
          background: var(--kiwi); color: #fff;
          padding: 15px 30px;
          border: 2px solid var(--ink);
          box-shadow: var(--shadow);
          transition: transform 0.08s ease, box-shadow 0.08s ease;
        }
        .nxk-btn:hover  { transform: translate(2px, 2px); box-shadow: 3px 3px 0 var(--ink); }
        .nxk-btn:active { transform: translate(5px, 5px); box-shadow: 0 0 0 var(--ink); }

        .nxk-note {
          font-family: 'DM Mono', monospace;
          font-size: 11.5px; letter-spacing: 0.04em;
          color: var(--muted); margin: 16px 0 0;
        }

        /* ── Right / TV ── */
        .nxk-right { display: flex; flex-direction: column; align-items: center; }

        .nxk-tv {
          width: 100%; max-width: 420px;
          background: #16140f; border: 2.5px solid var(--ink);
          box-shadow: 8px 8px 0 var(--ink);
          padding: 18px 18px 0;
          border-radius: 18px 18px 10px 10px;
        }

        .nxk-tv-screen {
          position: relative; aspect-ratio: 4 / 3;
          width: 100%; overflow: hidden;
          background: radial-gradient(120% 120% at 50% 40%, #10261a 0%, #0a1a12 55%, #050c08 100%);
          border: 3px solid #000; border-radius: 14px;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.85), inset 0 0 0 2px #1f3a28;
        }
        .nxk-tv-screen::after {
          content: ""; position: absolute; inset: 0; border-radius: 12px; pointer-events: none;
          background: radial-gradient(110% 80% at 50% 18%, rgba(255,255,255,0.10), transparent 55%);
        }

        .nxk-scan {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background: repeating-linear-gradient(
            to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,0.18) 3px
          );
        }
        .nxk-noise {
          position: absolute; inset: 0; z-index: 3; pointer-events: none; opacity: 0.05;
          background: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 3px 3px;
          animation: nxk-flick 0.2s steps(2) infinite;
        }
        @keyframes nxk-flick {
          0%   { opacity: 0.05; }
          50%  { opacity: 0.09; }
          100% { opacity: 0.04; }
        }

        .nxk-tv-top {
          position: absolute; top: 10px; left: 12px; right: 12px; z-index: 5;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em; color: #aef0c4;
        }
        .nxk-rec { display: flex; align-items: center; gap: 6px; color: #ff6b5e; }
        .nxk-rec i {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff5247; display: inline-block;
          animation: nxk-blink 1s steps(2) infinite;
        }
        @keyframes nxk-blink { 50% { opacity: 0.2; } }

        /* ── Reel ── */
        .nxk-reel { position: absolute; inset: 0; z-index: 4; }
        .nxk-frame {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          font-family: 'DM Mono', monospace; font-weight: 500;
          font-size: clamp(15px, 2.6vw, 21px);
          letter-spacing: 0.06em; line-height: 1.35;
          color: #cfe7ff;
          text-shadow: 0 0 12px rgba(110,210,255,0.55), 0 0 2px rgba(110,210,255,0.8);
          opacity: 0;
          animation: nxk-cycle 20s infinite;
        }
        .nxk-sub {
          display: block; margin-top: 10px;
          font-size: 11px; letter-spacing: 0.1em;
          color: #ffd27a; text-shadow: 0 0 10px rgba(255,180,60,0.5);
        }
        .nxk-frame-go {
          color: var(--kiwi);
          text-shadow: 0 0 14px rgba(205,224,90,0.7);
          font-size: clamp(16px, 2.8vw, 22px);
        }
        @keyframes nxk-cycle {
          0%   { opacity: 0; filter: brightness(2.4); transform: scale(1.02); }
          2%   { opacity: 1; filter: brightness(1);   transform: scale(1);    }
          9%   { opacity: 1; }
          11%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* ── Ticker ── */
        .nxk-ticker {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 5;
          height: 22px; overflow: hidden;
          background: rgba(0,0,0,0.55);
          border-top: 1px solid rgba(120,200,150,0.35);
          display: flex; align-items: center;
        }
        .nxk-ticker-in {
          white-space: nowrap;
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          color: #9fe6bd;
          animation: nxk-marq 22s linear infinite;
        }
        @keyframes nxk-marq {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── TV base ── */
        .nxk-tv-base {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 6px 16px;
        }
        .nxk-grille { display: flex; gap: 5px; }
        .nxk-grille i { width: 34px; height: 6px; background: #2a261d; border-radius: 3px; display: block; }
        .nxk-knobs { display: flex; gap: 12px; }
        .nxk-knobs span {
          width: 22px; height: 22px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #403a2c, #1a160f);
          border: 2px solid #000; display: block;
        }

        .nxk-tv-cap {
          font-family: 'DM Mono', monospace;
          font-size: 11.5px; letter-spacing: 0.06em;
          color: var(--muted); margin: 16px 0 0; text-align: center;
        }

        /* ── Responsive ── */

        /* Large desktop: 1280px+ */
        @media (min-width: 1280px) {
          .nxk-wrap { gap: 72px; }
          .nxk-head { font-size: 52px; }
          .nxk-body { font-size: 17px; }
        }

        /* Desktop: 1024px–1279px — default styles handle this */

        /* Small desktop / large tablet landscape: 900px–1023px */
        @media (max-width: 1023px) {
          .nxk-sec  { padding: 64px 32px; }
          .nxk-wrap { gap: 36px; }
          .nxk-tv   { max-width: 380px; }
          .nxk-head { font-size: clamp(26px, 3.6vw, 44px); }
          .nxk-body { font-size: 15.5px; max-width: 26em; }
          .nxk-list li { font-size: 14px; }
        }

        /* Tablet portrait: 641px–899px */
        @media (max-width: 899px) {
          .nxk-sec  { padding: 56px 28px; }
          .nxk-wrap {
            grid-template-columns: 1fr;
            gap: 44px;
            max-width: 620px;
          }
          .nxk-right { order: -1; width: 100%; }
          .nxk-tv   { max-width: 100%; }
          .nxk-tv-screen { aspect-ratio: 16 / 9; }
          .nxk-frame { font-size: clamp(18px, 3.2vw, 26px); }
          .nxk-head { font-size: clamp(28px, 5vw, 42px); margin: 18px 0 16px; }
          .nxk-body { font-size: 16px; max-width: 100%; }
          .nxk-list { max-width: 100%; }
          .nxk-list li { font-size: 15px; }
          .nxk-btn  { width: 100%; text-align: center; }
        }

        /* Large mobile: 481px–640px */
        @media (max-width: 640px) {
          .nxk-sec  { padding: 48px 20px; }
          .nxk-wrap { gap: 36px; max-width: 100%; }
          .nxk-kicker { font-size: 11px; letter-spacing: 0.16em; }
          .nxk-head { font-size: clamp(26px, 7vw, 36px); margin: 16px 0 14px; }
          .nxk-body { font-size: 15px; margin: 0 0 18px; }
          .nxk-list { gap: 9px; margin: 0 0 22px; }
          .nxk-list li { font-size: 14px; gap: 9px; }
          .nxk-tick { flex: 0 0 20px; height: 20px; font-size: 11px; }
          .nxk-btn  { font-size: 13px; padding: 14px 24px; letter-spacing: 0.09em; }
          .nxk-note { font-size: 11px; }
          .nxk-tv   { border-radius: 14px 14px 8px 8px; }
          .nxk-tv-screen { aspect-ratio: 4 / 3; }
          .nxk-frame { font-size: clamp(14px, 4.5vw, 20px); }
          .nxk-grille i { width: 26px; }
          .nxk-tv-cap { font-size: 10.5px; }
        }

        /* Small mobile: up to 480px */
        @media (max-width: 480px) {
          .nxk-sec  { padding: 40px 16px; }
          .nxk-head { font-size: clamp(22px, 8vw, 30px); line-height: 1.1; }
          .nxk-body { font-size: 14.5px; line-height: 1.6; }
          .nxk-list li { font-size: 13.5px; }
          .nxk-btn  {
            font-size: 12px; padding: 13px 20px;
            letter-spacing: 0.07em;
            box-shadow: 4px 4px 0 var(--ink);
          }
          .nxk-btn:hover  { box-shadow: 2px 2px 0 var(--ink); }
          .nxk-btn:active { box-shadow: 0 0 0 var(--ink); }
          .nxk-frame { font-size: clamp(13px, 5vw, 18px); letter-spacing: 0.04em; }
          .nxk-sub   { font-size: 10px; margin-top: 7px; }
          .nxk-ticker-in { font-size: 9px; }
          .nxk-grille i { width: 22px; height: 5px; }
          .nxk-knobs span { width: 18px; height: 18px; }
          .nxk-tv-cap { font-size: 10px; }
          --shadow: 4px 4px 0 var(--ink);
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .nxk-frame { animation: none; }
          .nxk-frame:first-child { opacity: 1; }
          .nxk-noise, .nxk-rec i, .nxk-ticker-in { animation: none; }
        }
      `}</style>
    </section>
  );
}