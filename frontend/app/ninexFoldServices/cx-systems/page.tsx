import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  Globe2,
  MessagesSquare,
  SmilePlus,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Globe2 size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["200+", "fragmented customer systems globally"],
      ["0", "unified customer view across countries"],
      ["SILOS", "contact centers operating independently"],
      ["35", "Net Promoter Score below industry average"],
      ["30", "countries lacking connected CX operations"],
    ],
    footerTitle: "CX FRAGMENTATION",
    footerText: "DISCONNECTED. INCONSISTENT.",
    showArrow: true,
  },

  {
    icon: <MessagesSquare size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["DATA", "Salesforce Data Cloud unification"],
      ["CRM", "Service Cloud deployment across 30 countries"],
      ["AI", "Adobe Journey Optimizer personalization"],
      ["CC", "Genesys omnichannel contact centers"],
      ["VOICE", "Qualtrics customer feedback analytics"],
      ["BOT", "AI chatbots resolving 60% of inquiries"],
    ],
    footerTitle: "CONNECTED EXPERIENCE",
    footerText: "PERSONALIZED. OMNICHANNEL.",
    showArrow: false,
  },

  {
    icon: <SmilePlus size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["50M", "customer records unified globally"],
      ["30", "country-specific deployments completed"],
      ["20K", "employees trained successfully"],
      ["500+", "legacy systems integrated"],
      ["75", "Net Promoter Score achieved"],
      ["$200M", "cross-sell revenue generated"],
      ["30%", "reduction in acquisition costs"],
      ["50%", "decrease in support costs"],
      ["4.5★", "mobile app customer rating"],
    ],
    footerTitle: "CX TRANSFORMATION",
    footerText: "CONNECTED. DELIGHTFUL.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Fold-bg.png"
                headline="Customer experiences that build loyalty and drive growth"
                subheadline="Implement customer experience platforms that orchestrate journeys, personalize interactions, and turn service into competitive advantage."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "CUSTOMER",
                    "SYSTEMS",
                    "THAT OPTIMIZE.",
                    "OPERATIONS AT SCALE",
                ]}
                title="Exceptional customer experience requires unified data, intelligent automation, and seamless orchestration across every touchpoint. NineXFold implements CX platforms spanning customer data, journey orchestration, contact centers, service automation, and experience management."
                description="We deliver end-to-end CX transformation—from strategy and platform implementation to orchestration, automation, and continuous optimization—enabling you to exceed customer expectations, improve loyalty, and accelerate revenue growth."
                implementationTitle="What We Implement:"
                implementations={[
                    "Customer data platforms (CDP)",
                    "Journey orchestration and personalization",
                    "Contact center and omnichannel platforms",
                    "Service automation and case management",
                    "Customer feedback and experience management",
                    "Loyalty and engagement platforms",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}