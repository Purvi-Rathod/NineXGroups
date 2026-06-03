import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  BarChart3,
  SlidersHorizontal,
  User,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Client Success Story",
    items: [
      ["$2B", "financial services enterprise transformed through AI agents"],
      ["200+", "data sources monitored continuously by research agents"],
      ["500+", "compliance documents processed weekly through automation"],
      ["8-Month", "enterprise ROI achieved after deployment"],
    ],
    footerTitle: "AI AGENT DEPLOYMENT PROGRAMME",
    footerText: "INTELLIGENT. AUTONOMOUS.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Operational Results",
    items: [
      ["65%", "reduction in analyst time spent on data gathering"],
      ["55%", "increase in sales rep selling time"],
      ["80%", "reduction in compliance document processing time"],
      ["$15M", "annual productivity savings across deployments"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "FASTER. MORE EFFICIENT.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "AI Agent Infrastructure",
    items: [
      ["Research\nAgents", "daily intelligence briefings from live market data"],
      ["Sales\nAgents", "automated ICP research and personalised outreach"],
      ["Compliance\nAgents", "continuous monitoring of contracts and communications"],
      ["Zero", "compliance incidents since monitoring deployment"],
    ],
    footerTitle: "ENTERPRISE AI GOVERNANCE",
    footerText: "SECURE. SCALABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "AI Agent Strategy & Use Case Identification",
    highlight:
      "Identify the highest-value agent deployment opportunities in your specific business",
    description:
      "We conduct systematic AI agent opportunity assessments — mapping every repetitive, research-intensive, and multi-step workflow in your organisation — to identify where autonomous agents will deliver the greatest commercial impact. The output is a prioritised agent deployment roadmap with ROI models, technical requirements, and governance frameworks for every use case identified.",
  },

  {
    title: "Research & Intelligence Agents",
    highlight:
      "Agents that gather, synthesise, and deliver intelligence without a human running a single search",
    description:
      "We build research agents that autonomously monitor news, analyse competitor activity, track regulatory changes, summarise industry reports, gather market intelligence, and deliver synthesised briefings to the right people at the right time — giving your strategy, sales, and product teams the intelligence they need without consuming the human hours that intelligence gathering typically requires.",
  },

  {
    title: "Sales Prospecting & Outreach Agents",
    highlight:
      "Autonomous agents that identify, research, and initiate contact with your ideal prospects",
    description:
      "We deploy sales prospecting agents using Clay, Apollo, and custom architectures — that autonomously identify target companies matching your ICP, research key contacts, enrich prospect data from multiple sources, personalise outreach messages at scale, trigger follow-up sequences based on engagement signals, and hand off warm prospects to human sellers at the optimal moment. Your pipeline fills while your team sleeps.",
  },

  {
    title: "Customer Service & Support Agents",
    highlight:
      "Agents that resolve customer issues end-to-end without escalating to a human agent",
    description:
      "We build customer service agents that go beyond simple FAQ chatbots — agents that access your CRM, check order status, process refund requests, update account information, book appointments, troubleshoot technical issues using your knowledge base, and resolve complex multi-step customer requests entirely autonomously. Escalation to humans happens only when genuine complexity requires it.",
  },

  {
    title: "Data Processing & Analysis Agents",
    highlight:
      "Agents that transform raw data into structured intelligence without a data analyst in the loop",
    description:
      "We build data processing agents that autonomously extract data from multiple sources, clean and normalise it, identify patterns and anomalies, generate summary reports, flag exceptions for human review, and update dashboards — replacing the manual data processing workflows that consume analyst time without adding analytical value. Every data processing task that follows a repeatable pattern is a candidate for agent automation.",
  },

  {
    title: "Workflow Orchestration Agents",
    highlight:
      "Agents that coordinate complex multi-step business processes across multiple systems simultaneously",
    description:
      "We design orchestration agents that manage complex cross-system workflows — coordinating actions across CRM, ERP, communication platforms, file systems, and external APIs — with conditional logic, error handling, retry mechanisms, and human escalation protocols built in. Multi-day manual processes become same-hour automated workflows. Cross-system coordination that required multiple human handoffs happens in seconds.",
  },

  {
    title: "Code Generation & Development Agents",
    highlight:
      "Agents that accelerate software development by handling the repetitive coding work",
    description:
      "We deploy development assistance agents that generate boilerplate code, write unit tests, document functions and APIs, review code for common issues, suggest refactoring improvements, and produce deployment scripts — freeing your engineering team from the low-value development tasks that consume disproportionate time and allowing them to focus on the architectural and problem-solving work that genuinely requires human intelligence.",
  },

  {
    title: "Content Production Agents",
    highlight:
      "Agents that produce on-brand content at volume without a human writer for every piece",
    description:
      "We build content production agents trained on your brand voice, style guidelines, audience intelligence, and content strategy — producing SEO-optimised blog posts, social media content, email newsletters, product descriptions, case study drafts, and ad copy at scale. Human editors review and refine. Agents produce the volume. The combination delivers content output at a scale that was previously only possible with content teams five times the size.",
  },

  {
    title: "Compliance & Audit Agents",
    highlight:
      "Agents that monitor compliance continuously instead of auditing it periodically",
    description:
      "We deploy compliance monitoring agents that continuously scan contracts, communications, transactions, and system configurations for compliance violations, policy deviations, and risk signals — delivering real-time alerts to the right people before issues escalate into regulatory problems. Compliance moves from a periodic audit function to a continuous operational intelligence capability.",
  },

  {
    title: "Multi-Agent System Architecture",
    highlight:
      "Networks of specialised agents that collaborate to solve problems no single agent can handle alone",
    description:
      "We architect and deploy multi-agent systems where specialised agents — researcher, writer, analyst, reviewer, coordinator — work together on complex tasks, passing outputs between agents, validating each other's work, and producing results that require the combined capabilities of the full agent network. Multi-agent architectures unlock the automation of genuinely complex enterprise workflows that single-agent approaches cannot handle.",
  },

  {
    title: "Agent Monitoring, Governance & Safety",
    highlight:
      "The operational framework that keeps every AI agent operating within defined business boundaries",
    description:
      "We build agent governance frameworks covering output monitoring, behaviour auditing, performance tracking, cost management, safety guardrails, human-in-the-loop escalation protocols, and kill switch infrastructure — ensuring every agent we deploy operates within the boundaries your enterprise requires, improves continuously based on performance data, and can be overridden or stopped instantly when circumstances demand it.",
  },

  {
    title: "Enterprise System Integration for Agents",
    highlight:
      "Connect every agent to every enterprise system it needs to take meaningful action",
    description:
      "We build the integration architecture that connects AI agents to your CRM, ERP, HRIS, communication platforms, databases, external APIs, and cloud services — using secure authentication, rate limiting, permission scoping, and audit logging to ensure agents interact with enterprise systems safely, auditably, and within the precise permission boundaries each agent has been granted.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="Enterprise DevOps Automation that accelerates your business."
        subheadline="Unlock enterprise DevOps automation that accelerates your business. We design, architect, and deploy custom AI agents using the most advanced agentic frameworks available — LangChain, LangGraph, AutoGen, CrewAI, and custom proprietary architectures — connected to your enterprise systems, data sources, and communication channels. Every agent we build is production-grade, commercially justified, and governed by the guardrails your enterprise requires.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "DEVOPS",
          "THAT - WORKS.",
          "BUSINESSES",
          "THAT - WIN.",
        ]}
        title="A future where the most productive enterprises are not those with the most employees but those with the most capable AI agents."
        description="The AI agent revolution is not about replacing humans. It is about deploying autonomous intelligence to handle the high-volume, repetitive, research-intensive work that currently consumes your team's most valuable hours — freeing every human in your organisation to focus on the work that genuinely requires human judgment, creativity, and relationship. We build the agents that make that future a present reality."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every AI agent we deploy."
        description="Agents built without principles create risk at scale. Every deployment we take on is grounded in these four commitments to ensure what we build is commercially justified, properly governed, production-grade, and built to compound in capability."
        quote="Agents Earn Their Deployment"
        quoteDescription="Every agent we deploy must justify its existence with a measurable commercial outcome — time saved, pipeline generated, cost reduced, or revenue created. Agents deployed for novelty are experiments. Agents deployed for outcomes are investments."
        tags={[
          "Commercial",
          "Justification",
          "Outcomes",
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