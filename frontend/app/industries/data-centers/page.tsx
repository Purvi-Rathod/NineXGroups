import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Server, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["DOWNTIME", "outages threatening always-on workloads"],
      ["MANUAL", "infrastructure managed reactively"],
      ["POWER", "rising energy cost and efficiency limits"],
      ["BLIND", "no unified view of capacity and health"],
      ["SCALE", "demand outpacing existing capacity"],
    ],
    footerTitle: "INFRA PAIN",
    footerText: "REACTIVE. STRAINED.",
    showArrow: true,
  },
  {
    icon: <Server size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["DCIM", "Data-center infrastructure management"],
      ["AUTO", "Automation, provisioning & orchestration"],
      ["MON", "Observability, monitoring & alerting"],
      ["PUE", "Power, cooling & energy optimisation"],
      ["SEC", "Security, compliance & resilience"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "AUTOMATED. RESILIENT.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["99.99%", "uptime and availability"],
      ["-30%", "reduction in energy cost"],
      ["LIVE", "real-time capacity and health visibility"],
      ["FASTER", "provisioning and scaling"],
      ["AUTO", "automated infrastructure operations"],
      ["SECURE", "compliant, resilient infrastructure"],
    ],
    footerTitle: "INFRA OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Data-Center Infrastructure Management (DCIM)", highlight: "One live view of capacity, power, and health", description: "We build DCIM platforms that unify visibility across compute, power, cooling, and space — replacing blind, reactive operations with a single real-time view that lets teams plan capacity and act before issues become outages." },
  { title: "Automation & Orchestration", highlight: "Provision and scale without manual effort", description: "We deliver automation, provisioning, and orchestration that turn manual infrastructure tasks into self-service, policy-driven operations — accelerating deployment and scaling while reducing human error." },
  { title: "Observability & Monitoring", highlight: "Catch problems before workloads feel them", description: "We implement observability, monitoring, and alerting across the full stack — surfacing anomalies in real time so teams can intervene early and protect the uptime that always-on workloads depend on." },
  { title: "Power, Cooling & Energy Optimisation", highlight: "Cut energy cost without risking reliability", description: "We build power, cooling, and energy-optimisation systems that improve efficiency (PUE) intelligently — lowering energy cost and environmental impact while keeping thermal and power conditions safely in range." },
  { title: "Security, Compliance & Resilience", highlight: "Engineered to stay up and stay secure", description: "We deliver security, compliance, and resilience frameworks — hardening infrastructure, building in redundancy, and meeting strict standards so the data center stays secure, compliant, and online through anything." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop"
        headline="BUILD. CONNECT. SCALE. SECURE."
        subheadline="Data-center infrastructure, DCIM, and cloud platforms engineered for uptime at scale.
We turn reactive, strained infrastructure into automated, observable, resilient operations — maximising uptime, cutting energy cost, and scaling capacity to meet relentless demand."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["ALWAYS", "ON.", "ALWAYS", "SCALING."]}
        title="Infrastructure engineered for uptime, efficiency, and scale."
        description="The digital economy runs on data centers, and the demands on them never stop growing. We cut through reactive, manual operations and implement the platforms that modernise them — DCIM, automation, observability, and energy optimisation — building infrastructure that stays always-on, runs efficiently, and scales as fast as demand does."
        image="https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every infrastructure system we build."
        description="Data centers are the foundation everything else runs on — when they fail, everything fails. Every system we build is grounded in these commitments so what we deploy is reliable, efficient, and secure at scale."
        quote="Uptime Is The Promise"
        quoteDescription="Everything downstream depends on the infrastructure staying up — there is no acceptable amount of downtime. We engineer for reliability, efficiency, and security first, building infrastructure that keeps its promise around the clock, at any scale."
        tags={["Reliability", "Efficiency", "Security"]}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}