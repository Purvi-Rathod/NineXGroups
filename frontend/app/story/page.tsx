"use client";

import Hero from "@/components/pages/Hero";
import OurStorySection from "@/components/sections/OurStorySection";
import WhyChooseUsSection from "@/components/pages/WhyChooseUsSection";
import ProblemSection from "@/components/sections/Problemsection";
import JourneySection from "@/components/sections/Journeysection";
import MissionSection from "@/components/sections/Missionsection";
import VisionSection from "@/components/sections/Visionsection";

export default function About() {
  return (
    <main className="bg-white">
      <Hero
        eyebrow="Our Story & Mission"
        title="Our Story "
        highlightedText="& Mission"
        subtitle="Why we built NineXGroup, and what we are here to do."
        website="ninex-group.com"
        foundedYear="2024"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop"
        description=""
      />
      <OurStorySection />
      <ProblemSection />
      <JourneySection />
      <MissionSection />
      <VisionSection />
      <WhyChooseUsSection
        eyebrow="What We Believe"
        title="What We Believe"
        image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop"
        features={[
          {
            title: "Results are the only proof. ",
            description:
              "A strategy is worth nothing until it changes a number that matters to the business.",
          },
          {
            title: "Integration beats assembly. ",
            description:
              "A connected team that designs and builds together will always beat a chain of vendors stitched together by a project manager.",
          },
          {
            title: "Build for the business you will be. ",
            description:
              "We architect for where you are going, not just where you are, so the work does not become a constraint a year later.",
          },
          {
            title: "Trust is earned in the details",
            description:
              "How we handle the small things, your data, your deadlines, your hard conversations, is how we earn the right to the big things.",
          },
        ]}
      />
      
    </main>
  );
}
