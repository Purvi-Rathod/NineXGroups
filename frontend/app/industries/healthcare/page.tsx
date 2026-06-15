import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  HeartPulse,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["PAPER", "fragmented records across disconnected systems"],
      ["40%", "no-show rates straining clinic capacity"],
      ["MANUAL", "clinical workflows slowing care delivery"],
      ["LOW", "patient portal adoption and engagement"],
      ["RISK", "interoperability and compliance gaps"],
    ],
    footerTitle: "CARE PAIN",
    footerText: "FRAGMENTED. MANUAL.",
    showArrow: true,
  },

  {
    icon: <HeartPulse size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["EHR", "Epic & Cerner implementation and optimisation"],
      ["PORTAL", "Patient portals and telemedicine platforms"],
      ["RPM", "Remote patient monitoring & care coordination"],
      ["FLOW", "Clinical workflow optimisation & mobile apps"],
      ["DATA", "Interoperability and compliant data management"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. COMPLIANT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["85%", "patient portal adoption"],
      ["70%", "telemedicine satisfaction"],
      ["40%", "reduction in patient no-shows"],
      ["90%", "patient satisfaction"],
      ["100%", "regulatory & HIPAA compliance"],
      ["30%", "reduction in clinical trial duration"],
    ],
    footerTitle: "CARE OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Electronic Health Records (EHR)",
    highlight:
      "Make the record work for clinicians, not against them",
    description:
      "We deliver Epic implementation and optimisation, Cerner implementation, EHR integration and interoperability, clinical workflow optimisation, and mobile clinical apps — turning the EHR from a documentation burden into a connected system that speeds care, reduces clicks, and gives clinicians the right information at the right moment.",
  },

  {
    title: "Patient Engagement",
    highlight:
      "Keep patients connected to their care between visits",
    description:
      "We build patient portals, telemedicine platforms, appointment scheduling, remote patient monitoring, and care-coordination platforms — driving high portal adoption, cutting no-shows, and lifting patient satisfaction by meeting people where they are, on the devices they already use.",
  },

  {
    title: "Clinical Research",
    highlight:
      "Run trials faster, cleaner, and fully compliant",
    description:
      "We implement clinical trial management, EDC systems, patient-recruitment platforms, data management and analytics, and regulatory compliance — accelerating patient enrolment, shortening trial duration, and improving data quality while maintaining full regulatory compliance end to end.",
  },

  {
    title: "Telemedicine & Remote Monitoring",
    highlight:
      "Deliver care beyond the four walls of the clinic",
    description:
      "We deploy telemedicine platforms and remote patient monitoring that extend care into the home — connecting patients and providers virtually, capturing vitals continuously, and surfacing the signals that let care teams intervene early and keep high-risk patients out of the hospital.",
  },

  {
    title: "Interoperability & Clinical Data",
    highlight:
      "One connected, compliant view of every patient",
    description:
      "We build EHR integration and interoperability, clinical data management, and analytics that unify information across systems and settings — eliminating data silos, supporting compliant exchange, and giving clinicians and administrators a single, trustworthy source of patient truth.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1600&auto=format&fit=crop"
        headline="CONNECT. ENGAGE. HEAL. BETTER."
        subheadline="From electronic health records to patient engagement to clinical research acceleration, we help healthcare organizations deliver exceptional care.
We connect fragmented systems, modernise clinical workflows, and bring patients into their own care — building HIPAA-compliant platforms that improve outcomes, lift satisfaction, and let clinicians spend more time on patients and less on paperwork."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "CARE",
          "THAT",
          "CONNECTS",
          "EVERYTHING.",
        ]}
        title="Connected care that puts patient outcomes first."
        description="Healthcare runs on information, yet most of it is trapped in disconnected systems that slow clinicians and frustrate patients. We cut through the fragmentation and implement the platforms that join it together — optimised EHRs, patient engagement, telemedicine, remote monitoring, and interoperable data — so care teams act on a complete picture and patients stay connected to their health at every step."
        image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every healthcare system we build."
        description="In healthcare, software touches patient safety, privacy, and human lives — there is no margin for shortcuts. Every system we build is grounded in these commitments so what we deploy is clinically sound, fully compliant, and built around the patient."
        quote="Patients Are Not Data Points"
        quoteDescription="Behind every record is a person and a moment of care. We build with clinical rigour, protect privacy without compromise, and design every system around real patient outcomes — because in healthcare, getting it right is not a metric, it is a responsibility."
        tags={[
          "Patient-First",
          "Compliance",
          "Clinical Rigour",
        ]}
        image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}