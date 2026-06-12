"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
}

interface WhyChooseUsSectionProps {
  eyebrow?: string;
  title: string;
  image: string;
  features: FeatureItem[];
}

export default function WhyChooseUsSection({
  eyebrow,
  title,
  image,
  features,
}: WhyChooseUsSectionProps) {
  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="mx-auto w-full">
        <div className="grid items-start gap-10 lg:grid-cols-[50%_36%]">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden">
              <div className="relative h-[280px] sm:h-[300px] md:h-[320px] lg:h-[320px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pt-1"
          >
            {eyebrow && (
              <p className="mb-3 text-[12px] sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#1959FA]">
                {eyebrow}
              </p>
            )}

            <h2 className="max-w-[520px] text-[32px] font-medium leading-[1.08] tracking-[-0.03em] text-[#0B1A3A] md:text-[40px] lg:text-[48px]">
              {title}
            </h2>

            <div className="mt-7 grid gap-x-12 gap-y-7 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.8}
                      className="mt-[3px] shrink-0 text-[#1959FA]"
                    />

                    <div>
                      <h3 className="text-[16px] font-semibold leading-[1.3] tracking-[-0.01em] text-[#0B1A3A]">
                        {feature.title}
                      </h3>

                      <p className="mt-1.5 text-[14px] font-normal leading-[1.65] tracking-[-0.01em] text-[#0B1A3A]/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}