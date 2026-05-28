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
      ["47", "disconnected data systems unified into one platform"],
      ["200+", "data source integrations connected enterprise-wide"],
      ["500+", "dbt transformation models deployed"],
      ["15M", "customers enabled through real-time data infrastructure"],
    ],
    footerTitle: "ENTERPRISE DATA PLATFORM TRANSFORMATION",
    footerText: "UNIFIED. REAL-TIME.",
    showArrow: true,
  },
  {
    icon: <SlidersHorizontal size={22} strokeWidth={1.5} />,
    title: "Business Results",
    items: [
      ["Same-Day", "month-end reporting reduced from 10 days"],
      ["75%", "improvement in data science productivity"],
      ["$30M", "annual savings from automated reporting"],
      ["10-Month", "ROI achieved across total programme investment"],
    ],
    footerTitle: "MEASURABLE IMPACT",
    footerText: "FASTER. INTELLIGENT.",
    showArrow: false,
  },
  {
    icon: <User size={22} strokeWidth={1.5} />,
    title: "Platform Infrastructure",
    items: [
      ["Snowflake\nWarehouse", "enterprise-scale unified data platform"],
      ["Kafka\nStreaming", "real-time customer and transaction processing"],
      ["Databricks\nML Platform", "feature store and machine learning infrastructure"],
      ["Collibra\nGovernance", "enterprise data governance and compliance"],
    ],
    footerTitle: "REAL-TIME DATA INTELLIGENCE",
    footerText: "SCALABLE. DECISION-READY.",
    showArrow: false,
  },
];
const cards = [
  {
    title: "Data Warehouse Architecture & Implementation",
    highlight:
      "The single source of truth that makes every analytical question answerable and every decision trustworthy",
    description:
      "We design and implement enterprise data warehouses using Snowflake, Google BigQuery, AWS Redshift, and Azure Synapse Analytics — with dimensional modelling, star and snowflake schema design, slowly changing dimension management, historical data loading, and the performance optimisation that ensures analytical queries return results in seconds rather than minutes across billions of rows.",
  },

  {
    title: "Data Lake & Lakehouse Architecture",
    highlight:
      "Store and analyse every data type your enterprise generates — structured, semi-structured, and unstructured",
    description:
      "We design and implement data lake architectures using AWS S3, Azure Data Lake, and Google Cloud Storage — with Delta Lake, Apache Iceberg, and Apache Hudi lakehouse formats that add transactional capability and schema enforcement. Lakehouse architectures combine the storage economics of data lakes with the analytical performance of data warehouses — the optimal architecture for enterprises with diverse data types and varied analytical requirements.",
  },

  {
    title: "Real-Time Data Streaming",
    highlight:
      "Process and analyse data in milliseconds rather than hours or days",
    description:
      "We implement real-time data streaming infrastructure using Apache Kafka, AWS Kinesis, Google Pub/Sub, and Azure Event Hubs — with stream processing using Apache Flink and Spark Streaming — enabling the real-time analytics, event-driven applications, operational intelligence, and instant personalisation that batch-oriented data architectures cannot support.",
  },

  {
    title: "Data Transformation & dbt Implementation",
    highlight:
      "Build the data transformation layer that makes raw data analytically useful",
    description:
      "We implement data transformation frameworks using dbt (data build tool) — with modular, version-controlled, tested transformation logic that takes raw source data and produces clean, business-ready analytical models. dbt implementations replace the unmaintainable SQL scripts and manual transformation processes that make data pipelines fragile, opaque, and impossible to trust without redevelopment.",
  },

  {
    title: "Data Integration & ETL/ELT Pipelines",
    highlight:
      "Move data from everywhere to everywhere — reliably, on schedule, and without data loss",
    description:
      "We build enterprise data integration infrastructure using Fivetran, Airbyte, Informatica, Talend, and custom pipelines — covering source system connectors for CRM, ERP, marketing platforms, operational databases, third-party APIs, and flat file sources. Modern ELT architectures using cloud data warehouse compute for transformation provide better performance, lower cost, and greater maintainability than traditional ETL approaches.",
  },

  {
    title: "Business Intelligence Platform Implementation",
    highlight:
      "The dashboards and reports that turn data warehouse output into leadership decisions",
    description:
      "We implement enterprise BI platforms including Tableau, Power BI, Looker, and Qlik — with semantic layer design, calculated metric standardisation, dashboard architecture for every stakeholder level from executive to operational, self-service analytics capability for business users, and the embedded analytics infrastructure that puts intelligence inside the operational applications where decisions are actually made.",
  },

  {
    title: "Data Governance & Quality Framework",
    highlight:
      "The standards and controls that make your data trustworthy across every downstream use",
    description:
      "We implement data governance frameworks covering data cataloguing with Alation and Collibra, data lineage tracking, quality rule definition and monitoring, master data management, PII identification and protection, retention policy implementation, and the organisational governance model that assigns ownership, accountability, and improvement responsibility for every critical data asset your business depends on.",
  },

  {
    title: "Feature Store Development for ML",
    highlight:
      "The ML infrastructure that makes data science faster and model results more reliable",
    description:
      "We design and build enterprise feature stores using Feast, Tecton, and Databricks Feature Store — providing reusable, consistently computed ML features that data scientists can discover and use without rewriting feature computation logic, ensuring training and serving feature consistency, and enabling the rapid ML experimentation and model deployment that requires features to be available on demand rather than computed from scratch for every project.",
  },

  {
    title: "DataOps & Pipeline Reliability",
    highlight:
      "The engineering discipline that keeps your data infrastructure performing at production standards",
    description:
      "We implement DataOps practices covering pipeline monitoring and alerting, data quality testing with Great Expectations and dbt tests, pipeline orchestration using Apache Airflow and Prefect, incident response for data failures, SLA tracking for data freshness, and the operational runbooks that keep data infrastructure reliable without constant human intervention.",
  },

  {
    title: "Analytics Engineering & Semantic Layer",
    highlight:
      "Build the business logic layer that makes self-service analytics safe and consistent",
    description:
      "We build analytics engineering practices and semantic layers that translate technical data models into business-friendly metrics, dimensions, and reports — using Looker LookML, dbt metrics layer, and custom semantic layer implementations. Semantic layers ensure that revenue means the same thing in every dashboard, calculated the same way, and that business users can explore data without accidentally creating inconsistent or incorrect metrics.",
  },
];
export default function Page() {
  return (
    <>
      <SubPageHero
        backgroundImage="/images/bg-image/DevOps-bg.png"
        headline="COLLECT. TRANSFORM. ANALYSE. DECIDE."
        subheadline="The data infrastructure that turns the raw data your enterprise generates into the commercial intelligence your leadership needs to make confident decisions at the speed your market demands.
                    We build enterprise data platforms — data warehouses, data lakes, lakehouse architectures, real-time streaming pipelines, and analytics infrastructure — using Snowflake, Databricks, dbt, Apache Kafka, and the full modern data stack. Every data platform we build is designed for scale, governed for accuracy, and connected to the BI and AI layers that transform it from stored data into operational competitive advantage.
                    "
      />
      <OurVision
        eyebrow="OUR VISION"
        leftTitle={[
          "DATA -THAT",
          "DRIVES",
          "EVERY",
          "DECISION.",
        ]}
        title="An enterprise where every decision — from daily operations to board-level strategy — is made with complete, accurate, real-time data intelligence."
        description="Data infrastructure is the competitive leverage multiplier of the modern enterprise. Every investment in AI, personalisation, and operational intelligence is only as good as the data it runs on. We build the data foundations that make every downstream data initiative reliable, every analytical conclusion trustworthy, and every business decision better than the one it replaces."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop"
      />

      <ValuesSection
        eyebrow="OUR VALUES"
        title="The principles behind every data platform we engineer."
        description="Data infrastructure built without principles produces insights nobody trusts and pipelines nobody uses. Every engagement we take on is grounded in these four commitments to ensure what we build is trustworthy, scalable, governed correctly, and optimised for commercial value."
        quote="Trust is Built in the Pipeline"
        quoteDescription="Data that business users do not trust is data they will not use. We build the quality controls, testing frameworks, and lineage tracking that make every data asset in your platform trustworthy enough for the most important decisions your business makes."
        tags={[
          "Trust",
          "Quality",
          "Reliability",
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