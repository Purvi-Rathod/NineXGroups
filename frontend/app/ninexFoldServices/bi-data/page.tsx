import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  ShieldCheck,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const metricGroups = [
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["150+", "legacy systems with fragmented enterprise data"],
      ["2W", "executive reporting turnaround time"],
      ["0", "single source of truth for KPIs"],
      ["80%", "analyst time consumed by data preparation"],
      ["NONE", "predictive analytics capabilities available"],
    ],
    footerTitle: "DATA SILOS",
    footerText: "FRAGMENTED. SLOW.",
    showArrow: true,
  },

  {
    icon: <BrainCircuit size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["DATA", "Snowflake enterprise data warehouse"],
      ["BI", "Tableau enterprise visualization platform"],
      ["ML", "Databricks advanced analytics environment"],
      ["GOV", "Collibra data governance framework"],
      ["DBT", "Transformation and data modeling pipelines"],
      ["LIVE", "50+ dashboards and 20+ ML models"],
    ],
    footerTitle: "MODERN DATA STACK",
    footerText: "CONNECTED. PREDICTIVE.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["90%", "reduction in time to insight"],
      ["$100M", "operational cost savings achieved"],
      ["85%", "self-service BI adoption rate"],
      ["92%", "churn prediction model accuracy"],
      ["LIVE", "real-time operational dashboards"],
      ["6M", "ROI realization timeline"],
    ],
    footerTitle: "ENTERPRISE IMPACT",
    footerText: "REAL-TIME. SCALABLE.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Fold-bg.png"
                headline="Turn data into decisions, insights into action"
                subheadline=" Build enterprise business intelligence and analytics platforms that democratize
                  data, surface insights, and drive data-driven decision making."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "ANALYTICS",
                    "THAT GUIDES.",
                    "DATA",
                    "THAT DECIDES.",
                ]}
                title="Modern enterprises generate massive amounts of data but struggle to turn that data into
                  actionable insights. NineXFold implements BI and data platforms spanning data warehousing,
                  visualization, analytics, and governance that make data accessible, trustworthy, and actionable."
                description="We help you transform raw data into strategic assets that accelerate decision-making and drive measurable business impact."
                implementationTitle="What We Implement:"
                implementations={[
                    "Modern data warehouses and lakehouses",
                    "Business intelligence and visualization",
                    "Predictive analytics and ML platforms",
                    "Data governance and quality frameworks",
                    "Self-service analytics enablement",
                    "Executive dashboards and reporting",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}