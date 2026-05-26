import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  Database,
  Workflow,
  TrendingUp,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Database size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["40%", "CRM user adoption across sales teams"],
      ["85%", "sales data trapped in spreadsheets"],
      ["0", "visibility into real-time pipeline health"],
      ["5D", "manual quote generation turnaround"],
      ["LOSS", "deals lost to faster competitors"],
    ],
    footerTitle: "SALES BOTTLENECKS",
    footerText: "MANUAL. DISCONNECTED.",
    showArrow: true,
  },

  {
    icon: <Workflow size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CRM", "Salesforce Sales Cloud implementation"],
      ["CPQ", "Salesforce configure-price-quote platform"],
      ["AI", "LeanData lead routing and assignment"],
      ["GONG", "Conversation intelligence deployment"],
      ["ERP", "Custom enterprise system integrations"],
    ],
    footerTitle: "MODERNIZED STACK",
    footerText: "CONNECTED. AUTOMATED.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "user adoption within 60 days"],
      ["80%", "time savings on quote generation"],
      ["45%", "increase in pipeline visibility"],
      ["30%", "shorter sales cycles"],
      ["$150M", "incremental revenue in year one"],
      ["4M", "ROI realization timeline"],
    ],
    footerTitle: "BUSINESS IMPACT",
    footerText: "SCALABLE. MEASURABLE.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Fold-bg.png"
                headline="Sales systems that accelerate pipeline and close deals faster"
                subheadline="Implement CRM and sales automation platforms that give reps the tools they
                  need, managers the visibility they require, and executives the confidence they demand."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "SYSTEMS",
                    "THAT SELL.",
                    "DATA",
                    "THAT CLOSES.",
                ]}
                title="Modern B2B selling requires sophisticated systems that automate manual work, surface insights,
                  guide rep behavior, and provide real-time visibility into pipeline health. NineXFold implements
                  sales technology ecosystems that transform sales productivity and effectiveness."
                description="NineXFold implements sales technology ecosystems that transform sales productivity and effectiveness."
                implementationTitle="What We Implement:"
                implementations={[
                    "CRM platforms (Salesforce, Dynamics, HubSpot)",
                    "Sales engagement and cadence automation",
                    "Configure-price-quote (CPQ) systems",
                    "Contract lifecycle management (CLM)",
                    "Sales intelligence and enrichment",
                    "Conversation and revenue intelligence",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}