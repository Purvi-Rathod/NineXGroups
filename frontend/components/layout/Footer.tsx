"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const AccordionSection = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/10 lg:border-none lg:pb-0 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between lg:hidden py-3 text-left touch-manipulation"
      >
        <span className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white uppercase tracking-[0.08em]">
          {title}
        </span>
        <svg
          className={`w-4 h-4 text-white/80 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <h3 className="hidden lg:block text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-white uppercase tracking-[0.08em] mb-5 text-left">
        {title}
      </h3>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out lg:grid-rows-[1fr] ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <div className="pt-2 lg:pt-0">{children}</div>
        </div>
      </div>
    </div>
  );
};

const NavLink = ({
  href,
  children,
  hasDropdown,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  hasDropdown?: boolean;
  className?: string;
}) => (
  <Link
    href={href}
    className={`group flex w-full items-center justify-between text-[13px] leading-[1.5] tracking-[-0.01em] text-gray-400 hover:text-white transition-colors py-1.5 ${className}`}
  >
    <span className="text-left w-full">{children}</span>
    {hasDropdown && (
      <svg
        className="w-3 h-3 text-white/50 group-hover:text-white ml-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    )}
  </Link>
);

const DropdownNavItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between text-[13px] leading-[1.5] tracking-[-0.01em] text-gray-400 hover:text-white transition-colors py-1.5 text-left"
      >
        <span className="w-full">{title}</span>
        <svg
          className={`w-3 h-3 text-white/50 group-hover:text-white ml-2 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="overflow-hidden">
          <ul className="pl-3 mt-1 space-y-2 border-l border-white/10 ml-1 mb-1">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-[#030b1a] border-t border-white/10 relative text-left py-14">
      {/* Soft Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[34px]">
        {/* Grid-cols-4 and Items-Start applied */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {/* What We Do */}
          <div className="select-none">
            <AccordionSection title="What We Do">
              <ul className="space-y-3">
                {/* NineXFold */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    NineXFold
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/ninexfold/revops">RevOps</NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/revenue-architecture">
                        Revenue Architecture
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/pricing-strategy">
                        Pricing Strategy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/crm-implementation">
                        CRM Implementation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/sales-automation">
                        Sales Automation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/pipeline-management">
                        Pipeline Management
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/marketing-automation">
                        Marketing Automation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/mops-analytics">
                        MOps & Analytics
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/cx-systems">CX Systems</NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/bi-data">BI & Data</NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexfold/erp">ERP</NavLink>
                    </li>
                  </ul>
                </li>

                {/* NineXDevOps */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    NineXDevOps
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/ninexdevops/cloud-infrastructure">
                        Cloud & Infrastructure
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/ai-generative-ai">
                        AI & Generative AI
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/cybersecurity">
                        Cybersecurity
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/digital-engineering">
                        Digital Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/product-engineering">
                        Product Engineering
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/devops-cicd">
                        DevOps & CI/CD
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/networks">Networks</NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexdevops/digital-workspace">
                        Digital Workspace
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* NineXConnect */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    NineXConnect
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/ninexconnect/crm-implementation">
                        CRM Implementation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexconnect/sales-automation">
                        Sales Automation
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexconnect/customer-journey-design">
                        Customer Journey Design
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexconnect/contact-center-solutions">
                        Contact Center Solutions
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexconnect/whatsapp-business">
                        WhatsApp Business
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexconnect/customer-data-platforms">
                        Customer Data Platforms
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* NineXScale */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    NineXScale
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/ninexscale/go-to-market-strategy">
                        Go-To-Market Strategy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexscale/market-entry-consulting">
                        Market Entry Consulting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexscale/business-expansion">
                        Business Expansion
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexscale/investor-ready-decks">
                        Investor-Ready Decks
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexscale/competitive-intelligence">
                        Competitive Intelligence
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/ninexscale/revenue-growth-architecture">
                        Revenue Growth Architecture
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionSection>
          </div>
          {/* Industries */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Industries">
              <ul className="space-y-3">
                {/* Core Industries */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    Core Industries
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/industries/automotive-mobility">
                        Automotive & Mobility
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/manufacturing-industry-4">
                        Manufacturing & Industry 4.0
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/retail-ecommerce">
                        Retail & E-Commerce
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/fintech">Fintech</NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/technology-saas">
                        Technology & SaaS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/ai-systems">
                        AI Systems
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/healthcare">
                        Healthcare
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/energy">Energy</NavLink>
                    </li>
                  </ul>
                </li>

                {/* Extended Industries */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    Extended Industries
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/industries/solar-clean-energy">
                        Solar & Clean Energy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/aerospace-defense">
                        Aerospace & Defense
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/agritech">AgriTech</NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/hospitality">
                        Hospitality
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/edtech">EdTech</NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/media-entertainment">
                        Media & Entertainment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/insurance">Insurance</NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/government">
                        Government
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* More Industries */}
                <li>
                  <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    More Industries
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <NavLink href="/industries/life-science">
                        Life Science
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/climate-tech">
                        ClimateTech
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/logistics">Logistics</NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/real-estate">
                        Real Estate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink href="/industries/data-centers">
                        Data Centers
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* Ecosystem / Who We Are AND Resources */}
          <div className="flex flex-col space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Who We Are">
              <ul className="space-y-3">
                <li>
                  <NavLink href="#">About Us</NavLink>
                </li>
                <li>
                  <NavLink href="#">Analyst Recognitions</NavLink>
                </li>
                <li>
                  <NavLink href="#">Annual Report 2025</NavLink>
                </li>
                <li>
                  <NavLink href="#">Awards and Recognition</NavLink>
                </li>
                <li>
                  <NavLink href="#">
                    Code of Business Ethics and Conduct
                  </NavLink>
                </li>
                <li>
                  <NavLink href="#">Corporate Social Responsibility</NavLink>
                </li>
                <li>
                  <NavLink href="#">Diversity, Equity and Inclusion</NavLink>
                </li>
                <li>
                  <NavLink href="#">Global Presence</NavLink>
                </li>
                <li>
                  <NavLink href="#">Investor Relations</NavLink>
                </li>
                <li>
                  <NavLink href="#">Leadership</NavLink>
                </li>
                <li>
                  <NavLink href="#">Newsroom</NavLink>
                </li>
                <li>
                  <NavLink href="#">Privacy Trust Center</NavLink>
                </li>
                <li>
                  <NavLink href="#">Strategic Alliances</NavLink>
                </li>
                <li>
                  <NavLink href="#">Sustainability</NavLink>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* Careers & Global Presence */}
          <div className="flex flex-col space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Careers">
              <ul className="space-y-3">
                <li>
                  <NavLink href="#">Careers Overview</NavLink>
                </li>
                <li>
                  <NavLink href="#">Meet our people</NavLink>
                </li>
                <li>
                  {/* <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
                    Explore job opportunities
                  </span>
                  <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
                    <li>
                      <DropdownNavItem title="Americas">
                        <li>
                          <NavLink href="#">United States</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Canada</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Brazil</NavLink>
                        </li>
                      </DropdownNavItem>
                    </li>
                    <li>
                      <DropdownNavItem title="Asia Pacific">
                        <li>
                          <NavLink href="#">Australia</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Japan</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Singapore</NavLink>
                        </li>
                      </DropdownNavItem>
                    </li>
                    <li>
                      <DropdownNavItem title="Europe and Africa">
                        <li>
                          <NavLink href="#">United Kingdom</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Germany</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">South Africa</NavLink>
                        </li>
                      </DropdownNavItem>
                    </li>
                    <li>
                      <DropdownNavItem title="India">
                        <li>
                          <NavLink href="#">Bengaluru</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">Mumbai</NavLink>
                        </li>
                        <li>
                          <NavLink href="#">New Delhi</NavLink>
                        </li>
                      </DropdownNavItem>
                    </li>
                  </ul> */}
                </li>
              </ul>
            </AccordionSection>
            <AccordionSection title="Resources">
              <ul className="space-y-3">
                <li>
                  <NavLink href="#">Trends and Insights</NavLink>
                </li>
                <li>
                  <NavLink href="#">Case Studies</NavLink>
                </li>
                <li>
                  <NavLink href="#">Events and Webinars</NavLink>
                </li>
              </ul>
            </AccordionSection>

            {/* <AccordionSection title="Global Presence">
              <ul className="space-y-3">
                <li>
                  <DropdownNavItem title="Americas">
                    <li>
                      <NavLink href="#">North America</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">South America</NavLink>
                    </li>
                  </DropdownNavItem>
                </li>
                <li>
                  <DropdownNavItem title="EMEA">
                    <li>
                      <NavLink href="#">Europe</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Middle East</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Africa</NavLink>
                    </li>
                  </DropdownNavItem>
                </li>
                <li>
                  <DropdownNavItem title="APAC">
                    <li>
                      <NavLink href="#">Asia</NavLink>
                    </li>
                    <li>
                      <NavLink href="#">Pacific</NavLink>
                    </li>
                  </DropdownNavItem>
                </li>
              </ul>
            </AccordionSection> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* NinexGroup Logo (replaced Trust badge) */}
          <div className="flex items-center">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/e17d68d8e248bb0b5749fd61ee6f92a4054967ff?width=490"
              alt="NineXGroup"
              width={140}
              height={32}
              className="h-8 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              priority
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            {[
              {
                name: "Facebook",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  />
                ),
              },
              {
                name: "X",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                ),
              },
              {
                name: "LinkedIn",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                ),
              },
              {
                name: "Instagram",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                ),
              },
              {
                name: "YouTube",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  />
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg className="w-4 h-4" viewBox={social.viewBox}>
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center text-[14px] sm:text-[15px] md:text-[16px] text-gray-400 cursor-pointer hover:text-white transition">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            English
            <svg
              className="w-3 h-3 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}
