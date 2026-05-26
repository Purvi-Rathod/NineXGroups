"use client";

import React from "react";
import {
  ArrowRight,
  Cloud,
  Shield,
  Infinity,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Cloud size={22} strokeWidth={1.5} />,
    title: "Infrastructure Performance",
    items: [
      ["99.99%", "average uptime for managed infrastructure"],
      ["40%", "average cost reduction vs. legacy systems"],
      ["10X", "improvement in deployment speed"],
      ["70%", "reduction in infrastructure incidents"],
    ],
    footerTitle: "HIGH AVAILABILITY",
    footerText: "SCALABLE. RELIABLE.",
    showArrow: true,
  },
  {
    icon: <Shield size={22} strokeWidth={1.5} />,
    title: "Security Posture",
    items: [
      ["0", "breaches for managed clients (5+ years)"],
      ["95%", "threat prevention rate"],
      ["99%", "vulnerability remediation within SLA"],
      ["100%", "compliance with regulatory requirements"],
    ],
    footerTitle: "ZERO TRUST",
    footerText: "SECURE. COMPLIANT.",
    showArrow: false,
  },
  {
    icon: <Infinity size={22} strokeWidth={1.5} />,
    title: "Development Velocity",
    items: [
      ["80%", "faster software deployment cycles"],
      ["60%", "reduction in production incidents"],
      ["50%", "improvement in developer productivity"],
      ["90%", "automation of repetitive tasks"],
    ],
    showArrow: false,
  },
];

