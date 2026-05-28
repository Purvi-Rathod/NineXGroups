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
      ["45", "countries unified through one SAP S/4HANA platform"],
      ["200M+", "records cleansed and migrated globally"],
      ["5,000", "integrations connected across enterprise systems"],
      ["25,000", "employees supported through transformation"],
    ],
    footerTitle: "SAP S/4HANA TRANSFORMATION",
    footerText: "GLOBAL. UNIFIED.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Business Results",
    items: [
      ["3 Days", "month-end close reduced from 15 days"],
      ["$80M", "annual operational cost savings achieved"],
      ["95%", "supply chain visibility across total spend"],
      ["$200M", "working capital reduction through inventory visibility"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "CONNECTED. EFFICIENT.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Enterprise Infrastructure",
    items: [
      ["SAP\nS/4HANA", "global ERP template across all business units"],
      ["Finance +\nSupply Chain", "real-time operational visibility worldwide"],
      ["Global\nData Migration", "enterprise-wide cleansing and consolidation"],
      ["15-Month", "ROI achieved across programme investment"],
    ],
    footerTitle: "ONE VERSION OF THE TRUTH",
    footerText: "REAL-TIME. ENTERPRISE SCALE.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "ERP System Selection & Business Case",
    highlight:
      "Choose the right system for your business before committing to a multi-year implementation",
    description:
      "We conduct structured ERP selection programmes covering requirements gathering, vendor evaluation, total cost of ownership modelling, implementation risk assessment, and reference customer analysis — producing a vendor-independent recommendation backed by a business case that leadership can approve with confidence. The wrong ERP choice costs enterprises 3-5x more than a structured selection process.",
  },

  {
    title: "SAP Implementation & Optimisation",
    highlight:
      "The world's most powerful ERP platform, implemented to deliver its full commercial potential",
    description:
      "We implement SAP S/4HANA, SAP Business Suite, and SAP ECC across Finance (FI/CO), Supply Chain (MM/SD/PP/WM), Manufacturing (PP/QM), HR (HCM/SuccessFactors), and Analytics (SAC) — with business process redesign, configuration, custom development where required, data migration, integration, testing, training, and hypercare support. Every SAP engagement is delivered by certified SAP consultants with deep industry-specific experience.",
  },

  {
    title: "Oracle ERP Cloud Implementation",
    highlight:
      "Cloud-native ERP that modernises finance, procurement, and supply chain simultaneously",
    description:
      "We implement Oracle Fusion Cloud ERP, Oracle SCM Cloud, Oracle HCM Cloud, and Oracle EPM Cloud — covering Financials, Procurement, Project Management, Supply Chain, Manufacturing, HR, and Planning — with full Oracle Cloud migration support for organisations moving from Oracle E-Business Suite or PeopleSoft to the cloud-native platform that replaces them.",
  },

  {
    title: "NetSuite Implementation",
    highlight:
      "The cloud ERP platform that growing enterprises use to outgrow spreadsheets and fragmented systems",
    description:
      "We implement Oracle NetSuite across Financials, Inventory and Warehouse Management, Order Management, Manufacturing, CRM, and SuiteCommerce — with business process design, configuration, custom SuiteScript development, integration with Shopify, Salesforce, and payment platforms, data migration, and the training that ensures your team exploits every NetSuite capability from day one.",
  },

  {
    title: "Microsoft Dynamics 365 ERP",
    highlight:
      "ERP that maximises your existing Microsoft investment across finance, operations, and commerce",
    description:
      "We implement Dynamics 365 Finance, Dynamics 365 Supply Chain Management, Dynamics 365 Commerce, and Dynamics 365 Human Resources — with Power Platform integration for custom apps and automation, Azure integration, Microsoft 365 connectivity, and the familiar user experience that drives higher adoption rates than any other enterprise ERP platform.",
  },

  {
    title: "Workday Implementation",
    highlight:
      "Finance and HR unified on one cloud platform built for the modern enterprise",
    description:
      "We implement Workday Financial Management and Workday Human Capital Management — covering General Ledger, Accounts Payable and Receivable, Procurement, Planning, Recruitment, Talent Management, Payroll, Benefits Administration, and People Analytics — with the business process design, configuration, integration, data migration, and change management that Workday requires to deliver its full transformational value.",
  },

  {
    title: "ERP Data Migration",
    highlight:
      "Move every record, every transaction, every history — without losing a single one",
    description:
      "We manage complex ERP data migration programmes — covering legacy system data extraction, data quality assessment, cleansing and transformation, mapping to target data model, validation testing, parallel run support, and cutover execution — using ETL tools including Informatica, Talend, and native platform loaders. Clean data going into your ERP is the foundation of every operational and financial report that comes out of it.",
  },

  {
    title: "ERP Integration Architecture",
    highlight:
      "Connect your ERP to every other enterprise system it needs to function as a true operational backbone",
    description:
      "We design and build ERP integrations covering CRM synchronisation, e-commerce platform connectivity, banking and payment system integration, manufacturing execution system interfaces, warehouse management system integration, EDI with suppliers and customers, payroll provider connectivity, and reporting and analytics platform feeds — using MuleSoft, Dell Boomi, Azure Integration Services, and custom API development.",
  },

  {
    title: "ERP Process Redesign & Optimisation",
    highlight:
      "Don't just implement the ERP — use the implementation to redesign your processes for maximum efficiency",
    description:
      "We provide business process redesign services that use the ERP implementation as the catalyst to eliminate inefficiencies, standardise processes across business units, implement industry best practices, design approval and control frameworks, and build the operational governance model that maximises the ERP investment. Enterprises that redesign processes during ERP implementation achieve 40% greater efficiency gains than those that replicate existing processes in a new system.",
  },

  {
    title: "ERP Upgrade & Modernisation",
    highlight:
      "Move from legacy ERP versions to modern cloud platforms without business disruption",
    description:
      "We manage ERP upgrade and migration projects — from SAP ECC to S/4HANA, Oracle EBS to Oracle Fusion, and on-premises Dynamics to Dynamics 365 Cloud — with technical conversion, custom code remediation, data archiving, testing programmes, and the parallel run and cutover management that ensures business continuity throughout the transition.",
  },

  {
    title: "ERP Training & Change Management",
    highlight:
      "The investment that determines whether your ERP delivers its promised ROI",
    description:
      "We design and deliver comprehensive ERP training and change management programmes — covering impact assessment, communication planning, role-based training design, super-user development, e-learning content creation, and post-go-live adoption monitoring — ensuring every employee understands the new processes, can operate the new system confidently, and embraces the change as an improvement rather than a disruption.",
  },

  {
    title: "Post-Implementation Support & Continuous Improvement",
    highlight:
      "Protect and extend your ERP investment long after go-live",
    description:
      "We provide post-implementation support services covering application management, system monitoring, performance optimisation, enhancement development, user support, and continuous improvement programmes — ensuring your ERP stays aligned to evolving business requirements, takes advantage of new platform capabilities as they are released, and delivers improving commercial returns over its full operational lifetime.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="UNIFY. STREAMLINE. OPTIMISE. SCALE."
        subheadline="Enterprise resource planning systems that unify your operations, finance, supply chain, HR, and manufacturing into one integrated platform — eliminating the data silos, manual processes, and operational inefficiencies that cost enterprise businesses millions annually.
                      We implement SAP, Oracle, NetSuite, Microsoft Dynamics, and Workday — covering the complete implementation lifecycle from system selection and business process redesign through data migration, configuration, integration, testing, go-live, and post-implementation support. Every ERP engagement is anchored to measurable operational outcomes: cost reduction, efficiency improvement, decision speed, and the unified operational visibility that enterprise leadership demands.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "ONE SYSTEM.",
          "EVERY",
          "OPERATION.",
          "FULL VISIBILITY.",
        ]}
        title="Enterprise operations running on a single integrated platform — where every financial transaction, every supply chain movement, every HR action, and every operational decision happens in one connected system."
        description="The ERP implementation is not the goal. The operational transformation it enables is. We implement ERP systems with the business outcome — not the technical go-live — as the measure of success. Every configuration decision, every process design choice, and every integration architecture is evaluated against the operational and commercial improvement it delivers for the business that will run on it for the next decade."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every ERP implementation we deliver."
        description="ERP implementations built without principles go live and underdeliver. Every engagement we take on is grounded in these four commitments to ensure what we implement drives real operational transformation, not just technical go-live."
        quote="Business Outcome is the Only Success Metric"
        quoteDescription="Going live on time and on budget is necessary but insufficient. We measure every ERP implementation against the business outcomes it delivers — cost reduction, efficiency improvement, decision speed, and the operational visibility that changes how leadership runs the business."
        tags={[
          "Outcomes",
          "Commercial",
          "Impact",
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