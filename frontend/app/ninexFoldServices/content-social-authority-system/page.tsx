import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "@/components/sections/common/OurVision";
import ValuesSection from "@/components/sections/common/ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  Cpu,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["8", "different CRM systems and disconnected data"],
      ["50%", "forecast accuracy missing quarterly targets"],
      ["0", "unified customer view across products"],
      ["180D", "sales cycles increasing and win rates declining"],
      ["BLIND", "executive team lacking revenue visibility"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "FRAGMENTED. DISCONNECTED.",
    showArrow: true,
  },

  {
    icon: <Cpu size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["CRM", "Unified Salesforce Revenue Cloud platform"],
      ["AI", "Clari predictive forecasting and analytics"],
      ["GONG", "Conversation intelligence and coaching"],
      ["DATA", "Custom attribution and waterfall reporting"],
      ["LIVE", "Executive dashboards with real-time visibility"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["95%", "forecast accuracy improvement"],
      ["$300M", "revenue impact in year one"],
      ["60%", "faster sales cycles"],
      ["40%", "larger average deal sizes"],
      ["95%", "sales adoption within 30 days"],
      ["3M", "ROI realization timeline"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Content Strategy & Editorial Architecture",
    highlight:
      "Content that builds an empire, not just an archive",
    description:
      "We build enterprise content strategies grounded in audience intelligence, keyword research, competitive gap analysis, and buyer journey mapping — defining the topics, formats, channels, and publishing cadences that will establish your brand as the definitive authority in your category. Every piece of content we produce or direct has a clear audience, a clear search or distribution purpose, and a clear role in the overall buyer journey.",
  },

  {
    title: "Thought Leadership Development",
    highlight:
      "Position your leadership as the voices your industry listens to",
    description:
      "We develop executive thought leadership programmes that build personal brand authority for your leadership team — covering ghostwritten LinkedIn content, long-form opinion articles, industry publication placements, podcast appearance strategies, award submissions, conference speaking programmes, and book or report publication planning. When your leadership team is the most cited voices in your category, your entire brand benefits commercially.",
  },

  {
    title: "Social Media Management & Community Building",
    highlight:
      "A social presence that earns attention, builds community, and drives commercial outcomes",
    description:
      "We manage your enterprise social media presence across LinkedIn, Instagram, X, TikTok, YouTube, and emerging platforms — with platform-specific content strategies, community management, engagement protocols, trend participation, and performance optimisation built into every programme. Social media done at enterprise level is not about posting consistently. It is about building the audience your competitors will never be able to replicate.",
  },

  {
    title: "Influencer & Creator Programme Management",
    highlight:
      "Borrowed credibility at enterprise scale",
    description:
      "We design, source, and manage enterprise influencer programmes — from nano-influencer networks in niche B2B categories to macro-influencer partnerships in consumer markets. We handle creator identification, audience analysis, contract negotiation, brief development, content approval, performance tracking, and long-term relationship management — turning creator partnerships into measurable brand awareness and conversion assets.",
  },

  {
    title: "Video Production & Distribution Strategy",
    highlight:
      "The highest-engagement content format in every market, executed at scale",
    description:
      "We produce and distribute enterprise-quality video content across brand films, product explainers, thought leadership interviews, customer testimonials, social shorts, YouTube series, webinar programmes, and documentary-style brand content — then build the distribution strategy that ensures every video reaches the right audience across every platform where they consume it.",
  },

  {
    title: "PR & Earned Media Strategy",
    highlight:
      "The coverage that money cannot buy, earned systematically",
    description:
      "We build and execute enterprise PR programmes that earn consistent media coverage in the publications your buyers read, your investors respect, and your competitors fear — through journalist relationship management, expert commentary placement, press release distribution, media tour coordination, crisis communications planning, and award submission strategies. Earned media builds the third-party credibility that transforms brand perception in ways no paid campaign can replicate.",
  },

  {
    title: "Podcast Strategy & Production",
    highlight:
      "Own a long-form audience that competitors struggle to penetrate",
    description:
      "We develop branded podcast strategies for enterprise clients — from concept development, format design, and production management through distribution, guest booking, audience building, and monetisation. Podcasts are one of the most powerful long-form authority building channels available, and the brands that invest early in category-relevant audio content build audience relationships that are extraordinarily difficult for competitors to displace.",
  },

  {
    title: "Content Distribution & Amplification",
    highlight:
      "Great content without distribution is a tree falling in an empty forest",
    description:
      "We build content distribution systems that ensure every piece of content you produce reaches its maximum possible audience — through owned email distribution, organic social amplification, paid promotion of high-performing content, content syndication partnerships, community distribution, and influencer amplification — multiplying the return on every content investment you make.",
  },

  {
    title: "Webinar & Digital Event Strategy",
    highlight:
      "High-intent audience engagement at enterprise scale",
    description:
      "We design, produce, and promote enterprise webinar and digital event programmes that generate high-quality pipeline, demonstrate product and service expertise, build community, and create reusable content assets — from single-topic educational webinars to large-scale virtual summits that position your brand as the definitive gathering place for your industry.",
  },

  {
    title: "Content Performance Analytics & Optimisation",
    highlight:
      "Know which content builds authority and which content drives revenue",
    description:
      "We build content analytics systems that track every piece of content against both authority metrics — search rankings, social engagement, PR coverage, brand mentions, share of voice — and commercial metrics — content-influenced pipeline, content-assisted revenue, and content's contribution to reducing sales cycle length. Continuous optimisation ensures your content investment compounds in value over time.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Fold-bg.png"
        headline="CREATE. INFLUENCE. COMPOUND. LEAD."
        subheadline="Enterprise content strategy, social media infrastructure, influencer programmes, video production, thought leadership, and PR systems that build the kind of brand authority competitors cannot replicate and buyers cannot ignore.
                    We run your complete content and social engine — producing editorial that ranks, social content that builds community, thought leadership that earns speaking engagements, influencer programmes that extend reach, and PR campaigns that earn the coverage no advertisement can buy. The result is compounding brand authority that makes every other marketing investment perform better."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "AUTHORITY",
          "THAT MONEY",
          "CANNOT",
          "BUY.",
        ]}
        title="A brand so well-known, so well-cited, and so well-regarded that entering your market becomes intimidating."
        description="Content authority is the most defensible competitive advantage in modern marketing. Unlike paid media, it cannot be instantly replicated. Unlike technology, it cannot be licensed. It is earned through years of consistent, high-quality publishing, intelligent distribution, and strategic thought leadership — and the brands that build it early create a compounding advantage that becomes a genuine barrier to competition. We build that advantage, systematically, for every client we partner with."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every content system we build."
        description="Content without principles produces noise at scale. Every engagement we take on is grounded in these four commitments to ensure what we create compounds in authority, converts commercially, and endures."
        quote="Quality That Compounds"
        quoteDescription="Every piece of content we produce is built to last. We write, film, and design for long-term relevance and cumulative authority, not momentary engagement that disappears from feeds within 48 hours."
        tags={[
          "Quality",
          "Longevity",
          "Relevance",
        ]}
        image="https://images.unsplash.com/photo-1545987796-200677ee1011?w=600&q=80"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}