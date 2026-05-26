"use client";

import { motion, useReducedMotion } from "framer-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

/** Subtle lift for sans UI copy; headline serif stays clean (reference-style). */
const headlineShadow =
  "0 1px 0 rgba(255,255,255,0.85), 0 10px 24px rgba(11,27,63,0.06)";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const lineHidden = reduceMotion
    ? { opacity: 0, y: 18 }
    : { opacity: 0, y: 42, rotateX: -26, z: -60 };

  const lineShow = reduceMotion
    ? {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
      }
    : {
        opacity: 1,
        y: 0,
        rotateX: 0,
        z: 0,
        transition: { duration: 0.85, ease: easeOut },
      };

  const lineVariants = { hidden: lineHidden, show: lineShow };

  const headlineGroup = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.16, delayChildren: 0.05 },
    },
  };

  const paragraphHidden = reduceMotion
    ? { opacity: 0, y: 14 }
    : { opacity: 0, y: 26, rotateX: -10 };

  const paragraphShow = reduceMotion
    ? {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: 0.15 },
      }
    : {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.72, delay: 0.42, ease: easeOut },
      };

  const paragraphVariants = { hidden: paragraphHidden, show: paragraphShow };

  return (
    <section className="bg-[#E9F7FF] py-14 md:py-20 lg:py-18">
      <div className="section-container">
        <div className="mt-6 [perspective:1100px] [perspective-origin:50%_0%] [transform-style:preserve-3d] md:mt-8">
          <motion.h1
            className="font-sans text-4xl font-medium leading-[1.08] tracking-[-0.03em] text-[#1a1a1a] sm:text-5xl md:text-6xl lg:text-[3.5rem] lg:leading-[1.04] [transform-style:preserve-3d]"
            variants={headlineGroup}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={lineVariants}
              className="block w-full origin-left text-left [backface-visibility:hidden]"
              style={{ textShadow: headlineShadow }}
            >
              Growth that&rsquo;s built to last.
            </motion.span>

            <motion.span
              variants={lineVariants}
              className="mt-1 block w-full origin-right text-right [backface-visibility:hidden] sm:mt-1.5"
              style={{ textShadow: headlineShadow }}
            >
              Designed. Executed. Scaled.
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-10 grid max-w-5xl gap-8 [transform-style:preserve-3d] md:mt-12 md:grid-cols-12 md:gap-10 lg:mt-14"
            variants={paragraphVariants}
            initial="hidden"
            animate="show"
          >
            <div className="md:col-span-4">
              <p className="font-canela italic text-[15px] leading-snug tracking-[0] text-[#1a1a1a] sm:text-base">
                Built for intelligent growth in the next era.
              </p>
              <div
                className="mt-5 h-px w-full max-w-[min(100%,14rem)] bg-[#0B1B3F]/20"
                aria-hidden
              />
            </div>
            <p className="font-canela italic text-left text-base leading-relaxed text-[#444444] md:col-span-8 md:text-[17px] md:leading-[1.7]">
              We combine strategy, technology, and execution to help businesses grow
              faster, smarter, and stronger across markets and industries.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
