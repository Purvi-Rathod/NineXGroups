// components/BrandsShowcase.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const brands = [
  {
    name: "NineXFold",
    image: "/images/brands/fold.png",
  },
  {
    name: "NineXDevOps",
    image: "/images/brands/devops.png",
  },
  {
    name: "NineXConnect",
    image: "/images/brands/connect.png",
  },
  {
    name: "NineXScale",
    image: "/images/brands/scale.png",
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

          <h2 className="text-[clamp(1.5rem,4.2vw,2rem)] sm:text-[40px] md:text-[48px] font-semibold leading-[1.08] sm:leading-[1.05] tracking-[-0.02em] text-[#0B1A3A] px-1 sm:px-0">
            The NineXGroup Ecosystem
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-500 md:text-xl">
            Four specialized brands. One unified vision.
          </p>
        </div>

        {/* Desktop */}
        <div
          className="
            mt-12
            hidden
            h-[320px]
            overflow-hidden
            border
            border-neutral-200
            md:flex
            lg:h-[500px]
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
                      ? 1.4
                      : 0.9,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  flex
                  cursor-pointer
                  items-center
                  justify-center
                  overflow-hidden
                  border-r
                  border-neutral-200
                  bg-white
                  last:border-r-0
                "
              >
                {/* Image */}
                <motion.div
                  initial={false}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
                </motion.div>

                {/* Content */}
                <motion.div
                  animate={{
                    y: isActive ? -12 : 0,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="relative z-10 text-center"
                >
                  <div
                    className={`
                      mb-4
                      text-[56px]
                      font-bold
                      transition-all
                      duration-500
                      md:text-[72px]
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-300"
                      }
                    `}
                  >
                    X
                  </div>

                  <h3
                    className={`
                      text-[20px]
                      font-medium
                      transition-all
                      duration-500
                      md:text-[28px]
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400"
                      }
                    `}
                  >
                    {brand.name}
                  </h3>
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
                  h-[220px]
                  overflow-hidden
                  border
                  border-neutral-200
                  bg-white
                "
              >
                {/* Image */}
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/10" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <div
                    className={`
                      mb-3
                      text-[52px]
                      font-bold
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-300"
                      }
                    `}
                  >
                    X
                  </div>

                  <h3
                    className={`
                      text-xl
                      font-medium
                      ${
                        isActive
                          ? "text-white"
                          : "text-neutral-400"
                      }
                    `}
                  >
                    {brand.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}