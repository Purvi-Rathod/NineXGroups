import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import {
  BarChart3,
  SlidersHorizontal,
  User,
} from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <BarChart3 size={22} strokeWidth={1.5} />,
    title: "Client Success Story",
    items: [
      ["15M", "customers unified through connected CX infrastructure"],
      ["23", "data sources integrated into one CDP platform"],
      ["50M", "real-time events processed per hour"],
      ["12-Month", "ROI achieved on total CX technology investment"],
    ],
    footerTitle: "CX SYSTEMS TRANSFORMATION",
    footerText: "CONNECTED. REAL-TIME.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Commercial Results",
    items: [
      ["58", "NPS increased from 28 within 18 months"],
      ["14%", "annual churn reduced from 25%"],
      ["$400M", "retained revenue from churn reduction"],
      ["45%", "improvement in cross-sell conversion"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "PERSONALISED. SCALABLE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Technology Infrastructure",
    items: [
      ["Segment\nCDP", "unified customer data platform across all systems"],
      ["Adobe\nJourney Optimizer", "real-time cross-channel orchestration"],
      ["Kafka\nStreaming", "millisecond-latency event processing infrastructure"],
      ["Dynamic\nYield", "AI-powered web and app personalisation"],
    ],
    footerTitle: "REAL-TIME CUSTOMER INTELLIGENCE",
    footerText: "UNIFIED. ACTIONABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Customer Data Platform Implementation",
    highlight:
      "One unified customer profile across every touchpoint your customers use to interact with you",
    description:
      "We implement enterprise CDP solutions including Segment, Rudderstack, mParticle, Tealium, and Bloomreach — building the data collection infrastructure, identity resolution logic, audience segmentation models, and real-time activation pipelines that unify customer data from every source into one complete, continuously updated customer profile. Personalisation, attribution, and AI all depend on this foundation existing correctly.",
  },

  {
    title: "Journey Orchestration Engine Implementation",
    highlight:
      "Execute personalised, cross-channel customer journeys for millions of customers simultaneously",
    description:
      "We implement journey orchestration platforms including Adobe Journey Optimizer, Salesforce Marketing Cloud Journey Builder, Braze, Iterable, and Bloomreach Engagement — with complex journey logic, real-time behavioural triggers, AI-powered next-best-action, A/B testing infrastructure, and multi-channel coordination across email, SMS, push, in-app, and paid media simultaneously.",
  },

  {
    title: "Digital Experience Platform (DXP)",
    highlight:
      "The content and experience infrastructure that delivers consistent, personalised experiences across every digital channel",
    description:
      "We implement Digital Experience Platforms including Adobe Experience Manager, Sitecore, Contentful, and Contentstack — with headless architecture for maximum channel flexibility, content modelling, workflow management for enterprise content teams, personalisation integration, search implementation, and the performance optimisation that ensures every experience loads fast in every market.",
  },

  {
    title: "Personalisation Engine Architecture",
    highlight:
      "Real-time personalisation at enterprise scale — every visitor, a unique experience",
    description:
      "We implement and architect personalisation platforms including Dynamic Yield, Optimizely, Adobe Target, and custom ML-based personalisation systems — delivering product recommendations, dynamic content, behavioural targeting, predictive personalisation, and continuous A/B and multivariate experimentation across website, mobile, email, and app channels simultaneously.",
  },

  {
    title: "Loyalty Platform Implementation",
    highlight:
      "The technical infrastructure behind loyalty programmes that retain customers and compound lifetime value",
    description:
      "We build and implement enterprise loyalty platforms — covering points and rewards architecture, tier management, partner ecosystem integration, mobile loyalty apps, gamification systems, redemption infrastructure, and loyalty analytics — creating the technical foundation for loyalty programmes that actually change customer behaviour and measurably improve retention, purchase frequency, and lifetime value.",
  },

  {
    title: "Customer Feedback & VoC Systems",
    highlight:
      "Capture, analyse, and act on customer voice at scale — across every touchpoint",
    description:
      "We implement Voice of Customer and feedback platforms including Qualtrics, Medallia, and Sprinklr — with survey deployment automation, NPS and CSAT measurement infrastructure, sentiment analysis using NLP, real-time alert systems for experience failures, and closed-loop response workflows that ensure every piece of negative feedback triggers an action before the customer churns.",
  },

  {
    title: "In-App & Digital Onboarding Systems",
    highlight:
      "The product experience infrastructure that drives adoption and reduces time to first value",
    description:
      "We build in-app onboarding and digital adoption systems using Pendo, WalkMe, Appcues, and custom implementations — covering interactive product tours, contextual help systems, feature discovery prompts, adoption analytics, and A/B testing infrastructure that continuously optimises the path every new user takes to their first value moment.",
  },

  {
    title: "CX Analytics & Attribution Infrastructure",
    highlight:
      "Measure every customer interaction against commercial outcomes — not just satisfaction scores",
    description:
      "We build CX analytics infrastructure that connects every customer interaction — across every channel and every touchpoint — to commercial outcomes including retention, expansion revenue, customer lifetime value, and referral generation. Net Promoter Score tells you how customers feel. Our analytics tell you what those feelings are worth in revenue and what investments in experience produce the greatest commercial return.",
  },

  {
    title: "CX Integration Architecture",
    highlight:
      "Connect every CX platform into one unified, commercially measurable system",
    description:
      "We design and build the integration architecture that connects your CDP, CRM, marketing automation, personalisation engine, loyalty platform, contact centre, analytics stack, and digital experience platform — ensuring data flows automatically between every system, customer context is always complete, and every team working on customer experience has access to the full picture without manual data assembly.",
  },

  {
    title: "Real-Time Event Streaming for CX",
    highlight:
      "React to customer behaviour in milliseconds rather than hours or days",
    description:
      "We implement real-time event streaming infrastructure using Apache Kafka, AWS Kinesis, and Google Pub/Sub — enabling the millisecond-latency customer behaviour processing that powers real-time personalisation, instant fraud detection, live recommendation updates, and triggered communication at the exact moment a customer action signals the right next step in their journey.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="BUILD. CONNECT. PERSONALISE. RETAIN."
        subheadline="The technical infrastructure behind enterprise customer experience — implemented with the engineering precision, integration depth, and operational reliability that transforms CX strategy into customer experience reality at scale.
                      We build and implement the complete technical stack that powers enterprise customer experience — from Customer Data Platforms, journey orchestration engines, and personalisation infrastructure through CRM technical architecture, contact centre platforms, digital experience platforms, and the analytics systems that measure every interaction commercially. Every system we build is connected, measurable, and designed to improve continuously.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "TECH-NOLOGY",
          "THAT MAKES",
          "CUSTOMERS",
          "FEEL KNOWN.",
        ]}
        title="Customer experience technology so well-integrated that every customer interaction feels individually designed for them."
        description="Great customer experience is not a design problem. It is an engineering problem. The most personalised, most connected, most commercially effective customer experiences in the world are built on exceptional technical infrastructure — unified data, real-time processing, connected systems, and continuous optimisation. We build that infrastructure, and we build it to the standard that makes genuine personalisation at millions-of-customers scale commercially and operationally viable."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every customer experience system we build."
        description="CX technology built without principles creates fragmented experiences at scale. Every engagement we take on is grounded in these four commitments to ensure what we build is data-driven, real-time, commercially accountable, and fully integrated."
        quote="Data is the Foundation of Every Experience"
        quoteDescription="Personalisation without data is guesswork. We build the data infrastructure first — CDP, identity resolution, event streaming — before we implement personalisation, journey orchestration, or loyalty systems. Every experience is only as good as the data that powers it."
        tags={[
          "Data",
          "Foundation",
          "Precision",
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