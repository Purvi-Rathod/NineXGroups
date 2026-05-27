import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  DatabaseZap,
  Headphones,
  HeartHandshake,
} from "lucide-react";

const metricGroups = [
  {
    icon: <DatabaseZap size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["200+", "fragmented customer systems globally"],
      ["0", "unified customer view across countries"],
      ["SILOS", "contact centers operating independently"],
      ["35", "Net Promoter Score below industry average"],
      ["30", "countries lacking connected CX operations"],
    ],
    footerTitle: "CX FRAGMENTATION",
    footerText: "DISCONNECTED. COMPLEX.",
    showArrow: true,
  },

  {
    icon: <Headphones size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["DATA", "Salesforce Data Cloud unification"],
      ["CRM", "Service Cloud deployment globally"],
      ["AI", "Adobe Journey Optimizer personalization"],
      ["CC", "Genesys omnichannel contact centers"],
      ["VOICE", "Qualtrics customer feedback analytics"],
      ["BOT", "AI chatbots resolving 60% of inquiries"],
    ],
    footerTitle: "CONNECTED EXPERIENCE",
    footerText: "INTELLIGENT. OMNICHANNEL.",
    showArrow: false,
  },

  {
    icon: <HeartHandshake size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["+40", "point increase in NPS score"],
      ["$200M", "incremental cross-sell revenue"],
      ["30%", "lower customer acquisition costs"],
      ["50%", "reduction in support costs"],
      ["90%", "digital customer satisfaction"],
      ["4.5★", "mobile app customer rating"],
    ],
    footerTitle: "CX IMPACT",
    footerText: "PERSONALIZED. SCALABLE.",
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