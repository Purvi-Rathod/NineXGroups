"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import SectionHeader from "@/components/ui/SectionHeader";
import { paragraphStyle20px, paragraphStyle16px, secondaryHeadingStyle } from "@/lib/sharedStyles";
import { staggerFadeUp, bobUp, viewportOnce, ctaButtonHover, ctaButtonTap } from "@/animations";

const services = [
  {
    title: "AI-Powered Solutions",
    description: "Leverage cutting-edge artificial intelligence to automate processes, gain insights, and drive innovation.",
    icon: "🤖",
  },
  {
    title: "Digital Transformation",
    description: "Transform your business operations with modern digital technologies and best practices.",
    icon: "🔄",
  },
  {
    title: "Machine Learning",
    description: "Implement intelligent systems that learn and adapt to improve business outcomes.",
    icon: "🧠",
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights with advanced analytics and visualization.",
    icon: "📊",
  },
  {
    title: "Automation",
    description: "Streamline workflows and reduce manual effort with intelligent automation solutions.",
    icon: "⚙️",
  },
  {
    title: "Cloud Integration",
    description: "Seamlessly integrate AI capabilities with your existing cloud infrastructure.",
    icon: "☁️",
  },
];

const benefits = [
  {
    title: "Innovation",
    description: "Stay ahead with cutting-edge AI technologies and methodologies.",
  },
  {
    title: "Efficiency",
    description: "Automate repetitive tasks and optimize business processes.",
  },
  {
    title: "Scalability",
    description: "Build solutions that grow with your business needs.",
  },
  {
    title: "Expertise",
    description: "Work with a specialized team dedicated to AI excellence.",
  },
];

export default function NinexContent() {
  const router = useRouter();

  return (
    <motion.section
      className="section-padding bg-white"
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <div className="section-container">
        {/* Introduction Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          variants={bobUp}
        >
          <p
            className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-[120%]"
            style={paragraphStyle20px}
          >
            Nine X is our specialized AI division focused on delivering comprehensive digital transformation solutions.
            We combine artificial intelligence, machine learning, and advanced analytics to help businesses unlock
            their full potential and achieve sustainable growth.
          </p>
        </motion.div>

        {/* Services Section */}
        <SectionHeader
          title="Our Services"
          description="Comprehensive AI solutions tailored to your business needs"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
          variants={staggerFadeUp}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-[#bdbdbd] rounded-[11px] p-6 sm:p-8 hover:shadow-lg transition-shadow duration-300"
              variants={bobUp}
              whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
              <h3
                className="text-black font-semibold capitalize mb-3 text-xl sm:text-2xl leading-tight"
                style={secondaryHeadingStyle}
              >
                {service.title}
              </h3>
              <p
                className="text-black text-sm sm:text-base leading-[120%]"
                style={paragraphStyle16px}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <SectionHeader
          title="Why Choose Nine X"
          description="Experience the advantages of working with a specialized AI division"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24"
          variants={staggerFadeUp}
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              variants={bobUp}
            >
              <h3
                className="text-black text-start font-semibold capitalize mb-3 text-xl sm:text-2xl leading-tight"
                style={secondaryHeadingStyle}
              >
                {benefit.title}
              </h3>
              <p
                className="text-black text-start max-w-[250px] mx-auto text-sm sm:text-base leading-[120%]"
                style={paragraphStyle16px}
              >
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#E9F7FF] to-[#F0F9FF] rounded-[11px] p-8 sm:p-12 md:p-16 text-center"
          variants={bobUp}
        >
          <h3
            className="text-black font-semibold capitalize mb-4 text-2xl sm:text-3xl md:text-4xl leading-tight mb-6"
            style={secondaryHeadingStyle}
          >
            Ready to Transform Your Business?
          </h3>
          <p
            className="text-black text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto"
            style={paragraphStyle20px}
          >
            Let&apos;s discuss how Nine X can help you leverage AI and digital transformation to achieve your business goals.
          </p>
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
        </motion.div>
      </div>
    </motion.section>
  );
}

