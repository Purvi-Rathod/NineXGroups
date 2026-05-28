import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "@/components/sections/common/OurVision";
import ValuesSection from "@/components/sections/common/ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["8", "different CRM systems and disconnected data"],
      ["50%", "forecast accuracy missing quarterly targets"],
      ["0", "unified customer view across products"],
      ["180D", "sales cycles increasing and win rates declining"],
      ["BLIND", "executive team lacking revenue visibility"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "FRAGMENTED. DISCONNECTED.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CRM", "Unified Salesforce Revenue Cloud platform"],
      ["AI", "Clari predictive forecasting and analytics"],
      ["GONG", "Conversation intelligence and coaching"],
      ["DATA", "Custom attribution and waterfall reporting"],
      ["LIVE", "Executive dashboards with real-time visibility"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "forecast accuracy improvement"],
      ["$300M", "revenue impact in year one"],
      ["60%", "faster sales cycles"],
      ["40%", "larger average deal sizes"],
      ["95%", "sales adoption within 30 days"],
      ["3M", "ROI realization timeline"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Revenue Operations Architecture",
    highlight:
      "The operating system your revenue team has been missing",
    description:
      "RevOps is not a job title. It is a discipline. We architect the complete revenue operations framework that aligns people, processes, and platforms across marketing, sales, and customer success — creating shared goals, shared data, and shared accountability. Every handoff is clean. Every stage is measured. Every team pulls in the same direction.",
  },

  {
    title: "Revenue Attribution Modelling",
    highlight:
      "Know exactly which activity drives every pound of revenue",
    description:
      "We build multi-touch attribution models — first touch, last touch, linear, time-decay, and data-driven — that give leadership a precise understanding of what is generating revenue and what is consuming budget without return. No more guessing which channels work. No more defending spend you cannot prove.",
  },

  {
    title: "Pricing Architecture & Strategy",
    highlight:
      "The lever most businesses underestimate",
    description:
      "Pricing is not a number. It is a strategic system. We conduct competitive pricing analysis, value-based pricing research, and packaging audits to redesign your pricing architecture for maximum value capture — increasing average contract value, reducing churn triggers, and creating pricing tiers that accelerate upsell naturally.",
  },

  {
    title: "Pipeline Forecasting Infrastructure",
    highlight:
      "Predictability is the most valuable asset in enterprise growth",
    description:
      "We build forecasting models using CRM data, historical conversion rates, lead scoring, and market signals to give your leadership team a forward-looking view of revenue that is accurate enough to plan headcount, budget, and investment decisions with confidence.",
  },

  {
    title: "Sales and Marketing Alignment Systems",
    highlight:
      "Destroy the silos that are costing you pipeline",
    description:
      "We build the shared frameworks, SLA agreements, lead scoring models, and handoff protocols that align marketing and sales into one unified revenue team. The result is faster follow-up, better lead quality, higher conversion rates, and a sales team that actually trusts the leads marketing sends.",
  },

  {
    title: "Customer Lifetime Value Optimisation",
    highlight:
      "Acquisition is just the beginning",
    description:
      "We build revenue systems that extend beyond the first sale, implementing LTV modelling, expansion revenue frameworks, and retention triggers that increase the value of every customer you acquire. More LTV means more budget for acquisition, more margin for investment, and more resilience in downturns.",
  },

  {
    title: "Revenue Tech Stack Integration",
    highlight:
      "Every tool connected, every data point clean",
    description:
      "We audit, design, and integrate the complete revenue technology stack — CRM, marketing automation, sales engagement, revenue intelligence, and BI tools — ensuring data flows seamlessly across every platform and your leadership team has one unified view of revenue performance at all times.",
  },

  {
    title: "Go-to-Market Revenue Planning",
    highlight:
      "Launch new products and markets without leaving revenue on the table",
    description:
      "We build GTM revenue plans that define pricing, packaging, channel strategy, and launch sequencing for new products, geographies, and market segments — ensuring every expansion is backed by a financial model and executed with commercial precision.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="PREDICT. SCALE. WIN. REPEAT."
        subheadline="The revenue infrastructure enterprise businesses build when guesswork is no longer acceptable.   
        We design, implement, and operate revenue systems that unify brand, demand, pipeline, and data into one predictable growth engine. From RevOps architecture to pricing strategy and forecasting infrastructure, we eliminate the gaps between marketing, sales, and finance so every quarter performs better than the last."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "CLOSE MORE.",
          "FASTER.",
          "EVERY",
          "QUARTER.",
        ]}
        title="A sales organisation that scales without hiring."
        description="The most expensive sales growth strategy is headcount. The most efficient is infrastructure. We build the systems that let your existing team perform at a level that previously required twice the people — with better data, better automation, better enablement, and better pipeline visibility than any competitor you face."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every revenue system we architect."
        description="Enterprise revenue infrastructure built without principles fails at scale. Every engagement we take on is grounded in the following commitments."
        quote="Human Relationships, System-Powered"
        quoteDescription="We automate everything that should be automated so your sales team can be fully human in the moments that matter most. The best sales system makes people more effective, not more robotic."
        tags={[
          "Automation",
          "Authenticity",
          "Connection",
        ]}
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}