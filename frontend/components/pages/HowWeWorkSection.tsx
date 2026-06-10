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
        <div className="grid items-start gap-8 lg:grid-cols-[36%_78%]">
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
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.28em] text-blue-600">
                {eyebrow}
              </p>
            )}

            <h2 className="max-w-[350px] text-[24px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0A1633] md:text-[28px]">
              {title}
            </h2>

            <div className="mt-5 space-y-1">
              {items.map((item, index) => (
                <div key={index} className="flex gap-1">
                  {/* Icon */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE8FF] text-blue-600">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-[13px] font-semibold leading-none text-[#0A1633]">
                      {item.title}
                    </h3>

                    <p className=" text-[12px] leading-[1.25] text-slate-600">
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
                  className="
                    object-cover
                    object-center
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
    </section>
  );
}
