import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Factory,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["30YR", "manufacturing operations running on legacy systems"],
      ["15%", "unplanned downtime across the production line"],
      ["MANUAL", "quality inspection slowing throughput"],
      ["$200M", "annual waste and rework"],
      ["BLIND", "no real-time visibility into operations"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "AGEING. WASTEFUL.",
    showArrow: true,
  },

  {
    icon: <Factory size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["IoT", "10,000+ sensors deployed across the floor"],
      ["ML", "Predictive-maintenance models on critical assets"],
      ["VISION", "Computer-vision automated quality inspection"],
      ["TWIN", "Digital twin of the full production line"],
      ["LIVE", "Real-time operations dashboards"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["40%", "reduction in unplanned downtime"],
      ["$80M", "annual savings realized"],
      ["60%", "faster quality inspection"],
      ["95%", "defect-detection accuracy"],
      ["30%", "improvement in overall equipment effectiveness"],
      ["12M", "ROI realization timeline"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Smart Factory & Industry 4.0",
    highlight:
      "Connect every machine, sensor, and process into one intelligent operation",
    description:
      "We deploy IoT sensors and connectivity, real-time production monitoring, digital-twin implementation, automated quality inspection, and predictive maintenance — engineered on PTC ThingWorx, Siemens MindSphere, and AWS/Azure IoT with edge computing and computer vision. The outcome is a connected factory that cuts unplanned downtime, lifts OEE, and reduces defects at scale.",
  },

  {
    title: "Predictive Maintenance",
    highlight:
      "Fix equipment before it fails, not after it stops the line",
    description:
      "We build equipment condition monitoring, ML models for failure prediction, maintenance-scheduling optimisation, spare-parts optimisation, and mobile maintenance apps — moving operations from reactive firefighting to predictive intervention, slashing downtime and maintenance cost while lifting asset utilisation.",
  },

  {
    title: "Supply Chain Optimisation",
    highlight:
      "End-to-end visibility from demand signal to delivery",
    description:
      "We implement demand planning and forecasting, a supply-chain control tower, supplier-collaboration platforms, inventory optimisation, and logistics optimisation — reducing inventory cost, sharpening forecast accuracy, cutting disruptions, and improving on-time delivery across the network.",
  },

  {
    title: "Automated Quality Inspection",
    highlight:
      "Catch every defect at machine speed, not human speed",
    description:
      "We deploy computer-vision quality inspection that detects defects in real time, integrates directly into the line, and feeds quality data back into the process — replacing slow manual inspection with automated detection that runs faster and catches more, with near-total defect-detection accuracy.",
  },

  {
    title: "Digital Twin & Operations Intelligence",
    highlight:
      "A live, virtual mirror of your entire production line",
    description:
      "We build digital twins of the production line and real-time operations dashboards that simulate, monitor, and optimise the factory continuously — giving operators and leadership a single, live view to spot bottlenecks, model changes before they happen, and drive measurable productivity gains.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
        headline="MONITOR. PREDICT. AUTOMATE. OPTIMISE."
        subheadline="Industry 4.0 solutions spanning IoT, AI, digital twins, and predictive maintenance that optimise operations, reduce costs, and improve quality.
We turn ageing, opaque production lines into connected, intelligent factories — cutting unplanned downtime, eliminating waste and rework, and giving leadership real-time visibility into every machine and process on the floor."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "FACTORIES",
          "THAT",
          "THINK FOR",
          "THEMSELVES.",
        ]}
        title="Operations that predict problems before they stop the line."
        description="Smart manufacturing is no longer a competitive edge — it is the baseline for operational survival. We cut through the Industry 4.0 hype and implement the systems that deliver real results: IoT connectivity, predictive maintenance, computer-vision quality control, and digital twins that turn raw machine data into fewer breakdowns, less waste, higher quality, and faster ROI."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every system we put on the floor."
        description="Manufacturing software runs in harsh, high-stakes environments where downtime costs millions and quality is non-negotiable. Every system we build is grounded in these commitments so what we deploy is reliable, precise, and engineered to perform around the clock."
        quote="Uptime Is Everything"
        quoteDescription="On a production line, every minute of downtime is lost revenue. We engineer for reliability, precision, and continuous operation — building systems that earn their place by keeping the line running and the quality high, day after day."
        tags={[
          "Reliability",
          "Precision",
          "Efficiency",
        ]}
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}