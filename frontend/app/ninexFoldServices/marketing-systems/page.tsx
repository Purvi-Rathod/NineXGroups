import SubPageHero from "@/components/sections/common/SubPageHero";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import WhatWeDoSection from "../WhatWeDo";
import OurVision from "@/components/sections/common/OurVision";
import ValuesSection from "@/components/sections/common/ValuesSection";
import {
  Boxes,
  Megaphone,
  LineChart,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Boxes size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["10+", "fragmented tools across marketing stack"],
      ["0", "attribution visibility across campaigns"],
      ["30%", "qualified lead acceptance rate"],
      ["40%", "team time lost to manual processes"],
      ["GAP", "misalignment between marketing and sales"],
    ],
    footerTitle: "MARKETING CHAOS",
    footerText: "DISCONNECTED. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AUTO", "Marketo nurture campaign automation"],
      ["ROI", "Bizible multi-touch attribution"],
      ["ABM", "6sense intent and account intelligence"],
      ["SYNC", "LeanData lead routing and matching"],
      ["CRM", "Bi-directional Salesforce integration"],
      ["LIVE", "Executive marketing dashboards"],
    ],
    footerTitle: "CONNECTED PLATFORM",
    footerText: "INTELLIGENT. AUTOMATED.",
    showArrow: false,
  },

  {
    icon: <LineChart size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["250%", "increase in pipeline contribution"],
      ["75%", "improvement in lead quality"],
      ["$200M", "pipeline generated in first year"],
      ["5:1", "measurable marketing ROI"],
      ["80%", "time savings through automation"],
      ["95%", "sales-marketing alignment score"],
    ],
    footerTitle: "MARKETING IMPACT",
    footerText: "SCALABLE. MEASURABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Marketing Automation Architecture",
    highlight:
      "Your marketing should run, nurture, and convert without you",
    description:
      "We implement and configure enterprise marketing automation platforms including HubSpot, Marketo, ActiveCampaign, and Pardot — building the workflows, triggers, lead scoring rules, nurture sequences, and lifecycle campaigns that engage every prospect with the right message at exactly the right moment, automatically, across every channel simultaneously.",
  },

  {
    title: "Marketing Operations Infrastructure",
    highlight:
      "The operational backbone of every high-performing marketing team",
    description:
      "We build your complete marketing operations function — including campaign management frameworks, data governance standards, UTM taxonomies, lead lifecycle definitions, quality assurance processes, and operational playbooks — creating the systematic foundation that allows your marketing team to execute at enterprise scale without chaos, inconsistency, or data errors.",
  },

  {
    title: "Performance Marketing Management",
    highlight:
      "Every pound of paid spend, working as hard as possible",
    description:
      "We design, build, and manage enterprise paid media campaigns across Google Ads, Meta, LinkedIn, Programmatic Display, YouTube, TikTok, and Bing — using advanced bidding strategies, audience segmentation, creative testing, and attribution modelling to generate qualified pipeline at the most efficient cost per acquisition your market allows.",
  },

  {
    title: "Marketing Attribution & ROI Measurement",
    highlight:
      "Prove exactly what your marketing is worth",
    description:
      "We implement multi-touch attribution systems that track every customer touchpoint from first awareness to closed revenue — connecting marketing activity directly to pipeline and revenue outcomes. First touch, last touch, linear, position-based, and data-driven attribution models are all available, giving your CFO the commercial evidence they need to justify every marketing investment.",
  },

  {
    title: "Demand Capture vs Demand Creation Strategy",
    highlight:
      "Win the buyers who are ready today and build the ones for tomorrow",
    description:
      "We build dual-track marketing strategies that simultaneously capture existing demand through search and intent-driven channels while creating new demand through brand, content, and social channels — ensuring your pipeline is never dependent on buyers who are already looking and your brand is never invisible to buyers who are not yet aware they need you.",
  },

  {
    title: "MarTech Stack Audit & Architecture",
    highlight:
      "The right tools, in the right configuration, connected correctly",
    description:
      "We audit your existing marketing technology stack against your commercial objectives, identify redundancy and gaps, and design the optimum architecture for your stage and ambition. We work across the full marketing technology landscape — CRM, automation, analytics, CDP, attribution, ABM, SEO, social, paid media, and content tools — ensuring every platform has a clear purpose and integrates seamlessly with every other.",
  },

  {
    title: "Customer Data Platform Implementation",
    highlight:
      "One unified view of every customer, across every channel",
    description:
      "We implement Customer Data Platforms including Segment, Rudderstack, and Bloomreach that unify customer behavioural data from every touchpoint — website, email, paid media, CRM, and product — into one complete customer profile that powers personalisation, segmentation, and predictive marketing at enterprise scale.",
  },

  {
    title: "Marketing Performance Dashboards",
    highlight:
      "Real-time intelligence for every marketing decision",
    description:
      "We build executive marketing dashboards using Looker, Tableau, Power BI, and Google Looker Studio that aggregate data from every marketing platform into one real-time view of performance — covering pipeline contribution, channel ROI, campaign performance, lead quality, funnel conversion rates, and brand health metrics — giving every stakeholder the exact intelligence they need to make faster, better decisions.",
  },

  {
    title: "Conversion Rate Optimisation",
    highlight:
      "More revenue from the traffic you already have",
    description:
      "We implement systematic CRO programs covering landing page optimisation, A/B testing, multivariate experimentation, user behaviour analysis, heatmapping, session recording, and funnel analysis — continuously improving the percentage of visitors who become leads and leads who become customers, multiplying the value of every channel without increasing spend.",
  },

  {
    title: "Email Marketing & Lifecycle Campaigns",
    highlight:
      "The highest ROI channel in enterprise marketing, done properly",
    description:
      "We design and deploy sophisticated email marketing programs covering welcome sequences, lead nurture flows, re-engagement campaigns, upsell and cross-sell sequences, and retention campaigns — with personalisation, behavioural triggers, dynamic content, deliverability optimisation, and continuous A/B testing built in from the start.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="ATTRACT. NURTURE. CONVERT. COMPOUND."
        subheadline="Enterprise marketing technology and operations infrastructure that generates qualified demand, nurtures it intelligently, converts it efficiently, and proves every penny of ROI.
                  We build the marketing automation systems, technology stacks, paid media infrastructure, and analytics frameworks that transform marketing from a cost centre into the most measurable, accountable, and scalable growth function in your business.
                "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "MARKETING",
          "THAT PAYS",
          "FOR  ITSELF.",
          "THEN  MULTIPLES.",
        ]}
        title="A marketing function that leadership trusts completely."
        description="Marketing earns its seat at the board table when it can prove its commercial contribution with the same precision as sales. We build marketing systems where every campaign is measured, every channel is attributed, and every investment is justified by a pipeline or revenue outcome — transforming marketing from an uncertain cost into the most accountable growth engine in your business."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every marketing system we build."
        description="Marketing without commercial accountability is just spend. Every system we architect is grounded in these four commitments to ensure every investment is measurable, scalable, and built to compound."
        quote="Attribution Before Amplification"
        quoteDescription="We never scale what we cannot measure. Every campaign, channel, and piece of content has measurement built in before a single pound is spent on amplification."
        tags={[
          "Measurement",
          "Accountability",
          "Clarity",
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