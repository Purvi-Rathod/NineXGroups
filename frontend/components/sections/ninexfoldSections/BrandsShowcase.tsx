// components/BrandsShowcase.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const brands = [
  {
    name: "NineXFold",
    image: "/images/brands/fold.png",
    description: "Digital transformation and AI solutions.",
  },
  {
    name: "NineXDevOps",
    image: "/images/brands/devops.png",
    description: "Cloud, automation and infrastructure.",
  },
  {
    name: "NineXConnect",
    image: "/images/brands/connect.png",
    description: "Customer engagement and growth.",
  },
  {
    name: "NineXScale",
    image: "/images/brands/scale.png",
    description: "Scaling businesses with technology.",
  },
  {
    name: "NineXHoomie",
    image: "/images/brands/hoomie.png",
    description: "Smart real estate experiences.",
  },
];

export default function BrandsShowcase() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="mx-auto max-w-[1150px] px-5 md:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500">
            OUR BRANDS
          </p>

          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0B1A3A]">
            The NineXGroup Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-500 md:text-lg">
            Five specialized brands. One unified vision.
          </p>
        </div>

        {/* Desktop */}
        <div
          className="
            mt-12
            hidden
            h-[420px]
            overflow-hidden
            border
            border-neutral-200
            md:flex
            lg:h-[520px]
          "
        >
          {brands.map((brand, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={brand.name}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  flex:
                    active === null
                      ? 1
                      : isActive
                      ? 1.6
                      : 0.85,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  overflow-hidden
                  border-r
                  border-neutral-200
                  bg-white
                  last:border-r-0
                "
              >
                {/* Background Image */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1.08 : 1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </motion.div>

                {/* Center Content */}
                <motion.div
                  animate={{
                    opacity: isActive ? 0 : 1,
                    scale: isActive ? 0.85 : 1,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div className="text-[52px] font-bold text-neutral-300 lg:text-[70px]">
                    X
                  </div>

                  <h3 className="mt-3 text-lg font-medium text-neutral-400 lg:text-xl">
                    {brand.name}
                  </h3>
                </motion.div>

                {/* Hover Content */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -20,
                    y: isActive ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-6
                    top-6
                    z-20
                  "
                >
                  <div className="text-[34px] font-bold text-white lg:text-[42px]">
                    X
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-white lg:text-xl">
                    {brand.name}
                  </h3>

                  <p className="mt-3 max-w-[220px] text-sm leading-relaxed text-white/80">
                    {brand.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="mt-10 grid gap-4 md:hidden">
          {brands.map((brand, index) => {
            const isActive = active === index;

            return (
              <div
                key={brand.name}
                onClick={() =>
                  setActive(isActive ? null : index)
                }
                className="
                  relative
                  h-[240px]
                  overflow-hidden
                  border
                  border-neutral-200
                  bg-white
                "
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1.05 : 1,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                </motion.div>

                {!isActive ? (
                  <div className="relative z-10 flex h-full flex-col items-center justify-center">
                    <div className="text-[52px] font-bold text-neutral-300">
                      X
                    </div>

                    <h3 className="mt-3 text-lg font-medium text-neutral-400">
                      {brand.name}
                    </h3>
                  </div>
                ) : (
                  <div className="absolute left-6 top-6 z-20">
                    <div className="text-[34px] font-bold text-white">
                      X
                    </div>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {brand.name}
                    </h3>

                    <p className="mt-3 max-w-[220px] text-sm text-white/80">
                      {brand.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}