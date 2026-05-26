"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { paragraphStyle20px, paragraphStyle16px } from "@/lib/sharedStyles";
import { bobUp, staggerFadeUp, cardHover, viewportOnce, buttonTap } from "@/animations";

const jobOpenings = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "We are looking for a talented Software Engineer to join our team and help build innovative solutions.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Lead product development initiatives and work with cross-functional teams to deliver exceptional products.",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Create intuitive and engaging user experiences for our digital products and services.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Manage and optimize our cloud infrastructure and CI/CD pipelines.",
  },
  {
    title: "Business Analyst",
    department: "Business",
    location: "Remote / Hybrid",
    type: "Full-time",
    description: "Analyze business processes and requirements to drive strategic decision-making.",
  },
  {
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Develop and execute marketing campaigns to grow our brand presence.",
  },
];

export default function CareersContent() {
  return (
    <motion.section
      className="section-padding bg-white"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={staggerFadeUp}
    >
      <div className="section-container">
        <SectionHeader
          title="Current Job Openings"
          description="Explore exciting opportunities to join our team and make an impact."
        />

        {/* Job Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={staggerFadeUp}
        >
          {jobOpenings.map((job, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white border border-[#bdbdbd] rounded-[11px] p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              variants={bobUp}
              whileHover={cardHover}
            >
              <div className="mb-4">
                <h3
                  className="text-black font-semibold capitalize mb-2 text-xl sm:text-2xl leading-tight"
                  style={{
                  }}
                >
                  {job.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-sm text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded">
                    {job.department}
                  </span>
                  <span className="text-sm text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded">
                    {job.location}
                  </span>
                  <span className="text-sm text-[#6B7280] bg-[#F3F4F6] px-3 py-1 rounded">
                    {job.type}
                  </span>
                </div>
              </div>
              <p
                className="text-black text-sm sm:text-base leading-[120%] mb-16"
                style={paragraphStyle16px}
              >
                {job.description}
              </p>
              <motion.a
                href="/legal/contact-us"
                className="absolute bottom-5 md:left-8 left-6 text-white font-semibold inline-flex items-center justify-center w-[150px]"
                style={{
                  background: "linear-gradient(98deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  fontSize: "14px",
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={buttonTap}
              >
                Apply Now
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          className="mt-16 sm:mt-20 md:mt-24 text-center"
          variants={staggerFadeUp}
        >
          <motion.h3
            variants={bobUp}
            className="text-black font-semibold capitalize mb-4 text-2xl sm:text-3xl leading-tight"
            style={{
            }}
          >
            Don&apos;t see a role that fits?
          </motion.h3>
          <motion.p
            variants={bobUp}
            className="text-black text-sm sm:text-base md:text-lg mb-6 max-w-2xl mx-auto"
            style={paragraphStyle20px}
          >
            We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
          </motion.p>
          <motion.a
            variants={bobUp}
            href="/legal/contact-us"
            className="text-white font-semibold inline-flex items-center"
            style={{
              background: "linear-gradient(98deg, rgba(18,212,255,1) 0%, rgba(25,89,250,1) 100%)",
              padding: "12px 32px",
              borderRadius: "6px",
              fontSize: "14px",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={buttonTap}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

