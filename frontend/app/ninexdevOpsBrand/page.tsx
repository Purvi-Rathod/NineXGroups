import Hero from "@/components/sections/common/Hero";
import OurVision from "./OurVision";
import ValuesSection from "./ValuesSection";
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
    title: "Client Success Story",
    items: [
      ["50", "data centres modernised across global infrastructure"],
      ["12", "business units unified into one ERP ecosystem"],
      ["200+", "applications transformed through DevOps automation"],
      ["45", "manufacturing facilities connected through IoT systems"],
    ],
    footerTitle: "FORTUNE 100 MANUFACTURER",
    footerText: "COMPLETE TECHNOLOGY TRANSFORMATION.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Transformation Results",
    items: [
      ["$80M", "annual cost savings across infrastructure and operations"],
      ["40%", "improvement in operational efficiency"],
      ["95%", "forecast accuracy increased from 55%"],
      ["99.99%", "uptime across all critical systems"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "SCALABLE. ENTERPRISE READY.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Technology Transformation",
    items: [
      ["AWS+GCP", "multi-cloud infrastructure deployment"],
      ["SAP S/4HANA", "enterprise ERP consolidation"],
      ["Snowflake", "unified enterprise data platform"],
      ["18-Month", "enterprise ROI achieved after transformation"],
    ],
    footerTitle: "AI POWERED OPERATIONS",
    footerText: "CONNECTED. OPTIMISED.",
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
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "TECH-NOLOGY",
          "THAT-BUILDS",
          "ENTER-PRISE",
          "ADVAN-TAGE.",
        ]}
        title="A world where every enterprise has the technology infrastructure to compete with the best-resourced players in their market."
        description="Technology is the great equaliser — but only for enterprises that build it with discipline, govern it with rigour, and operate it with excellence. We bring the full spectrum of technology capability — from cloud to AI to ERP to custom code — to every client we partner with, ensuring technology is always an asset that compounds in value, never a liability that constrains growth."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every technology system we engineer."
        description="Technology built without principles accumulates debt that compounds against you. Every engagement we take on is grounded in these four commitments to ensure what we build is excellent, secure, commercially sound, and built to operate long-term."
        quote="Engineering Excellence Without Compromise"
        quoteDescription="We do not cut corners on architecture, security, or code quality. The technical decisions made in the first six months determine how the system performs for the next six years."
        tags={[
          "Excellence",
          "Discipline",
          "Standards",
        ]}
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80"
      />
      <WhatWeDoSection />
      <TechnologyPartnerships />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}
