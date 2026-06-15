import SubPageHero from "@/components/sections/common/SubPageHero";
import OurVision from "../OurVision";
import ValuesSection from "../ValuesSection";
import ClientSuccessMetricsSection from "../ClientSuccessMetricsSection";
import { AlertTriangle, GraduationCap, TrendingUp } from "lucide-react";
import WhatWeDoSection from "../WhatWeDo";

const metricGroups = [
  {
    icon: <AlertTriangle size={22} strokeWidth={1.5} />,
    title: "Challenge",
    items: [
      ["DROPOFF", "low learner engagement and completion"],
      ["MANUAL", "grading and administrative overhead"],
      ["GENERIC", "one-pace-fits-all instruction"],
      ["SILOED", "content and data across tools"],
      ["BLIND", "no insight into learner progress"],
    ],
    footerTitle: "LEARNING PAIN",
    footerText: "DISENGAGED. MANUAL.",
    showArrow: true,
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Solution",
    items: [
      ["LMS", "Learning platforms & course delivery"],
      ["ADAPT", "Adaptive, personalised learning paths"],
      ["AI", "Automated assessment & feedback"],
      ["DATA", "Learning analytics & progress dashboards"],
      ["CONTENT", "Interactive content & authoring tools"],
    ],
    footerTitle: "IMPLEMENTED SYSTEMS",
    footerText: "ENGAGING. ADAPTIVE.",
    showArrow: false,
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Results",
    items: [
      ["+40%", "improvement in completion rates"],
      ["+30%", "gain in learning outcomes"],
      ["FASTER", "grading and feedback loops"],
      ["LIVE", "real-time progress visibility"],
      ["SCALE", "thousands of learners served"],
      ["ENGAGED", "higher learner retention"],
    ],
    footerTitle: "LEARNING OUTCOMES",
    footerText: "MEASURABLE. SCALABLE.",
    showArrow: false,
  },
];

const cards = [
  { title: "Learning Platforms & Course Delivery", highlight: "Deliver courses that scale to thousands without breaking", description: "We build learning platforms and course-delivery systems that host, sequence, and serve content reliably to learners anywhere — the engaging, scalable foundation modern education runs on." },
  { title: "Adaptive & Personalised Learning", highlight: "Meet every learner at their own pace", description: "We implement adaptive learning paths that adjust difficulty and sequencing to each learner's progress — replacing one-pace-fits-all instruction with personalised journeys that keep everyone challenged and supported." },
  { title: "Automated Assessment & Feedback", highlight: "Grade instantly, teach continuously", description: "We deploy automated assessment and feedback systems that evaluate work and return guidance in real time — freeing educators from grading overhead and giving learners the immediate feedback that drives improvement." },
  { title: "Learning Analytics", highlight: "See exactly where every learner stands", description: "We build learning-analytics and progress dashboards that surface engagement, mastery, and risk in real time — giving educators and institutions the insight to intervene early and improve outcomes." },
  { title: "Interactive Content & Authoring", highlight: "Turn passive material into active learning", description: "We deliver interactive content and authoring tools that let educators build rich, engaging lessons — replacing static material with interactive experiences that hold attention and deepen understanding." },
];

export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop"
        headline="TEACH. ENGAGE. ASSESS. SCALE."
        subheadline="Learning platforms, content, and analytics that improve outcomes and scale education.
We replace disengaging, manual, one-pace-fits-all education with adaptive, data-driven systems — personalising learning, automating assessment, and making progress visible at scale."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={["LEARNING", "THAT", "ADAPTS TO", "EVERYONE."]}
        title="Education that meets every learner where they are."
        description="Every learner is different, yet most education is built for the average. We cut through that limitation and implement the platforms that personalise it — adaptive learning, automated assessment, rich interactive content, and analytics — so instruction adapts to the learner instead of the other way around, and outcomes improve at scale."
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
      />
      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every learning system we build."
        description="Education technology should expand access and improve real outcomes, not just digitise the classroom. Every system we build is grounded in these commitments so what we deploy is learner-first, accessible, and genuinely impactful."
        quote="Outcomes Over Activity"
        quoteDescription="Logins and clicks are not learning. We build for real outcomes — measuring whether learners actually understand and progress — and design every system to be accessible and learner-first, because education only matters if it works for the people in it."
        tags={["Learner-First", "Accessibility", "Impact"]}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
      />
      <WhatWeDoSection cards={cards} />
      <ClientSuccessMetricsSection metricGroups={metricGroups} />
    </>
  );
}