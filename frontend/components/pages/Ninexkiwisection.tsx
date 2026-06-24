"use client";

import React from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ListItem {
  icon: string;
  text: string;
}

interface ReelFrame {
  line1: string;
  line2?: string;
  sub?: string;
  isCta?: boolean;
}

// ─── Static data ──────────────────────────────────────────────────────────────

const LIST_ITEMS: ListItem[] = [
  { icon: "◔", text: "Revenue & lead leaks costing you every month" },
  { icon: "⤧", text: "Workflow & operational inefficiencies" },
  { icon: "✶", text: "Where AI fits — and where it does not" },
  { icon: "↗", text: "What is really capping your ability to scale" },
];

const REEL_FRAMES: ReelFrame[] = [
  { line1: "WHAT IS SLOWING", line2: "YOUR BUSINESS?" },
  { line1: "LEADS GOING COLD", line2: "", sub: "est. $18K / mo leak" },
  { line1: "WHERE YOUR", line2: "AD SPEND LEAKS" },
  { line1: "CAN AI EVEN", line2: "FIND YOU?" },
  { line1: "FOUNDER IS THE", line2: "BOTTLENECK" },
  { line1: "NO MAP FOR", line2: "WHERE AI FITS" },
  { line1: "YOUR SITE IS", line2: "LOSING BUYERS" },
  { line1: "SYSTEMS LIVE IN", line2: "PEOPLE'S HEADS" },
  { line1: "SCORE: 46/100", line2: "", sub: "below industry median" },
  { line1: "YOUR DIAGNOSIS ▶", isCta: true },
];

const TICKER_TEXT =
  "GROWTH · MARKET · OPERATIONS · TECHNOLOGY & AI · PEOPLE · WASTED AD SPEND · AI VISIBILITY · LEAD LEAKS · FOUNDER DEPENDENCY ·  ";

// ─── Sub-components ───────────────────────────────────────────────────────────

function ReelFrameEl({ frame, index }: { frame: ReelFrame; index: number }) {
  return (
    <div
      className={`nxa-frame${frame.isCta ? " nxa-frame-go" : ""}`}
      style={{ animationDelay: `${index * 2}s` }}
    >
      {frame.line1}
      {frame.line2 !== undefined && (
        <>
          <br />
          {frame.line2}
        </>
      )}
      {frame.sub && <span className="nxa-sub">{frame.sub}</span>}
    </div>
  );
}

