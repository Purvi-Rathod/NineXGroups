"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { gradientOverlayTopStrong, backgroundImageCover } from "@/lib/sharedStyles";
import { staggerContainer, fadeUpSubtle, cardHover, viewportOnce } from "@/animations";

type Card = { titleTop: string; titleBottom: string; image: string };

const cards: Card[] = [
  { titleTop: "Best In", titleBottom: "Talent", image: "/images/ninexfoldImages/bestintalent.jpg" },
  { titleTop: "Leaders In", titleBottom: "Technology", image: "/images/ninexfoldImages/leader.jpg" },
  { titleTop: "Inclusive", titleBottom: "Growth", image: "/images/ninexfoldImages/inclusivegrowth.jpg" },
];

export default function FutureReadySection() {
  return (
    <motion.section
      id="future"
      className="section-padding bg-[#E9F7FF]"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="section-container">
        <SectionHeader
          title="Future Ready"
          description="Powered by people and digital innovation Driven by people and performance"
        />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative h-[350px] sm:h-[400px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden group cursor-pointer"
              variants={fadeUpSubtle}
              whileHover={cardHover}
            >
              {/* Image */}
              <motion.div
                className={backgroundImageCover}
                style={{backgroundImage: `url('${card.image}')`}}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className={gradientOverlayTopStrong} />
              
              {/* Text Overlay (top-left) */}
              <div className="absolute top-0 left-0 right-0 pt-4 sm:pt-6 md:pt-8 pl-4 sm:pl-6 md:pl-7 pr-4 sm:pr-6">
                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-[1.3] tracking-[-0.01em] text-white">
                  <span className="block">{card.titleTop}</span>
                  <span className="block">{card.titleBottom}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

