import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "@/app/ninexFoldServices/OurVision";
import ValuesSection from "@/app/ninexFoldServices/ValuesSection";
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
    title: "AI Content Engine",
    highlight:
      "Produce enterprise-quality content at a scale your competitors cannot match",
    description:
      "We build and deploy AI content systems trained on your brand voice, tone, messaging framework, and audience data — producing on-brand blog posts, social content, email sequences, ad copy, video scripts, and thought leadership at volume. The output is not generic AI content. It is your content, produced faster, tested continuously, and optimised for conversion at every stage.",
  },

  {
    title: "GEO — Generative Engine Optimisation",
    highlight:
      "The most important new search frontier in a decade",
    description:
      "Generative AI platforms like ChatGPT, Perplexity, Google Gemini, and Claude are now answering buyer questions directly. If your brand is not being cited inside those answers, your competitors are winning that attention for free. We build the structured content, citation authority, knowledge graph presence, and brand mention strategies that ensure your business appears inside AI-generated answers across every major platform.",
  },

  {
    title: "Sales Automation & AI Outreach",
    highlight:
      "Intelligent outreach that feels personal and scales infinitely",
    description:
      "We deploy AI-powered sales automation systems using tools like Clay, Instantly, Smartlead, and Apollo that personalise outreach at scale, enrich prospect data automatically, trigger follow-up sequences based on behaviour, and book qualified meetings without manual intervention — creating an outbound engine that runs continuously without sales team involvement.",
  },

  {
    title: "WhatsApp & Conversational AI",
    highlight:
      "Meet your buyers where they already are",
    description:
      "We implement WhatsApp Business API automation, AI-powered chatbots, and conversational marketing systems that engage leads instantly, qualify them intelligently, and route high-intent prospects directly to your sales team — reducing response time from hours to seconds and increasing conversion rates from every inbound channel.",
  },

  {
    title: "Workflow Automation Architecture",
    highlight:
      "If it happens more than once, it should be automated",
    description:
      "We map, design, and build end-to-end workflow automation across your entire marketing and sales operation using Make, Zapier, n8n, and custom API integrations. Lead routing, data enrichment, CRM updates, reporting, content distribution, campaign triggering, and cross-platform synchronisation are all automated, tested, and monitored — eliminating the manual work that consumes your team's most valuable hours.",
  },

  {
    title: "Ad Creative Intelligence",
    highlight:
      "Test more. Learn faster. Win bigger.",
    description:
      "We implement AI-powered creative testing infrastructure that generates ad creative variants at scale, runs multivariate tests continuously, identifies winning creative patterns automatically, and feeds those insights back into your creative strategy — creating a compounding creative learning system that improves performance with every campaign you run.",
  },

  {
    title: "Predictive Analytics & LTV Modelling",
    highlight:
      "Know who your best customers are before they know it themselves",
    description:
      "We build predictive analytics models that identify your highest LTV prospects from early behavioural signals, forecast churn before it happens, predict the next best action for every customer, and surface the accounts most likely to expand — giving your commercial team an intelligence advantage that competitors relying on historical data simply cannot match.",
  },

  {
    title: "AI-Powered Personalisation at Scale",
    highlight:
      "Every customer feels like your only customer",
    description:
      "We implement dynamic personalisation systems across your website, email, ads, and content channels — serving different messaging, offers, and content to every audience segment based on behaviour, industry, funnel stage, and intent signals. What previously required large content teams is now delivered automatically, at scale, continuously.",
  },

  {
    title: "Marketing Intelligence & Reporting Automation",
    highlight:
      "Every insight delivered automatically, before anyone asks for it",
    description:
      "We build AI-powered reporting systems that aggregate data from every marketing and sales platform, identify performance anomalies automatically, surface actionable recommendations without prompting, and deliver executive-level insight dashboards to leadership on a defined schedule — eliminating the weekly reporting scramble and giving every decision maker the intelligence they need to act.",
  },

  {
    title: "AI Agent Deployment",
    highlight:
      "Autonomous agents working inside your business 24 hours a day",
    description:
      "We design and deploy custom AI agents that handle research, prospecting, content drafting, social monitoring, competitive intelligence, and internal task management autonomously. These are not chatbots. They are purpose-built agents that understand your business context, operate within defined guardrails, and complete meaningful work without human initiation.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="AUTOMATE. ACCELERATE. SCALE. INFINITELY."
        subheadline="Enterprise AI and automation infrastructure that multiplies your marketing output, accelerates sales velocity, and eliminates operational inefficiency — without increasing headcount.
We implement AI content engines, intelligent outreach systems, workflow automation, GEO optimisation, predictive analytics, and creative intelligence platforms that make your entire organisation operate faster, smarter, and at a scale that was previously impossible without enterprise budgets."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "AI THAT",
          "WORKS.",
          "NOT AI",
          "THAT TALKS.",
        ]}
        title="A business where your systems are smarter than your competitors' teams."
        description="The AI revolution is not coming. It is already separating the businesses that will define the next decade from those that will be disrupted by it. We cut through the hype and implement the AI and automation infrastructure that delivers real, measurable business outcomes — more pipeline, more content, more efficiency, and more revenue — with less manual effort than you have ever needed before."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every AI system we implement."
        description="AI without principles produces noise at scale. Every system we build is grounded in these four commitments to ensure what we deploy is commercially sound, brand-safe, and built to compound."
        quote="Outcomes Over Technology"
        quoteDescription="We are not AI evangelists. We are business builders who use AI to deliver outcomes. Every tool we implement must justify itself with a commercial result that matters to your business."
        tags={[
          "Results",
          "Accountability",
          "Commercial Thinking",
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