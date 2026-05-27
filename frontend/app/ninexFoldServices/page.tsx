import Hero from "@/components/sections/common/Hero";
import OurApproachSection from "@/components/sections/common/OurApproachSection";
import WhatWeDoSection from "./WhatWeDoSection";
import TechnologyPartnerships from "./TechnologyPartnerships";
import ClientSuccessMetricsSection from "./ClientSuccessMetricsSection";
import { Layers3, TrendingUp, Target, Users } from "lucide-react";
import ValuesSection from "@/components/sections/common/ValuesSection";
import OurVision from "@/components/sections/common/OurVision";
import {
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
        backgroundImage="/images/bg-image/Fold-bg.png"
        subheadline="Enterprise Transformation"
        headline="Enterprise systems that architect growth"
        body="NineXFold implements enterprise-grade business systems spanning revenue operations, sales automation, marketing technology, customer experience platforms, business intelligence, and ERP solutions. We don't just deploy software—we architect the operational backbone that becomes your competitive advantage."
        stats={[
          {
            value: "1,500+",
            label: "Systems Implemented",
            icon: <Layers3 size={18} />,
          },
          {
            value: "85%",
            label: "Average Revenue Increase",
            icon: <TrendingUp size={18} />,
          },
          {
            value: "6-Month",
            label: "Average ROI",
            icon: <Target size={18} />,
          },
          {
            value: "98%",
            label: "Client Satisfaction",
            icon: <Users size={18} />,
          },
        ]}
      />

      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "NO",
          "CODE.",
          "NO",
          "LIMITS.",
        ]}
        title="A world where every business competes on strategy, not just spend."
        description="At NineXFold, we engineer the systems behind sustainable growth. Brand intelligence, demand generation, search visibility, content authority, and AI-powered automation architected together as one unified performance engine. We don't run campaigns. We build growth infrastructure. The kind that compounds, scales, and delivers measurable outcomes quarter after quarter, giving enterprise businesses a permanent structural advantage over their competition."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles that drive every system we build."
        description="Enterprise growth is not accidental. It is architected. Every engagement we take on is built on four principles that ensure what we deliver is not just impactful today but defensible, scalable, and compounding tomorrow."
        quote="Think in Systems, Not Campaigns"
        quoteDescription="We engineer interconnected growth infrastructure where brand, demand, search, content, and AI work as one compounding system — not isolated tactics."
        tags={[
          "Architecture",
          "Integration",
          "Scale",
        ]}
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80"
      />
      <WhatWeDoSection />
      <TechnologyPartnerships />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
      {/* OUR APPROACH SECTION */}
      {/* <OurApproachSection /> */}
    </>
  );
}
