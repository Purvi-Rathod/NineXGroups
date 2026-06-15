import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, ShieldCheck, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["MANUAL", "underwriting and claims done by hand"],
      ["SLOW", "weeks-long claims and quoting cycles"],
      ["RISK", "fraud and pricing inaccuracy"],
      ["LEGACY", "policy systems decades old"],
      ["CHURN", "customers leaving for digital insurers"],
    ],
    footerTitle: "POLICY PAIN",
    footerText: "MANUAL. SLOW.",
    showArrow: true,
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["UW", "AI-assisted underwriting & pricing"],
      ["CLAIMS", "Automated, straight-through claims"],
      ["FRAUD", "Fraud detection & risk scoring"],
      ["CORE", "Modern policy & core platform"],
      ["CX", "Digital quote, bind & self-service"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "DIGITAL. INTELLIGENT.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["-60%", "reduction in claims cycle time"],
      ["+40%", "underwriting efficiency"],
      ["90%", "fraud detection accuracy"],
      ["MINUTES", "quote-to-bind, not weeks"],
      ["SELF", "digital self-service across policies"],
      ["90%", "customer satisfaction"],
    ],
    footerTitle: "POLICY OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "AI-Assisted Underwriting", highlight: "Price risk faster and more accurately", description: "We build AI-assisted underwriting and pricing systems that assess risk from richer data in real time — accelerating decisions, sharpening accuracy, and freeing underwriters to focus on the complex cases that need judgement." },
  { title: "Automated Claims Processing", highlight: "Pay valid claims in minutes, not weeks", description: "We deploy automated, straight-through claims processing that triages, validates, and settles routine claims without manual handling — slashing cycle time and turning the claims moment into a reason customers stay." },
  { title: "Fraud Detection & Risk Scoring", highlight: "Catch fraud without punishing honest customers", description: "We implement fraud-detection and risk-scoring models that flag suspicious activity in real time while keeping false positives low — protecting the loss ratio without adding friction for legitimate policyholders." },
  { title: "Modern Policy & Core Systems", highlight: "Replace the decades-old core that holds you back", description: "We modernise policy administration and core platforms onto flexible, cloud-native systems — replacing rigid legacy software with a foundation that lets insurers launch products and adapt at the speed of the market." },
  { title: "Digital Customer Experience", highlight: "Quote, bind, and serve entirely online", description: "We deliver digital quote, bind, and self-service experiences that let customers buy and manage policies on their own terms — meeting the expectations set by digital-first insurers and winning customers back." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop"
        headline="UNDERWRITE. AUTOMATE. PROTECT. SCALE."
        subheadline="Digital insurance platforms across underwriting, claims, and customer experience.
We replace manual underwriting, slow claims, and legacy core systems with intelligent, digital platforms — pricing risk accurately, settling claims fast, and serving customers entirely online."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["INSURANCE", "AT", "DIGITAL", "SPEED."]}
        title="Protection that quotes in minutes and pays without friction."
        description="Customers now expect insurance to move as fast as everything else on their phone, and digital-first insurers have proven it can. We cut through the legacy constraints and implement the platforms that close the gap — AI underwriting, automated claims, fraud intelligence, and digital self-service — turning slow, manual insurers into fast, trusted, digital competitors."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every insurance system we build."
        description="Insurance is a promise to be there at the worst moments, under strict regulation. Every system we build is grounded in these commitments so what we deploy is trustworthy, compliant, and fast when it matters."
        quote="Trust When It Matters Most"
        quoteDescription="Customers buy insurance for the day something goes wrong — and that is the moment that defines the relationship. We build for trust, compliance, and speed so insurers can keep their promise quickly and fairly, exactly when it counts."
        tags={["Trust", "Compliance", "Speed"]}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}