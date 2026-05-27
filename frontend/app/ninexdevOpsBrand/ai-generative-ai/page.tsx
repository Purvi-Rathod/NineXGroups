import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  ShieldAlert,
  Bot,
  Brain,
} from "lucide-react";

const metricGroups = [
  {
    icon: <ShieldAlert size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["10M", "claims processed annually"],
      ["15D", "average claim processing timeline"],
      ["40%", "claims requiring manual review"],
      ["$500M", "annual claims processing costs"],
      ["LOW", "customer satisfaction impacted by delays"],
    ],
    footerTitle: "CLAIMS BOTTLENECKS",
    footerText: "MANUAL. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Bot size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CV", "computer vision damage assessment"],
      ["NLP", "document classification and extraction"],
      ["ML", "fraud detection intelligence models"],
      ["AUTO", "80% automated decision-making"],
      ["HITL", "human review for complex cases"],
      ["MLOPS", "continuous AI model optimization"],
    ],
    footerTitle: "AI AUTOMATION",
    footerText: "INTELLIGENT. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <Brain size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["90%", "reduction in processing time"],
      ["$300M", "annual operational savings"],
      ["80%", "claims fully automated"],
      ["95%", "customer satisfaction achieved"],
      ["60%", "reduction in fraud losses"],
      ["8M", "ROI realization timeline"],
    ],
    footerTitle: "AI IMPACT",
    footerText: "FASTER. SMARTER.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Devops-bg.png"
                headline="Enterprise AI from strategy to production deployment"
                subheadline=" Implement AI solutions that automate operations, enhance decision-making, and
create new capabilities—with enterprise-grade security, governance, and compliance."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "AI",
                    "DRIVES",
                    "BUSINESS.",
                    "OUTCOMES.",
                ]}
                title="Artificial intelligence represents the most significant technological shift since cloud computing.
NineXDevOps implements enterprise AI solutions spanning strategy, custom AI development, AI
agent platforms, and AI operations, powered by strategic partnerships with OpenAI, Anthropic,
Google, Microsoft, and NVIDIA."
                description="We deliver AI solutions across four core pillars: AI strategy and roadmap creation, custom AI and ML model development, enterprise AI agent platforms, and secure, scalable AI operations (MLOps)."
                implementationTitle="What We Implement:"
                implementations={[
                  "AI strategy and implementation roadmaps",
                  "Custom AI and ML solutions",
                  "Generative AI applications",
                  "AI agent platforms",
                  "AI/ML operations (MLOps)",
                  "AI governance frameworks",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}