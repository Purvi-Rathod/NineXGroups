"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BigStatementSectionProps {
  eyebrow?: string;
  titleLines: string[];
  content: string;
  image: string;
}

export default function BigStatementSection({
  eyebrow,
  titleLines,
  content,
  image,
}: BigStatementSectionProps) {
  return (
    <section className="bg-white pt-2 pb-20">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-16">
        <div className="border-t border-slate-200 pt-10">
          <div className="grid items-start gap-10 lg:grid-cols-[260px_1fr_320px]">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 h-[2px] w-8 bg-blue-600" />

              <h2 className="text-[34px] font-medium leading-[1.15] tracking-[-0.04em] text-[#0A1633] lg:text-[40px]">
                {titleLines.map((line, index) => (
                  <span key={index} className="block">
                    {index === titleLines.length - 1 ? (
                      <span className="text-blue-600">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h2>
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-[520px]"
            >
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-600">
                {eyebrow || "Who We Are"}
              </p>

              <p className="text-[13px] leading-6 text-slate-600">{content}</p>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              {/* Background Block */}
              <div
                className="
                absolute
                right-[-18px]
                top-12
                h-[90%]
                w-[100%]
                bg-gradient-to-br
                from-blue-50
                to-blue-100
                lg:block
                "
              />

              {/* Image */}
              <div className="relative z-10 overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image}
                    alt="About NineXGroup"
                    fill
                    className="
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                    "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
