"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */
type Report = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

/* ================= DATA (8 CARDS) ================= */
const reports: Report[] = [
  {
    tag: "RESEARCH REPORT",
    title: "Talent Reinventors: Delivering value with and for people",
    description:
      "Explore six leadership traits that enable breakthrough results and outperform peers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "RESEARCH REPORT",
    title:
      "AI innovation is nonstop. Your cloud foundation should be too.",
    description:
      "Modern cloud is the foundation for AI innovation. Discover strategies to boost cloud maturity.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "RESEARCH REPORT",
    title: "The dawn of the agentic deal",
    description:
      "AI agents are transforming decision-making and deal execution.",
    image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "PERSPECTIVE",
    title: "Making self-funding supply chains real",
    description:
      "Unlock liquidity and resilience across supply chains.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Pulse of Change: What’s top of mind for leaders",
    description:
      "Insights into leadership priorities shaping the future.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&w=600"
  },
  {
    tag: "RESEARCH REPORT",
    title: "Rewriting platform strategy for AI",
    description:
      "Platforms must evolve to support AI ecosystems.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "RESEARCH REPORT",
    title: "The age of co-intelligence",
    description:
      "Human and AI collaboration shaping the future.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=75",
  },
  {
    tag: "RESEARCH REPORT",
    title: "Sovereign AI: From risk to growth",
    description:
      "Managing AI risks while accelerating innovation.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=75",
  },
];

/* ================= CARD ================= */
function ReportCard({ report }: { report: Report }) {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-expanded={active}
      onClick={() => setActive((v) => !v)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive((v) => !v);
        }
      }}
      onBlur={() => setActive(false)}
      className="relative group overflow-hidden cursor-pointer h-[420px] w-full max-w-[300px] mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1959FA] focus-visible:ring-offset-2"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={report.image}
          alt=""
          loading="lazy"
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            active ? "scale-110" : ""
          }`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* DEFAULT VIEW */}
      <div
        className={`absolute inset-0 p-5 flex flex-col justify-end transition-opacity duration-300 group-hover:opacity-0 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="text-[11px] text-white/60 font-medium tracking-[0.08em] mb-2">
          {report.tag}
        </p>

        <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
          {report.title}
        </h3>
      </div>

      {/* HOVER / TAP VIEW */}
      <div
        className={`absolute inset-0 bg-[#050816] p-5 flex flex-col justify-between transition-all duration-500 group-hover:opacity-100 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <p className="text-[11px] text-white/60 font-medium tracking-[0.08em] mb-3">
            {report.tag}
          </p>

          <h3 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-white mb-3">
            {report.title}
          </h3>

          <p className="text-[14px] text-white/70 leading-[1.65]">
            {report.description}
          </p>
        </div>

        <div className="flex justify-end">
          <span className="text-white/70 font-medium text-[13px]">
            Expand →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= SECTION ================= */
export default function ReportSection() {
  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {reports.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
      </div>
    </section>
  );
}