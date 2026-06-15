import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Sprout, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["GUESS", "input decisions made without data"],
      ["WASTE", "water, fertiliser and yield losses"],
      ["MANUAL", "field monitoring across large acreage"],
      ["OPAQUE", "no visibility down the supply chain"],
      ["CLIMATE", "weather volatility threatening yields"],
    ],
    footerTitle: "FARM PAIN",
    footerText: "BLIND. WASTEFUL.",
    showArrow: true,
  },
  {
    icon: <Sprout size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["IoT", "Field sensors & precision agriculture"],
      ["SAT", "Satellite & drone crop monitoring"],
      ["AI", "Yield prediction & input optimisation"],
      ["TRACE", "Farm-to-fork supply-chain traceability"],
      ["FARM", "Farm management & operations platforms"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "PRECISE. SUSTAINABLE.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["+25%", "improvement in crop yield"],
      ["-30%", "reduction in water & input use"],
      ["LIVE", "real-time field and crop visibility"],
      ["TRACE", "full supply-chain traceability"],
      ["FASTER", "data-driven decisions"],
      ["GREEN", "more sustainable operations"],
    ],
    footerTitle: "FARM OUTCOMES",
    footerText: "MEASURABLE. SUSTAINABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Precision Agriculture & Field Sensors", highlight: "Treat every acre according to exactly what it needs", description: "We deploy IoT field sensors and precision-agriculture systems that measure soil, moisture, and crop conditions in real time — replacing guesswork with data so inputs go exactly where and when they are needed." },
  { title: "Satellite & Drone Crop Monitoring", highlight: "See the whole farm from above, down to the plant", description: "We build satellite and drone crop-monitoring platforms that map crop health across large acreage, detect stress early, and turn imagery into action — making it possible to monitor thousands of hectares without walking the fields." },
  { title: "Yield Prediction & Input Optimisation", highlight: "Grow more while using less", description: "We implement AI models for yield prediction and input optimisation that forecast harvests and recommend precise water, fertiliser, and crop-protection levels — lifting yield while cutting waste and cost." },
  { title: "Supply-Chain Traceability", highlight: "Track produce from the field to the fork", description: "We deliver farm-to-fork traceability platforms that follow produce through every step of the chain — giving buyers and consumers verifiable origin and quality, and giving growers premium, transparent markets." },
  { title: "Farm Management Platforms", highlight: "Run the whole operation from one place", description: "We build farm-management and operations platforms that unify planning, labour, equipment, and records — giving growers a single system to run a modern, efficient, data-driven operation." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop"
        headline="SENSE. PREDICT. GROW. SUSTAIN."
        subheadline="Precision agriculture, farm data, and supply-chain platforms that boost yield and sustainability.
We replace guesswork with data — sensing field conditions, predicting yields, optimising every input, and tracing produce end to end so growers harvest more with less."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["FARMING", "BY", "DATA.", "NOT GUESS."]}
        title="Agriculture that grows more with less, season after season."
        description="Feeding a growing world on a changing climate demands precision, not intuition. We cut through the uncertainty and implement the platforms that make farming data-driven — field sensors, satellite monitoring, yield prediction, and traceability — turning every acre into a more productive, sustainable, and resilient operation."
        image="https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every agritech system we build."
        description="Agriculture feeds the world and stewards the land — technology here has to respect both. Every system we build is grounded in these commitments so what we deploy is precise, sustainable, and resilient to a changing climate."
        quote="Feed More, Waste Less"
        quoteDescription="The future of food depends on producing more while using fewer resources. We build with precision and sustainability at the core — helping growers raise yield, cut waste, and build resilience, season after season."
        tags={["Sustainability", "Precision", "Resilience"]}
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}