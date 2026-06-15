import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Car,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["LEGACY", "vehicle platforms unable to support connectivity"],
      ["0", "over-the-air update capability across the fleet"],
      ["TESLA", "out-innovating on the in-vehicle software experience"],
      ["$2B", "investment required to build a next-gen platform"],
      ["SLOW", "recall and fix cycles locked to dealership visits"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "DISCONNECTED. OUTPACED.",
    showArrow: true,
  },

  {
    icon: <Car size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CLOUD", "Cloud-native connected vehicle platform"],
      ["OTA", "Over-the-air update system across the fleet"],
      ["DATA", "Vehicle data platform powering 1M+ cars"],
      ["APP", "Mobile app ecosystem for remote vehicle control"],
      ["REV", "Connected-services monetization engine"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. SOFTWARE-DEFINED.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["1M+", "vehicles connected and managed live"],
      ["$200M", "connected-services revenue enabled"],
      ["60%", "reduction in recall costs via OTA updates"],
      ["90%", "successful OTA update rate across fleet"],
      ["40%", "reduction in warranty costs"],
      ["#1", "industry-leading in-vehicle software experience"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Connected Vehicle Platforms",
    highlight:
      "Turn every vehicle into a connected, upgradable, revenue-generating platform",
    description:
      "We build telematics and connectivity platforms, over-the-air (OTA) update systems, vehicle data management, connected services across navigation and infotainment, remote diagnostics, and fleet management — engineered on AWS IoT and Azure IoT with data lakes for telemetry, predictive-maintenance analytics, and mobile apps for vehicle control. The result is software-defined vehicles that keep improving long after they leave the factory.",
  },

  {
    title: "EV & Battery Management",
    highlight:
      "Maximise range, battery life, and charging intelligence",
    description:
      "We engineer battery management systems (BMS), charging-infrastructure integration, range-optimisation algorithms, battery-health monitoring, and charging-station management — the core software layer that makes electrification profitable and reliable at scale, from the cell to the charging network.",
  },

  {
    title: "Autonomous Vehicle Systems",
    highlight:
      "Build, validate, and deploy self-driving capability safely",
    description:
      "We deliver ADAS development and validation, sensor-fusion platforms, simulation and testing environments, HD-mapping integration, and safety-validation frameworks — the rigorous engineering foundation required to develop, prove, and ship autonomous and driver-assistance capability with safety at the centre of every decision.",
  },

  {
    title: "Smart Manufacturing",
    highlight:
      "Industry 4.0 on the factory floor",
    description:
      "We implement Industry 4.0 across the plant: digital twins of the production line, predictive maintenance, automated quality control, and supply-chain optimisation — reducing unplanned downtime, lifting overall equipment effectiveness, and cutting defects so next-gen vehicle platforms are built faster and to a higher standard.",
  },

  {
    title: "Digital Retail & DTC",
    highlight:
      "Reinvent how vehicles are configured, financed, and sold",
    description:
      "We build e-commerce platforms, virtual showroom experiences, online vehicle configuration, digital financing, and dealer management systems — transforming the buying journey into a seamless online-to-showroom experience that meets modern buyers where they are and modernises the dealer network around them.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1600&auto=format&fit=crop"
        headline="CONNECTED. ELECTRIC. AUTONOMOUS. READY."
        subheadline="From connected vehicles to electric mobility to autonomous systems, we help automotive companies navigate the industry's most significant transformation in 100 years.
We engineer connected vehicle platforms, EV and battery management, autonomous systems, smart manufacturing, and digital retail — turning legacy vehicle programmes into software-defined platforms that keep improving long after they leave the factory."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "SOFTWARE",
          "DEFINED.",
          "NOT JUST",
          "DRIVEN.",
        ]}
        title="Vehicles that improve after they leave the factory."
        description="The shift to connected, electric, and autonomous vehicles is the biggest transformation the automotive industry has seen in a century. We cut through the complexity and implement the platforms that make it real — telematics, OTA, battery intelligence, autonomy validation, and connected-services monetization — so every vehicle becomes a connected, upgradable, revenue-generating asset rather than a fixed product that depreciates the moment it ships."
        image="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every platform we engineer."
        description="Automotive software is safety-critical, lives at scale, and runs for a decade in the field. Every system we build is grounded in these commitments so what we ship is reliable, secure, and engineered to last across millions of vehicles."
        quote="Safety Is Not A Feature"
        quoteDescription="In automotive, software runs in moving machines carrying people. We treat safety, reliability, and validation as non-negotiable foundations — never as a layer added at the end. Every platform is built to perform under real-world conditions, at scale, for years."
        tags={[
          "Safety-First",
          "Reliability",
          "Engineering Rigour",
        ]}
        image="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}