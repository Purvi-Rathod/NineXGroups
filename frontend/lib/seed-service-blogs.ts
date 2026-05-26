import type { BlogContentBlock, BlogServiceTag } from "@/types/blog";

const img1 = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80";
const img2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
const img3 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";
const img4 = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80";
const img5 = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";
const img6 = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80";
const img7 = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80";
const img8 = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80";

export interface SeedBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  contentBlocks: BlogContentBlock[];
  coverImageUrl: string;
  author: string;
  published: boolean;
  tags: BlogServiceTag[];
}

export const SERVICE_BLOG_SEED: SeedBlogPost[] = [
  {
    slug: "why-brand-strategy-matters-2025",
    title: "Why Brand Strategy Matters More Than Ever in 2025",
    excerpt:
      "A strong brand strategy isn't optional—it's the foundation of how customers see you. Learn how NineXFold helps businesses build clarity, consistency, and connection.",
    coverImageUrl: img1,
    author: "NineX Team",
    published: true,
    tags: ["ninexFold"],
    contentBlocks: [
      { type: "heading", level: 2, text: "Brand Strategy: More Than a Logo" },
      {
        type: "paragraph",
        text: "In a crowded market, your brand is how you stand out. Brand strategy defines your position, voice, and the experience you deliver—so every touchpoint reinforces who you are and why you matter.",
      },
      {
        type: "imageContent",
        imageUrl: img1,
        imageAlt: "Brand strategy workshop",
        heading: "Clarity Before Creativity",
        description:
          "NineXFold starts with strategy: understanding your audience, competitors, and differentiators. From there we build identity, messaging, and campaigns that drive recognition and trust.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "What a Solid Brand Strategy Covers" },
      {
        type: "list",
        items: [
          "Brand positioning and value proposition",
          "Visual identity and design system",
          "Messaging and tone of voice",
          "Customer journey and experience mapping",
          "Guidelines for consistent execution",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXFold offers end-to-end brand strategy and development so your brand works as hard as your business.",
        variant: "info",
      },
    ],
  },
  {
    slug: "integrated-marketing-seo-social-paid",
    title: "How to Integrate SEO, Social Media, and Paid Advertising for Maximum Reach",
    excerpt:
      "SEO, social, and paid ads work better together. Here's how to align your channels so you attract, engage, and convert audiences at scale—with NineXFold's integrated approach.",
    coverImageUrl: img2,
    author: "NineX Team",
    published: true,
    tags: ["ninexFold"],
    contentBlocks: [
      { type: "heading", level: 2, text: "One Audience, Many Channels" },
      {
        type: "paragraph",
        text: "Today's buyers discover brands through search, social feeds, and targeted ads. Treating each channel in isolation leaves reach and conversion on the table. An integrated strategy ensures consistent messaging and data-driven optimization across all three.",
      },
      {
        type: "imageContent",
        imageUrl: img2,
        imageAlt: "Marketing analytics dashboard",
        heading: "SEO + Social + Paid: How They Fit",
        description:
          "SEO builds long-term visibility and trust. Social builds community and engagement. Paid fills gaps and accelerates results. Together they create a funnel that captures interest at every stage.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "Integration Best Practices" },
      {
        type: "list",
        items: [
          "Use one set of keywords and themes across SEO and paid",
          "Repurpose top-performing content for social and ads",
          "Track attribution across channels in a single view",
          "Test creative and copy across social and paid in parallel",
          "Let data from one channel inform the others",
        ],
        ordered: true,
      },
      {
        type: "quote",
        text: "Integrated marketing isn't about doing everything—it's about making every channel support the same story.",
        author: "NineXFold",
      },
      {
        type: "callout",
        text: "NineXFold delivers SEO & SEM, social media marketing, and paid advertising as a unified growth engine.",
        variant: "success",
      },
    ],
  },
  {
    slug: "devops-cloud-reliable-software-delivery",
    title: "How Modern DevOps and Cloud Enable Faster, More Reliable Software Delivery",
    excerpt:
      "DevOps and cloud-native practices help teams ship better software, faster. Explore how NineXDevOps brings automation, reliability, and scale to your engineering organization.",
    coverImageUrl: img3,
    author: "NineX Team",
    published: true,
    tags: ["ninexDevOps"],
    contentBlocks: [
      { type: "heading", level: 2, text: "The DevOps and Cloud Advantage" },
      {
        type: "paragraph",
        text: "DevOps bridges development and operations with automation, culture, and tooling. Combined with cloud infrastructure, teams can deploy frequently, recover quickly, and focus on building features that matter.",
      },
      {
        type: "imageContent",
        imageUrl: img3,
        imageAlt: "Cloud and DevOps infrastructure",
        heading: "Automation at Every Layer",
        description:
          "From CI/CD pipelines to infrastructure as code, automation reduces errors and cycle time. NineXDevOps helps you adopt practices like continuous integration, containerization, and observability so releases become predictable and safe.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "Core Practices We Enable" },
      {
        type: "list",
        items: [
          "Continuous Integration and Continuous Deployment (CI/CD)",
          "Infrastructure as Code (IaC) and cloud provisioning",
          "Containerization with Docker and Kubernetes",
          "Monitoring, logging, and observability",
          "Security and compliance in the pipeline (DevSecOps)",
        ],
        ordered: true,
      },
      {
        type: "callout",
        text: "NineXDevOps helps teams adopt modern DevOps and cloud practices for scalable, resilient systems.",
        variant: "info",
      },
    ],
  },
  {
    slug: "scalable-web-mobile-applications",
    title: "Building Scalable Web and Mobile Applications That Grow With You",
    excerpt:
      "Great products need solid architecture from day one. Learn how NineXDevOps approaches full-stack development and web/mobile builds so your apps scale with your business.",
    coverImageUrl: img4,
    author: "NineX Team",
    published: true,
    tags: ["ninexDevOps"],
    contentBlocks: [
      { type: "heading", level: 2, text: "From Idea to Scalable Product" },
      {
        type: "paragraph",
        text: "Whether you need a web app, a mobile app, or both, the right architecture and practices from the start prevent costly rewrites later. Full-stack and web/mobile development at NineXDevOps is built with performance, security, and scale in mind.",
      },
      {
        type: "imageContent",
        imageUrl: img4,
        imageAlt: "Web and mobile development",
        heading: "Full-Stack and Cross-Platform",
        description:
          "We build responsive web applications and native or cross-platform mobile apps. Our teams use modern stacks and follow best practices so your product is maintainable and ready to grow.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "What We Deliver" },
      {
        type: "list",
        items: [
          "Web applications (React, Next.js, and more)",
          "Mobile apps (iOS, Android, cross-platform)",
          "APIs and backend systems",
          "Performance and security hardening",
          "Ongoing maintenance and iteration",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXDevOps offers full-stack development and web/mobile development tailored to your product goals.",
        variant: "success",
      },
    ],
  },
  {
    slug: "omnichannel-customer-experience-bpo",
    title: "Building an Omnichannel Customer Experience That Delights and Converts",
    excerpt:
      "Customers expect to reach you on any channel and get a consistent experience. See how NineXConnect combines omnichannel support and BPO to deliver seamless, scalable customer engagement.",
    coverImageUrl: img5,
    author: "NineX Team",
    published: true,
    tags: ["ninexConnect"],
    contentBlocks: [
      { type: "heading", level: 2, text: "The Omnichannel Imperative" },
      {
        type: "paragraph",
        text: "Customers don't think in channels—they think in outcomes. Omnichannel support means one consistent experience whether they contact you via chat, email, phone, or social. NineXConnect helps you unify touchpoints and scale with BPO expertise.",
      },
      {
        type: "imageContent",
        imageUrl: img5,
        imageAlt: "Customer support team",
        heading: "Unified View, Consistent Service",
        description:
          "When every channel is connected, agents have full context and customers don't repeat themselves. We help you implement the tools and processes so support feels seamless and efficient.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "What Omnichannel + BPO Covers" },
      {
        type: "list",
        items: [
          "Centralized helpdesk and CRM integration",
          "Chat, email, phone, and social in one flow",
          "Trained BPO teams aligned with your brand",
          "SLAs and quality assurance",
          "Analytics to improve satisfaction and efficiency",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXConnect delivers omnichannel support and BPO so your customer experience scales without losing quality.",
        variant: "info",
      },
    ],
  },
  {
    slug: "lead-generation-telesales-revenue",
    title: "Turning Conversations into Revenue: Lead Generation and Tele-Sales That Work",
    excerpt:
      "Quality leads and skilled tele-sales teams are the engine of B2B growth. Learn how NineXConnect's lead generation and tele-sales services help you fill the pipeline and close more deals.",
    coverImageUrl: img6,
    author: "NineX Team",
    published: true,
    tags: ["ninexConnect"],
    contentBlocks: [
      { type: "heading", level: 2, text: "Lead Gen and Tele-Sales as Growth Levers" },
      {
        type: "paragraph",
        text: "Consistent pipeline and confident sales conversations are what separate growing companies from the rest. NineXConnect combines data-driven lead generation with trained tele-sales teams so you can focus on product and strategy while revenue scales.",
      },
      {
        type: "imageContent",
        imageUrl: img6,
        imageAlt: "Sales and lead generation",
        heading: "From First Touch to Closed Deal",
        description:
          "We help you define ideal customer profiles, build targeted lead lists, and run outbound and inbound campaigns. Our tele-sales teams are trained on your messaging and processes to book meetings and close deals.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "What We Offer" },
      {
        type: "list",
        items: [
          "Lead generation and qualification",
          "Appointment setting and scheduling",
          "Tele-sales and inside sales",
          "Market research and list building",
          "CRM integration and reporting",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXConnect provides lead generation, appointment scheduling, and tele-sales as part of its customer engagement suite.",
        variant: "success",
      },
    ],
  },
  {
    slug: "business-setup-scaling-framework",
    title: "Scaling Your Business: A Framework for Setup, Growth, and Optimization",
    excerpt:
      "Scaling isn't just about more customers—it's about the right structure, processes, and support. Discover how NineXScale helps businesses set up, grow, and optimize for long-term success.",
    coverImageUrl: img7,
    author: "NineX Team",
    published: true,
    tags: ["ninexScale"],
    contentBlocks: [
      { type: "heading", level: 2, text: "The Scaling Framework" },
      {
        type: "paragraph",
        text: "Sustainable growth requires solid foundations: business setup, digital infrastructure, and clear processes. NineXScale supports you from initial setup through ongoing optimization so you can scale without breaking.",
      },
      {
        type: "imageContent",
        imageUrl: img7,
        imageAlt: "Business growth and scaling",
        heading: "Setup, Scale, Optimize",
        description:
          "We help with business setup and compliance, digital infrastructure development, and ongoing support. Whether you're entering new markets or streamlining operations, our framework keeps you on track.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "Pillars of Scale" },
      {
        type: "list",
        items: [
          "Business setup and market entry",
          "Digital infrastructure and systems",
          "Manufacturing and operations support",
          "Marketing and branding for growth",
          "Ongoing support and optional exit/scale assistance",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXScale provides end-to-end support for businesses ready to scale—from setup to optimization and beyond.",
        variant: "info",
      },
    ],
  },
  {
    slug: "sales-enablement-local-scaling-growth",
    title: "Sales Enablement and Local Scaling: Growing Revenue in New Markets",
    excerpt:
      "Expanding into new regions requires more than a good product—it requires sales readiness and local execution. See how NineXScale's sales enablement and local scaling services help you win in new territories.",
    coverImageUrl: img8,
    author: "NineX Team",
    published: true,
    tags: ["ninexScale"],
    contentBlocks: [
      { type: "heading", level: 2, text: "Sales Enablement and Local Execution" },
      {
        type: "paragraph",
        text: "New markets need trained teams, clear playbooks, and local know-how. NineXScale combines sales enablement—playbooks, training, and tools—with local scaling support so you can replicate success in new regions.",
      },
      {
        type: "imageContent",
        imageUrl: img8,
        imageAlt: "Sales enablement and scaling",
        heading: "From Playbooks to Territory",
        description:
          "We help you optimize sales processes, create playbooks and enablement materials, and plan regional expansion. Our approach ensures your team has the structure and support to close deals and grow market share.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "What We Deliver" },
      {
        type: "list",
        items: [
          "Sales process optimization and pipeline design",
          "Sales training, playbooks, and enablement",
          "Regional market entry and territory planning",
          "Ongoing support and optimization",
          "Optional exit and scale assistance",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXScale's sales enablement and local scaling services help you grow revenue and expand into new markets with confidence.",
        variant: "success",
      },
    ],
  },
];
