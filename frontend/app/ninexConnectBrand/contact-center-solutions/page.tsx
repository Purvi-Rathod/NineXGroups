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
    title: "Contact Center Transformation",
    items: [
      ["500+", "agents supported across multiple regions"],
      ["24/7", "AI-powered customer engagement"],
      ["95%", "first-contact resolution accuracy"],
      ["Omni-\nChannel", "unified customer communication platform"],
    ],
    footerTitle: "CUSTOMER EXPERIENCE",
    footerText: "CONNECTED. INTELLIGENT.",
    showArrow: true,
  },

  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Operational Results",
    items: [
      ["45%", "reduction in average handling time"],
      ["60%", "faster customer response times"],
      ["35%", "lower operational support costs"],
      ["92%", "customer satisfaction score"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "AUTOMATED. SCALABLE.",
    showArrow: false,
  },

  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Technology Stack",
    items: [
      ["AI\nAssistants", "automated customer support"],
      ["Workforce\nManagement", "agent scheduling and optimisation"],
      ["Speech\nAnalytics", "real-time conversation intelligence"],
      ["Cloud\nContact Center", "unified omnichannel operations"],
    ],
    footerTitle: "MODERN SUPPORT",
    footerText: "EFFICIENT. RELIABLE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "IoT Platform Architecture & Implementation",
    highlight:
      "The complete connected device infrastructure from sensor to cloud analytics",
    description:
      "We design and implement enterprise IoT platforms using AWS IoT, Azure IoT Hub, Google Cloud IoT, PTC ThingWorx, Siemens MindSphere, and custom architectures — covering device connectivity, protocol management across MQTT, AMQP, OPC-UA, and Modbus, data ingestion at scale, device management, security, and the cloud connectivity that makes every sensor reading analytically accessible within seconds of capture.",
  },

  {
    title: "Industrial IoT for Manufacturing",
    highlight:
      "Smart factory implementation that transforms operational data into operational excellence",
    description:
      "We implement Industrial IoT systems for manufacturing covering production monitoring, OEE measurement, quality sensor integration, energy consumption monitoring, environmental compliance tracking, and the real-time operational dashboards that give plant managers immediate visibility into every production metric. Industry 4.0 manufacturing is not a concept — it is a set of specific technologies we implement to specific operational outcomes.",
  },

  {
    title: "Predictive Maintenance Systems",
    highlight:
      "Prevent equipment failure before it happens — using the data the equipment itself generates",
    description:
      "We build predictive maintenance platforms covering vibration analysis, thermal monitoring, motor current signature analysis, acoustic emission monitoring, and the ML models trained on equipment sensor data that predict failure hours or days before it occurs — reducing unplanned downtime by 50%, maintenance costs by 30%, and spare parts inventory by 40% through the shift from reactive and scheduled maintenance to condition-based prediction.",
  },

  {
    title: "Digital Twin Development",
    highlight:
      "A real-time virtual replica of every physical asset, process, and facility you operate",
    description:
      "We design and build digital twin implementations — from individual asset twins for critical equipment through process twins for production lines and facility twins for complete buildings and campuses — using Azure Digital Twins, AWS IoT TwinMaker, and custom platforms. Digital twins enable the simulation, optimisation, and predictive analysis of physical operations without the cost and risk of experimenting on the physical assets themselves.",
  },

  {
    title: "AI-Powered Agent Assist & Automation",
    highlight:
      "Equip agents with real-time guidance, automated responses, and intelligent routing to resolve issues faster and more effectively.",
    description:
      "We deploy AI-powered agent-assist platforms that analyse customer intent in real-time, surface relevant knowledge base articles, suggest optimal responses, automate repetitive tasks, and intelligently route complex issues to the right specialists. These systems reduce handle times, improve first-contact resolution, ensure consistent service quality, and free agents to focus on high-value interactions.",
  },

  {
    title: "Unified Omnichannel Engagement Platforms",
    highlight:
      "Deliver seamless customer experiences across all channels using a single, unified platform.",
    description:
      "We design and implement omnichannel contact center platforms that integrate voice, email, chat, SMS, social media, messaging apps, and emerging channels into one unified agent and customer experience — using platforms like Genesys Cloud CX, NICE CXone, Talkdesk, Five9, and Amazon Connect. These platforms provide consistent service delivery, contextual awareness across channels, intelligent routing, integrated analytics, and the flexibility to adapt to evolving customer preferences.",
  },

  {
    title: "Supply Chain Visibility & Asset Tracking",
    highlight:
      "Know where every asset, every shipment, and every vehicle is at every moment",
    description:
      "We implement supply chain visibility platforms and asset tracking systems using GPS, RFID, BLE, and cellular connectivity — providing real-time location, condition, and custody information for every asset in your supply chain. Track vehicles, shipping containers, high-value equipment, pharmaceutical cold chain, and any other asset where location and condition visibility has commercial or compliance value.",
  },

  {
    title: "IoT Data Platform & Analytics",
    highlight:
      "Transform billions of sensor readings into operational intelligence",
    description:
      "We build the IoT data platforms that store, process, and analyse the massive data volumes that connected device networks generate — using time-series databases including InfluxDB and TimescaleDB, streaming analytics with Apache Kafka and Flink, and the BI and AI layers that transform raw telemetry into operational dashboards, predictive models, and automated control decisions.",
  },

  {
    title: "IoT Security Architecture",
    highlight:
      "Secure every connected device in your network — at the scale IoT deployments demand",
    description:
      "We implement IoT security frameworks covering device identity and authentication, encrypted communications, secure firmware update mechanisms, network segmentation, anomaly detection, and the vulnerability management processes that keep thousands or millions of connected devices secure against the expanding attack surface they create. IoT security is fundamentally different from IT security and requires specialised architecture and tooling.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/Connect-bg.png"
        headline="CONTACT CENTER SOLUTIONS"
        subheadline="Next-generation contact center platforms that combine the power of AI, cloud, and automation to transform customer service and drive measurable business results. We design, deploy, and manage contact centers that deliver exceptional customer experiences while reducing costs and improving agent productivity — across all channels and all engagement models."
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ALWAYS.",
          "ON.",
          "24/7/365",
          "ALWAYS READY.",
        ]}
        title="Transforming every customer conversation from a support interaction into a relationship-building moment — using intelligent automation, unified omnichannel experiences, and data-driven insights that improve service quality while reducing operational cost."
        description="Contact centers are no longer just cost centres — they are relationship centres, revenue drivers, and essential business differentiators. The enterprises that invest in modern platforms and intelligent automation win loyalty, improve retention, and create consistent, on-brand experiences across every touchpoint."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles that power every solution we deliver."
        description="Contact center solutions built without principles create fragmented experiences, agent frustration, and unresolved customer issues. Every project we undertake is grounded in these commitments to ensure what we build is scalable, secure, measurable, and designed for continuous improvement."
        quote="Every Interaction Shapes the Relationship"
        quoteDescription="A single unresolved issue can erode months of customer loyalty. We design and implement contact center solutions where every interaction is an opportunity to build trust, demonstrate value, and strengthen the customer relationship."
        tags={[
          "Relationships",
          "Efficiency",
          "Results",
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