import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Code2,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["PMF", "product-market fit but unable to scale"],
      ["MONO", "monolithic architecture limiting velocity"],
      ["6MO", "sales cycles stalling growth"],
      ["MANUAL", "revenue processes still done by hand"],
      ["SLOW", "deployments and onboarding killing momentum"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "RIGID. SLOW.",
    showArrow: true,
  },

  {
    icon: <Code2 size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["MICRO", "Microservices architecture transformation"],
      ["REVCLOUD", "Salesforce Revenue Cloud implementation"],
      ["PLG", "Product-led growth motion"],
      ["USAGE", "Usage-based pricing model"],
      ["SELF", "Self-service onboarding"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "MODERN. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["3X", "revenue growth year-over-year"],
      ["2WK", "sales cycles, down from 6 months"],
      ["80%", "product-led-growth conversion rates"],
      ["$100M", "ARR milestone achieved"],
      ["$1B", "valuation at Series C"],
      ["10X", "development velocity"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "Product Engineering",
    highlight:
      "Ship world-class products faster, with less technical debt",
    description:
      "We deliver product strategy and roadmap, UX design, full-stack development, mobile apps, and API and platform development — accelerating time to market, lifting user satisfaction, multiplying development velocity, and eliminating the technical debt that slows growing software companies down.",
  },

  {
    title: "Revenue Operations",
    highlight:
      "Turn growth from guesswork into a predictable engine",
    description:
      "We build RevOps infrastructure, CRM and sales automation, revenue intelligence, customer-success platforms, and billing and subscription management — sharpening forecast accuracy, driving revenue growth, pushing net revenue retention past 140%, and compressing CAC payback.",
  },

  {
    title: "Cloud Infrastructure",
    highlight:
      "Architecture that scales 10X without breaking",
    description:
      "We deliver cloud-native architecture, Kubernetes and containers, microservices transformation, DevOps and CI/CD, and observability and monitoring — achieving near-perfect uptime, 10X scalability, major cost reduction, and dramatically faster deployments.",
  },

  {
    title: "Product-Led Growth & Monetisation",
    highlight:
      "Let the product sell itself",
    description:
      "We design product-led growth motions, usage-based pricing models, and self-service onboarding that convert users into customers without a heavy sales touch — building the kind of efficient, compounding go-to-market engine that powers modern SaaS scale.",
  },

  {
    title: "DevOps & Platform Reliability",
    highlight:
      "Deploy with confidence, run with visibility",
    description:
      "We implement CI/CD pipelines, container orchestration, and full-stack observability and monitoring — giving engineering teams faster, safer releases and the real-time insight to keep platforms reliable at scale, so velocity never comes at the cost of stability.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
        headline="BUILD. SCALE. MONETISE. REPEAT."
        subheadline="From product engineering to revenue operations to platform infrastructure, we help technology companies build, scale, and monetize world-class products.
We turn rigid architectures, manual revenue processes, and slow sales motions into modern, scalable engines — microservices, RevOps, product-led growth, and cloud-native infrastructure that let software companies grow faster without breaking."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "PRODUCTS",
          "THAT",
          "SCALE",
          "THEMSELVES.",
        ]}
        title="Software companies engineered to scale, not just to ship."
        description="Reaching product-market fit is the easy part — scaling past it is where most software companies stall. We cut through the bottlenecks and implement the systems that unlock the next stage of growth: modern architecture, revenue operations, product-led monetisation, and cloud infrastructure that turn promising products into category leaders."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every product we help build."
        description="Software is never finished — it scales, evolves, and lives under constant pressure to move faster. Every system we build is grounded in these commitments so what we deploy ships fast, scales cleanly, and holds up as the company grows."
        quote="Velocity Compounds"
        quoteDescription="In software, speed is not about rushing — it is about removing the friction that compounds against you over time. We build for velocity and scalability from day one, so every release is faster, every system is cleaner, and growth never gets blocked by its own foundations."
        tags={[
          "Speed",
          "Scalability",
          "Product Excellence",
        ]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}