"use client";

import {
  Boxes,
  Code2,
  Users,
  TrendingUp,
} from "lucide-react";

interface Brand {
  name: string;
  subtitle: string;
  description: string;
}

interface BrandsSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const brands: Brand[] = [
  {
    name: "NineXFold",
    subtitle: "Enterprise Business Systems",
    description:
      "Connects revenue, sales, marketing, customer experience, business intelligence, and ERP into systems that actually talk to each other.",
  },
  {
    name: "NineXDevOps",
    subtitle: "Technology & Engineering",
    description:
      "Handles cloud, AI, cybersecurity, digital product engineering, and DevOps. We design, build, and run platforms behind transformation.",
  },
  {
    name: "NineXConnect",
    subtitle: "Sales & Customer Experience",
    description:
      "Focuses on sales acceleration and customer experience, from CRM implementation to full customer journey design and automation.",
  },
  {
    name: "NineXScale",
    subtitle: "Growth Strategy & Consulting",
    description:
      "Helps companies enter new markets, scale operations, and grow revenue with strategy paired with execution.",
  },
];

const icons = [
  Boxes,
  Code2,
  Users,
  TrendingUp,
];

export default function BrandsSection({
  eyebrow = "WHAT WE DO",
  title = "Four specialized brands.",
  subtitle = "One growth engine.",
}: BrandsSectionProps) {
  return (
    <section className="bg-white pt-8 pb-24 md:pb-28 lg:pb-32">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1959FA]">
            {eyebrow}
          </p>

          <h2 className="text-[26px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0B1A3A] md:text-[32px] lg:text-[36px]">
            {title}
            <br />
            {subtitle}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {brands.map((brand, index) => {
            const Icon = icons[index];

            return (
              <div
                key={brand.name}
                className="
                  group
                  border
                  border-slate-200
                  bg-white
                  px-6
                  py-8
                  text-center
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#1959FA]/25
                  hover:shadow-[0_20px_60px_rgba(11,26,58,0.06)]
                  md:px-8
                  md:py-10
                "
              >
                <div className="mb-6 flex justify-center">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="
                      text-[#1959FA]
                      transition-all
                      duration-500
                      group-hover:scale-110
                    "
                  />
                </div>

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.3]
                    tracking-[-0.01em]
                    text-[#0B1A3A]
                    transition-colors
                    duration-300
                    group-hover:text-[#1959FA]
                  "
                >
                  {brand.name}
                </h3>

                <p className="mt-2 text-[12px] font-medium uppercase tracking-[0.06em] text-[#1959FA]/80">
                  {brand.subtitle}
                </p>

                <p className="mt-5 text-[14px] leading-[1.65] tracking-[-0.01em] text-[#0B1A3A]/70">
                  {brand.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Information Banner */}
        <div className="mt-8 border border-[#1959FA]/15 bg-[#E9F7FF]/50 px-5 py-4 md:px-6 md:py-5">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1959FA]/40">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1959FA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20" />
                <path d="M2 12h20" />
                <path d="m4.93 4.93 14.14 14.14" />
                <path d="m19.07 4.93-14.14 14.14" />
              </svg>
            </div>

            <p className="text-[14px] leading-[1.65] tracking-[-0.01em] text-[#0B1A3A]/70">
              Alongside these, the group continues to expand its capabilities
              across AI, applied software, and industry-specific solutions as
              our clients&apos; needs grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}