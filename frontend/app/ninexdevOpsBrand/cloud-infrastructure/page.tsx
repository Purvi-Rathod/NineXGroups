import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  ServerCrash,
  CloudCog,
  Rocket,
} from "lucide-react";

const metricGroups = [
  {
    icon: <ServerCrash size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["2,500+", "on-premises servers across 50 data centers"],
      ["$120M", "annual infrastructure operating costs"],
      ["6M", "infrastructure provisioning lead times"],
      ["45%", "average server utilization efficiency"],
      ["LEGACY", "infrastructure blocking digital initiatives"],
    ],
    footerTitle: "INFRASTRUCTURE LIMITS",
    footerText: "SLOW. EXPENSIVE.",
    showArrow: true,
  },

  {
    icon: <CloudCog size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AWS", "cloud migration of 2,000+ servers"],
      ["HYBRID", "multi-environment cloud architecture"],
      ["IaC", "Terraform infrastructure automation"],
      ["ORG", "multi-account AWS governance structure"],
      ["FINOPS", "CloudHealth cloud cost optimization"],
      ["24M", "global migration transformation program"],
    ],
    footerTitle: "CLOUD MODERNIZATION",
    footerText: "AUTOMATED. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <Rocket size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["2,000", "servers successfully migrated"],
      ["500", "applications modernized"],
      ["50", "data centers decommissioned"],
      ["150TB", "enterprise data migrated"],
      ["99.99%", "cloud infrastructure uptime achieved"],
      ["$50M", "annual infrastructure savings"],
      ["2H", "infrastructure provisioning time"],
      ["80%", "reduction in maintenance burden"],
      ["10M", "payback period realization"],
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