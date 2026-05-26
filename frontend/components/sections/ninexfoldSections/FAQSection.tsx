

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What does NineX do?",
    answer: [
      "Multi-vertical growth collective supporting businesses at every stage Builds strong brands and long-term positioning Creates scalable systems and infrastructure Designs meaningful customer interactions Develops sustainable growth strategies",
    ],
  },
  {
    question: "How are the NineX brands different from each other?",
    answer: (
      <>
        <p>Each NineX brand focuses on a specific growth pillar:</p>
        <ul>
          <li><span className="font-medium">NineXFold</span> – Brand strategy & long-term positioning</li>
          <li><span className="font-medium">NineXDevOps</span> – Infrastructure, systems & scalability</li>
          <li><span className="font-medium">NineXConnect</span> – Customer support, sales calls & outreach</li>
          <li><span className="font-medium">NineXScale</span> – Growth strategy & expansion planning</li>
        </ul>
        <p>Together, they form a complete growth ecosystem.</p>
      </>
    ),
  },
  {
    question: "Do I need to use all NineX services together?",
    answer: [
      "Each NineX brand operates independently You can engage services based on your current needs Many clients start with one service and expand over time",
    ],
  },
  {
    question: "Who are NineX services designed for?",
    answer: [
      "Startups looking for early clarity and direction SMBs aiming to optimize systems and growth Growth-stage companies preparing to scale Teams that want execution without building everything in-house",
    ],
  },
  {
    question: "How does NineX customize solutions for different businesses?",
    answer: [
      "Deep understanding of your business model and goals Market and competitive analysis Identification of key challenges and opportunities Custom-built strategies, systems, and workflows No templates — everything is tailored",
    ],
  },
  {
    question: "How does NineX ensure quality and consistency across services?",
    answer: [
      "Shared standards across all NineX brands Clear processes and documentation Strong communication practices Performance tracking and reporting Continuous improvement mindset",
    ],
  },
  {
    question: "Can NineX integrate with our existing tools and teams?",
    answer: [
      "Works alongside your internal teams Integrates with existing tools and tech stack Adapts to your current workflows Ensures seamless execution without disruption",
    ],
  },
  {
    question: "How do we get started with NineX?",
    answer: [
      "Reach out to discuss your goals Assessment of your current stage and challenges Guidance toward the right NineX brand or combination Clear next steps for onboarding and execution",
    ],
  },
];


export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] bg-gradient-to-b from-[#12D4FF] to-[#1959FA] blur-[350px] opacity-50" />
      </div>

      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="section-container"
      >
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-[1.1] text-[#1F1F1F] mb-12">
          FAQs
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden bg-[#EEF8FB]"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? -1 : index)
                  }
                  className={`w-full flex items-center justify-between gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-[#12D4FF] to-[#1959FA] text-white"
                      : "text-[#373737]"
                  }`}
                >
                  <span className="text-[16px] sm:text-[18px] font-semibold leading-[1.3] tracking-[-0.01em]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 ${
                        isOpen ? "text-white" : "text-[#1959FA]"
                      }`}
                    />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      {typeof faq.answer === 'object' && !Array.isArray(faq.answer) ? (
                        <div className="px-4 sm:px-6 py-4 sm:py-5 text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-[#4B5563]">
                          {faq.answer}
                        </div>
                      ) : (
                        <p className="px-4 sm:px-6 py-4 sm:py-5 text-[14px] sm:text-[15px] md:text-[17px] font-normal leading-[1.65] tracking-[-0.01em] text-[#4B5563]">
                          {Array.isArray(faq.answer) ? faq.answer.join(' ') : faq.answer}
                        </p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

