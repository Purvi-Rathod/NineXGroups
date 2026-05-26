"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AISection() {
  const capabilities = [
    "Custom AI agent development",
    "Intelligent automation across operations",
    "Enterprise integration & deployment",
    "Revenue, CX, supply chain automation",
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="section-container grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-blue-600 mb-4">
            NineX AI
          </p>

          {/* Heading */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#0B1A3A]">
            Enterprise AI that{" "}
            <span className="font-playfair italic text-blue-600">
              actually ships.
            </span>
          </h2>

          {/* Subheading */}
          <p className="mt-3 text-[18px] sm:text-[20px] font-medium leading-[1.45] tracking-[-0.02em] text-[#0B1A3A]">
            Backed by premier tech partners, deployed at scale.
          </p>

          {/* Description */}
          <p className="mt-5 text-[15px] sm:text-[16px] md:text-[17px] leading-[1.75] tracking-[-0.01em] text-[#0B1A3A]/70 max-w-xl">
            We&apos;re the AI implementation company that Fortune 500s and
            high-growth enterprises trust to turn AI strategy into operational
            reality. We build custom AI agents, deploy intelligent automation
            across your tech stack, and integrate AI into your existing
            workflows—not as a side project, but as core infrastructure. Our
            team combines deep AI expertise with enterprise-grade execution to
            deliver agents that work.
          </p>

          {/* Capabilities List */}
          <ul className="mt-6 space-y-3">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <span className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[#0B1A3A]/80">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button className="mt-8 inline-flex items-center gap-2 bg-[#0B1A3A] text-white px-6 py-3 text-[14px] font-medium tracking-[-0.01em] hover:opacity-90 transition">
            Explore NineX AI
            <ArrowRight size={16} />
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Background */}
          <div className="absolute -inset-6 bg-blue-500/10 rounded-[2rem] blur-3xl" />

          {/* Image Card */}
          <div className="relative overflow-hidden h-[400px] sm:h-[460px] md:h-[540px]">
            <Image
              src="/images/ninexai.png"
              alt="Enterprise AI Solutions"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}