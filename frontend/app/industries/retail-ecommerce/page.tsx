import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  AlertTriangle,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["SILOED", "online and store systems completely disconnected"],
      ["0", "unified inventory visibility across channels"],
      ["MOBILE", "poor mobile experience losing buyers"],
      ["AMZN", "losing market share to Amazon"],
      ["SLOW", "fulfilment and checkout friction at every step"],
    ],
    footerTitle: "BUSINESS PAIN",
    footerText: "DISCONNECTED. OUTPACED.",
    showArrow: true,
  },

  {
    icon: <ShoppingBag size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["SFCC", "Headless commerce on Salesforce Commerce Cloud"],
      ["INV", "Unified inventory platform across channels"],
      ["MOB", "Mobile-first storefront redesign"],
      ["AI", "Personalisation powered by Dynamic Yield"],
      ["BOPIS", "Buy-online-pickup-in-store & ship-from-store"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "UNIFIED. OMNICHANNEL.",
    showArrow: false,
  },

  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["300%", "growth in online revenue"],
      ["60%", "of online orders now use BOPIS"],
      ["40%", "improvement in inventory turns"],
      ["50%", "faster page load times"],
      ["99.99%", "uptime during peak periods"],
      ["#1", "market-share gain in 5 years"],
    ],
    footerTitle: "BUSINESS OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  {
    title: "E-commerce Platforms",
    highlight:
      "Storefronts that load fast, convert hard, and never go down at peak",
    description:
      "We build headless commerce platforms, B2C and B2B storefronts, and mobile commerce — engineered on Shopify Plus, Adobe Commerce, Salesforce Commerce Cloud, and BigCommerce, or fully custom. The result is faster page loads, higher conversion, and rock-solid uptime through your busiest sales periods.",
  },

  {
    title: "Personalisation & Customer Data",
    highlight:
      "Every shopper sees the store built for them",
    description:
      "We implement customer data platforms (CDP), personalisation engines, product recommendations, dynamic pricing, and segmentation — powered by Segment, Adobe Real-Time CDP, Dynamic Yield, Bloomreach, and Salesforce Data Cloud — lifting average order value, conversion, lifetime value, and repeat purchases.",
  },

  {
    title: "Inventory & Fulfilment",
    highlight:
      "One source of truth for stock, everywhere it lives",
    description:
      "We deliver unified inventory visibility, buy-online-pickup-in-store (BOPIS), ship-from-store, distributed order management, and returns management — cutting stockouts, accelerating fulfilment, reducing inventory cost, and keeping shelves and warehouses in sync across every channel.",
  },

  {
    title: "Store Operations",
    highlight:
      "Bring digital intelligence onto the shop floor",
    description:
      "We modernise stores with POS and mobile checkout, clienteling and assisted selling, store analytics and workforce management, digital signage and in-store tech, and store inventory management — turning physical locations into connected, data-driven extensions of the brand.",
  },

  {
    title: "Order Management & Marketplace",
    highlight:
      "Orchestrate every order across every selling channel",
    description:
      "We build order management systems and marketplace platforms that route, fulfil, and track orders from any channel through any node — unifying web, app, store, and partner marketplaces into a single distributed order flow that scales with demand.",
  },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop"
        headline="ONLINE. IN-STORE. EVERYWHERE. SEAMLESS."
        subheadline="From e-commerce platforms to personalization engines to store operations, we help retailers deliver seamless customer experiences and drive profitable growth.
We unify disconnected online and store systems into one omnichannel operation — fast storefronts, real-time inventory, personalised experiences, and frictionless fulfilment that win customers back from the marketplaces."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ONE",
          "CUSTOMER.",
          "EVERY",
          "CHANNEL.",
        ]}
        title="A single, seamless experience wherever your customer shops."
        description="Modern retail is not online versus in-store — it is one customer moving fluidly between both. We cut through the channel silos and implement the platforms that unify them: headless commerce, unified inventory, real-time personalisation, and omnichannel fulfilment that turn fragmented systems into one seamless experience and fragmented data into compounding revenue."
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every retail system we build."
        description="Retail technology has to perform under real pressure — peak-season traffic, thin margins, and customers who expect Amazon-grade experiences everywhere. Every system we build is grounded in these commitments so what we deploy converts, scales, and holds up when it matters most."
        quote="The Customer Doesn't See Channels"
        quoteDescription="Shoppers don't think in terms of web, app, or store — they expect one brand, one cart, one experience. We build every system around the customer journey, not the org chart, so the experience feels seamless no matter where it happens."
        tags={[
          "Customer-First",
          "Omnichannel",
          "Conversion",
        ]}
        image="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection
        metricGroups={metricGroups}
      />
    </>
  );
}