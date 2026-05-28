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
      ["20-Year", "legacy placement platform replaced completely"],
      ["18-Month", "greenfield development programme delivered"],
      ["85%", "premium volume connected through insurer APIs"],
      ["React +\nNode.js", "modern platform architecture built on AWS"],
    ],
    footerTitle: "PROPRIETARY PLATFORM DEVELOPMENT",
    footerText: "DIGITAL. DIFFERENTIATED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Commercial Results",
    items: [
      ["70%", "reduction in placement time per risk"],
      ["$25M", "annual cost savings through automation"],
      ["35%", "new business growth in first year"],
      ["First", "fully digital placement capability in the market"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "FASTER. MORE COMPETITIVE.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Platform Infrastructure",
    items: [
      ["Digital\nPlacement", "automated risk submission and market workflows"],
      ["Insurer\nAPI Integrations", "real-time connectivity across carriers"],
      ["Client\nPortal", "self-service access and document management"],
      ["Third-Party\nLicensing", "new recurring revenue from platform adoption"],
    ],
    footerTitle: "MARKET-LEADING TECHNOLOGY",
    footerText: "SCALABLE. DEFENSIBLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Custom Enterprise Application Development",
    highlight:
      "Build the internal tools and enterprise applications your off-the-shelf options cannot deliver",
    description:
      "We build custom enterprise applications covering operations management platforms, complex approval and workflow systems, multi-party coordination tools, regulatory compliance systems, industry-specific management platforms, and the bespoke internal applications that run unique business processes your organisation has built competitive advantage around. Every application is built to scale, documented to maintain, and designed to evolve with your business requirements.",
  },

  {
    title: "Industry-Specific Software Development",
    highlight:
      "Software that understands the unique requirements of your industry — because we built it for that industry",
    description:
      "We build industry-specific software for financial services, healthcare, manufacturing, logistics, retail, insurance, real estate, and professional services — with the domain knowledge, regulatory compliance requirements, and industry-specific data models that generic development partners do not have. Industry-specific software solves problems that horizontal platforms cannot because they are designed for the specific reality of your sector.",
  },

  {
    title: "Legacy System Replacement & Modernisation",
    highlight:
      "Replace the systems that are holding your business back without disrupting the operations they support",
    description:
      "We design and execute legacy system replacement programmes — building modern replacements that preserve the critical business logic embedded in legacy systems while adding the cloud-native architecture, modern user interfaces, API connectivity, and operational capabilities that legacy systems cannot provide. Migration is phased using the Strangler Fig pattern to maintain business continuity throughout.",
  },

  {
    title: "Proprietary Platform Development",
    highlight:
      "Build the technology platform that becomes your most defensible competitive advantage",
    description:
      "We build proprietary platforms — marketplace infrastructures, SaaS products, data monetisation platforms, industry exchange platforms, and unique technology products — that transform technology from a cost centre into a revenue-generating asset. Proprietary platforms that competitors cannot license or replicate become the most durable competitive advantages in any market.",
  },

  {
    title: "Workflow Automation & BPM Systems",
    highlight:
      "Automate the manual, approval-heavy processes that consume your team's most valuable hours",
    description:
      "We design and build custom workflow automation and Business Process Management systems that digitise, automate, and optimise the complex approval processes, multi-party coordination workflows, and document-heavy procedures that cannot be adequately addressed by generic workflow tools. Custom BPM built around your specific process logic eliminates the manual work and error rates that generic tools tolerate.",
  },

  {
    title: "Data Product Development",
    highlight:
      "Build the data products that generate value from the proprietary data your business accumulates",
    description:
      "We build custom data products — internal analytics platforms, customer-facing data portals, industry benchmarking tools, data monetisation APIs, and proprietary data services — that transform the unique data your business generates into competitive intelligence, customer value, or direct revenue streams. Data products built on proprietary data assets create defensible value that competitors cannot replicate.",
  },

  {
    title: "Integration Platform Development",
    highlight:
      "Build the custom integration infrastructure when iPaaS tools cannot handle your complexity",
    description:
      "We build custom integration platforms and middleware solutions for the complex, high-volume, multi-party integration requirements that commercial iPaaS tools cannot cost-effectively address — covering real-time event processing, complex transformation logic, industry-standard message formats including HL7, SWIFT, and EDI, and the custom routing and orchestration logic that specific industries require.",
  },

  {
    title: "Progressive Web Apps & Hybrid Applications",
    highlight:
      "The user experience of a native app with the reach and maintainability of the web",
    description:
      "We build Progressive Web Apps and hybrid applications that deliver app-quality user experiences on every device and platform — with offline capability, push notifications, hardware access, and app store distribution — while maintaining the single codebase and web deployment simplicity that native apps cannot offer. PWAs are particularly valuable for field force, retail, and customer-facing use cases where device diversity and update frequency are operational requirements.",
  },

  {
    title: "API-First Architecture & Developer Platform",
    highlight:
      "Build the API layer that enables your business to become a platform",
    description:
      "We design and build API-first architectures that expose your business capabilities as consumable APIs — enabling partner integrations, third-party developer ecosystems, and internal service consumption — with API gateway management, developer documentation portals, SDK generation, and the developer experience that drives external adoption of your platform capabilities.",
  },

  {
    title: "Regulatory & Compliance System Development",
    highlight:
      "Build the custom compliance infrastructure your regulatory environment demands",
    description:
      "We build custom regulatory compliance systems — covering GDPR consent management, financial regulatory reporting, clinical trial management, environmental compliance tracking, audit trail systems, and industry-specific regulatory automation — that meet the exact requirements of your regulatory environment without the compromises and workarounds that generic compliance platforms require.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="DESIGN. BUILD. DEPLOY. OWN IT."
        subheadline="Bespoke enterprise software built exactly to your requirements — when off-the-shelf products cannot solve your specific problem, your specific workflow, or your specific competitive advantage.
                      We design and build custom enterprise software covering complex internal workflow tools, industry-specific applications, proprietary platforms, legacy system replacements, and the unique technology that becomes your competitive differentiator. Every custom build uses modern engineering practices, cloud-native architecture, and the delivery discipline that complex enterprise software demands.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "SOFTWARE",
          "BUILT FOR",
          "YOUR PROBLEM.",
          "NOT THEIRS.",
        ]}
        title="A world where every enterprise has the bespoke software that matches the uniqueness of its competitive strategy."
        description="The most competitive enterprises in every market are not running the same software as their competitors. They are running proprietary systems, custom workflows, and unique platforms that embed their competitive advantages in code rather than leaving them to depend on people, processes, or off-the-shelf tools that competitors can access equally. We build the software that makes your competitive advantages structural rather than operational."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every custom software system we build."
        description="Custom software built without principles becomes a liability within years of delivery. Every engagement we take on is grounded in these four commitments to ensure what we build is correctly specified, built to last, fully owned by you, and continuously improved."
        quote="Requirements Before Code"
        quoteDescription="We invest in requirements gathering, process analysis, and solution design before writing a single line of code. The most expensive software to build is software built on misunderstood requirements."
        tags={[
          "Requirements",
          "Design",
          "Clarity",
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