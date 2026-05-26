"use client";

import {
  Cloud,
  BrainCircuit,
  Shield,
  Code2,
  Infinity,
  Network,
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
              NineXDevOps operates across
              <br className="hidden sm:block" />
              six specialized technology domains
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {/* TEXT BLOCK */}
          <div className="flex min-h-[260px] flex-col justify-between px-[6px] py-[10px] sm:min-h-[320px]">
            <div>
              <p className="mb-8 max-w-[260px] text-[15px] leading-[1.9] text-[#1f2340] sm:text-[16px]">
                We help organizations accelerate transformation and achieve
                operational excellence through modern technology solutions and
                proven delivery frameworks.
              </p>
            </div>

            <p className="text-[15px] font-semibold leading-[1.9] text-[#7c3aed] sm:text-[16px]">
              One partner. Six domains.
              <br />
              Endless impact.
            </p>
          </div>

          {/* CARD 1 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Cloud
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Cloud & Infrastructure
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Architect and migrate to multi-cloud platforms optimized for
              performance, cost, and resilience
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We design, build, and manage secure, scalable cloud
              infrastructures that empower business agility.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <BrainCircuit
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              AI & Generative AI
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Implement enterprise AI solutions from strategy through
              production deployment
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We help organizations unlock AI potential with scalable and
              responsible deployment.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Shield
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Cybersecurity
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Build Zero Trust architectures and operate 24/7 security
              operations centers
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              Protect digital assets with proactive security and rapid incident
              response.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Code2
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Digital Engineering
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Design and build digital products, platforms, and experiences
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We deliver user-centric digital solutions that drive innovation
              and growth.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Infinity
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              DevOps & Automation
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Implement CI/CD pipelines, infrastructure-as-code, and SRE
              practices
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We enable faster delivery and reliability through automation and
              observability.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
            <div className="mb-[24px]">
              <Network
                strokeWidth={1.5}
                className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
              />
            </div>

            <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
              Networks & Digital Workspace
            </h3>

            <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
              Modernize network infrastructure and deploy digital workplace
              solutions
            </p>

            <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
              We create seamless, secure, and high-performance connectivity for
              modern teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}