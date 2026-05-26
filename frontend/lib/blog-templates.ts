import type { BlogContentBlock, BlogServiceTag } from "@/types/blog";

export const SERVICE_TAGS: { value: BlogServiceTag; label: string; href: string }[] = [
  { value: "ninexFold", label: "NinexFold", href: "/ninexFoldServices" },
  { value: "ninexDevOps", label: "NinexDevOps", href: "/ninexdevOpsBrand" },
  { value: "ninexConnect", label: "NinexConnect", href: "/ninexConnectBrand" },
  { value: "ninexScale", label: "NinexScale", href: "/ninexscaleBrand" },
];

export interface BlogTemplate {
  id: string;
  name: string;
  title: string;
  excerpt: string;
  contentBlocks: BlogContentBlock[];
}

const placeholderImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80";
const placeholderImage2 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80";
const placeholderImage3 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80";

export const BLOG_TEMPLATES: BlogTemplate[] = [
  {
    id: "marketing-tips",
    name: "Marketing Tips",
    title: "5 Marketing Strategies That Drive Real Growth in 2025",
    excerpt:
      "Discover proven marketing tactics that help brands scale faster, connect with audiences, and maximize ROI in today's competitive landscape.",
    contentBlocks: [
      { type: "heading", level: 2, text: "Why Strategy Matters More Than Ever" },
      {
        type: "paragraph",
        text: "In a world of constant change, brands that invest in strategic marketing outperform those that rely on tactics alone. Here are five approaches that consistently deliver results.",
      },
      {
        type: "imageContent",
        imageUrl: placeholderImage,
        imageAlt: "Team collaboration",
        heading: "Data-Driven Decision Making",
        description:
          "The best marketing strategies start with data. By analyzing customer behavior, conversion funnels, and channel performance, you can allocate resources where they'll have the biggest impact.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "Key Strategies to Implement" },
      {
        type: "list",
        items: [
          "Build a strong brand identity that resonates with your target audience",
          "Leverage content marketing to establish thought leadership",
          "Use marketing automation to nurture leads at scale",
          "Optimize for search and social discovery",
          "Measure everything and iterate based on results",
        ],
        ordered: false,
      },
      {
        type: "carousel",
        images: [
          { url: placeholderImage, alt: "Marketing workspace", caption: "Strategy in action" },
          { url: placeholderImage2, alt: "Analytics dashboard", caption: "Data-driven insights" },
          { url: placeholderImage3, alt: "Team meeting", caption: "Collaborative planning" },
        ],
      },
      {
        type: "callout",
        text: "Ready to transform your marketing? NineXFold specializes in brand strategy and digital marketing that drives measurable growth.",
        variant: "info",
      },
    ],
  },
  {
    id: "tech-insights",
    name: "Tech Insights",
    title: "How Modern DevOps Enables Faster, More Reliable Software Delivery",
    excerpt:
      "Explore how DevOps practices, automation, and cloud-native architecture help engineering teams ship better software, faster.",
    contentBlocks: [
      { type: "heading", level: 2, text: "The DevOps Advantage" },
      {
        type: "paragraph",
        text: "DevOps isn't just a buzzword—it's a culture and set of practices that bridge development and operations, enabling teams to deliver value to customers more quickly and reliably.",
      },
      {
        type: "imageContent",
        imageUrl: placeholderImage2,
        imageAlt: "Code and infrastructure",
        heading: "Automation at Every Layer",
        description:
          "From CI/CD pipelines to infrastructure as code, automation reduces human error, speeds up deployments, and frees teams to focus on building features that matter.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "Core DevOps Practices" },
      {
        type: "list",
        items: [
          "Continuous Integration and Continuous Deployment (CI/CD)",
          "Infrastructure as Code (IaC)",
          "Containerization with Docker and Kubernetes",
          "Monitoring and observability",
          "Security as part of the pipeline (DevSecOps)",
        ],
        ordered: true,
      },
      {
        type: "quote",
        text: "The goal is to turn the deployment process into a boring, repeatable, and safe activity.",
        author: "Jez Humble, DevOps thought leader",
      },
      {
        type: "callout",
        text: "NineXDevOps helps teams adopt modern DevOps practices and build scalable, resilient systems.",
        variant: "success",
      },
    ],
  },
  {
    id: "growth-strategy",
    name: "Growth Strategy",
    title: "Scaling Your Business: A Framework for Sustainable Growth",
    excerpt:
      "Learn a structured approach to scaling your business—from customer acquisition to operational excellence and market expansion.",
    contentBlocks: [
      { type: "heading", level: 2, text: "The Growth Equation" },
      {
        type: "paragraph",
        text: "Sustainable growth comes from the right balance of acquisition, retention, and operational efficiency. This framework helps you identify where to focus next.",
      },
      {
        type: "imageContent",
        imageUrl: placeholderImage3,
        imageAlt: "Business growth",
        heading: "Customer-Centric Scaling",
        description:
          "The most successful scale-ups put the customer at the center of every decision. From support to product development, aligning your team around customer success drives retention and advocacy.",
        reverse: false,
      },
      { type: "heading", level: 2, text: "Growth Pillars" },
      {
        type: "list",
        items: [
          "Product-market fit and customer validation",
          "Efficient customer acquisition channels",
          "Strong retention and engagement metrics",
          "Operational scalability and automation",
          "Team and culture that can scale",
        ],
        ordered: false,
      },
      {
        type: "image",
        url: placeholderImage,
        alt: "Growth metrics",
        caption: "Track what matters to scale effectively",
      },
      {
        type: "callout",
        text: "NineXScale provides end-to-end support for businesses ready to scale—from setup to optimization and beyond.",
        variant: "info",
      },
    ],
  },
  {
    id: "customer-support",
    name: "Customer Support",
    title: "Building an Omnichannel Customer Experience That Converts",
    excerpt:
      "Today's customers expect to reach you anywhere—chat, email, phone, social. Here's how to build an omnichannel support strategy that delights and converts.",
    contentBlocks: [
      { type: "heading", level: 2, text: "The Omnichannel Imperative" },
      {
        type: "paragraph",
        text: "Customers don't think in channels—they think in outcomes. An omnichannel approach ensures a consistent, seamless experience whether they reach out via chat, email, or social media.",
      },
      {
        type: "imageContent",
        imageUrl: placeholderImage,
        imageAlt: "Customer support team",
        heading: "Unified Customer View",
        description:
          "Integrating all touchpoints into a single view helps support teams resolve issues faster and provide personalized assistance. Context from one channel carries over to the next.",
        reverse: true,
      },
      { type: "heading", level: 2, text: "Best Practices" },
      {
        type: "list",
        items: [
          "Implement a centralized helpdesk or CRM",
          "Train agents on all channels",
          "Set clear SLAs and response time goals",
          "Use AI to triage and route inquiries",
          "Gather feedback and iterate continuously",
        ],
        ordered: false,
      },
      {
        type: "callout",
        text: "NineXConnect delivers BPO, omnichannel support, and customer engagement solutions that scale.",
        variant: "success",
      },
    ],
  },
];
