"use client";

import React from "react";
import {
  ArrowRight,
} from "lucide-react";

interface MetricGroup {
  icon: React.ReactNode;
  title: string;
  items: string[][];
  footerTitle?: string;
  footerText?: string;
  showArrow?: boolean;
}

interface ClientSuccessMetricsSectionProps {
  metricGroups: MetricGroup[];
}

export default function ClientSuccessMetricsSection({
  metricGroups,
}: ClientSuccessMetricsSectionProps) {
  return (
    <section
      className="w-full overflow-x-hidden bg-[#f2f1ef] py-3"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="mx-auto w-full max-w-[1220px] px-5 lg:px-0 mt-12 mb-12 lg:mt-20 lg:mb-20">
        <div className="w-full grid grid-cols-1 gap-[2px] border border-[#e6e6e3] bg-[#e6e6e3] sm:grid-cols-2 lg:grid-cols-[250px_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_60px]">
          <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden bg-[#f8f8f6] px-[22px] py-[22px] lg:min-h-[500px]">
            <h2 className="max-w-[220px] text-[26px] font-normal uppercase leading-[1.04] tracking-[-2px] text-[#0A1633]">
              CLIENT SUCCESS METRICS
            </h2>

            <div className="absolute right-[100px] top-[120px] h-[380px] w-px bg-[#0A1633]" />
            <div className="absolute right-[100px] top-[240px] h-px w-[90px] bg-[#0A1633]" />
            <div className="absolute right-[0px] top-[240px] w-[130px] rotate-[-45deg] border-t border-[#0A1633]" />

            <div className="max-w-[160px] space-y-1 pb-2 text-[12px] font-medium uppercase leading-[1.6] text-[#0A1633]">
              <p>MEASURED OUTCOMES</p>
              <p>ACROSS REVENUE,</p>
              <p>
                OPERATIONS, <span className="text-[#0A1633]/60">AND</span>
              </p>
              <p className="text-[#0A1633]/60">ADOPTION.</p>
            </div>
          </div>

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

          <div className="relative hidden min-h-[500px] overflow-hidden bg-[#f8f8f6] lg:block min-w-0">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#0A1633]" />

            <div className="absolute left-1/2 top-[70px] h-px w-[110px] -translate-x-1/2 bg-[#0A1633]" />
            <div className="absolute left-1/2 top-[70px] w-[110px] -translate-x-1/2 rotate-[-45deg] border-t border-[#0A1633]" />

            <div className="absolute bottom-[80px] left-1/2 h-px w-[110px] -translate-x-1/2 bg-[#0A1633]" />
            <div className="absolute bottom-[80px] left-1/2 w-[110px] -translate-x-1/2 rotate-[45deg] border-t border-[#0A1633]" />
          </div>
        </div>

        <div className="mt-[10px] w-full grid grid-cols-1 gap-[2px] border-x border-b border-[#e6e6e3] bg-[#e6e6e3] lg:grid-cols-[1.45fr_0.95fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-black lg:min-h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
              alt="Property"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 flex h-full flex-col justify-between px-[22px] py-[22px]">
              <div className="flex items-start gap-3 text-white">
                <div className="h-[38px] w-[38px] border-[5px] border-r-transparent border-white" />

                <div className="space-y-[2px] leading-none">
                  <p className="text-[11px] font-medium uppercase">SMART</p>
                  <p className="text-[11px] font-medium uppercase">INVEST</p>
                  <p className="text-[11px] font-medium uppercase">GROUP</p>
                </div>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <div className="h-[8px] w-[8px] bg-white" />
                    <p className="text-[13px] text-white">New development</p>
                  </div>

                  <h3 className="text-[34px] font-light leading-[0.95] tracking-[-2.5px] text-white sm:text-[42px]">
                    Old Country Hall
                  </h3>

                  <p className="mt-2 text-[22px] font-light leading-[1] tracking-[-1px] text-white/75 sm:text-[28px]">
                    Truro, Cornwall
                  </p>
                </div>

                <button className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 hover:bg-white hover:text-black">
                  <ArrowRight size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex min-h-[300px] min-w-0 flex-col justify-between overflow-hidden bg-[#f8f8f6] lg:min-h-[340px]">
            <div>
              <div className="px-[28px] pb-[18px] pt-[18px]">
                <div className="flex items-start gap-3">
                  <div className="h-[24px] w-[24px] border-[4px] border-r-transparent border-[#0A1633]" />

                  <div className="space-y-[2px] leading-none">
                    <p className="text-[10px] font-semibold uppercase text-[#0A1633]">SMART</p>
                    <p className="text-[10px] font-semibold uppercase text-[#0A1633]">INVEST*</p>
                    <p className="text-[10px] font-semibold uppercase text-[#0A1633]">GROUP</p>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-[#0A1633]/40" />

              <div className="px-[28px] py-[28px]">
                <p className="mb-5 text-[11px] uppercase tracking-wide text-[#0A1633]/70">
                  INSIGHT
                </p>

                <h3 className="max-w-[360px] text-[26px] font-normal leading-[1.15] tracking-[-1.5px] text-[#0A1633] sm:text-[32px]">
                  Why smart property investors should choose new-builds
                </h3>
              </div>
            </div>

            <div>
              <div className="h-px w-full bg-[#0A1633]/40" />

              <div className="px-[28px] py-[20px]">
                <p className="mb-1 text-[11px] uppercase text-[#0A1633]">
                  READ OUR LATEST
                </p>

                <p className="text-[10px] uppercase tracking-wide text-[#0A1633]/70">
                  PROPERTY INSIGHTS
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
    <div className="flex min-h-[420px] min-w-0 flex-col overflow-hidden bg-[#f8f8f6] px-[22px] py-[22px] lg:min-h-[500px]">
      <div className="mb-[24px] flex items-center gap-3">
        <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-[#0A1633] text-[#0A1633]">
          {icon}
        </div>

        <h3 className="text-[15px] font-normal tracking-[-0.3px] text-[#0A1633]">
          {title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          {items.map((item) => (
            <div
              key={item[0]}
              className="grid grid-cols-[52px_minmax(0,1fr)] gap-3 border-b border-[#e3e3df] py-[18px]"
            >
              <div className="whitespace-nowrap text-[22px] font-light leading-none tracking-[0px] text-[#0A1633]">
                {item[0]}
              </div>

              <p className="max-w-full break-words pt-1 text-[12px] leading-[1.4] text-[#0A1633]">
                {item[1]}
              </p>
            </div>
          ))}
        </div>

        {(footerTitle || footerText) && (
          <div className="flex items-end justify-between gap-3 pt-[18px]">
            <div>
              {footerTitle ? (
                <p className="mb-1 text-[10px] uppercase tracking-wide text-[#0A1633]">
                  {footerTitle}
                </p>
              ) : null}

              {footerText ? (
                <p className="text-[10px] uppercase tracking-wide text-[#0A1633]/70">
                  {footerText}
                </p>
              ) : null}
            </div>

            {showArrow ? (
              <button className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#0A1633]/30 text-[#0A1633] transition-all duration-300 hover:bg-[#0A1633] hover:text-white">
                <ArrowRight size={16} strokeWidth={1.5} />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}