function VintageTV() {
  return (
    <div className="nxa-right">
      <div className="nxa-tv">
        <div className="nxa-tv-screen">
          <div className="nxa-scan" aria-hidden="true" />
          <div className="nxa-noise" aria-hidden="true" />

          <div className="nxa-tv-top">
            <span className="nxa-rec">
              <i />
              LIVE
            </span>
            <span className="nxa-ch">CH 09 · KIWI</span>
          </div>

          <div className="nxa-reel">
            {REEL_FRAMES.map((frame, i) => (
              <ReelFrameEl key={i} frame={frame} index={i} />
            ))}
          </div>

          <div className="nxa-ticker">
            <div className="nxa-ticker-in">
              {TICKER_TEXT}
              {TICKER_TEXT}
            </div>
          </div>
        </div>

        {/* TV body */}
        <div className="nxa-tv-base">
          <div className="nxa-grille">
            {Array.from({ length: 5 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <div className="nxa-knobs">
            <span />
            <span />
          </div>
        </div>
      </div>

      <p className="nxa-tv-cap">
        Trained on 5,119 real businesses across every industry
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function NineXKiwiSection() {
  return (
    <section className="nxa-sec">
      {/* Background layers */}
      <div className="nxa-bg" aria-hidden="true">
        <span className="nxa-glow nxa-glow-1" />
        <span className="nxa-glow nxa-glow-2" />
        <span className="nxa-grid" />
      </div>

      <div className="nxa-wrap">
        {/* LEFT: copy */}
        <div className="nxa-left">
          <span className="nxa-kicker">
            REAL-TIME BUSINESS DIAGNOSIS · BY{" "}
            <strong>NINEXKIWI</strong>
          </span>

          <h2 className="nxa-head">
            Know what&rsquo;s slowing your business down.
          </h2>

          <p className="nxa-body">
            Kiwi runs a real-time diagnosis of your whole business &mdash;
            revenue leaks, workflow gaps, automation blind spots, and where AI
            actually belongs. Answer a few questions and get a consulting-grade
            report, benchmarked against 5,119 real businesses, in minutes.
          </p>

          <ul className="nxa-list">
            {LIST_ITEMS.map((item) => (
              <li key={item.text}>
                <span className="nxa-ic">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>

          <a href="https://ninex-group.com/" className="nxa-btn">
            Run my free diagnosis&nbsp;&nbsp;&rarr;
          </a>

          <p className="nxa-note">
            <span className="nxa-spark">✦</span> AI-powered business diagnosis
            in minutes. Free to start.
          </p>
        </div>

        {/* RIGHT: vintage TV */}
        <VintageTV />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        /* ── Theme tokens ── */
        .nxa-sec {
          --ink: #0a1733;
          --blue: #2f6bff;
          --blue-soft: #dbe6ff;
          --muted: #5b6781;
          position: relative;
          overflow: hidden;
          background: #f4f7fc;
          color: var(--ink);
          font-family: 'Instrument Sans', system-ui, sans-serif;
          padding: 84px 28px;
          box-sizing: border-box;
        }
        .nxa-sec * { box-sizing: border-box; }

        /* ── Background ── */
        .nxa-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .nxa-glow {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.55;
        }
        .nxa-glow-1 {
          width: 520px; height: 520px; left: -120px; top: -160px;
          background: radial-gradient(circle, #cfe0ff 0%, transparent 70%);
        }
        .nxa-glow-2 {
          width: 560px; height: 560px; right: -140px; bottom: -200px;
          background: radial-gradient(circle, #e3ecff 0%, transparent 70%);
        }
        .nxa-grid {
          position: absolute; inset: 0; opacity: 0.5;
          background-image:
            linear-gradient(#dfe6f3 1px, transparent 1px),
            linear-gradient(90deg, #dfe6f3 1px, transparent 1px);
          background-size: 44px 44px;
          -webkit-mask-image: radial-gradient(120% 90% at 50% 30%, #000 0%, transparent 75%);
                  mask-image: radial-gradient(120% 90% at 50% 30%, #000 0%, transparent 75%);
        }

        /* ── Layout ── */
        .nxa-wrap {
          position: relative; z-index: 1;
          max-width: 1220px; margin: 0 auto;
          display: grid; grid-template-columns: 1.05fr 0.95fr;
          gap: 54px; align-items: center;
        }

        /* ── Left / copy ── */
        .nxa-kicker {
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 12px; letter-spacing: 0.18em;
          font-weight: 500; color: var(--blue);
        }
        .nxa-kicker strong { color: var(--ink); font-weight: 700; }

        .nxa-head {
          font-family: 'Instrument Sans', system-ui, sans-serif;
          font-weight: 600;
          font-size: clamp(32px, 4.6vw, 54px);
          line-height: 1.03; letter-spacing: -0.025em;
          margin: 18px 0; color: var(--ink);
        }

        .nxa-body {
          font-size: 16.5px; line-height: 1.65;
          color: var(--muted); max-width: 32em; margin: 0 0 26px;
        }

        .nxa-list {
          list-style: none; padding: 0; margin: 0 0 30px;
          display: grid; gap: 14px; max-width: 30em;
        }
        .nxa-list li {
          font-size: 15.5px; line-height: 1.4;
          display: flex; gap: 13px; align-items: center;
          padding-bottom: 13px;
          border-bottom: 1px solid #e4eaf4; color: #23304d;
        }
        .nxa-list li:last-child { border-bottom: 0; padding-bottom: 0; }

        .nxa-ic {
          flex: 0 0 30px; height: 30px;
          display: grid; place-items: center; border-radius: 50%;
          background: var(--blue-soft); color: var(--blue); font-size: 14px;
        }

        .nxa-btn {
          display: inline-block;
          font-family: 'Instrument Sans', sans-serif;
          font-size: 15px; font-weight: 600; letter-spacing: 0.01em;
          text-decoration: none;
          background: var(--ink); color: #fff;
          padding: 16px 32px; border-radius: 0;
          transition: transform 0.12s ease;
        }
        .nxa-btn:hover { transform: translateY(-2px); }

        .nxa-note {
          font-size: 13px; color: var(--muted);
          margin: 18px 0 0; display: flex; align-items: center; gap: 8px;
        }
        .nxa-spark { color: #ff8a3d; font-size: 14px; }

        /* ── Right / TV ── */
        .nxa-right { display: flex; flex-direction: column; align-items: center; }

        .nxa-tv {
          width: 100%; max-width: 430px;
          background: #16140f; border: 2.5px solid #0a0a0a;
          box-shadow: 14px 16px 40px rgba(10,23,51,0.28);
          padding: 18px 18px 0;
          border-radius: 18px 18px 10px 10px;
        }

        .nxa-tv-screen {
          position: relative; aspect-ratio: 4 / 3;
          width: 100%; overflow: hidden;
          background: radial-gradient(120% 120% at 50% 40%, #10261a 0%, #0a1a12 55%, #050c08 100%);
          border: 3px solid #000; border-radius: 14px;
          box-shadow: inset 0 0 60px rgba(0,0,0,0.85), inset 0 0 0 2px #1f3a28;
        }
        .nxa-tv-screen::after {
          content: ""; position: absolute; inset: 0; border-radius: 12px; pointer-events: none;
          background: radial-gradient(110% 80% at 50% 18%, rgba(255,255,255,0.10), transparent 55%);
        }

        .nxa-scan {
          position: absolute; inset: 0; pointer-events: none; z-index: 4;
          background: repeating-linear-gradient(
            to bottom, rgba(0,0,0,0) 0, rgba(0,0,0,0) 2px, rgba(0,0,0,0.18) 3px
          );
        }
        .nxa-noise {
          position: absolute; inset: 0; z-index: 3; pointer-events: none; opacity: 0.05;
          background: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px);
          background-size: 3px 3px;
          animation: nxa-flick 0.2s steps(2) infinite;
        }
        @keyframes nxa-flick {
          0%   { opacity: 0.05; }
          50%  { opacity: 0.09; }
          100% { opacity: 0.04; }
        }

        .nxa-tv-top {
          position: absolute; top: 10px; left: 12px; right: 12px; z-index: 5;
          display: flex; justify-content: space-between; align-items: center;
          font-family: 'DM Mono', monospace; font-size: 10px;
          letter-spacing: 0.14em; color: #aef0c4;
        }
        .nxa-rec { display: flex; align-items: center; gap: 6px; color: #ff6b5e; }
        .nxa-rec i {
          width: 8px; height: 8px; border-radius: 50%;
          background: #ff5247; display: inline-block;
          animation: nxa-blink 1s steps(2) infinite;
        }
        @keyframes nxa-blink { 50% { opacity: 0.2; } }

        /* ── Reel ── */
        .nxa-reel { position: absolute; inset: 0; z-index: 4; }
        .nxa-frame {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          font-family: 'DM Mono', monospace; font-weight: 500;
          font-size: clamp(15px, 2.6vw, 21px);
          letter-spacing: 0.06em; line-height: 1.35;
          color: #cfe7ff;
          text-shadow: 0 0 12px rgba(110,210,255,0.55), 0 0 2px rgba(110,210,255,0.8);
          opacity: 0;
          animation: nxa-cycle 20s infinite;
        }
        .nxa-sub {
          display: block; margin-top: 10px;
          font-size: 11px; letter-spacing: 0.1em;
          color: #ffd27a; text-shadow: 0 0 10px rgba(255,180,60,0.5);
        }
        .nxa-frame-go {
          color: #CDE05A;
          text-shadow: 0 0 14px rgba(205,224,90,0.7);
          font-size: clamp(16px, 2.8vw, 22px);
        }
        @keyframes nxa-cycle {
          0%   { opacity: 0; filter: brightness(2.4); transform: scale(1.02); }
          2%   { opacity: 1; filter: brightness(1);   transform: scale(1);    }
          9%   { opacity: 1; }
          11%  { opacity: 0; }
          100% { opacity: 0; }
        }

        /* ── Ticker ── */
        .nxa-ticker {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 5;
          height: 22px; overflow: hidden;
          background: rgba(0,0,0,0.55);
          border-top: 1px solid rgba(120,200,150,0.35);
          display: flex; align-items: center;
        }
        .nxa-ticker-in {
          white-space: nowrap;
          font-family: 'DM Mono', monospace;
          font-size: 10px; letter-spacing: 0.12em;
          color: #9fe6bd;
          animation: nxa-marq 22s linear infinite;
        }
        @keyframes nxa-marq {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        /* ── TV base ── */
        .nxa-tv-base {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 6px 16px;
        }
        .nxa-grille { display: flex; gap: 5px; }
        .nxa-grille i { width: 34px; height: 6px; background: #2a261d; border-radius: 3px; display: block; }
        .nxa-knobs { display: flex; gap: 12px; }
        .nxa-knobs span {
          width: 22px; height: 22px; border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, #403a2c, #1a160f);
          border: 2px solid #000; display: block;
        }
        .nxa-tv-cap {
          font-family: 'DM Mono', monospace;
          font-size: 11.5px; letter-spacing: 0.06em;
          color: var(--muted); margin: 16px 0 0; text-align: center;
        }

        /* ═══════════════════════════════════════════
           RESPONSIVE — mobile-first breakpoints
           ─────────────────────────────────────────
           320px  → xs  (small phone)
           480px  → sm  (large phone)
           640px  → md  (large phone / small tablet)
           900px  → lg  (tablet portrait / small desktop)
           1024px → xl  (desktop)
           1280px → 2xl (large desktop)
        ═══════════════════════════════════════════ */

        /* ── xs: 320–479px (small phones) ── */
        @media (max-width: 479px) {
          .nxa-sec  { padding: 40px 16px; }
          .nxa-wrap { grid-template-columns: 1fr; gap: 32px; }
          .nxa-right { order: -1; width: 100%; }
          .nxa-tv   { max-width: 100%; border-radius: 14px 14px 8px 8px; padding: 14px 14px 0; }
          .nxa-tv-screen { aspect-ratio: 4 / 3; border-radius: 10px; }
          .nxa-frame { font-size: clamp(12px, 5.5vw, 17px); letter-spacing: 0.03em; padding: 0 10px; }
          .nxa-frame-go { font-size: clamp(13px, 5.5vw, 18px); }
          .nxa-sub  { font-size: 9px; margin-top: 6px; }
          .nxa-tv-top { font-size: 9px; top: 8px; left: 10px; right: 10px; }
          .nxa-rec i { width: 6px; height: 6px; }
          .nxa-ticker { height: 18px; }
          .nxa-ticker-in { font-size: 8px; letter-spacing: 0.08em; }
          .nxa-grille i { width: 20px; height: 5px; }
          .nxa-knobs { gap: 8px; }
          .nxa-knobs span { width: 16px; height: 16px; }
          .nxa-tv-base { padding: 10px 4px 12px; }
          .nxa-tv-cap { font-size: 9.5px; margin: 12px 0 0; }

          .nxa-kicker { font-size: 10px; letter-spacing: 0.12em; }
          .nxa-head { font-size: clamp(24px, 8.5vw, 32px); margin: 14px 0; }
          .nxa-body { font-size: 14px; line-height: 1.6; margin: 0 0 20px; }
          .nxa-list { gap: 10px; margin: 0 0 22px; max-width: 100%; }
          .nxa-list li { font-size: 13.5px; gap: 10px; padding-bottom: 10px; }
          .nxa-ic   { flex: 0 0 26px; height: 26px; font-size: 12px; }
          .nxa-btn  { font-size: 13px; padding: 13px 20px; width: 100%; text-align: center; }
          .nxa-note { font-size: 11px; margin: 14px 0 0; }
          .nxa-spark { font-size: 12px; }
          .nxa-glow-1 { width: 260px; height: 260px; }
          .nxa-glow-2 { width: 280px; height: 280px; }
        }

        /* ── sm: 480–639px (large phones) ── */
        @media (min-width: 480px) and (max-width: 639px) {
          .nxa-sec  { padding: 48px 20px; }
          .nxa-wrap { grid-template-columns: 1fr; gap: 36px; }
          .nxa-right { order: -1; width: 100%; }
          .nxa-tv   { max-width: 100%; border-radius: 16px 16px 9px 9px; }
          .nxa-tv-screen { aspect-ratio: 4 / 3; }
          .nxa-frame { font-size: clamp(14px, 4.5vw, 19px); }
          .nxa-frame-go { font-size: clamp(15px, 4.5vw, 20px); }
          .nxa-sub  { font-size: 10px; }
          .nxa-ticker-in { font-size: 9px; }
          .nxa-grille i { width: 24px; height: 5px; }
          .nxa-knobs span { width: 18px; height: 18px; }
          .nxa-tv-cap { font-size: 10px; }

          .nxa-kicker { font-size: 11px; letter-spacing: 0.14em; }
          .nxa-head { font-size: clamp(26px, 7.5vw, 36px); margin: 15px 0; }
          .nxa-body { font-size: 15px; margin: 0 0 20px; max-width: 100%; }
          .nxa-list { max-width: 100%; margin: 0 0 24px; }
          .nxa-list li { font-size: 14px; }
          .nxa-btn  { font-size: 14px; padding: 14px 26px; width: 100%; text-align: center; }
          .nxa-note { font-size: 12px; }
          .nxa-glow-1 { width: 320px; height: 320px; }
          .nxa-glow-2 { width: 340px; height: 340px; }
        }

        /* ── md: 640–899px (small tablets / large phones landscape) ── */
        @media (min-width: 640px) and (max-width: 899px) {
          .nxa-sec  { padding: 56px 28px; }
          .nxa-wrap { grid-template-columns: 1fr; gap: 40px; max-width: 600px; }
          .nxa-right { order: -1; width: 100%; }
          .nxa-tv   { max-width: 100%; }
          .nxa-tv-screen { aspect-ratio: 16 / 9; }
          .nxa-frame { font-size: clamp(16px, 3.2vw, 22px); }
          .nxa-frame-go { font-size: clamp(17px, 3.4vw, 23px); }
          .nxa-ticker-in { font-size: 10px; }

          .nxa-head { font-size: clamp(28px, 5.5vw, 40px); }
          .nxa-body { font-size: 15.5px; max-width: 100%; }
          .nxa-list { max-width: 100%; }
          .nxa-list li { font-size: 14.5px; }
          .nxa-btn  { font-size: 14.5px; padding: 15px 28px; }
          .nxa-glow-1 { width: 380px; height: 380px; }
          .nxa-glow-2 { width: 400px; height: 400px; }
        }

        /* ── lg: 900–1023px (tablet landscape / small desktop) ── */
        @media (min-width: 900px) and (max-width: 1023px) {
          .nxa-sec  { padding: 64px 32px; }
          .nxa-wrap { gap: 36px; }
          .nxa-tv   { max-width: 380px; }
          .nxa-head { font-size: clamp(28px, 3.8vw, 44px); }
          .nxa-body { font-size: 15.5px; max-width: 28em; }
          .nxa-list { max-width: 26em; }
          .nxa-list li { font-size: 14.5px; }
          .nxa-frame { font-size: clamp(14px, 2.2vw, 19px); }
        }

        /* ── xl: 1024–1279px (desktop) — base styles handle this ── */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .nxa-wrap { gap: 48px; }
          .nxa-tv   { max-width: 410px; }
        }

        /* ── 2xl: 1280px+ (large desktop) ── */
        @media (min-width: 1280px) {
          .nxa-wrap { gap: 72px; }
          .nxa-head { font-size: 54px; }
          .nxa-body { font-size: 17px; }
          .nxa-list li { font-size: 16px; }
          .nxa-glow-1 { width: 620px; height: 620px; }
          .nxa-glow-2 { width: 660px; height: 660px; }
        }

        /* ── Reduced motion ── */
        @media (prefers-reduced-motion: reduce) {
          .nxa-frame { animation: none; }
          .nxa-frame:first-child { opacity: 1; }
          .nxa-noise, .nxa-rec i, .nxa-ticker-in { animation: none; }
        }
      `}</style>
    </section>
  );
}