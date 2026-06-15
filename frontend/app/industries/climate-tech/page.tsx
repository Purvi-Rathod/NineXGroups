import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Leaf, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["MANUAL", "carbon and ESG data gathered by hand"],
      ["OPAQUE", "no clear view of emissions across scopes"],
      ["RISK", "rising disclosure and compliance demands"],
      ["UNVERIFIED", "claims without auditable data"],
      ["SLOW", "sustainability reporting cycles"],
    ],
    footerTitle: "CLIMATE PAIN",
    footerText: "OPAQUE. MANUAL.",
    showArrow: true,
  },
  {
    icon: <Leaf size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["GHG", "Carbon accounting across Scopes 1-3"],
      ["ESG", "ESG data & disclosure platforms"],
      ["MRV", "Monitoring, reporting & verification"],
      ["AI", "Emissions analytics & reduction modelling"],
      ["OFFSET", "Offset & carbon-credit management"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "MEASURABLE. VERIFIED.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["FULL", "Scope 1-3 emissions visibility"],
      ["FASTER", "ESG reporting cycles"],
      ["VERIFIED", "audit-ready climate data"],
      ["DATA", "single source of climate truth"],
      ["COMPLY", "disclosure-ready compliance"],
      ["GREEN", "credible, data-backed climate action"],
    ],
    footerTitle: "CLIMATE OUTCOMES",
    footerText: "MEASURABLE. SUSTAINABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Carbon Accounting (Scopes 1-3)", highlight: "Know your full footprint, not just the easy part", description: "We build carbon-accounting platforms that measure emissions across Scopes 1, 2, and 3 — replacing manual estimates with structured, auditable data so organisations finally see their full footprint and where it comes from." },
  { title: "ESG Data & Disclosure", highlight: "Report with confidence, not spreadsheets", description: "We deliver ESG data and disclosure platforms that aggregate sustainability data, automate reporting, and align to evolving frameworks — turning slow, manual reporting cycles into fast, defensible disclosures." },
  { title: "Monitoring, Reporting & Verification", highlight: "Make every climate claim verifiable", description: "We implement MRV systems that continuously monitor, document, and verify climate data — giving stakeholders and auditors confidence that what is reported is real, measured, and defensible." },
  { title: "Emissions Analytics & Reduction Modelling", highlight: "See where to cut, and what it will take", description: "We build analytics and reduction-modelling tools that pinpoint emissions hotspots and model decarbonisation pathways — turning climate goals into concrete, prioritised, data-driven action plans." },
  { title: "Offset & Carbon-Credit Management", highlight: "Manage credits with transparency and trust", description: "We deliver offset and carbon-credit management platforms that track sourcing, retirement, and quality — bringing transparency and integrity to offsetting so climate claims hold up to scrutiny." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1600&auto=format&fit=crop"
        headline="MEASURE. REDUCE. OFFSET. SCALE."
        subheadline="Carbon, sustainability, and climate platforms that turn climate goals into measurable action.
We replace manual, opaque sustainability data with auditable systems — measuring emissions across every scope, modelling reductions, and verifying climate claims so action is real and provable."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["CLIMATE", "GOALS.", "REAL", "DATA."]}
        title="Climate action you can measure, verify, and prove."
        description="Climate ambition means little without data to back it up, and regulators and stakeholders are demanding proof. We cut through the noise and implement the platforms that make climate action credible — carbon accounting, ESG disclosure, verification, and reduction modelling — turning goals into measured, verified, defensible progress."
        image="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every climate system we build."
        description="Climate technology only matters if the data behind it is honest and the action it drives is real. Every system we build is grounded in these commitments so what we deploy is transparent, sustainable, and accountable."
        quote="If You Can't Measure It, You Can't Reduce It"
        quoteDescription="Real climate progress starts with honest measurement, not aspiration. We build for transparency and accountability above all — giving organisations the verified data they need to reduce emissions for real and prove it, rather than just claim it."
        tags={["Transparency", "Sustainability", "Accountability"]}
        image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}