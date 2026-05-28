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
    title: "Brand Architecture & Hierarchy",
    highlight:
      "Structure your brand for scale, clarity, and commercial power",
    description:
      "We design the complete brand architecture system — master brand, sub-brands, product naming, brand hierarchy, and portfolio strategy — creating a structure that is clear to customers, scalable for growth, and coherent across every market, product, and channel you operate in. Whether you are a monolithic brand, endorsed architecture, or house of brands, we build the framework that makes strategic sense and commercial impact.",
  },

  {
    title: "Market Positioning & Competitive Differentiation",
    highlight:
      "Own a space in your buyer's mind that no competitor can occupy",
    description:
      "We conduct deep competitive landscape analysis, category mapping, buyer perception research, and positioning workshops to identify the single most powerful position your brand can own. Then we build the messaging, narrative, and proof points that establish and defend that position relentlessly — in every market, at every stage of the buyer journey.",
  },

  {
    title: "Brand Narrative & Messaging Framework",
    highlight:
      "The words that make buyers choose you",
    description:
      "We craft the complete brand messaging architecture — your brand story, value proposition hierarchy, audience-specific messaging pillars, proof point library, and objection-handling language — creating a unified messaging system that every team member, sales rep, and marketing channel uses consistently. When your brand speaks with one clear voice everywhere, trust compounds exponentially.",
  },

  {
    title: "Visual Identity System",
    highlight:
      "A brand that looks as premium as it performs",
    description:
      "We design enterprise visual identity systems covering logo systems, colour architecture, typography hierarchy, iconography, photography direction, illustration style, data visualisation standards, motion design principles, and digital design systems — then codify everything into a comprehensive brand guidelines document and Figma component library that makes consistent execution effortless at scale.",
  },

  {
    title: "Brand Voice & Tone Framework",
    highlight:
      "Sound as distinctive as you look",
    description:
      "We define the verbal identity system that makes your brand immediately recognisable in writing — brand voice characteristics, tone of voice principles, writing style guides, vocabulary decisions, channel-specific tone variations, and editorial standards. Every word your brand publishes, in every format and channel, reinforces the same distinctive personality and builds cumulative recognition.",
  },

  {
    title: "Go-to-Market Strategy",
    highlight:
      "Launch with precision, capture with speed",
    description:
      "We build comprehensive go-to-market strategies for new products, new markets, and brand repositioning efforts — covering ICP definition, channel strategy, messaging by segment, launch sequencing, partnership approach, PR strategy, content plan, and success metrics. Every market entry we design is backed by competitive intelligence, buyer research, and a commercial model that defines what winning looks like before launch day.",
  },

  {
    title: "Employer Brand & Internal Brand Alignment",
    highlight:
      "The best talent chooses brands they believe in",
    description:
      "We build employer brand strategy and execution — EVP development, career page design, recruitment marketing content, and internal culture communication — ensuring your brand attracts the talent that fits your culture while aligning your existing team behind the brand story they are helping to build.",
  },

  {
    title: "Brand Health Monitoring & Intelligence",
    highlight:
      "Know exactly how your brand is performing in the market",
    description:
      "We implement brand health monitoring systems that track brand awareness, sentiment, share of voice, competitive positioning, NPS, and brand search volume — giving leadership a continuous, quantitative view of brand equity development and the intelligence to make proactive brand decisions before the market shifts.",
  },

  {
    title: "Brand Activation & Launch",
    highlight:
      "Strategy means nothing without execution",
    description:
      "We plan and execute complete brand launch and relaunch campaigns — across owned, earned, and paid channels — that introduce your brand positioning to the market with the impact it deserves. From internal launch events and sales team briefings to PR campaigns, social launches, and paid amplification, we manage every element of activation so your brand lands as powerfully as it was built.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="DEFINE. POSITION. OWN THE CATEGORY."
        subheadline="Enterprise brand architecture that transforms your company from a market participant into a category-defining, premium-positioned, fiercely differentiated brand that commands attention, justifies premium pricing, and attracts the clients you actually want.
                    We build the complete strategic brand foundation — architecture, positioning, identity systems, messaging frameworks, narrative, and go-to-market strategy — ensuring every customer touchpoint tells one powerful, coherent story that your competition cannot replicate.
        "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "YOUR BRAND.",
          "THEIR",
          "FIRST",
          "CHOICE.",
        ]}
        title="A brand so clear, so differentiated, and so consistently expressed that your competitors feel it."
        description="Most enterprise brands underperform commercially because they were built tactically, not strategically. A logo is not a brand. A colour palette is not a brand. A brand is the specific, distinctive set of associations in a buyer's mind that makes them choose you over every alternative — including doing nothing. We architect that distinctiveness from the strategic foundation up, and then we build the systems that express it consistently everywhere your buyers encounter you."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every brand system we architect."
        description="A brand built without principles becomes inconsistent at scale. Every engagement we take on is grounded in these four commitments to ensure what we build is distinctive, defensible, and commercially valuable."
        quote="Positioning Before Everything"
        quoteDescription="Strategy before design. Research before narrative. Market intelligence before messaging. We never start building a brand until we know exactly where it is going to stand and why that position is defensible and commercially valuable."
        tags={[
          "Research",
          "Strategy",
          "Intelligence",
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