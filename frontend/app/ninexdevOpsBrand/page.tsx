import Hero from "@/components/sections/common/Hero";
import OurApproachSection from "@/components/sections/common/OurApproachSection";
import WhatWeDoSection from "./WhatWeDoSection";
import ClientSuccessMetricsSection from "./ClientSuccessMetricsSection";
import TechnologyPartnerships from "./TechnologyPartnerships";
import Contact from "@/components/sections/common/Contact";

import { Layers3, TrendingUp, Target, Users } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  SlidersHorizontal,
  User,
} from "lucide-react";



const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Revenue Impact",
    items: [
      ["85%", "average revenue increase within 12 months"],
      ["45%", "improvement in forecast accuracy"],
      ["60%", "faster sales cycles"],
      ["40%", "increase in average deal size"],
    ],
    footerTitle: "OUTCOME DRIVEN",
    footerText: "MEASURABLE. IMPACTFUL.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Operational Efficiency",
    items: [
      ["70%", "reduction in manual data entry"],
      ["60%", "faster reporting and analytics"],
      ["50%", "reduction in system maintenance costs"],
      ["40%", "improvement in data quality"],
    ],
    footerTitle: "BUILT FOR EFFICIENCY",
    footerText: "STREAMLINED. SCALABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "User Adoption",
    items: [
      ["95%", "user adoption within 90 days"],
      ["4.5/5", "average user satisfaction score"],
      ["80%", "reduction in support tickets"],
      ["90%", "process compliance"],
    ],
    showArrow: false,
  },
];

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/bg-image/Devops-bg.png"
        subheadline="Technology infrastructure"
        headline="Technology infrastructure that powers modern enterprises"
        body="NineXDevOps delivers comprehensive technology services spanning cloud infrastructure,
                artificial intelligence, cybersecurity, digital engineering, DevOps automation, and network
                modernization. We design, build, and operate the platforms that power your digital business."
        stats={[
          {
            value: "1,500+",
            label: "Technology Professionals",
            icon: <Layers3 size={18} />,
          },
          {
            value: "99.99%",
            label: "Uptime for Managed Systems",
            icon: <TrendingUp size={18} />,
          },
          {
            value: "5000+",
            label: "Cloud Migrations Completed",
            icon: <Target size={18} />,
          },
          {
            value: "5+ Years",
            label: "Zero Security Breaches",
            icon: <Users size={18} />,
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
      <TechnologyPartnerships />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
      <Contact />
    </>
  );
}
