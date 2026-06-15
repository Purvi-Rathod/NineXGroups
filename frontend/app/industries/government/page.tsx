import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Landmark, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["PAPER", "manual, paper-bound citizen processes"],
      ["SILOED", "departments and data disconnected"],
      ["SLOW", "long wait times for public services"],
      ["LEGACY", "decades-old government systems"],
      ["RISK", "security and compliance pressure"],
    ],
    footerTitle: "SERVICE PAIN",
    footerText: "MANUAL. SILOED.",
    showArrow: true,
  },
  {
    icon: <Landmark size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["PORTAL", "Citizen service portals & digital ID"],
      ["GOV", "Government cloud & legacy modernisation"],
      ["DATA", "Secure data sharing across agencies"],
      ["AUTO", "Workflow & case-management automation"],
      ["SEC", "Security, compliance & data protection"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "DIGITAL. SECURE.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["-50%", "reduction in service wait times"],
      ["DIGITAL", "self-service citizen access"],
      ["UNIFIED", "data shared securely across agencies"],
      ["FASTER", "case resolution"],
      ["100%", "compliance and data protection"],
      ["TRUST", "higher citizen satisfaction"],
    ],
    footerTitle: "SERVICE OUTCOMES",
    footerText: "MEASURABLE. SECURE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Citizen Service Portals & Digital ID", highlight: "Bring every public service online in one place", description: "We build citizen service portals and digital identity systems that let people access government services from anywhere — replacing queues and paperwork with secure, self-service access available around the clock." },
  { title: "Government Cloud & Modernisation", highlight: "Move decades-old systems into the modern era", description: "We modernise legacy government systems onto secure government cloud — replacing brittle, ageing infrastructure with flexible, resilient platforms that agencies can build on and scale." },
  { title: "Secure Inter-Agency Data Sharing", highlight: "Connect agencies without compromising privacy", description: "We implement secure data-sharing platforms that let agencies exchange information safely and compliantly — breaking down silos so citizens are not asked for the same information again and again." },
  { title: "Case Management & Workflow Automation", highlight: "Resolve cases faster, with less manual work", description: "We deliver case-management and workflow automation that routes, tracks, and processes public-sector work end to end — cutting wait times and freeing staff from repetitive manual tasks." },
  { title: "Security, Compliance & Data Protection", highlight: "Hold public data to the highest standard", description: "We build security, compliance, and data-protection frameworks designed for the public sector's strict requirements — protecting citizen data and maintaining the compliance that public trust depends on." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1600&auto=format&fit=crop"
        headline="DIGITISE. SERVE. SECURE. TRUST."
        subheadline="Citizen services, digital government, and secure public-sector platforms.
We replace paper-bound, siloed, slow public services with secure digital platforms — bringing services online, connecting agencies, and protecting citizen data to the highest standard."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["GOVERNMENT", "THAT", "WORKS FOR", "PEOPLE."]}
        title="Public services that are fast, accessible, and trusted."
        description="Citizens deserve government services as accessible and reliable as the best digital experiences they use every day. We cut through legacy and bureaucracy to implement the platforms that deliver it — digital portals, modernised systems, secure data sharing, and automation — making public services faster, more accessible, and worthy of citizens' trust."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every public-sector system we build."
        description="Government technology serves everyone and is funded by everyone — it must be secure, inclusive, and accountable. Every system we build is grounded in these commitments so what we deploy protects citizens, serves all of them, and earns public trust."
        quote="Public Trust Is Sacred"
        quoteDescription="Government systems hold citizens' most sensitive data and deliver services people depend on. We build with security, accessibility, and accountability at the core — because public technology only works when every citizen can trust it and use it."
        tags={["Security", "Accessibility", "Accountability"]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}