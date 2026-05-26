"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { headingStyleHeading1, secondaryHeadingStyle, paragraphStyle20px } from "@/lib/sharedStyles";
import { fadeUp, scaleIn, ctaButtonHover, ctaButtonTap, staggerContainer, fadeUpSubtle, viewportOnce } from "@/animations";

export default function WorkWithUsSection() {
  const router = useRouter();

  return (
    <motion.section
      id="careers"
      className="min-h-screen flex w-full items-center bg-white py-16 md:py-24"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={scaleIn}
    >
      <div className="section-container w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-6"
          variants={fadeUp}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px]" style={headingStyleHeading1}>
            Work with us
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-[32px]">
          {/* Large CTA Card */}
          <motion.div
            className="bg-white border border-[#bdbdbd] rounded-[11px] p-4 sm:p-6 md:p-8 "
            variants={fadeUpSubtle}
            whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="relative w-full h-[280px] rounded-[11px] overflow-hidden">
                <Image
                  src="https://www.activtrak.com/wp-content/uploads/2025/03/blog-header-productive-work-environment.jpg"
                  alt="Productive work environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="text-left">
                <h3
                  className="text-black font-semibold capitalize mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[35.937px] leading-tight sm:leading-[1.1] md:leading-[43.125px]"
                  style={secondaryHeadingStyle}
                >
                  Ready to Scale Your Brand with Confidence?
                </h3>
                <p
                  className="text-black mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-[20px] leading-[120%]"
                  style={paragraphStyle20px}
                >
                  Let’s drive your digital growth while you focus on building your business.
                </p>
                <div className="flex justify-start  md:justify-start">
                  <motion.a
                    href="/legal/contact-us"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/legal/contact-us");
                    }}
                    className="text-white font-semibold inline-flex items-center"
                    style={{
                      background: "linear-gradient(98deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
                      padding: "12px 32px",
                      borderRadius: "6px",
                      fontSize: "14px",
                    }}
                    whileHover={ctaButtonHover}
                    whileTap={ctaButtonTap}
                  >
                    Get Started
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Smaller Cards */}
          <motion.div
            className="grid sm:grid-cols-2 gap-4 sm:gap-[13px]"
            variants={staggerContainer}
          >
            {/* Join Our Team */}
            <motion.div
              className="bg-white border border-[#bdbdbd] flex flex-col justify-between rounded-[11px] p-4 sm:p-6"
              variants={fadeUpSubtle}
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h3
                  className="text-black capitalize mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[35.937px] leading-tight sm:leading-[1.1] md:leading-[43.125px]"
                  style={secondaryHeadingStyle}
                >
                  Join our team
                </h3>
                <p
                  className="text-black text-sm sm:text-base md:text-lg lg:text-[20px] leading-[120%]"
                  style={paragraphStyle20px}
                >
                  Explore opportunities to work with a fast-growing digital team.
                </p>
              </div>
              <div className="mt-4 sm:mt-6">
                <motion.a
                  href="/ninexFold/careers/find-a-job"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/ninexFold/careers/find-a-job");
                  }}
                  className="text-white font-semibold inline-flex items-center"
                  style={{
                    background: "linear-gradient(98deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
                    padding: "12px 32px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                  whileHover={ctaButtonHover}
                  whileTap={ctaButtonTap}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Nine X */}
            <motion.div
              className="bg-white border border-[#bdbdbd] flex flex-col justify-between rounded-[11px] p-4 sm:p-6"
              variants={fadeUpSubtle}
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h3
                  className="text-black capitalize mb-3 text-xl sm:text-2xl md:text-3xl lg:text-[35.937px] leading-tight sm:leading-[1.1] md:leading-[43.125px]"
                  style={secondaryHeadingStyle}
                >
                  Nine X Digital
                </h3>
                <p
                  className="text-black text-sm sm:text-base md:text-lg lg:text-[20px] leading-[120%]"
                  style={paragraphStyle20px}
                >
                  A performance-driven digital marketing division helping brands scale through strategy, creativity, and technology.
                </p>
              </div>
              <div className="mt-4 sm:mt-6">
                <motion.a
                  href="/ninexFoldServices"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/ninexFoldServices");
                  }}
                  className="text-white font-semibold inline-flex items-center"
                  style={{
                    background: "linear-gradient(98deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
                    padding: "12px 32px",
                    borderRadius: "6px",
                    fontSize: "14px",
                  }}
                  whileHover={ctaButtonHover}
                  whileTap={ctaButtonTap}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

