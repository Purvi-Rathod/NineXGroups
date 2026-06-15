import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Microscope, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["MANUAL", "research data trapped in spreadsheets and silos"],
      ["SLOW", "discovery and development timelines"],
      ["RISK", "compliance and data-integrity gaps"],
      ["SCALE", "data volumes outpacing legacy tools"],
      ["BLIND", "no unified view across the pipeline"],
    ],
    footerTitle: "R&D PAIN",
    footerText: "SILOED. SLOW.",
    showArrow: true,
  },
  {
    icon: <Microscope size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["LIMS", "Lab informatics, LIMS & ELN platforms"],
      ["AI", "AI-driven discovery & data science"],
      ["GxP", "Compliant, validated data systems"],
      ["TRIAL", "Clinical & research data management"],
      ["INTEG", "Pipeline integration & interoperability"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. COMPLIANT.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["FASTER", "discovery and development cycles"],
      ["+50%", "improvement in data quality"],
      ["100%", "GxP and regulatory compliance"],
      ["UNIFIED", "single view across the R&D pipeline"],
      ["SCALE", "petabyte-scale research data managed"],
      ["READY", "audit- and submission-ready data"],
    ],
    footerTitle: "R&D OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Lab Informatics (LIMS & ELN)", highlight: "Get research data out of spreadsheets and into one system", description: "We build laboratory information management systems (LIMS) and electronic lab notebooks (ELN) that capture, structure, and connect research data from the bench — replacing fragmented spreadsheets with a single, searchable, compliant source of scientific truth." },
  { title: "AI-Driven Discovery", highlight: "Turn mountains of research data into the next breakthrough", description: "We deploy AI and data-science platforms that surface patterns across experimental, genomic, and clinical data — accelerating target identification, candidate screening, and decision-making across the discovery pipeline." },
  { title: "Compliant & Validated Data Systems", highlight: "Built for GxP, audit, and submission from day one", description: "We engineer GxP-compliant, validated data systems with full traceability and data integrity — so every result is defensible, every system is audit-ready, and compliance is built in rather than bolted on." },
  { title: "Clinical & Research Data Management", highlight: "Manage trial and research data cleanly, start to finish", description: "We deliver clinical and research data management spanning capture, cleaning, and analysis — improving data quality, accelerating timelines, and keeping studies submission-ready throughout their lifecycle." },
  { title: "Pipeline Integration & Interoperability", highlight: "Connect every system across the R&D lifecycle", description: "We build integration and interoperability across instruments, informatics, and clinical systems — eliminating silos so data flows seamlessly from discovery through development and into a unified view of the pipeline." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop"
        headline="DISCOVER. DEVELOP. VALIDATE. DELIVER."
        subheadline="Software and data platforms for biotech, pharma, and life-science R&D — from discovery to delivery.
We free research data from silos, accelerate discovery with AI, and build the compliant, validated systems that turn scientific data into faster, defensible breakthroughs."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["SCIENCE", "AT", "DATA", "SPEED."]}
        title="Research platforms that turn data into discovery faster."
        description="Modern science generates more data than legacy tools can handle, and breakthroughs stall when that data sits in silos. We cut through the fragmentation and implement the platforms that unlock it — lab informatics, AI-driven discovery, validated data systems, and pipeline integration — so research moves from data to discovery faster, with integrity intact at every step."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every life-science system we build."
        description="In life sciences, data underpins decisions that affect human health and must withstand regulatory scrutiny. Every system we build is grounded in these commitments so what we deploy protects data integrity, stays compliant, and upholds scientific rigour."
        quote="Integrity Is The Science"
        quoteDescription="In research, a result is only as good as the data behind it. We build for data integrity, compliance, and scientific rigour above all — because in life sciences, trustworthy data is not a feature, it is the foundation of the science itself."
        tags={["Data Integrity", "Compliance", "Scientific Rigour"]}
        image="https://images.unsplash.com/photo-1581093588401-22f4dface0c9?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}