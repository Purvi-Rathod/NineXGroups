"use client";

import {
  Rocket,
  Globe2,
  LineChart,
  BriefcaseBusiness,
  Radar,
  TrendingUp,
} from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f4f8] py-[60px] sm:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-10 xl:px-0">
      {/* Glow */}
      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#c084fc]/20 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        {/* TOP SECTION */}
        <div className="mb-[40px] grid grid-cols-1 gap-y-5 lg:mb-[60px] lg:grid-cols-12">
          {/* LEFT LABEL */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 pt-[4px] lg:pt-[10px]">
              <div className="h-[8px] w-[8px] bg-[#8b5cf6]" />

              <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[1.4px] text-[#8b5cf6]">
                What We Do
              </p>
            </div>
          </div>

          {/* HEADING */}
          <div className="lg:col-span-9 lg:ml-[100px]">
            <h2 className="max-w-[920px] text-[30px] leading-[1.08] tracking-[-1.5px] text-[#0b0d39] sm:text-[40px] sm:tracking-[-2px] md:text-[50px] lg:text-[64px] lg:tracking-[-3px]">
              NineXScale operates across
              <br className="hidden sm:block" />
              six strategic consulting areas
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {/* TEXT BLOCK */}
          <div className="flex min-h-[260px] flex-col justify-between px-[6px] py-[10px] sm:min-h-[320px]">
            <div>
              <p className="mb-8 max-w-[260px] text-[15px] leading-[1.9] text-[#1f2340] sm:text-[16px]">
                We help organizations scale globally through strategic
                consulting, market intelligence, investor readiness, and
                revenue growth systems designed for sustainable expansion.
              </p>
            </div>

            <p className="text-[15px] font-semibold leading-[1.9] text-[#7c3aed] sm:text-[16px]">
              One partner. Six strategies.
              <br />
              Endless scale.
            </p>
          </div>

          {/* CARD 1 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Rocket
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Go-To-Market Strategy
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Develop product-market fit, positioning, pricing, and channel
              strategies
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We help brands define scalable go-to-market frameworks that
              accelerate adoption and revenue growth.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Globe2
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Market Entry & Expansion
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Execute geographic expansion and new market entry strategies
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We enable organizations to enter and scale in competitive global
              markets with confidence.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <LineChart
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Business Expansion Planning
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Scale operations, M&A advisory, and global growth strategies
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We architect long-term expansion strategies that maximize
              operational and financial performance.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <BriefcaseBusiness
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Investor Relations
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Develop investor materials, financial models, and capital
              strategies
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We prepare businesses for fundraising, investor engagement, and
              strategic capital growth.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Radar
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Competitive Intelligence
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Continuous market research, competitor tracking, and strategic
              positioning
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We provide actionable insights that strengthen positioning and
              competitive advantage.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <TrendingUp
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Revenue Growth Architecture
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Design and optimize revenue operations and growth systems
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We build scalable revenue engines that align operations, sales,
              and growth initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}