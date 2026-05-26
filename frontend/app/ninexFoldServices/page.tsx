import Hero from "@/components/sections/common/Hero";
import OurApproachSection from "@/components/sections/common/OurApproachSection";
import WhatWeDoSection from "./WhatWeDoSection";
import TechnologyPartnerships from "./TechnologyPartnerships";

import { Layers3, TrendingUp, Target, Users } from "lucide-react";

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

      <WhatWeDoSection />
      <TechnologyPartnerships />

      {/* OUR APPROACH SECTION */}
      {/* <OurApproachSection /> */}
    </>
  );
}
