import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, Clapperboard, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["CHURN", "subscriber churn eroding revenue"],
      ["MANUAL", "content workflows slowing release"],
      ["GENERIC", "weak personalisation and discovery"],
      ["SILOED", "audience data across platforms"],
      ["LEAK", "under-monetised content and ads"],
    ],
    footerTitle: "AUDIENCE PAIN",
    footerText: "FRAGMENTED. CHURNING.",
    showArrow: true,
  },
  {
    icon: <Clapperboard size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["OTT", "Streaming & OTT delivery platforms"],
      ["REC", "Recommendation & discovery engines"],
      ["CMS", "Content management & production workflows"],
      ["ADS", "Ad tech & monetisation systems"],
      ["DATA", "Audience analytics & segmentation"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "ENGAGING. MONETISED.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["-30%", "reduction in subscriber churn"],
      ["+40%", "increase in watch time"],
      ["FASTER", "content time-to-publish"],
      ["+25%", "growth in ad revenue"],
      ["UNIFIED", "single audience view"],
      ["SCALE", "millions of streams served"],
    ],
    footerTitle: "AUDIENCE OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Streaming & OTT Platforms", highlight: "Deliver flawless playback to millions, anywhere", description: "We build streaming and OTT delivery platforms engineered for scale and reliability — serving high-quality video across every device and network condition, so the experience never buffers when the audience shows up." },
  { title: "Recommendation & Discovery", highlight: "Help every viewer find their next favourite", description: "We implement recommendation and discovery engines that learn what audiences love and surface the right content at the right moment — driving watch time, deepening engagement, and reducing churn." },
  { title: "Content Management & Production", highlight: "Move content from creation to screen faster", description: "We deliver content management and production workflows that streamline ingest, editing, rights, and publishing — cutting time-to-publish and letting teams ship more content with less friction." },
  { title: "Ad Tech & Monetisation", highlight: "Turn attention into revenue", description: "We build ad-tech and monetisation systems spanning targeted advertising, subscriptions, and dynamic pricing — capturing the full value of content and audience across every revenue model." },
  { title: "Audience Analytics", highlight: "One clear view of who is watching and why", description: "We deliver audience analytics and segmentation that unify behaviour across platforms into a single view — powering smarter content, sharper targeting, and decisions grounded in real audience data." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop"
        headline="CREATE. STREAM. ENGAGE. MONETISE."
        subheadline="Streaming, content, and audience platforms that grow reach and revenue.
We turn churn, fragmented data, and under-monetised content into engaged audiences and growing revenue — with scalable streaming, smart discovery, fast content workflows, and intelligent monetisation."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["EVERY", "STORY.", "EVERY", "SCREEN."]}
        title="Content that finds its audience and keeps them watching."
        description="In a world of infinite content, attention is the scarcest resource — and winning it takes more than great storytelling. We cut through the fragmentation and implement the platforms that connect content to audience: scalable streaming, intelligent discovery, efficient production, and monetisation that captures the full value of every view."
        image="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every media system we build."
        description="Media technology has to serve both the audience experience and the business behind it. Every system we build is grounded in these commitments so what we deploy engages audiences, scales reliably, and monetises sustainably."
        quote="Attention Is Earned"
        quoteDescription="Audiences give their attention to experiences that respect it — fast, relevant, and worth their time. We build audience-first systems that earn and keep engagement, then monetise it sustainably, because lasting reach is built on experiences people actually want."
        tags={["Audience-First", "Engagement", "Monetisation"]}
        image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}