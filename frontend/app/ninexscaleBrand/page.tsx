import Hero from "@/components/sections/common/Hero";
import OurApproachSection from "@/components/sections/common/OurApproachSection";
import WhatWeDoSection from "./WhatWeDoSection";

import Contact from "@/components/sections/common/Contact";

import {
  DollarSign,
  Globe2,
  TrendingUp,
  BriefcaseBusiness,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/bg-image/Devops-bg.png"
        subheadline="GROWTH STRATEGY & CONSULTING"
        headline="Strategic growth. Accelerated execution. Measurable results."
        body="NineXScale provides growth strategy and execution services for enterprises entering new
        markets, scaling operations, and accelerating revenue. Our consultants combine strategic
        thinking with hands-on execution to help you identify opportunities, develop winning strategies,
        and execute with precision."
        stats={[
          {
            value: "$10B+",
            label: "Client Expansion Revenue Enabled",
            icon: <DollarSign size={18} />,
          },
          {
            value: "200+",
            label: "Successful Market Entries",
            icon: <Globe2 size={18} />,
          },
          {
            value: "85%",
            label: "Average Client Revenue Growth",
            icon: <TrendingUp size={18} />,
          },
          {
            value: "$5B+",
            label: "Capital Raised for Clients",
            icon: <BriefcaseBusiness size={18} />,
          },
        ]}
      />
      <WhatWeDoSection />
      {/* OUR APPROACH SECTION */}
      {/* <OurApproachSection
        eyebrow="OUR APPROACH"
        title="A proven 5-phase methodology for measurable success."
        phases={[
          {
            number: "01",

            title: "Phase 1: Strategy & Architecture",

            duration: "Weeks 1–4",

            points: [
              "Current state assessment and capability mapping",
              "Business process analysis and optimization",
              "Technology evaluation and selection",
              "Solution architecture and roadmap",
              "ROI modeling and business case",
            ],
          },

          {
            number: "02",

            title: "Phase 2: Design & Configuration",

            duration: "Weeks 5–12",

            points: [
              "Detailed solution design",
              "System configuration and customization",
              "Integration architecture",
              "Data migration strategy",
              "Change management planning",
            ],
          },

          {
            number: "03",

            title: "Phase 3: Build & Integration",

            duration: "Weeks 13–20",

            points: [
              "Platform implementation",
              "Custom development and extensions",
              "System integration and APIs",
              "Data migration execution",
              "Testing and quality assurance",
            ],
          },

          {
            number: "04",

            title: "Phase 4: Training & Enablement",

            duration: "Weeks 21–24",

            points: [
              "End-user training programs",
              "Administrator certification",
              "Documentation and playbooks",
              "Change management execution",
              "Adoption measurement",
            ],
          },

          {
            number: "05",

            title: "Phase 5: Launch & Optimization",

            duration: "Week 25+",

            points: [
              "Phased rollout or big-bang launch",
              "Hypercare support (30–60 days)",
              "Performance monitoring and optimization",
              "Continuous improvement",
              "Managed services transition",
            ],
          },
        ]}
      /> */}
      {/* <Contact /> */}
    </>
  );
}
