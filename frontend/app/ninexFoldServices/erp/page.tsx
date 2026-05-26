import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  Factory,
  Boxes,
  Globe2,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Factory size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["45", "facilities running on legacy ERP systems"],
      ["0", "real-time inventory visibility globally"],
      ["20D", "financial close reporting cycle"],
      ["$200M", "annual supply chain disruption losses"],
      ["40%", "IT budget consumed by maintenance"],
    ],
    footerTitle: "LEGACY OPERATIONS",
    footerText: "FRAGMENTED. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Boxes size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["ERP", "SAP S/4HANA global ERP implementation"],
      ["IBP", "Integrated business planning with SAP"],
      ["PROC", "SAP Ariba procurement modernization"],
      ["HCM", "SuccessFactors workforce platform"],
      ["BI", "SAP Analytics Cloud dashboards"],
    ],
    footerTitle: "ENTERPRISE MODERNIZATION",
    footerText: "CONNECTED. REAL-TIME.",
    showArrow: false,
  },

  {
    icon: <Globe2 size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["20", "countries unified under one ERP"],
      ["18M", "global implementation timeline"],
      ["$250M", "annual operational cost savings"],
      ["75%", "faster financial close process"],
      ["40%", "inventory reduction achieved"],
      ["60%", "reduction in supply chain disruption costs"],
      ["80%", "reduction in IT maintenance costs"],
      ["12M", "ROI realization timeline"],
    ],
    footerTitle: "GLOBAL IMPACT",
    footerText: "SCALABLE. OPTIMIZED.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Fold-bg.png"
                headline="Enterprise systems that optimize operations at scale"
                subheadline="Implement ERP, financial, supply chain, and HR systems that streamline
                  operations, reduce costs, and enable global growth."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "ENTERPRISE",
                    "SYSTEMS",
                    "THAT OPTIMIZE.",
                    "OPERATIONS AT SCALE",
                ]}
                title="Enterprise resource planning (ERP) systems form the operational backbone of modern enterprises, integrating finance, supply chain, manufacturing, HR, and operations into unified platforms. NineXFold implements ERP solutions from leading vendors, customized to your industry and operational requirements."
                description="Our ERP implementations span financial management, supply chain optimization, manufacturing execution, HR and payroll, and cross-functional process automation, enabling you to operate with greater efficiency, accuracy, and scalability."
                implementationTitle="What We Implement:"
                implementations={[
                    "Financial management systems",
                    "Supply chain and logistics platforms",
                    "Manufacturing execution systems (MES)",
                    "Human capital management (HCM)",
                    "Procurement and sourcing platforms",
                    "Asset and maintenance management",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}