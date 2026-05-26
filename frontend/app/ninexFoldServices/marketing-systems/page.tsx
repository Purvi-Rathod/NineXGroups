import SubPageHero from "@/components/sections/common/SubPageHero";
import OverviewSection from "@/components/sections/common/OverviewSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  Boxes,
  Megaphone,
  LineChart,
} from "lucide-react";

const metricGroups = [
  {
    icon: <Boxes size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["10+", "fragmented tools across marketing stack"],
      ["0", "attribution visibility across campaigns"],
      ["30%", "qualified lead acceptance rate"],
      ["40%", "team time lost to manual processes"],
      ["GAP", "misalignment between marketing and sales"],
    ],
    footerTitle: "MARKETING CHAOS",
    footerText: "DISCONNECTED. INEFFICIENT.",
    showArrow: true,
  },

  {
    icon: <Megaphone size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["AUTO", "Marketo nurture campaign automation"],
      ["ROI", "Bizible multi-touch attribution"],
      ["ABM", "6sense intent and account intelligence"],
      ["SYNC", "LeanData lead routing and matching"],
      ["CRM", "Bi-directional Salesforce integration"],
      ["LIVE", "Executive marketing dashboards"],
    ],
    footerTitle: "CONNECTED PLATFORM",
    footerText: "INTELLIGENT. AUTOMATED.",
    showArrow: false,
  },

  {
    icon: <LineChart size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["250%", "increase in pipeline contribution"],
      ["75%", "improvement in lead quality"],
      ["$200M", "pipeline generated in first year"],
      ["5:1", "measurable marketing ROI"],
      ["80%", "time savings through automation"],
      ["95%", "sales-marketing alignment score"],
    ],
    footerTitle: "MARKETING IMPACT",
    footerText: "SCALABLE. MEASURABLE.",
    showArrow: false,
  },
];
export default function Page() {
    return (
        <>
            <SubPageHero
                backgroundImage="/images/bg-image/Fold-bg.png"
                headline="Marketing technology that generates pipeline and proves ROI"
                subheadline="Build integrated marketing stacks that automate campaigns, nurture leads, prove
                  attribution, and align marketing with revenue outcomes."
            />
            <OverviewSection
                eyebrow="OVERVIEW"
                leftTitle={[
                    "SYSTEMS",
                    "THAT SELL.",
                    "DATA",
                    "THAT CLOSES.",
                ]}
                title="Modern marketing requires sophisticated technology ecosystems spanning marketing
                  automation, advertising platforms, content management, analytics, and ABM. NineXFold
                  implements marketing technology stacks that generate measurable pipeline contribution and
                  prove marketing ROI."
                description="NineXFold builds and integrates B2B marketing technology ecosystems that automate
                  campaign execution, nurture leads, attribute pipeline, enable sales, and measure marketing
                  performance."
                implementationTitle="What We Implement:"
                implementations={[
                    "Marketing automation platforms (Marketo, Pardot, HubSpot)",
                    "Account-based marketing (ABM) platforms",
                    "Marketing attribution and analytics",
                    "Content management systems (CMS)",
                    "Digital asset management (DAM)",
                    "Customer data platforms (CDP)",
                ]}
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
            />
            <ClientSuccessMetricsSection
                metricGroups={metricGroups}
            />
        </>
    );
}