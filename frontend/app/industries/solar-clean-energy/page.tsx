import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Sun, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["INTERMIT", "solar output swinging with weather and time"],
      ["MANUAL", "asset monitoring across scattered sites"],
      ["WASTE", "clean energy curtailed for lack of storage"],
      ["SLOW", "project financing and deployment cycles"],
      ["BLIND", "no real-time view of fleet performance"],
    ],
    footerTitle: "ENERGY PAIN",
    footerText: "INTERMITTENT. UNDERUSED.",
    showArrow: true,
  },
  {
    icon: <Sun size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["MON", "Solar asset monitoring & performance analytics"],
      ["STORE", "Battery storage optimisation & dispatch"],
      ["FCST", "Generation forecasting & scheduling"],
      ["O&M", "Predictive operations & maintenance"],
      ["GRID", "Grid integration & energy trading"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CLEAN. RELIABLE.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["+30%", "improvement in fleet yield"],
      ["-40%", "reduction in O&M cost"],
      ["95%", "forecast accuracy on generation"],
      ["24/7", "real-time fleet visibility"],
      ["FASTER", "project deployment cycles"],
      ["GREEN", "more clean energy delivered to grid"],
    ],
    footerTitle: "ENERGY OUTCOMES",
    footerText: "MEASURABLE. SUSTAINABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Solar Asset Management", highlight: "See and optimise every panel across the entire fleet", description: "We build solar asset monitoring and performance analytics that track generation site by site, flag underperformance instantly, and benchmark the whole portfolio in real time — turning scattered installations into one optimised, transparent fleet." },
  { title: "Energy Storage Optimisation", highlight: "Store the sun and dispatch it when it is worth the most", description: "We deploy battery storage optimisation and intelligent dispatch that capture excess generation, smooth intermittency, and release energy at peak value — eliminating curtailment and turning storage into a profit centre." },
  { title: "Generation Forecasting", highlight: "Predict tomorrow's output before the sun comes up", description: "We implement generation forecasting and scheduling models that combine weather, irradiance, and historical data to predict output accurately — enabling confident grid commitments and smarter energy trading." },
  { title: "Predictive O&M", highlight: "Fix faults before they cost you generation", description: "We build predictive operations and maintenance that monitor inverter and panel health, predict failures, and optimise maintenance schedules — cutting O&M cost and lost generation across the fleet." },
  { title: "Grid Integration & Energy Trading", highlight: "Turn clean generation into grid value and revenue", description: "We deliver grid integration and energy-trading platforms that connect clean assets to the grid and markets, balance supply, and capture value — making renewable generation a reliable, monetised grid resource." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
        headline="HARNESS. STORE. POWER. CLEANLY."
        subheadline="Solar, storage, and clean-energy platforms that make renewable power reliable, profitable, and scalable.
We turn intermittent generation and scattered assets into optimised, monetised clean-energy fleets — forecasting output, optimising storage, and integrating cleanly with the grid."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["CLEAN", "POWER.", "ALWAYS", "ON."]}
        title="Renewable energy made as reliable as the grid it replaces."
        description="Clean energy only wins when it is dependable. We cut through the intermittency problem and implement the platforms that make solar and storage reliable and profitable — fleet analytics, storage optimisation, accurate forecasting, and grid integration that turn variable generation into firm, valuable power."
        image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every clean-energy system we build."
        description="Clean energy is infrastructure the future depends on — it has to perform, not just promise. Every system we build is grounded in these commitments so what we deploy is sustainable, reliable, and built to deliver real returns."
        quote="Clean Has To Be Dependable"
        quoteDescription="The energy transition succeeds only if clean power is as reliable as what it replaces. We engineer for sustainability and dependability together — building systems that maximise clean generation while keeping it firm, predictable, and economically sound."
        tags={["Sustainability", "Reliability", "Efficiency"]}
        image="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}