"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CareerSection() {
  const router = useRouter();

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="section-container">
        {/* TOP CONTENT */}
        <div className="text-center">

          <h2 className="text-[clamp(1.5rem,4.2vw,2rem)] sm:text-[40px] md:text-[48px] font-semibold leading-[1.08] sm:leading-[1.05] tracking-[-0.02em] text-[#0B1A3A] px-1 sm:px-0">
            Supercharge Your Career with{" "}
            <span className="text-blue-600 font-canela italic">
              NineXGroups
            </span>
          </h2>

          <p className="mt-3 sm:mt-4 text-[14px] sm:text-[16px] md:text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-[#0B1A3A]/70 max-w-2xl mx-auto">
            At NineXGroups, we build future-ready digital experiences. Join us to grow, innovate, and create impact.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="mt-8 sm:mt-12 md:mt-14 flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-4 lg:gap-8 relative w-full">

          {/* LEFT BIG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/CareerSection/5.png"
            alt="Professional team member portrait"
            className="hidden md:block shrink-0 w-[min(100%,220px)] lg:w-[260px] xl:w-[280px] aspect-[7/10] h-auto max-h-[400px] object-cover"
          />

          {/* CENTER CARDS */}
          <div className="flex flex-row flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full max-w-[min(100%,480px)] md:max-w-none md:w-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CareerSection/6.png"
              alt="Colleagues collaborating"
              className="w-[calc(50%-6px)] sm:w-[min(48%,200px)] md:w-[200px] lg:w-[220px] aspect-[11/15] h-auto max-h-[300px] sm:max-h-[320px] md:max-h-none object-cover"
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CareerSection/7.png"
              alt="Modern workplace"
              className="w-[calc(50%-6px)] sm:w-[min(48%,200px)] md:w-[200px] lg:w-[220px] aspect-[11/15] h-auto max-h-[300px] sm:max-h-[320px] md:max-h-none object-cover"
            />

          </div>

          {/* RIGHT BIG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/CareerSection/8.png"
            alt="Diverse professionals"
            className="hidden md:block shrink-0 w-[min(100%,220px)] lg:w-[260px] xl:w-[280px] aspect-[7/10] h-auto max-h-[400px] object-cover"
          />
        </div>

        {/* CTA CARD */}
        <div className="mt-10 sm:mt-12 md:mt-16 bg-white/70 backdrop-blur-md px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col md:flex-row items-stretch sm:items-center md:items-center justify-between gap-4 sm:gap-6 text-center md:text-left rounded-lg sm:rounded-none">

          <h3 className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0B1A3A]">
            Find Your Spark at NineXGroups
          </h3>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-center md:self-auto bg-[#0B1A3A] text-[13px] sm:text-[14px] font-medium tracking-[-0.01em] text-white px-5 py-2.5 min-h-[44px] w-full sm:w-auto hover:opacity-90 transition"
            onClick={(e) => {
              e.preventDefault();
              router.push("/ninexFold/careers/find-a-job");
            }}
          >
            Explore Careers
            <ArrowUpRight size={16} className="shrink-0" aria-hidden />
          </button>

        </div>
      </div>

    </section>
  );
}