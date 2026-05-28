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
    title: "CRM Implementation & Configuration",
    highlight:
      "Your CRM is your single source of truth — build it right",
    description:
      "We implement and configure CRM platforms including Salesforce, HubSpot, Pipedrive, and Zoho to precisely mirror your sales process, deal stages, and reporting requirements. Every field, workflow, automation, and dashboard is built to serve your team, not fight them. Implementation is followed by team onboarding, adoption monitoring, and 90-day optimisation support.",
  },

  {
    title: "Sales Automation & Sequencing",
    highlight:
      "Your best sales rep, working 24 hours a day",
    description:
      "We build multi-channel sales automation sequences across email, LinkedIn, phone, and SMS — personalised, timed, and triggered by prospect behaviour. Automated follow-ups, task reminders, meeting scheduling, and deal stage progression eliminate the manual work that kills pipeline velocity and lets your team focus entirely on closing.",
  },

  {
    title: "Pipeline Management & Velocity",
    highlight:
      "Control what happens at every stage",
    description:
      "We design and implement pipeline frameworks with defined entry criteria, exit criteria, stage-specific activities, and conversion benchmarks at every level. Bottlenecks are identified and eliminated. Stage conversion rates are tracked in real time. Deal velocity is monitored and improved continuously so revenue targets are predictable, not accidental.",
  },

  {
    title: "Lead Scoring & Qualification Systems",
    highlight:
      "Stop chasing the wrong leads",
    description:
      "We build behavioural and demographic lead scoring models that automatically identify, score, and prioritise the highest-intent prospects in your pipeline. Sales teams focus their energy on the leads most likely to close. Marketing knows exactly which activities produce the highest-quality pipeline. Both teams win.",
  },

  {
    title: "Sales Enablement Infrastructure",
    highlight:
      "Give your team everything they need to close",
    description:
      "We build the complete sales enablement system, including battlecards, objection handling frameworks, competitive intelligence documents, proposal templates, case study libraries, and ROI calculators — ensuring every sales conversation is informed, confident, and positioned to win against the strongest competition.",
  },

  {
    title: "Multi-Channel Outbound Infrastructure",
    highlight:
      "Reach your best prospects on every channel they use",
    description:
      "We build outbound sales infrastructure across cold email, LinkedIn outreach, intent data targeting, and direct mail — using tools like Apollo, Outreach, Salesloft, Clay, and Instantly to create systematic, scalable outbound motion that generates consistent pipeline without depending on referrals or inbound alone.",
  },

  {
    title: "Revenue Intelligence & Conversation Analytics",
    highlight:
      "Learn from every sales conversation at scale",
    description:
      "We implement revenue intelligence platforms including Gong, Chorus, and Clari that analyse sales calls, identify winning patterns, flag at-risk deals, and coach reps automatically. Every conversation becomes a data point. Every lost deal becomes a lesson. Your entire team improves continuously without additional management overhead.",
  },

  {
    title: "Sales and Marketing SLA Frameworks",
    highlight:
      "Define exactly what both teams owe each other",
    description:
      "We build the formal service level agreements, lead handoff protocols, and shared reporting frameworks that align marketing and sales into one accountable revenue team. Lead definitions are agreed. Follow-up timelines are enforced. Recycled leads are managed. Feedback loops are closed. The result is a commercial operation that actually functions as one unit.",
  },

  {
    title: "Proposal & Contract Automation",
    highlight:
      "From verbal yes to signed contract in hours, not days",
    description:
      "We implement proposal automation and e-signature infrastructure using tools like PandaDoc, Proposify, and DocuSign — creating templated, branded, data-populated proposals that go out the same day, track prospect engagement, and accelerate time to signature without legal bottlenecks.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="PIPELINE. VELOCITY. CONVERSION. ALWAYS."
        subheadline="Enterprise sales infrastructure built for organisations that need to win consistently, convert efficiently, and scale without adding headcount.
We build the automation systems, CRM architecture, lead nurture infrastructure, and pipeline frameworks that transform sales from a people-dependent function into a scalable, measurable, system-driven growth engine."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "NO",
          "GUESS - WORK.",
          "ONLY",
          "INFRA-STRUCTURE.",
        ]}
        title="A world where revenue is engineered, not hoped for."
        description="The most successful enterprise businesses in the world do not rely on great salespeople alone. They rely on great systems. We build the revenue infrastructure that makes consistent growth a structural certainty — where pipeline fills predictably, conversion rates improve continuously, and every team knows exactly what they own and what winning looks like."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every revenue system we architect."
        description="Enterprise revenue infrastructure built without principles fails at scale. Every engagement we take on is grounded in the following commitments."
        quote="Alignment Before Automation"
        quoteDescription="We align people and processes before we automate anything. The most sophisticated tech stack in the world underperforms on misaligned teams."
        tags={[
          "Alignment",
          "Clarity",
          "Structure",
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