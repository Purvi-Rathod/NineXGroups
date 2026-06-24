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

const BrandGroup = ({
  name,
  links,
}: {
  name: string;
  links: { label: string; href: string }[];
}) => (
  <li>
    <span className="text-[13px] leading-[1.5] tracking-[-0.01em] text-white font-medium py-1 block">
      {name}
    </span>
    <ul className="space-y-3 ml-3 border-l border-white/10 pl-3 mt-2 mb-2">
      {links.map((l) => (
        <li key={l.href}>
          <NavLink href={l.href}>{l.label}</NavLink>
        </li>
      ))}
    </ul>
  </li>
);

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#020617] to-[#030b1a] border-t border-white/10 relative text-left py-14">
      {/* Soft Glow Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[34px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {/* ================= WHAT WE DO ================= */}
          <div className="select-none">
            <AccordionSection title="What We Do">
              <ul className="space-y-3">
                <BrandGroup
                  name="NineXFold"
                  links={[
                    { label: "Revenue Systems", href: "/ninexFoldServices/revenue-systems" },
                    { label: "Sales Systems", href: "/ninexFoldServices/sales-systems" },
                    { label: "AI & Automation", href: "/ninexFoldServices/ai-automation" },
                    { label: "Marketing Systems", href: "/ninexFoldServices/marketing-systems" },
                    { label: "Brand Intelligence System", href: "/ninexFoldServices/brand-intelligence-system" },
                    { label: "Demand Generation System", href: "/ninexFoldServices/demand-generation-system" },
                    { label: "Search Visibility System", href: "/ninexFoldServices/search-visibility-system" },
                    { label: "Content & Social Authority System", href: "/ninexFoldServices/content-social-authority-system" },
                    { label: "Digital Infrastructure System", href: "/ninexFoldServices/digital-infrastructure-system" },
                  ]}
                />

                <BrandGroup
                  name="NineXDevOps"
                  links={[
                    { label: "Cloud & Infrastructure", href: "/ninexdevOpsBrand/cloud-infrastructure" },
                    { label: "AI & Generative AI", href: "/ninexdevOpsBrand/ai-generative-ai" },
                    { label: "AI Agent Development", href: "/ninexdevOpsBrand/ai-agent-development" },
                    { label: "Cybersecurity", href: "/ninexdevOpsBrand/cybersecurity" },
                    { label: "CX Systems", href: "/ninexdevOpsBrand/cx-systems" },
                    { label: "ERP Enterprise Applications", href: "/ninexdevOpsBrand/erp-enterprise-applications" },
                    { label: "Digital Engineering", href: "/ninexdevOpsBrand/digital-engineering" },
                    { label: "DevOps & Automation", href: "/ninexdevOpsBrand/devops-automation" },
                    { label: "Data Engineering & Analytics", href: "/ninexdevOpsBrand/data-engineering-analytics" },
                    { label: "Custom Software Development", href: "/ninexdevOpsBrand/custom-software-development" },
                    { label: "IoT & Edge Computing", href: "/ninexdevOpsBrand/iot-edge-computing" },
                    { label: "Networks & Digital Workspace", href: "/ninexdevOpsBrand/networks-digital-workspace" },
                  ]}
                />

                <BrandGroup
                  name="NineXConnect"
                  links={[
                    { label: "CRM Implementation", href: "/ninexConnectBrand/crm-implementation" },
                    { label: "Sales Automation", href: "/ninexConnectBrand/sales-automation" },
                    { label: "Customer Journey Design", href: "/ninexConnectBrand/customer-journey-design" },
                    { label: "Contact Center Solutions", href: "/ninexConnectBrand/contact-center-solutions" },
                    { label: "Marketing Platforms", href: "/ninexConnectBrand/marketing-platforms" },
                  ]}
                />

                <BrandGroup
                  name="NineXScale"
                  links={[
                    { label: "Go-To-Market Strategy", href: "/ninexscaleBrand/go-to-market-strategy" },
                    { label: "Market Entry & Expansion", href: "/ninexscaleBrand/market-entry-expansion" },
                    { label: "Business Expansion Planning", href: "/ninexscaleBrand/business-expansion-planning" },
                    { label: "Investor Relations", href: "/ninexscaleBrand/investor-relations" },
                    { label: "Competitive Intelligence", href: "/ninexscaleBrand/competitive-intelligence" },
                    { label: "Revenue Growth Architecture", href: "/ninexscaleBrand/revenue-growth-architecture" },
                  ]}
                />
              </ul>
            </AccordionSection>
          </div>

          {/* ================= INDUSTRIES ================= */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Industries">
              <ul className="space-y-3">
                <BrandGroup
                  name="Core Industries"
                  links={[
                    { label: "Automotive & Mobility", href: "/industries/automotive-mobility" },
                    { label: "Manufacturing & Industry 4.0", href: "/industries/manufacturing-industry-4" },
                    { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
                    { label: "Fintech", href: "/industries/fintech" },
                    { label: "Technology & SaaS", href: "/industries/technology-saas" },
                    { label: "AI Systems", href: "/industries/ai-systems" },
                    { label: "Healthcare", href: "/industries/healthcare" },
                    { label: "Energy", href: "/industries/energy" },
                  ]}
                />

                <BrandGroup
                  name="Extended Industries"
                  links={[
                    { label: "Solar & Clean Energy", href: "/industries/solar-clean-energy" },
                    { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
                    { label: "AgriTech", href: "/industries/agritech" },
                    { label: "Hospitality", href: "/industries/hospitality" },
                    { label: "EdTech", href: "/industries/edtech" },
                    { label: "Media & Entertainment", href: "/industries/media-entertainment" },
                    { label: "Insurance", href: "/industries/insurance" },
                    { label: "Government", href: "/industries/government" },
                  ]}
                />

                <BrandGroup
                  name="More Industries"
                  links={[
                    { label: "Life Science", href: "/industries/life-science" },
                    { label: "ClimateTech", href: "/industries/climate-tech" },
                    { label: "Logistics", href: "/industries/logistics" },
                    { label: "Real Estate", href: "/industries/real-estate" },
                    { label: "Data Centers", href: "/industries/data-centers" },
                  ]}
                />
              </ul>
            </AccordionSection>
          </div>

          {/* ================= WHO WE ARE ================= */}
          <div className="flex flex-col space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Who We Are">
              <ul className="space-y-3">
                <li>
                  <NavLink href="/about">About NineX Group</NavLink>
                </li>
                <li>
                  <NavLink href="/story">Our Story & Mission</NavLink>
                </li>
                <li>
                  <NavLink href="/leadership">Leadership Team</NavLink>
                </li>
                <li>
                  <NavLink href="/values">Our Values & Culture</NavLink>
                </li>
                <li>
                  <NavLink href="/partners">Partner Ecosystem</NavLink>
                </li>
                <li>
                  <NavLink href="/csr">CSR & Sustainability</NavLink>
                </li>
              </ul>
            </AccordionSection>
          </div>

          {/* ================= CAREERS + INSIGHTS ================= */}
          <div className="flex flex-col space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            <AccordionSection title="Careers">
              <ul className="space-y-3">
                <li>
                  <NavLink href="/careers/jobs">Open Positions</NavLink>
                </li>
                <li>
                  <NavLink href="/careers/life">Life at NineX</NavLink>
                </li>
                <li>
                  <NavLink href="/careers/culture">Culture & Values</NavLink>
                </li>
                <li>
                  <NavLink href="/careers/benefits">Benefits & Perks</NavLink>
                </li>
                <li>
                  <NavLink href="/careers/leadership">Leadership Programs</NavLink>
                </li>
                <li>
                  <NavLink href="/careers/campus">Campus / Freshers</NavLink>
                </li>
              </ul>
            </AccordionSection>

            <AccordionSection title="Insights">
              <ul className="space-y-3">
                <li>
                  <NavLink href="/insights/research">Research Reports</NavLink>
                </li>
                <li>
                  <NavLink href="/insights/industry">Industry Reports</NavLink>
                </li>
                <li>
                  <NavLink href="/insights/case-studies">Case Studies</NavLink>
                </li>
                <li>
                  <NavLink href="/blogs">Blog & Articles</NavLink>
                </li>
                <li>
                  <NavLink href="/insights/whitepapers">Whitepapers</NavLink>
                </li>
                <li>
                  <NavLink href="/insights/videos">Videos & Webinars</NavLink>
                </li>
                <li>
                  <NavLink href="/insights/newsletter">Newsletter</NavLink>
                </li>
              </ul>
            </AccordionSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* NinexGroup Logo */}
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
                name: "LinkedIn",
                href: "https://www.linkedin.com/company/ninexgroup/",
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
                href: "https://www.instagram.com/ninexgroup_global/",
                viewBox: "0 0 24 24",
                icon: (
                  <path
                    fill="currentColor"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                  />
                ),
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
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