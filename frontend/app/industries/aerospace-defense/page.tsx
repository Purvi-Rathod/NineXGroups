import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Rocket, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["LEGACY", "decades-old systems hard to modernise"],
      ["MANUAL", "validation and certification bottlenecks"],
      ["SILOED", "engineering data across disconnected tools"],
      ["RISK", "cyber and supply-chain threats rising"],
      ["SLOW", "program timelines and cost overruns"],
    ],
    footerTitle: "PROGRAM PAIN",
    footerText: "COMPLEX. CRITICAL.",
    showArrow: true,
  },
  {
    icon: <Rocket size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["DT", "Digital engineering & digital twins"],
      ["SIM", "Modelling, simulation & test environments"],
      ["SEC", "Secure, compliant mission systems"],
      ["MRO", "Predictive maintenance & fleet readiness"],
      ["C2", "Command, control & data integration"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "SECURE. MISSION-READY.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["-50%", "reduction in validation cycle time"],
      ["99.99%", "system availability"],
      ["FASTER", "program delivery timelines"],
      ["ZERO", "tolerance security posture"],
      ["LIVE", "real-time fleet readiness visibility"],
      ["READY", "mission-critical reliability"],
    ],
    footerTitle: "PROGRAM OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Digital Engineering & Digital Twins", highlight: "Design, test, and iterate before anything is built", description: "We build digital-engineering environments and digital twins that model systems end to end — letting teams simulate, validate, and refine designs virtually, compressing development cycles and cutting cost and risk before metal is ever cut." },
  { title: "Modelling, Simulation & Test", highlight: "Prove it works under every condition, virtually", description: "We deliver modelling, simulation, and test environments that exercise systems across the full operating envelope — accelerating validation and certification while raising confidence in mission performance." },
  { title: "Secure Mission Systems", highlight: "Built to the highest security and compliance standards", description: "We engineer secure, compliant mission systems hardened against cyber and supply-chain threats — designed from the ground up for the classification, integrity, and resilience that defense programs demand." },
  { title: "Predictive Maintenance & Fleet Readiness", highlight: "Keep every asset mission-ready", description: "We implement predictive maintenance and fleet-readiness platforms that monitor asset health, predict failures, and optimise sustainment — maximising availability and keeping fleets ready when it counts." },
  { title: "Command, Control & Data Integration", highlight: "One trusted picture across every system", description: "We build command, control, and data-integration platforms that fuse information from disconnected systems into a single, secure operational view — enabling faster, better-informed decisions." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1600&auto=format&fit=crop"
        headline="ENGINEER. SIMULATE. SECURE. DEPLOY."
        subheadline="Mission-critical software, simulation, and secure systems for aerospace and defense programs.
We modernise legacy systems, compress validation cycles, and harden mission systems against rising threats — delivering secure, simulation-driven engineering for programs that cannot fail."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["MISSION", "CRITICAL.", "NO", "COMPROMISE."]}
        title="Software and systems engineered for missions that cannot fail."
        description="In aerospace and defense, the cost of failure is measured in lives and national security. We cut through complexity and implement the systems these programs demand — digital engineering, simulation, secure mission systems, and predictive readiness — built with the precision and resilience that mission-critical work requires."
        image="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every defense system we build."
        description="Defense technology operates where security, safety, and reliability are absolute. Every system we build is grounded in these commitments so what we deploy is secure, precise, and ready for the mission."
        quote="Failure Is Not An Option"
        quoteDescription="When systems carry national security and human lives, there is no acceptable margin for error. We engineer with uncompromising security and precision, building for mission-readiness first — because in this domain, getting it right is the entire job."
        tags={["Security", "Precision", "Mission-Readiness"]}
        image="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}