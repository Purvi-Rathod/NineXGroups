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
      ["10,000+", "IoT sensors deployed across production operations"],
      ["45", "production lines connected through real-time monitoring"],
      ["95%", "failure prediction accuracy through ML models"],
      ["Industry\n4.0", "lighthouse facility recognition by WEF"],
    ],
    footerTitle: "INDUSTRIAL IOT TRANSFORMATION",
    footerText: "PREDICTIVE. CONNECTED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Operational Results",
    items: [
      ["40%", "reduction in unplanned downtime"],
      ["$32M", "annual savings from predictive maintenance"],
      ["60%", "faster quality inspection processes"],
      ["$80M", "total annual savings across operations"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "INTELLIGENT. EFFICIENT.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Technology Infrastructure",
    items: [
      ["AWS\nIoT", "enterprise sensor data ingestion platform"],
      ["Computer\nVision", "automated quality inspection system"],
      ["Digital\nTwin", "real-time production simulation and optimisation"],
      ["Real-Time\nDashboards", "live operational visibility for plant management"],
    ],
    footerTitle: "SMART MANUFACTURING",
    footerText: "AUTOMATED. SCALABLE.",
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
    title: "Edge Computing Infrastructure",
    highlight:
      "Process data where it is generated — not after a round trip to the cloud",
    description:
      "We design and deploy edge computing infrastructure using AWS Greengrass, Azure IoT Edge, and custom edge platforms — processing sensor data, running ML inference, executing control logic, and storing operational data at the edge of your network where latency, bandwidth, and connectivity requirements make cloud-only processing impractical. Edge computing is essential for manufacturing automation, autonomous vehicles, remote operations, and any use case where millisecond response time is a requirement.",
  },

  {
    title: "Smart Building & Facilities Management",
    highlight:
      "Connect every building system into one intelligent facilities management platform",
    description:
      "We implement smart building IoT platforms covering HVAC and environmental monitoring, energy management and optimisation, occupancy sensing and space utilisation, security system integration, predictive maintenance for building equipment, and the sustainability reporting infrastructure that tracks carbon, energy, and water consumption against corporate sustainability targets.",
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
        headline="CRM IMPLEMENTATION & INTEGRATION"
        subheadline="Enterprise CRM implementation and integration services that unify sales, marketing, service, and operational data into a single source of customer truth.
                      We design and implement CRM solutions using Salesforce, Microsoft Dynamics 365, HubSpot, Zoho, and custom platforms — integrating CRM systems with ERP, supply chain, marketing automation, e-commerce, and operational systems to deliver seamless customer experiences and data-driven business outcomes. Sales, service, marketing, and operations teams around the world run on the CRM platforms we implement.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "CONNECTED.",
          "SECURED.",
          "INTELLEGENCE",
          "WINS.",
        ]}
        title="A future where every physical asset in every enterprise is continuously monitored, continuously optimised, and continuously improving — without human intervention for anything the machines can manage themselves."
        description="The physical world is becoming digital. Every machine, every vehicle, every building, and every product is becoming a data source. The enterprises that build the infrastructure to capture, process, and act on that data will make better operational decisions, prevent more failures, waste fewer resources, and improve faster than those that are still managing physical operations without digital intelligence."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every IoT system we architect."
        description="IoT infrastructure built without principles generates data nobody acts on and devices nobody can secure. Every engagement we take on is grounded in these four commitments to ensure what we build is actionable, resilient, secure by design, and proven before it scales."
        quote="Sensor Data is Only Valuable at the Point of Action"
        quoteDescription="Raw sensor readings are not insight. We build the complete data pipeline — from sensor to model to automated action or human alert — ensuring every data point captured drives a specific operational decision."
        tags={[
          "Action",
          "Intelligence",
          "Outcome",
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