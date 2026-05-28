"use client";
import Link from "next/link";

export default function WhatWeDoSection() {
  return (
    <div className="min-h-screen bg-[#f7f5f3] px-4 sm:px-5 md:px-8 lg:px-12 xl:px-14 py-[40px] md:py-[56px]">
      <div className="w-full max-w-[1220px] mx-auto">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 gap-0 mb-[42px] lg:mb-[58px]">
          <div className="lg:col-span-3 flex items-start pt-[4px] lg:pt-[10px]">
            <div className="flex items-center gap-2">
              <div className="w-[8px] h-[8px] bg-[#ff5a1f]" />
              <p className="text-[13px] tracking-[1.4px] font-semibold text-[#ff5a1f] uppercase">
                What We Do
              </p>
            </div>
          </div>

          <div className="lg:col-span-9 lg:ml-[100px]">
            <h2 className="max-w-full lg:max-w-[760px] text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-2.4px] font-normal text-black">
              NineXFold brings together strategy, architecture,
              implementation, and optimization services across six core
              practice areas:
            </h2>
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[8px] lg:gap-[6px] bg-transparent">
          {/* CARD 1 */}
          <div className="h-full px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] text-black mb-8">
              NineXFold — Enterprise Marketing
            </p>

            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2.05] text-[#343434] mb-10 max-w-[240px]">
              We bring together brand strategy, demand generation, search
              visibility, content authority, and AI-powered growth systems to
              help businesses scale faster, market smarter, and win
              consistently.
            </p>

            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] font-semibold text-black">
              One partner. Eight practice areas.
              <br />
              Endless impact.
            </p>
          </div>

          {/* CARD 2 */}
          <Link href="/ninexFoldServices/revenue-systems" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                  <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                Revenue Systems
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Architect revenue operations infrastructure that forecasts
                accurately, prices optimally, and scales efficiently
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We design marketing-led revenue systems that unify brand,
                demand, and data — creating predictable growth engines that
                convert attention into pipeline and pipeline into revenue.
              </p>
            </div>
          </Link>

          {/* CARD 3 */}
          <Link href="/ninexFoldServices/sales-systems" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] relative flex items-center">
                <div className="w-full border-t border-[#ff5a1f]" />
                <div className="absolute right-0 text-[#ff5a1f] text-[18px] lg:text-[20px]">
                  →
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                Sales Systems
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Deploy marketing automation and lead infrastructure that
                accelerates pipeline velocity and increases win rates
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We build performance marketing funnels, lead nurture sequences,
                and CRM-connected campaigns that streamline the buyer journey,
                improve engagement, and boost conversion at every stage.
              </p>
            </div>
          </Link>

          {/* CARD 4 */}
          <Link href="/ninexFoldServices/marketing-systems" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center justify-between">
                <div className="w-[40px] h-[1px] bg-[#cccccc]" />
                <div className="w-[50px] h-[50px] rounded-full border border-[#ff5a1f]" />
                <div className="text-[#bbbbbb] text-[18px] lg:text-[20px]">→</div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                Marketing Systems
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Deploy marketing technology stacks that generate demand,
                nurture leads, and prove ROI
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We help you attract the right audience with paid media, SEO,
                email automation, and content strategy — then measure what truly
                drives growth through attribution and analytics.
              </p>
            </div>
          </Link>

          {/* CARD 5 */}
          <Link href="/ninexFoldServices/brand-intelligence-system" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] relative flex items-center">
                <div className="w-full border-t border-[#ff5a1f]" />
                <div className="absolute right-0 text-[#ff5a1f] text-[18px] lg:text-[20px]">
                  →
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                BRAND INTELLIGENCE SYSTEM
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Define, position, and operationalise your brand as a strategic
                enterprise asset
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We architect your complete brand foundation — from naming and
                identity systems to messaging frameworks, market positioning,
                and go-to-market strategy — so every touchpoint communicates
                one consistent, powerful story.
              </p>
            </div>
          </Link>

          {/* CARD 6 */}
          <Link href="/ninexFoldServices/demand-generation-system" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-end gap-4">
                <div className="w-[2px] h-[20px] bg-[#ff5a1f]" />
                <div className="w-[2px] h-[34px] bg-[#ff5a1f]" />
                <div className="w-[2px] h-[48px] bg-[#ff5a1f]" />
                <div className="w-[2px] h-[64px] bg-[#ff5a1f]" />
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                DEMAND GENERATION SYSTEM
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Build a full-funnel demand engine that fills pipeline and
                converts leads at enterprise scale
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We deploy paid media, ABM targeting, funnel infrastructure,
                email nurture flows, and marketing automation — creating a
                revenue-ready demand machine that consistently delivers
                qualified pipeline and measurable growth.
              </p>
            </div>
          </Link>

          {/* CARD 7 */}
          <Link href="/ninexFoldServices/search-visibility-system" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px] col-span-1">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                  <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                SEARCH VISIBILITY SYSTEM
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Dominate organic, AI, and local search through SEO, AEO, and
                GEO strategies
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We engineer your presence across every search surface —
                traditional rankings via technical and content SEO, featured
                snippets and AI overviews via AEO, and generative AI platforms
                like ChatGPT and Perplexity via GEO — so your brand is found
                everywhere your buyers are looking.
              </p>
            </div>
          </Link>

          {/* CARD 8 - AI & Automation */}
          <Link href="/ninexFoldServices/ai-automation" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px] col-span-1">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                  <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                AI & Automation System
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Multiply growth velocity with AI-powered content, outreach, and
                operations at enterprise scale
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We implement AI content engines, WhatsApp and chatbot
                automation, predictive LTV models, creative testing loops, GEO
                optimisation, and end-to-end workflow automation via Make,
                Zapier, and n8n — so your brand operates faster, smarter, and
                without limits.
              </p>
            </div>
          </Link>

          {/* CARD 9 - Content & Social */}
          <Link href="/ninexFoldServices/content-social-authority-system" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px] col-span-1">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                  <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                CONTENT & SOCIAL AUTHORITY SYSTEM
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Build long-term brand authority through content, community,
                influence, and earned media
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We run your full content and social engine — editorial strategy,
                social media management, influencer programs, video production,
                thought leadership, and PR — creating the trust and visibility
                that compounds into lasting competitive advantage.
              </p>
            </div>
          </Link>

          {/* CARD 10 - Digital Infrastructure */}
          <Link href="/ninexFoldServices/digital-infrastructure-system" className="block h-full">
            <div className="h-full border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px] col-span-1">
              <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                  <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                </div>
              </div>

              <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
                DIGITAL INFRASTRUCTURE SYSTEM
              </h3>

              <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
                Build the technical marketing backbone that powers performance,
                data, and scale
              </p>

              <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
                We architect and implement your complete digital foundation —
                enterprise websites, UI/UX, mobile apps, analytics stack, CRM
                integrations, and full martech architecture — ensuring every
                system is connected, measurable, and built to scale.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}