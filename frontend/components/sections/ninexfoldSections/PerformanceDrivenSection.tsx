"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { gradientOverlayTopStrong, backgroundImageCover } from "@/lib/sharedStyles";
import { staggerContainer, fadeUpSubtle, cardHover, viewportOnce } from "@/animations";

type Card = { title: string; image: string };

const cards: Card[] = [
  { title: "Automotive \n Machinery Image", image: "/images/ninexfoldImages/automative.jpg" },
  { title: "Finance And\nTechnology", image: "/images/ninexfoldImages/finance.jpg" },
  { title: "Growth\nGems", image: "/grow.jpg" },
];

export default function PerformanceDrivenSection() {
  return (
    <motion.section
    id="performance"
      className="section-padding bg-white"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="section-container">
        <SectionHeader
          title="Performance Focused"
          description="Driving digital growth across industries"
        />

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="relative h-[350px] sm:h-[400px] md:h-[460px] lg:h-[520px] rounded-2xl overflow-hidden shadow-card group cursor-pointer"
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
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-bold text-white whitespace-pre-line leading-tight">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

