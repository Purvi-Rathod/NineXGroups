"use client";

import Link from "next/link";
import {
  Cloud,
  BrainCircuit,
  Shield,
  Code2,
  Infinity,
  Network,
  Bot,
  Users,
  Layers,
  Database,
  Cpu,
  Workflow,
} from "lucide-react";

export default function WhatWeDoSection() {
  return (
    <section className="relative overflow-hidden bg-[#f6f4f8] py-[60px] sm:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-10 xl:px-0">
      {/* Glow */}
      <div className="pointer-events-none absolute right-[-120px] top-[100px] h-[320px] w-[320px] rounded-full bg-[#c084fc]/20 blur-[120px] sm:h-[420px] sm:w-[420px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1220px]">
        {/* TOP SECTION */}
        <div className="mb-[40px] grid grid-cols-1 gap-y-5 lg:mb-[60px] lg:grid-cols-12">
          {/* LEFT LABEL */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 pt-[4px] lg:pt-[10px]">
              <div className="h-[8px] w-[8px] bg-[#8b5cf6]" />
              <p className="text-[12px] sm:text-[13px] font-semibold uppercase tracking-[1.4px] text-[#8b5cf6]">
                What We Do
              </p>
            </div>
          </div>

          {/* HEADING */}
          <div className="lg:col-span-9 lg:ml-[100px]">
            <h2 className="max-w-[920px] text-[30px] leading-[1.08] tracking-[-1.5px] text-[#0b0d39] sm:text-[40px] sm:tracking-[-2px] md:text-[50px] lg:text-[64px] lg:tracking-[-3px]">
              NineXDevOps operates across
              <br className="hidden sm:block" />
              twelve specialized technology domains
            </h2>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-3">
          {/* TEXT BLOCK */}
          <div className="flex min-h-[260px] flex-col justify-between px-[6px] py-[10px] sm:min-h-[320px]">
            <div>
              <p className="mb-8 max-w-[260px] text-[15px] leading-[1.9] text-[#1f2340] sm:text-[16px]">
                We help organizations accelerate transformation and achieve
                operational excellence through modern technology solutions and
                proven delivery frameworks.
              </p>
            </div>
            <p className="text-[15px] font-semibold leading-[1.9] text-[#7c3aed] sm:text-[16px]">
              One partner. Twelve domains.
              <br />
              Endless impact.
            </p>
          </div>

          {/* CARD 1 — Cloud & Infrastructure */}
          <Link href="/ninexdevOpsBrand/cloud-infrastructure" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Cloud
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Cloud & Infrastructure
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Multi-cloud architecture engineered for performance, resilience,
                and 40% lower cost
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We migrate, modernise, and optimise enterprise infrastructure
                across AWS, Google Cloud, Microsoft Azure, and Oracle Cloud —
                building the cloud foundation that supports every digital
                initiative your business runs with 99.99% uptime and continuous
                cost optimisation.
              </p>
            </div>
          </Link>

          {/* CARD 2 — AI & Generative AI */}
          <Link href="/ninexdevOpsBrand/ai-generative-ai" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <BrainCircuit
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                AI & Generative AI
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Enterprise AI from strategy through production — 10x
                productivity gains delivered
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement custom ML models, RAG-based LLM applications,
                Generative AI platforms, and production MLOps infrastructure
                using OpenAI, Anthropic, Google, and NVIDIA partnerships — with
                enterprise governance and measurable commercial outcomes.
              </p>
            </div>
          </Link>

          {/* CARD 3 — AI Agent Development */}
          <Link href="/ninexdevOpsBrand/ai-agent-development" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Bot
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                AI Agent Development
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Autonomous AI agents that complete meaningful enterprise work
                without human initiation
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We design and deploy purpose-built AI agents that handle
                research, prospecting, data processing, customer engagement,
                system monitoring, and complex multi-step workflows — operating
                continuously inside your business with defined guardrails, tool
                integrations, and compounding intelligence.
              </p>
            </div>
          </Link>

          {/* CARD 4 — Cybersecurity */}
          <Link href="/ninexdevOpsBrand/cybersecurity" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Shield
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Cybersecurity
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Zero Trust architecture and 24/7 security operations — zero
                breaches in 5+ years
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We build and operate enterprise cybersecurity programmes
                covering Security Operations Centres, Zero Trust implementation,
                IAM, cloud security, and regulatory compliance — protecting
                every layer of your digital business with the speed and
                intelligence modern threats demand.
              </p>
            </div>
          </Link>

          {/* CARD 5 — CX Systems */}
          <Link href="/ninexdevOpsBrand/cx-systems" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Users
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                CX Systems
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Customer experience platforms that connect every touchpoint into
                one measurable commercial engine
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement the technical infrastructure behind enterprise
                customer experience — from CRM and CDP integration through
                journey orchestration platforms, personalisation engines, and
                contact centre technology — turning CX strategy into operational
                reality.
              </p>
            </div>
          </Link>

          {/* CARD 6 — ERP & Enterprise Applications */}
          <Link href="/ninexdevOpsBrand/erp-enterprise-applications" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Layers
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                ERP & Enterprise Applications
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Enterprise resource planning systems that unify operations,
                finance, supply chain, and HR into one platform
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement SAP, Oracle, NetSuite, and Workday — covering full
                lifecycle from system selection and process design through data
                migration, configuration, integration, and post-go-live support.
                Every ERP engagement is anchored to measurable operational
                outcomes.
              </p>
            </div>
          </Link>

          {/* CARD 7 — Digital Engineering */}
          <Link href="/ninexdevOpsBrand/digital-engineering" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Code2
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Digital Engineering
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Digital products, platforms, and APIs engineered for scale,
                speed, and exceptional experience
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We design, build, and operate customer-facing digital products,
                internal platforms, mobile applications, and enterprise APIs —
                reducing time to market by 50% and achieving 95%+ user
                satisfaction scores across every engagement.
              </p>
            </div>
          </Link>

          {/* CARD 8 — DevOps & Automation */}
          <Link href="/ninexdevOpsBrand/devops-automation" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Infinity
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                DevOps & Automation
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                CI/CD pipelines and SRE practices delivering 80% faster
                deployments with 60% fewer incidents
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement the complete DevOps transformation — pipelines,
                infrastructure as code, site reliability engineering, release
                management, and cultural change — creating the engineering
                velocity your teams need to compete.
              </p>
            </div>
          </Link>

          {/* CARD 9 — Data Engineering & Analytics */}
          <Link href="/ninexdevOpsBrand/data-engineering-analytics" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Database
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Data Engineering & Analytics
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                The data infrastructure that turns raw enterprise data into
                commercial intelligence
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We build data warehouses, data lakes, streaming pipelines, and
                analytics platforms — using Snowflake, Databricks, dbt, and
                Kafka — creating the unified data foundation that powers every
                AI, BI, and operational intelligence initiative your business
                runs.
              </p>
            </div>
          </Link>

          {/* CARD 10 — Custom Software Development */}
          <Link href="/ninexdevOpsBrand/custom-software-development" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Workflow
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Custom Software Development
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Bespoke software solutions for the problems no off-the-shelf
                product solves
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We design and build custom enterprise software — from complex
                internal tools and workflow automation through industry-specific
                applications and proprietary platforms — using modern
                engineering practices, cloud-native architecture, and the
                delivery discipline that enterprise software demands.
              </p>
            </div>
          </Link>

          {/* CARD 11 — IoT & Edge Computing */}
          <Link href="/ninexdevOpsBrand/iot-edge-computing" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Cpu
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                IoT & Edge Computing
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Connected devices, real-time data, and edge intelligence at
                industrial scale
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We architect and implement IoT platforms, edge computing
                infrastructure, and industrial automation systems — connecting
                physical operations to digital intelligence and enabling the
                real-time monitoring, predictive maintenance, and operational
                optimisation that Industry 4.0 demands.
              </p>
            </div>
          </Link>

          {/* CARD 12 — Networks & Digital Workspace */}
          <Link href="/ninexdevOpsBrand/networks-digital-workspace" className="block h-full">
            <div className="h-full min-h-[320px] border border-[#e7e4ec] bg-white p-[22px] sm:min-h-[340px] lg:min-h-[360px]">
              <div className="mb-[24px]">
                <Network
                  strokeWidth={1.5}
                  className="h-[64px] w-[64px] text-[#8b5cf6] sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <h3 className="mb-4 text-[20px] tracking-[-0.6px] text-[#0b0d39]">
                Networks & Digital Workspace
              </h3>
              <p className="mb-5 text-[14px] leading-[1.8] text-[#7c3aed] sm:text-[15px]">
                Modern network infrastructure and digital workplace solutions
                for hybrid enterprise at scale
              </p>
              <p className="text-[13px] leading-[1.85] text-[#555] sm:text-[14px]">
                We implement SD-WAN, Zero Trust Network Access, Microsoft 365,
                unified communications, and endpoint management — creating the
                secure, high-performance digital workplace that supports hybrid
                work without compromise.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}