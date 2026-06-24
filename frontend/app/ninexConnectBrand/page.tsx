import Hero from "@/components/sections/common/Hero";
// import OurApproachSection from "@/components/sections/common/OurApproachSection";
import WhatWeDoSection from "./WhatWeDoSection";
// import ClientSuccessMetricsSection from "./ClientSuccessMetricsSection";
// import TechnologyPartnerships from "./TechnologyPartnerships";
import Contact from "@/components/sections/common/Contact";

import {
  Users,
  TrendingUp,
  SmilePlus,
  Headphones,
} from "lucide-react";

export default function Page() {
  return (
    <>
      {/* HERO SECTION */}
      <Hero
        backgroundImage="/images/bg-image/Connect-bg.png"
        subheadline="CUSTOMER EXPERIENCE & SALES TRANSFORMATION"
        headline="Customer experiences that drive loyalty and revenue growth"
        body="NineXConnect specializes in sales acceleration and customer experience transformation. We implement CRM systems, design seamless customer journeys, automate sales workflows, deploy AI-powered contact centers, and build marketing platforms that connect every touchpoint into a unified revenue engine."

        stats={[
          {
            value: "500+",
            label: "CRM Implementations",
            icon: <Users size={18} />,
          },
          {
            value: "50%",
            label: "Average Sales Productivity Increase",
            icon: <TrendingUp size={18} />,
          },
          {
            value: "40-Point",
            label: "Average NPS Improvement",
            icon: <SmilePlus size={18} />,
          },
          {
            value: "60%",
            label: "Cost Reduction in Support Operations",
            icon: <Headphones size={18} />,
          },
        ]}
      />

      <WhatWeDoSection />


    </>
  );
}