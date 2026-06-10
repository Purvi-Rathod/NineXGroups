"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EditorialInsightSectionProps {
  image: string;
  title: string;
  description: string;
}

export default function EditorialInsightSection({
  image,
  title,
  description,
}: EditorialInsightSectionProps) {
  return (
    <section className="bg-white py-0 pb-20">
      <div className="mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-stretch lg:grid-cols-[50%_50%]"
        >
          {/* IMAGE */}
          <div className="relative min-h-[200px] overflow-hidden lg:min-h-[260px]">
            <Image src={image} alt={title} fill className="object-cover" />

            {/* Blue Fade Overlay */}
            <div
              className="
                    absolute
                    inset-y-0
                    right-0
                    w-56
                    bg-gradient-to-r
                    from-transparent
                    via-[#cbe0ff]/70
                    to-[#cbe0ff]
                "
            />
          </div>

          {/* CONTENT */}
          <div className="flex items-center bg-[#cbe0ff] px-10 py-10 lg:px-14">
            <div className="max-w-[340px]">
              <h2 className="text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-[#0A1633]">
                {title}
              </h2>

              <p className="mt-4 text-[13px] leading-6 text-slate-500">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
