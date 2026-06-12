"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface WorkPrinciple {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface HowWeWorkSectionProps {
  eyebrow?: string;
  title: string;
  image: string;
  items: WorkPrinciple[];
}

export default function HowWeWorkSection({
  eyebrow,
  title,
  image,
  items,
}: HowWeWorkSectionProps) {
  return (
    <section className="bg-white py-6 lg:py-8">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-16">
        <div className="grid items-start gap-8 lg:grid-cols-[36%_1fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {eyebrow && (
              <p className="mb-2 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1959FA]">
                {eyebrow}
              </p>
            )}

            <h2 className="max-w-[380px] text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0B1A3A] md:text-[28px]">
              {title}
            </h2>

            <div className="mt-5 space-y-4">
              {items.map((item, index) => (
                <div key={index} className="flex gap-3">

                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#1959FA]/15 bg-[#E9F7FF]/60 text-[#1959FA]">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[15px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0B1A3A]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[13px] sm:text-[14px] font-normal leading-[1.6] tracking-[-0.01em] text-[#0B1A3A]/70">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="relative overflow-hidden">
              <div className="relative h-[300px] sm:h-[340px] md:h-[380px] lg:h-[380px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}