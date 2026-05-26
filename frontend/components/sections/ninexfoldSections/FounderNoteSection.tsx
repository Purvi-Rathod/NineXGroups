"use client";

import { motion } from "framer-motion";

export default function FounderNoteSection() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="section-container flex flex-col md:flex-row items-center gap-6 md:gap-10">
        
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="w-[480px] h-[320px] md:w-[360px] md:h-[260px] ">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.istockphoto.com/id/1092821490/photo/portrait-of-a-young-beautiful-well-dressed-business-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=bmcyoiRn6hoA76i7W-6ejxwF3vBVhI17HB808hieKqM="
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left flex flex-col justify-center"
        >
          <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] font-normal tracking-[-0.01em] text-[#0B1A3A] ">
            <span className="text-blue-500 text-[20px] font-semibold mr-1">“</span>
            Companies will have a greater technology landscape, but we need to
            completely change the narrative to inspire people to paint the future.
            It is human in the lead, not human in the loop.
          </p>

          <p className="mt-4 text-[14px] text-[#0B1A3A]/70 font-medium tracking-[-0.01em]">
            — Julie Sweet
          </p>
        </motion.div>

      </div>
    </section>
  );
}