import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  ServerCrash,
  CloudCog,
  GaugeCircle,
} from "lucide-react";

const metricGroups = [
  {
    icon: <ServerCrash size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["2,500+", "on-premises servers across data centers"],
      ["$120M", "annual infrastructure operating costs"],
      ["6M", "infrastructure provisioning lead time"],
      ["45%", "average server utilization efficiency"],
      ["LEGACY", "infrastructure limiting innovation"],
    ],
    footerTitle: "INFRASTRUCTURE DEBT",
    footerText: "SLOW. EXPENSIVE.",
    showArrow: true,
  },

  {
    icon: <CloudCog size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AWS", "migration of 2,000+ enterprise servers"],
      ["HYBRID", "500 on-prem systems retained strategically"],
      ["IaC", "Terraform infrastructure automation"],
      ["ORG", "multi-account AWS governance"],
      ["FINOPS", "CloudHealth cost optimization"],
      ["24M", "global migration transformation"],
    ],
    footerTitle: "CLOUD MODERNIZATION",
    footerText: "AUTOMATED. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <GaugeCircle size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["$50M", "annual infrastructure cost savings"],
      ["99.99%", "enterprise cloud uptime achieved"],
      ["2H", "infrastructure provisioning time"],
      ["3X", "improvement in disaster recovery"],
      ["80%", "reduction in maintenance burden"],
      ["10M", "payback period achieved"],
    ],
    footerTitle: "CLOUD IMPACT",
    footerText: "FASTER. RESILIENT.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Devops-bg.png"
                headline="Cloud infrastructure engineered for performance, security, and scale"
                subheadline="Migrate to cloud, optimize multi-cloud environments, and build infrastructure that
                  scales with your business while reducing costs by 40% on average."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "CLOUD",
                    "THAT GUIDES.",
                    "INFRA-STRUCTURE",
                    "THAT DECIDES.",
                ]}
                title="Modern enterprises require cloud infrastructure that combines performance, security, cost
                  optimization, and operational excellence. NineXDevOps implements cloud solutions spanning
                  migration, architecture, automation, and managed services across AWS, Google Cloud,
                  Microsoft Azure, and Oracle Cloud."
                description="We help you transform raw data into strategic assets that accelerate decision-making and drive measurable business impact."
                implementationTitle="What We Implement:"
                implementations={[
                  "Cloud migration and modernization",
                  "Multi-cloud and hybrid cloud strategy",
                  "Infrastructure as Code (IaC)",
                  "Cloud cost optimization",
                  "Cloud security and compliance",
                  "Managed cloud operations",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}