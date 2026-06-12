"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  subtitle: string;
  description: string;
  image: string;

  website?: string;
  foundedYear?: string;

  primaryButton?: {
    label: string;
    href: string;
  };

  secondaryButton?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  eyebrow,
  title,
  highlightedText,
  subtitle,
  description,
  image,
  website,
  foundedYear,
  primaryButton,
  secondaryButton,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-[1300px] px-6 md:px-10 lg:px-16">
        <div className="grid min-h-[720px] items-center gap-10 pt-2 pb-15 lg:grid-cols-[42%_58%]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[520px] mt-8 lg:mt-12"
          >
            {eyebrow && (
              <p
                className="
                  mb-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-blue-600
                "
              >
                {eyebrow}
              </p>
            )}

            <h1
              className="
                text-[46px]
                md:text-[54px]
                lg:text-[64px]
                font-medium
                leading-[0.92]
                tracking-[-0.045em]
                text-[#0A1633]
              "
            >
              {title}

              {highlightedText && (
                <>
                  <br />
                  <span className="text-blue-600">{highlightedText}</span>
                </>
              )}
            </h1>

            <div className="mt-8 h-[3px] w-10 bg-blue-600" />

            <h2
              className="
                mt-8
                max-w-[320px]
                text-[18px]
                font-medium
                leading-[1.4]
                text-[#0A1633]
              "
            >
              {subtitle}
            </h2>

            {(website || foundedYear) && (
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-2
                  text-[11px]
                  uppercase
                  tracking-[0.12em]
                  text-slate-500
                "
              >
                {website && <span>{website}</span>}

                {website && foundedYear && (
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                )}

                {foundedYear && <span>Founded {foundedYear}</span>}
              </div>
            )}

            <p
              className="
                mt-6
                max-w-[430px]
                text-[14px]
                leading-7
                text-slate-500
              "
            >
              {description}
            </p>

            {(primaryButton || secondaryButton) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primaryButton && (
                  <Link
                    href={primaryButton.href}
                    className="
                      inline-flex
                      h-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0A1633]
                      px-6
                      text-sm
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-blue-600
                    "
                  >
                    {primaryButton.label}
                  </Link>
                )}

                {secondaryButton && (
                  <Link
                    href={secondaryButton.href}
                    className="
                      inline-flex
                      h-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-300
                      px-6
                      text-sm
                      font-medium
                      text-slate-900
                      transition-all
                      duration-300
                      hover:border-slate-900
                    "
                  >
                    {secondaryButton.label}
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:-mt-4"
          >
            <div className="relative ml-auto w-full max-w-[580px]">
              {/* TOP LEFT DOTS */}
              <div className="absolute -left-[35px] -top-[35px] hidden lg:block z-0">
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-[8px] w-[8px] rounded-full bg-[#9BC3FF]"
                    />
                  ))}
                </div>
              </div>

              {/* BOTTOM RIGHT DOTS */}
              <div className="absolute -right-[35px] -bottom-[35px] hidden lg:block z-0">
                <div className="grid grid-cols-7 gap-2">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <span
                      key={i}
                      className="h-[8px] w-[8px] rounded-full bg-[#9BC3FF]"
                    />
                  ))}
                </div>
              </div>

              {/* BACKGROUND BLOCK */}
              <div className="absolute left-6 top-6 hidden h-[95%] w-[95%] bg-[#EEF4FF] lg:block" />

              {/* IMAGE */}
              <div className="relative z-10 overflow-hidden">
                <div className="relative aspect-[1.3/1]">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      hover:scale-[1.02]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}