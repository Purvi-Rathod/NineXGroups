"use client";

import Hero from "@/components/pages/Hero";
import BigStatementSection from "@/components/pages/BigStatementSection";
import EditorialInsightSection from "@/components/pages/EditorialInsightSection";
import BrandsSection from "@/components/pages/BrandsSection";
import HowWeWorkSection from "@/components/pages/HowWeWorkSection";
import WhyChooseUsSection from "@/components/pages/WhyChooseUsSection";
import GlobalPresenceSection from "@/components/pages/GlobalPresenceSection";
import LeadershipSection from "@/components/pages/LeadershipSection";

import { UserRound, GitBranch, Layers3, Target } from "lucide-react";

export default function About() {
  return (
    <main className="bg-white">
      <Hero
        eyebrow="Company Overview"
        title="About"
        highlightedText="NineXGroup"
        subtitle="Built to redefine enterprise transformation."
        website="ninex-group.com"
        foundedYear="2024"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
        description="NineXGroup is a multi-brand enterprise transformation group founded in 2024 and headquartered in Indore, India. We bring strategy, technology, and execution together under one roof, helping organizations grow faster, run smarter, and scale with confidence."
      />

      <BigStatementSection
        eyebrow="WHO WE ARE"
        titleLines={["One team.", "One plan.", "One outcome."]}
        content="We are a young, fast-moving group of strategists, engineers, designers, and operators who got tired of watching transformation projects fail in the gaps between firms. Strategy would come from one consultancy, technology from another, and execution from a third. NineXGroup closes those gaps by bringing strategy, technology, and execution together under one roof."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
      />

      <EditorialInsightSection
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
        title="Most transformations fail between strategy, technology, and execution."
        description="We bring strategy, technology, and execution together under one roof, eliminating the gaps that slow growth, create complexity, and reduce accountability."
      />

      <BrandsSection
        eyebrow="WHAT WE DO"
        title="Four specialized brands."
        subtitle="One growth engine."
      />

      <HowWeWorkSection
        eyebrow="HOW WE WORK"
        title="Our model is simple to describe and hard to copy."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
        items={[
          {
            title: "Senior from the start.",
            description:
              "The people who scope your work are the people who do it. You are not handed off from a pitch team to a junior delivery team.",
            icon: <UserRound size={20} strokeWidth={1.8} />,
          },
          {
            title: "Strategy and engineering together.",
            description:
              "We do not design a strategy that engineering cannot ship, and we do not build technology that has no business reason to exist.",
            icon: <GitBranch size={20} strokeWidth={1.8} />,
          },
          {
            title: "Built to scale.",
            description:
              "Everything we build is designed to grow with your business, not to become the thing that holds it back next year.",
            icon: <Layers3 size={20} strokeWidth={1.8} />,
          },
          {
            title: "Accountable to outcomes.",
            description:
              "We keep score by the measurable difference we make, not the hours we bill.",
            icon: <Target size={20} strokeWidth={1.8} />,
          },
        ]}
      />
      <WhyChooseUsSection
        eyebrow="WHY ORGANIZATIONS CHOOSE US"
        title="The partner ambitious organizations rely on."
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
        features={[
          {
            title: "One partner, the whole stack.",
            description:
              "Strategy, technology, customer experience, and growth under one group.",
          },
          {
            title: "Speed without the sloppiness.",
            description:
              "We move fast while treating your core systems with care.",
          },
          {
            title: "Real platform expertise.",
            description:
              "Senior teams with deep Salesforce, cloud, and AI expertise.",
          },
          {
            title: "Partnership, not transactions.",
            description:
              "We build long-term relationships and align our success with yours.",
          },
        ]}
      />
      <GlobalPresenceSection
        title="Local insight. Global impact."
        description="Serving clients across industries and geographies with a consistent standard of excellence."
        regions={[
          { name: "North America" },
          { name: "EMEA" },
          { name: "APAC" },
          { name: "India" },
        ]}
      />
      <LeadershipSection
        title="Built by leaders."
        subtitle="Focused on impact."
        leaders={[
          {
            name: "Pratyush Nayak",
            role: "Founder & CEO",
            image:
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
            description:
              "Visionary leader focused on growth strategy, client success, and building high-performing teams.",
          },
          {
            name: "Prabhash Nayak",
            role: "Co-Founder & CTO",
            image:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
            description:
              "Technology leader passionate about engineering excellence, innovation, and scalable platforms.",
          },
        ]}
      />
    </main>
  );
}
