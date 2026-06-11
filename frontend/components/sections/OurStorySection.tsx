"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { storyItems } from "@/data/story-data";

function StoryCard({ item }: { item: (typeof storyItems)[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* timeline node aligned to the icon */}
      <div className="absolute -left-[44px] top-[86px] hidden lg:block">
        <div
          className={`h-[9px] w-[9px] rounded-full ring-4 ring-white transition-all duration-300 items-center ${
            isInView ? "bg-blue-600 scale-110" : "bg-[#BFD0F5]"
          }`}
        />
      </div>

      <div className="rounded-[18px] border border-[#EDF1FB] bg-white px-4 py-6 max-w-[740px]">
        <div className="flex gap-4">
          <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[16px] bg-[#F3F6FF]">
            <Icon className="h-[26px] w-[26px] text-blue-600" />
          </div>

          <div className="max-w-[640px]">
            <h3 className="text-[16px] font-bold tracking-[-0.2px] text-[#16223b]">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] text-slate-500">
              {item.content}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurStorySection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto w-full">
        {/* ---------- Header ---------- */}
        <div className="relative mb-6">
          <div className="flex items-start gap-5">

            <div>
              <h1
              className="
                text-[46px]
                md:text-[54px]
                lg:text-[64px]
                font-medium
                leading-[0.92]
                tracking-[-0.045em]
                text-[#0A1633]
                px-6 lg:px-12
              "
            >
                Our Story
              </h1>
              <p className=" max-w-[560px] text-[15px] text-slate-500 px-6 lg:px-12">
                The story of why we built NineXGroup, and the belief that drives
                everything we do.
              </p>
            </div>
          </div>

          {/* dotted connector running from the title to the timeline */}
          <div className="pointer-events-none absolute right-[59%] top-[30px] hidden items-center lg:flex">
            <div className="h-px w-[300px] border-t border-dashed border-[#C7D5F5]" />
            <div className="h-[10px] w-[10px] rounded-full bg-blue-600" />
          </div>
        </div>

        {/* ---------- Body ---------- */}
        <div className="grid gap-x-20 lg:grid-cols-[550px_1fr]">
          {/* Left: image + navy card */}
          <div className="relative">
            <div className="sticky top-20">
              <div className="relative h-[720px] overflow-hidden rounded-tr-[90px] rounded-br-[120px] rounded-bl-[40px]">
                <Image
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop"
                  alt="Two colleagues looking out over a city skyline"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Navy callout card */}
              <div className="absolute bottom-[-116px] left-[46px] w-[280px] rounded-[26px] bg-[#0E2A5E] p-7 text-white">
                {/* small team glyph */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-11 w-11"
                >
                  <circle cx="12" cy="8" r="2.6" />
                  <circle cx="5.5" cy="9" r="2.1" />
                  <circle cx="18.5" cy="9" r="2.1" />
                  <path d="M8.2 16.5c0-2.1 1.7-3.6 3.8-3.6s3.8 1.5 3.8 3.6" />
                  <path d="M3 16c0-1.7 1.1-2.9 2.6-3" />
                  <path d="M21 16c0-1.7-1.1-2.9-2.6-3" />
                </svg>

                <h3 className="text-[25px] font-bold leading-[1.18]">
                  One Team.
                  <br />
                  One Plan.
                  <br />
                  One <span className="text-blue-400">Outcome.</span>
                </h3>

                <p className="mt-2 text-[14px] leading-6 text-[#9FB3DC]">
                  Strategy. Technology. Execution.
                  <br />
                  All in one place.
                </p>

                {/* dotted grid */}
                <div className="mt-6 grid grid-cols-12 gap-x-[10px] gap-y-[9px]">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-[3px] w-[3px] rounded-full bg-[#3C5CA0]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: timeline cards (shifted up; header dashed line stays put) */}
          <div className="relative lg:-mt-[120px]">
            {/* vertical timeline rail */}
            <div className="absolute left-[5px] top-0 bottom-[34px] hidden w-px bg-[#D9E3FA] lg:block" />

            <div className="space-y-6 lg:pl-12">
              {storyItems.map((item) => (
                <StoryCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}