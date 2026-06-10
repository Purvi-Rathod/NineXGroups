"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Leader {
  name: string;
  role: string;
  image: string;
  description: string;
}

interface LeadershipSectionProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  leaders: Leader[];
}

export default function LeadershipSection({
  eyebrow = "LEADERSHIP",
  title,
  subtitle,
  leaders,
}: LeadershipSectionProps) {
  return (
    <section className="bg-white pt-0 pb-12 lg:pb-16">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-blue-600">
              {eyebrow}
            </p>

            <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.03em] text-[#0A1633]">
              {title}
              <br />
              {subtitle}
            </h2>
          </motion.div>

          {/* LEADERS */}
          <div className="grid gap-10 md:grid-cols-2">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex items-start gap-6"
              >
                {/* IMAGE */}
                <div className="relative h-[180px] w-[140px] shrink-0 overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* INFO */}
                <div className="pt-4 items-center">
                  <h3 className="text-[14px] font-semibold text-[#0A1633]">
                    {leader.name}
                  </h3>

                  <p className="mt-1 text-[12px] text-slate-500">
                    {leader.role}
                  </p>

                  <p className="mt-2 text-[12px] leading-1 text-slate-600">
                    {leader.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}