import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Landmark,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["20YR", "legacy core banking system at end of life"],
      ["70%", "of activity still dependent on branches"],
      ["2WK", "account-opening process driving drop-off"],
      ["NEO", "losing customers to digital-first neobanks"],
      ["SLOW", "no real-time digital experience"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "LEGACY. OUTPACED.",
    showArrow: true,
  },

  {
    icon: <Landmark size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CLOUD", "Cloud-native digital banking platform"],
      ["MOB", "Mobile-first customer experience"],
      ["INST", "Instant, fully digital account opening"],
      ["AI", "AI-powered personal finance tools"],
      ["PLAID", "Plaid integration for account connectivity"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "DIGITAL. REAL-TIME.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["500K+", "digital customers in 18 months"],
      ["80%", "digital transaction adoption"],
      ["5MIN", "account opening, down from 2 weeks"],
      ["$200M", "deposit growth"],
      ["99.99%", "payment success rate"],
      ["#1", "ranked mobile banking app in region"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Digital Banking",
    highlight:
      "Banking that lives in the customer's pocket, not the branch",
    description:
      "We build mobile banking apps, online banking platforms, automated account opening, personal financial management, and digital lending — moving customers off branches and onto digital, lifting adoption, cutting branch costs, and earning top app-store ratings and satisfaction scores.",
  },

  {
    title: "Payments Modernisation",
    highlight:
      "Move money instantly, securely, and at lower cost",
    description:
      "We deliver real-time payments infrastructure, payment orchestration, fraud detection, digital wallets, and cross-border payments — engineered on Stripe, Adyen, Plaid, Modern Treasury, and Unit — driving near-perfect payment success rates, real-time settlement, and meaningfully lower payment costs.",
  },

  {
    title: "Risk & Compliance",
    highlight:
      "Stay compliant and ahead of risk without slowing the business",
    description:
      "We automate AML/KYC, transaction monitoring, regulatory reporting, and credit-risk modelling — slashing false positives, accelerating KYC, and maintaining full regulatory compliance, so risk and growth move together instead of against each other.",
  },

  {
    title: "Fraud Detection & Prevention",
    highlight:
      "Catch fraud in real time, before it costs you",
    description:
      "We deploy AI-driven fraud detection across payments and accounts — scoring transactions in real time, surfacing anomalies, and blocking threats with high accuracy while minimising false declines, protecting both revenue and the customer relationship.",
  },

  {
    title: "Digital Lending",
    highlight:
      "Approve and fund borrowers in minutes, not days",
    description:
      "We build digital lending platforms with automated underwriting, data-driven credit decisioning, and instant application-to-funding flows — turning a slow, paperwork-heavy process into a fast, fully digital experience that wins borrowers and manages risk.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop"
        headline="INSTANT. SECURE. DIGITAL. EVERYWHERE."
        subheadline="From digital banking to payments modernization to AI-powered risk management, we help financial institutions compete in the digital age.
We replace ageing core systems and branch-dependent processes with cloud-native, mobile-first platforms — instant account opening, real-time payments, intelligent risk management, and experiences that win customers back from the neobanks."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "BANKING",
          "AT THE",
          "SPEED OF",
          "MOBILE.",
        ]}
        title="Financial experiences as fast and intuitive as the best apps."
        description="Customers now judge their bank against every app on their phone, and the neobanks have raised the bar. We cut through legacy constraints and implement the platforms that close the gap: cloud-native digital banking, real-time payments, AI-driven risk and fraud, and instant onboarding — turning slow, branch-bound institutions into digital-first competitors that win and keep modern customers."
        image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every financial system we build."
        description="In financial services, the technology handles people's money and lives under strict regulation. Every system we build is grounded in these commitments so what we deploy is secure, compliant, and worthy of the trust customers place in their institution."
        quote="Trust Is The Product"
        quoteDescription="In finance, customers are not buying features — they are buying the confidence that their money is safe and their institution is sound. We treat security, compliance, and reliability as the foundation of everything, because the moment trust breaks, nothing else matters."
        tags={[
          "Security",
          "Compliance",
          "Trust",
        ]}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}