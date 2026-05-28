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
    title: "CRM Implementation & Configuration",
    highlight:
      "Your CRM, built to match your exact commercial process",
    description:
      "We implement enterprise CRM platforms including Salesforce, HubSpot, Pipedrive, Zoho, and Microsoft Dynamics — configuring every object, field, workflow, automation, dashboard, and integration to mirror your precise sales process, team structure, and reporting requirements. Implementation is followed by data migration, team training, adoption monitoring, and a structured 90-day optimisation programme ensuring maximum utilisation and commercial return.",
  },

  {
    title: "CRM Migration & Data Cleansing",
    highlight:
      "Move without losing a single contact, deal, or history record",
    description:
      "We manage complex CRM migration projects — moving from legacy systems, spreadsheets, or multiple disconnected CRMs into a single, clean, unified platform — with comprehensive data mapping, deduplication, field standardisation, historical data preservation, and validation testing at every stage. Clean data going in means accurate reporting and reliable automation coming out.",
  },

  {
    title: "MarTech Stack Architecture & Consolidation",
    highlight:
      "The right tools, connected correctly, with nothing wasted",
    description:
      "We audit your existing marketing technology stack against your commercial objectives and operational capacity, identify redundancy, fill strategic gaps, and design the optimum integrated architecture for your stage, team size, and growth ambitions. We work across the complete MarTech landscape — automation, analytics, attribution, ABM, SEO tools, social management, CDP, and content platforms — recommending only what will generate clear commercial return.",
  },

  {
    title: "Marketing Automation Platform Implementation",
    highlight:
      "Automation that runs your entire nurture engine without manual intervention",
    description:
      "We implement and configure enterprise marketing automation platforms including HubSpot, Marketo, Pardot, ActiveCampaign, and Klaviyo — building the complete automation architecture including lead scoring models, lifecycle stage triggers, nurture sequences, segmentation rules, and behavioural workflows that engage every prospect with the right message at exactly the right moment, automatically.",
  },

  {
    title: "API Integration & Data Pipeline Architecture",
    highlight:
      "Connect everything. Lose nothing. Automate completely.",
    description:
      "We design and build the API integrations and data pipelines that connect your CRM, marketing automation, paid media platforms, analytics tools, customer success platforms, and operational systems — ensuring data flows accurately and automatically between every platform your business runs on. No manual exports. No disconnected data. No reporting gaps caused by broken integrations.",
  },

  {
    title: "Analytics Stack Implementation",
    highlight:
      "One unified view of commercial performance across every platform",
    description:
      "We implement and configure the complete analytics infrastructure — Google Analytics 4, server-side tracking, Google Tag Manager, Segment, Mixpanel, Amplitude, and BI tools including Looker, Tableau, and Power BI — building the measurement architecture that captures every customer interaction accurately and feeds clean, unified data into the reporting layer where leadership can act on it.",
  },

  {
    title: "Revenue Attribution Infrastructure",
    highlight:
      "Connect every marketing touchpoint to pipeline and revenue",
    description:
      "We build multi-touch revenue attribution systems that track the complete customer journey from first marketing touchpoint through to closed revenue — connecting marketing activity directly to commercial outcomes in your CRM and BI layer. First touch, last touch, linear, time-decay, and algorithmic attribution models give every stakeholder a precise, agreed view of what is driving growth.",
  },

  {
    title: "Marketing Operations & Data Governance",
    highlight:
      "The standards that keep your data trustworthy at scale",
    description:
      "We build the marketing operations frameworks, data governance standards, naming conventions, UTM taxonomies, lead lifecycle definitions, and data quality protocols that ensure your commercial data remains clean, accurate, and reliable as your team, technology stack, and campaign volume scales. Governance built early prevents the data quality crises that cost enterprise businesses millions in poor decisions.",
  },

  {
    title: "CRM & MarTech Training & Documentation",
    highlight:
      "Your team, fully equipped to own and operate every system",
    description:
      "We deliver comprehensive team training programmes, operational playbooks, and system documentation for every platform we implement — ensuring your marketing and sales teams can execute independently, maintain systems correctly, and troubleshoot confidently without external dependency. Knowledge transfer is a deliverable of every infrastructure engagement we run.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="CONNECT. INTEGRATE. ACTIVATE. SCALE."
        subheadline="Enterprise CRM implementation, MarTech architecture, data integration, and marketing operations infrastructure that connects every system, cleans every data set, and powers every growth initiative your business runs.
                    We implement, configure, migrate, and integrate the complete commercial technology backbone — from CRM setup and platform consolidation through analytics stack architecture and marketing operations infrastructure — ensuring your business runs on connected, clean, measurable systems that perform at enterprise scale."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "CONNECTED.",
          "CLEAN.",
          "ALWAYS",
          "PERFORMING.",
        ]}
        title="Infrastructure that makes every other system perform at its maximum potential."
        description="Great marketing strategies fail on broken infrastructure. Brilliant campaigns generate no pipeline when CRM integrations are broken. Perfect content goes untracked when analytics are misconfigured. Talented sales teams underperform when their tools fight them. We build the CRM, MarTech, and data infrastructure that makes every other investment your business makes in marketing and sales perform at its absolute maximum — because every system is connected, every data point is clean, and every team has the tools they need to execute without friction."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every infrastructure system we implement."
        description="Infrastructure built without principles creates technical debt that compounds against you. Every engagement we take on is grounded in these four commitments to ensure what we build is clean, connected, and commercially compounding."
        quote="Data Integrity is Non-Negotiable"
        quoteDescription="Every infrastructure engagement starts with data quality. We will not build automation on dirty data, reporting on misconfigured tracking, or attribution models on broken integrations. Clean systems from the start are the only systems worth building."
        tags={[
          "Integrity",
          "Accuracy",
          "Trust",
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