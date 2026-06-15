import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Zap,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["AGEING", "grid infrastructure under rising demand"],
      ["MANUAL", "outage detection and response delays"],
      ["RENEW", "intermittent renewables hard to balance"],
      ["LEGACY", "billing and customer systems frustrating users"],
      ["BLIND", "limited real-time visibility into the grid"],
    ],
    footerTitle: "GRID PAIN",
    footerText: "AGEING. STRAINED.",
    showArrow: true,
  },

  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AMI", "Advanced metering infrastructure & smart meters"],
      ["AUTO", "Distribution automation & outage management"],
      ["VPP", "Virtual power plants & storage optimisation"],
      ["FCST", "Renewable forecasting, scheduling & balancing"],
      ["CX", "Customer portals, billing & usage insights"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "SMART. RELIABLE.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["50M+", "smart meters deployed across the grid"],
      ["100%", "grid reliability maintained"],
      ["$8B+", "transformation value delivered"],
      ["80+", "utility companies served"],
      ["LIVE", "real-time grid visibility and control"],
      ["GREEN", "more renewables balanced onto the grid"],
    ],
    footerTitle: "GRID OUTCOMES",
    footerText: "RELIABLE. SUSTAINABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Smart Grid",
    highlight:
      "A self-aware grid that sees, responds, and optimises in real time",
    description:
      "We deploy advanced metering infrastructure (AMI), distribution automation, outage management systems, grid analytics and optimisation, and demand-response platforms — turning a passive, ageing grid into an intelligent network that detects issues instantly, balances load dynamically, and keeps the lights on.",
  },

  {
    title: "Renewable Integration",
    highlight:
      "Bring more clean energy onto the grid without losing stability",
    description:
      "We build renewable energy management, energy-storage optimisation, virtual power plant platforms, forecasting and scheduling, and grid balancing — solving the intermittency problem so utilities can scale solar, wind, and storage while keeping the grid stable and reliable.",
  },

  {
    title: "Customer Experience",
    highlight:
      "Give customers control over their energy and their bill",
    description:
      "We deliver customer portals and mobile apps, billing and payment systems, energy-efficiency programs, usage analytics and insights, and customer-service automation — replacing frustrating legacy experiences with self-service tools that empower customers and cut service costs.",
  },

  {
    title: "Outage Management & Distribution Automation",
    highlight:
      "Detect, isolate, and restore faster than ever",
    description:
      "We implement outage management systems and distribution automation that pinpoint faults in real time, automatically reroute power, and accelerate restoration — minimising downtime, reducing truck rolls, and protecting reliability across the network.",
  },

  {
    title: "Energy Storage & Virtual Power Plants",
    highlight:
      "Turn distributed energy into a coordinated, dispatchable asset",
    description:
      "We build energy-storage optimisation and virtual power plant platforms that aggregate batteries, solar, and flexible loads into a single controllable resource — balancing supply and demand, shaving peaks, and unlocking new value from distributed energy across the grid.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop"
        headline="POWER. CONNECT. BALANCE. SUSTAIN."
        subheadline="From smart grid to renewable integration to customer experience, we help utilities navigate the energy transition.
We modernise ageing grids into intelligent, self-aware networks — integrating renewables and storage, automating outage response, and giving customers real control over their energy, all while holding reliability to the highest standard."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "A GRID",
          "READY",
          "FOR WHAT'S",
          "NEXT.",
        ]}
        title="A smarter, cleaner grid built for the energy transition."
        description="The energy transition is rewriting how power is generated, distributed, and consumed — and ageing grids were never designed for it. We cut through the complexity and implement the platforms that make the modern grid work: smart metering, distribution automation, renewable and storage integration, and customer experience — turning strained legacy networks into intelligent, sustainable systems ready for what comes next."
        image="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every grid system we build."
        description="Energy is critical infrastructure — when it fails, everything stops. Every system we build is grounded in these commitments so what we deploy is reliable, resilient, and built to power communities through the transition to clean energy."
        quote="Reliability Is Non-Negotiable"
        quoteDescription="The grid underpins hospitals, homes, and entire economies — there is no acceptable level of failure. We engineer for reliability and resilience first, building systems that integrate clean energy and modernise the experience without ever compromising the power people depend on."
        tags={[
          "Reliability",
          "Sustainability",
          "Resilience",
        ]}
        image="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}