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
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px]  px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] text-black mb-8">
              NineXgroup - Enterprise Content
            </p>

            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2.05] text-[#343434] mb-10 max-w-[240px]">
              We bring together strategy, architecture, implementation, and
              optimization services to help businesses build scalable,
              intelligent, and future-ready systems.
            </p>

            <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] font-semibold text-black">
              One partner. Six practice areas.
              <br />
              Endless impact.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
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
              We design systems that unify data, processes, and teams to drive
              predictable revenue and sustainable growth.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
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
              Implement CRM and sales automation that accelerates pipeline
              velocity and increases win rates
            </p>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
              We build and implement CRM and automation solutions that
              streamline workflows, improve engagement, and boost conversion.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
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
              We help you attract the right audience, nurture them across the
              funnel, and measure what truly drives growth.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
            <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] relative flex items-center">
              <div className="w-full border-t border-[#ff5a1f]" />

              <div className="absolute right-0 text-[#ff5a1f] text-[18px] lg:text-[20px]">
                →
              </div>
            </div>

            <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
              CX Systems
            </h3>

            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
              Build customer experience platforms that orchestrate journeys and
              deliver personalization at scale
            </p>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
              We create connected experiences that delight customers, improve
              retention, and strengthen long-term loyalty.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">
            <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-end gap-4">
              <div className="w-[2px] h-[20px] bg-[#ff5a1f]" />
              <div className="w-[2px] h-[34px] bg-[#ff5a1f]" />
              <div className="w-[2px] h-[48px] bg-[#ff5a1f]" />
              <div className="w-[2px] h-[64px] bg-[#ff5a1f]" />
            </div>

            <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
              BI & Data Systems
            </h3>

            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
              Create analytics and intelligence platforms that turn data into
              actionable insights
            </p>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
              We turn raw data into clear, real-time insights that empower
              smarter decisions and drive business performance.
            </p>
          </div>

          {/* CARD 7 */}
          <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] border border-[#dddddd] bg-[#faf9f7] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px] col-span-1">
            <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
              <div className="relative w-[58px] h-[58px] rotate-45 border border-[#ff5a1f]">
                <div className="absolute inset-[10px] border border-[#d7d7d7]" />
              </div>
            </div>

            <h3 className="text-[18px] lg:text-[20px] tracking-[-0.8px] text-black mb-5">
              ERP & Enterprise Apps
            </h3>

            <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.75] text-[#ff5a1f] mb-6 max-w-full sm:max-w-[250px]">
              Implement financial, supply chain, and HR systems that optimize
              operations
            </p>

            <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] lg:leading-[1.9] text-[#444] max-w-full sm:max-w-[250px]">
              We implement and optimize core enterprise systems that improve
              efficiency, reduce costs, and support business scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