export default function ClientSuccessMetricsSection() {
  return (
    <section className="w-full overflow-x-hidden bg-[#f6f4f8] py-3">
      <div className="mx-auto w-full max-w-full px-3 lg:px-0 mt-20 mb-20">
        {/* TOP GRID */}
        <div className="grid w-full grid-cols-1 gap-[2px] border border-[#e7e4ec] bg-[#e7e4ec] lg:grid-cols-[250px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_60px]">
          {/* LEFT INTRO */}
          <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-white px-[22px] py-[22px]">
            <h2 className="max-w-[220px] text-[26px] font-normal uppercase leading-[1.04] tracking-[-2px] text-[#0b0d39]">
              CLIENT SUCCESS METRICS
            </h2>

            {/* Purple Decorative Lines */}
            <div className="absolute right-[100px] top-[120px] h-[380px] w-px bg-[#8b5cf6]" />
            <div className="absolute right-[100px] top-[240px] h-px w-[90px] bg-[#8b5cf6]" />
            <div className="absolute right-[0px] top-[240px] w-[130px] rotate-[-45deg] border-t border-[#8b5cf6]" />

            <div className="max-w-[170px] space-y-1 pb-2 text-[12px] font-medium uppercase leading-[1.6] text-[#0b0d39]">
              <p>MEASURED OUTCOMES</p>
              <p>ACROSS INFRASTRUCTURE,</p>
              <p>
                SECURITY, <span className="text-[#8b5cf6]">AND</span>
              </p>
              <p className="text-[#8b5cf6]">DEVELOPMENT.</p>
            </div>
          </div>

          {/* METRIC CARDS */}
          {metricGroups.map((group) => (
            <MetricCard
              key={group.title}
              icon={group.icon}
              title={group.title}
              items={group.items}
              footerTitle={group.footerTitle}
              footerText={group.footerText}
              showArrow={group.showArrow}
            />
          ))}

          {/* RIGHT DECORATIVE */}
          <div className="relative hidden min-h-[500px] overflow-hidden bg-white lg:block min-w-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#8b5cf6]" />

            <div className="absolute left-1/2 top-[70px] h-px w-[110px] -translate-x-1/2 bg-[#8b5cf6]" />
            <div className="absolute left-1/2 top-[70px] w-[110px] -translate-x-1/2 rotate-[-45deg] border-t border-[#8b5cf6]" />

            <div className="absolute bottom-[80px] left-1/2 h-px w-[110px] -translate-x-1/2 bg-[#8b5cf6]" />
            <div className="absolute bottom-[80px] left-1/2 w-[110px] -translate-x-1/2 rotate-[45deg] border-t border-[#8b5cf6]" />
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-[10px] grid w-full grid-cols-1 gap-[2px] border-x border-b border-[#e7e4ec] bg-[#e7e4ec] lg:grid-cols-[1.45fr_0.95fr]">
          {/* IMAGE CARD */}
          <div className="relative min-h-[340px] overflow-hidden bg-black">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
              alt="Technology"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 flex h-full flex-col justify-between px-[22px] py-[22px]">
              <div className="flex items-start gap-3 text-white">
                <div className="h-[38px] w-[38px] rounded-full border-[5px] border-r-transparent border-[#8b5cf6]" />

                <div className="space-y-[2px] leading-none">
                  <p className="text-[11px] font-medium uppercase">NINEX</p>
                  <p className="text-[11px] font-medium uppercase">DEVOPS</p>
                  <p className="text-[11px] font-medium uppercase">GROUP</p>
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-[8px] w-[8px] bg-[#8b5cf6]" />
                    <p className="text-[13px] text-white">
                      Enterprise Infrastructure
                    </p>
                  </div>

                  <h3 className="text-[42px] font-light leading-[0.95] tracking-[-2.5px] text-white">
                    Modern Cloud Operations
                  </h3>

                  <p className="mt-2 text-[28px] font-light leading-[1] tracking-[-1px] text-white/75">
                    Built for scale & resilience
                  </p>
                </div>

                <button className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-black">
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT INSIGHT CARD */}
          <div className="flex min-h-[340px] min-w-0 flex-col justify-between overflow-hidden bg-white">
            <div>
              <div className="px-[28px] pb-[18px] pt-[18px]">
                <div className="flex items-start gap-3">
                  <div className="h-[24px] w-[24px] rounded-full border-[4px] border-r-transparent border-[#8b5cf6]" />

                  <div className="space-y-[2px] leading-none">
                    <p className="text-[10px] font-semibold uppercase">
                      NINEX
                    </p>
                    <p className="text-[10px] font-semibold uppercase">
                      DEVOPS
                    </p>
                    <p className="text-[10px] font-semibold uppercase">
                      GROUP
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-[#8b5cf6]/60" />

              <div className="px-[28px] py-[28px]">
                <p className="mb-5 text-[11px] uppercase tracking-wide text-[#8b5cf6]">
                  INSIGHT
                </p>

                <h3 className="max-w-[360px] text-[32px] font-normal leading-[1.15] tracking-[-1.5px] text-[#0b0d39]">
                  Why modern enterprises are investing in cloud-native DevOps
                  transformation
                </h3>
              </div>
            </div>

            <div>
              <div className="h-px w-full bg-[#8b5cf6]/60" />

              <div className="px-[28px] py-[20px]">
                <p className="mb-1 text-[11px] uppercase text-[#0b0d39]">
                  READ OUR LATEST
                </p>

                <p className="text-[10px] uppercase tracking-wide text-[#8b5cf6]">
                  TECHNOLOGY INSIGHTS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type MetricCardProps = {
  icon: React.ReactNode;
  title: string;
  items: string[][];
  footerTitle?: string;
  footerText?: string;
  showArrow?: boolean;
};

function MetricCard({
  icon,
  title,
  items,
  footerTitle,
  footerText,
  showArrow = false,
}: MetricCardProps) {
  return (
    <div className="flex min-h-[500px] min-w-0 flex-col overflow-hidden bg-white px-[22px] py-[22px]">
      {/* HEADER */}
      <div className="mb-[24px] flex items-center gap-3">
        <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#8b5cf6] text-[#8b5cf6]">
          {icon}
        </div>

        <h3 className="text-[15px] font-normal tracking-[-0.3px] text-[#0b0d39]">
          {title}
        </h3>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          {items.map((item) => (
            <div
              key={item[0]}
              className="grid grid-cols-[68px_minmax(0,1fr)] gap-3 border-b border-[#ece9f1] py-[18px]"
            >
              <div className="whitespace-nowrap text-[22px] font-light leading-none tracking-[0px] text-[#8b5cf6]">
                {item[0]}
              </div>

              <p className="max-w-full break-words pt-1 text-[12px] leading-[1.4] text-[#111827]">
                {item[1]}
              </p>
            </div>
          ))}
        </div>

        {(footerTitle || footerText) && (
          <div className="flex items-end justify-between gap-3 pt-[18px]">
            <div>
              {footerTitle ? (
                <p className="mb-1 text-[10px] uppercase tracking-wide text-[#0b0d39]">
                  {footerTitle}
                </p>
              ) : null}

              {footerText ? (
                <p className="text-[10px] uppercase tracking-wide text-[#8b5cf6]">
                  {footerText}
                </p>
              ) : null}
            </div>

            {showArrow ? (
              <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#8b5cf6]/40 text-[#8b5cf6] transition-all duration-300 hover:bg-[#8b5cf6] hover:text-white">
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}