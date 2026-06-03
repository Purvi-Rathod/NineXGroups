"use client";

import {
  Database,
  Workflow,
  Route,
  Headphones,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

const routes = {
  crm: "/ninexConnectBrand/crm-implementation",
  sales: "/ninexConnectBrand/sales-automation",
  journey: "/ninexConnectBrand/customer-journey-design",
  contact: "/ninexConnectBrand/contact-center-solutions",
  marketing: "/ninexConnectBrand/marketing-platforms",
};

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f4f8] py-[60px] sm:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-10 xl:px-0">
      {/* Glow */}
      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#22D3EE]/20 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        {/* TOP SECTION */}
        <div className="mb-[40px] grid grid-cols-1 gap-y-5 lg:mb-[60px] lg:grid-cols-12">
          {/* LEFT LABEL */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 pt-[4px] lg:pt-[10px]">
              <div className="h-[8px] w-[8px] bg-[#22D3EE]" />

              <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[1.4px] text-[#22D3EE]">
                What We Do
              </p>
            </div>
          </div>

          {/* HEADING */}
          <div className="lg:col-span-9 lg:ml-[100px]">
            <h2 className="max-w-[920px] text-[30px] leading-[1.08] tracking-[-1.5px] text-[#0b0d39] sm:text-[40px] sm:tracking-[-2px] md:text-[50px] lg:text-[64px] lg:tracking-[-3px]">
              NineXConnect delivers customer experience
              <br className="hidden sm:block" />
              and sales transformation
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {/* TEXT BLOCK */}
          <div className="flex min-h-[260px] flex-col justify-between px-[6px] py-[10px] sm:min-h-[320px]">
            <div>
              <p className="mb-8 max-w-[260px] text-[15px] leading-[1.9] text-[#1f2340] sm:text-[16px]">
                We create connected customer experiences through CRM systems,
                AI-powered support, marketing automation, and revenue
                acceleration platforms that unify every touchpoint.
              </p>
            </div>

            <p className="text-[15px] font-semibold leading-[1.9] text-[#22D3EE] sm:text-[16px]">
              Connected journeys.
              <br />
              Accelerated growth.
            </p>
          </div>

          {/* CARD 1 */}
          <Link href={routes.crm} className="block h-full">
            <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Database
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]"
                />
              </div>

              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                CRM Implementation
              </h3>

              <p className="mb-5 text-[14px] leading-[1.8] text-[#22D3EE] sm:text-[15px]">
                Deploy Salesforce, Microsoft Dynamics, HubSpot, and custom CRM
                solutions
              </p>

              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement scalable CRM ecosystems that centralize customer
                data, automate engagement, and accelerate revenue growth.
              </p>
            </div>
          </Link>

          {/* CARD 2 */}
          <Link href={routes.sales} className="block h-full">
            <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Workflow
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]"
                />
              </div>

              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Sales Automation
              </h3>

              <p className="mb-5 text-[14px] leading-[1.8] text-[#22D3EE] sm:text-[15px]">
                Automate sales workflows, implement CPQ, and deploy revenue
                intelligence
              </p>

              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We streamline sales operations with automation systems that
                improve efficiency, forecasting, and conversion rates.
              </p>
            </div>
          </Link>

          {/* CARD 3 */}
          <Link href={routes.journey} className="block h-full">
            <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Route
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]"
                />
              </div>

              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Customer Journey Design
              </h3>

              <p className="mb-5 text-[14px] leading-[1.8] text-[#22D3EE] sm:text-[15px]">
                Map journeys, design experiences, and orchestrate omnichannel
                touchpoints
              </p>

              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We design frictionless customer journeys that increase
                engagement, retention, and lifetime value.
              </p>
            </div>
          </Link>

          {/* CARD 4 */}
          <Link href={routes.contact} className="block h-full">
            <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Headphones
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]"
                />
              </div>

              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Contact Center Solutions
              </h3>

              <p className="mb-5 text-[14px] leading-[1.8] text-[#22D3EE] sm:text-[15px]">
                Deploy cloud contact centers with AI-powered automation and
                analytics
              </p>

              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We modernize customer support operations with AI-driven contact
                center experiences and intelligent analytics.
              </p>
            </div>
          </Link>

          {/* CARD 5 */}
          <Link href={routes.marketing} className="block h-full">
            <div className="min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Megaphone
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]"
                />
              </div>

              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Marketing Platforms
              </h3>

              <p className="mb-5 text-[14px] leading-[1.8] text-[#22D3EE] sm:text-[15px]">
                Implement marketing clouds, personalization engines, and customer
                data platforms
              </p>

              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We create connected marketing ecosystems that deliver personalized
                engagement across every digital channel.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}