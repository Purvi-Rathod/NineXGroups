"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buttonHover, buttonTap } from "@/animations";
import type { BlogPost } from "@/types/blog";


interface NavigationItem {
  label: string;
  href: string;
  badge?: string;
  isHeading?: boolean;
  leftPanel?: {
    title: string;
    description?: string;
    hashtag?: string;
    stats?: { value: string; label: string }[];
  };
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  // ================= WHO WE ARE =================
  {
    label: "Who We Are",
    href: "#who",
    leftPanel: {
      title: "Who We Are",
      description:
        "Driving transformation across diverse industries with tailored solutions and innovation.",
    },
    children: [
      {
        label: "Our Company",
        href: "#",
        children: [
          { label: "About NineX Group", href: "/about" },
          { label: "Our Story & Mission", href: "/story" },
          { label: "Leadership Team", href: "/leadership" },
          { label: "Our Values & Culture", href: "/values" },
          // { label: "Global Presence", href: "/global" },
        ],
      },
      {
        label: "Our Brands",
        href: "#",
        children: [
          {
            label: "NineXFold — Branding & Marketing",
            href: "/ninexFoldServices",
          },
          { label: "NineXDevOps — Technology", href: "/ninexdevOpsBrand" },
          { label: "NineXConnect — Sales & CX", href: "/ninexConnectBrand" },
          { label: "NineXScale — Growth Strategy", href: "/ninexscaleBrand " },
        ],
      },
      {
        label: "Credibility",
        href: "#",
        children: [
          // { label: "Awards & Recognition", href: "/awards" },
          { label: "Partner Ecosystem", href: "/partners" },
          // { label: "Global Presence", href: "/global" },
          { label: "CSR & Sustainability", href: "/csr" },
        ],
      },
    ],
  },

  // ================= WHAT WE DO =================
  {
    label: "What We Do",
    href: "#what",
    leftPanel: {
      title: "What We Do",
      description:
        "Helping businesses scale through enterprise systems, technology, customer experience, and growth strategy.",
    },
    children: [
      // ================= NINEXFOLD =================
      {
        label: "NineXFold",
        href: "#",
        badge: "Enterprise Systems",
        children: [
          // Revenue Systems
          {
            label: "Revenue Systems",
            href: "/ninexFoldServices/revenue-systems",
            isHeading: true,
          },
          // Sales Systems
          {
            label: "Sales Systems",
            href: "/ninexFoldServices/sales-systems",
            isHeading: true,
          },
          {
            label: "AI & Automation",
            href: "/ninexFoldServices/ai-automation"
          },
          // Marketing Systems
          {
            label: "Marketing Systems",
            href: "/ninexFoldServices/marketing-systems",
            isHeading: true,
          },
          {
            label: "Brand Intelligence System",
            href: "/ninexFoldServices/brand-intelligence-system",
          },
          {
            label: "Demand Generation System",
            href: "/ninexFoldServices/demand-generation-system"
          },
          {
            label: "Search Visibility System",
            href: "/ninexFoldServices/search-visibility-system",
          },
          {
            label: "Content & Social Authority System",
            href: "/ninexFoldServices/content-social-authority-system",
          },
          {
            label: "Digital Infrastructure System",
            href: "/ninexFoldServices/digital-infrastructure-system"
          },
        ],
      },

      // ================= NINEXDEVOPS =================
      {
        label: "NineXDevOps",
        href: "#",
        badge: "Technology",
        children: [
          {
            label: "Cloud & Infrastructure",
            href: "/ninexdevOpsBrand/cloud-infrastructure",
          },
          {
            label: "AI & Generative AI",
            href: "/ninexdevOpsBrand/ai-generative-ai",
          },
          {
            label: "AI Agent Development",
            href: "/ninexdevOpsBrand/ai-agent-development",
          },
          {
            label: "Cybersecurity",
            href: "/ninexdevOpsBrand/cybersecurity"
          },
          {
            label: "CX Systems",
            href: "/ninexdevOpsBrand/cx-systems",
          },
          {
            label: "ERP Enterprise Applications",
            href: "/ninexdevOpsBrand/erp-enterprise-applications"
          },
          {
            label: "Digital Engineering",
            href: "/ninexdevOpsBrand/digital-engineering"
          },
          {
            label: "DevOps & Automation",
            href: "/ninexdevOpsBrand/devops-automation"
          },
          {
            label: "Data Engineering & Analytics",
            href: "/ninexdevOpsBrand/data-engineering-analytics"
          },
          {
            label: "Custom Software Development",
            href: "/ninexdevOpsBrand/custom-software-development"
          },
          {
            label: "IoT & Edge Computing",
            href: "/ninexdevOpsBrand/iot-edge-computing"
          },
          {
            label: "Networks & Digital Workspace",
            href: "/ninexdevOpsBrand/networks-digital-workspace"
          }
        ],
      },

      // ================= NINEXCONNECT =================
      {
        label: "NineXConnect",
        href: "#",
        badge: "Sales & CX",
        children: [
          {
            label: "CRM Implementation",
            href: "/ninexConnectBrand/crm-implementation",
          },
          {
            label: "Sales Automation",
            href: "/ninexConnectBrand/sales-automation",
          },
          {
            label: "Customer Journey Design",
            href: "/ninexConnectBrand/customer-journey-design",
          },
          {
            label: "Contact Center Solutions",
            href: "/ninexConnectBrand/contact-center-solutions",
          },
          {
            label: "Marketing Platforms",
            href: "/ninexConnectBrand/marketing-platforms",
          },
        ],
      },

      // ================= NINEXSCALE =================
      {
        label: "NineXScale",
        href: "#",
        badge: "Growth Strategy",
        children: [
          {
            label: "Go-To-Market Strategy",
            href: "/ninexscaleBrand/go-to-market-strategy",
          },
          {
            label: "Market Entry & Expansion",
            href: "/ninexscaleBrand/market-entry-expansion",
          },
          {
            label: "Business Expansion Planning",
            href: "/ninexscaleBrand/business-expansion-planning",
          },
          {
            label: "Investor Relations",
            href: "/ninexscaleBrand/investor-relations",
          },
          {
            label: "Competitive Intelligence",
            href: "/ninexscaleBrand/competitive-intelligence",
          },
          {
            label: "Revenue Growth Architecture",
            href: "/ninexscaleBrand/revenue-growth-architecture",
          },
        ],
      },
    ],
  },
  // ================= INDUSTRIES =================
  {
    label: "Industries",
    href: "#industries",
    leftPanel: {
      title: "Industries We Serve",
      description:
        "Driving transformation across diverse industries with tailored solutions and innovation.",
    },
    children: [
      {
        label: "Core Industries",
        href: "#",
        children: [
          {
            label: "Automotive & Mobility",
            href: "/industries/automotive-mobility",
          },
          {
            label: "Manufacturing & Industry 4.0",
            href: "/industries/manufacturing-industry-4",
          },
          {
            label: "Retail & E-Commerce",
            href: "/industries/retail-ecommerce",
          },
          { label: "Fintech", href: "/industries/fintech" },
          { label: "Technology & SaaS", href: "/industries/technology-saas" },
          { label: "AI Systems", href: "/industries/ai-systems" },
          { label: "Healthcare", href: "/industries/healthcare" },
          { label: "Energy", href: "/industries/energy" },
        ],
      },
      {
        label: "Extended Industries",
        href: "#",
        children: [
          {
            label: "Solar & Clean Energy",
            href: "/industries/solar-clean-energy",
          },
          {
            label: "Aerospace & Defense",
            href: "/industries/aerospace-defense",
          },
          { label: "AgriTech", href: "/industries/agritech" },
          { label: "Hospitality", href: "/industries/hospitality" },
          { label: "EdTech", href: "/industries/edtech" },
          {
            label: "Media & Entertainment",
            href: "/industries/media-entertainment",
          },
          { label: "Insurance", href: "/industries/insurance" },
          { label: "Government", href: "/industries/government" },
        ],
      },
      {
        label: "More Industries",
        href: "#",
        children: [
          { label: "Life Science", href: "/industries/life-science" },
          { label: "ClimateTech", href: "/industries/climate-tech" },
          { label: "Logistics", href: "/industries/logistics" },
          { label: "Real Estate", href: "/industries/real-estate" },
          { label: "Data Centers", href: "/industries/data-centers" },
        ],
      },
    ],
  },
  // ================= INSIGHTS =================
  {
    label: "Insights",
    href: "#insights",
    leftPanel: {
      title: "Insights & Ideas",
      description:
        "Explore research, trends, and expert perspectives shaping the future of business.",
    },
    children: [
      {
        label: "Content Types",
        href: "#",
        children: [
          { label: "Research Reports", href: "/insights/research" },
          { label: "Industry Reports", href: "/insights/industry" },
          { label: "Case Studies", href: "/insights/case-studies" },
          { label: "Blog & Articles", href: "/blogs" },
          { label: "Whitepapers", href: "/insights/whitepapers" },
          { label: "Videos & Webinars", href: "/insights/videos" },
          { label: "Newsletter", href: "/insights/newsletter" },
        ],
      },
      {
        label: "Featured",
        href: "#",
        children: [
          { label: "India Growth Report 2026", href: "/insights/india-growth" },
          { label: "AI for Business India", href: "/insights/ai-india" },
          {
            label: "Digital Marketing Trends",
            href: "/insights/marketing-trends",
          },
        ],
      },
    ],
  },

  // ================= CAREERS =================
  {
    label: "Careers",
    href: "#careers",
    leftPanel: {
      title: "Careers at NineX",
      description:
        "Join us to build impactful careers and shape the future with innovation and purpose.",
    },
    children: [
      {
        label: "Opportunities",
        href: "#",
        children: [{ label: "Open Positions", href: "/careers/jobs" }],
      },
      {
        label: "Life at NineX",
        href: "#",
        children: [
          { label: "Life at NineX", href: "/careers/life" },
          { label: "Culture & Values", href: "/careers/culture" },
          { label: "Benefits & Perks", href: "/careers/benefits" },
          { label: "Leadership Programs", href: "/careers/leadership" },
          { label: "Campus / Freshers", href: "/careers/campus" },
        ],
      },
    ],
  },

  // ================= STATIC =================
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/legal/contact-us" },
];

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState<
    number | null
  >(null);
  const [hoveredSubCategoryIndex, setHoveredSubCategoryIndex] = useState<{
    parent: number;
    child: number;
  } | null>(null);
  const [level3Items, setLevel3Items] = useState<NavigationItem[] | null>(null);
  const [navBlogs, setNavBlogs] = useState<BlogPost[] | null>(null);

  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Optimistic fetch: load first 2 blogs for nav cards (runs once on mount)
  useEffect(() => {
    let cancelled = false;
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        if (cancelled || !Array.isArray(data)) return;
        setNavBlogs(data.slice(0, 2));
      })
      .catch(() => { })
      .finally(() => { });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleOpenDropdown = (index: number, item: NavigationItem) => {
    setOpenDropdownIndex(index);
    // Pre-select first category and sub-category
    if (item.children && item.children.length > 0) {
      setHoveredCategoryIndex(0);
      const firstCategory = item.children[0];
      if (firstCategory.children && firstCategory.children.length > 0) {
        setHoveredSubCategoryIndex({ parent: 0, child: 0 });
        if (firstCategory.children[0].children) {
          setLevel3Items(firstCategory.children[0].children);
        } else {
          setLevel3Items(null);
        }
      } else {
        setHoveredSubCategoryIndex(null);
        setLevel3Items(null);
      }
    }
  };

  const handleLinkClick = (
    index: number,
    href: string,
    e?: React.MouseEvent,
  ) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(false); // Close mobile menu when a link is clicked

    // Handle navigation
    if (href.startsWith("#")) {
      // Check if href is a valid selector (not just "#")
      if (href === "#") {
        // Just "#" means no action, likely a placeholder link
        return;
      }

      // Hash link - scroll to section
      if (
        pathname === "/" ||
        pathname === "/ninexFoldServices" ||
        pathname.startsWith("/ninexFoldServices/")
      ) {
        // On home/ninexFold page, scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Navigate to home page with hash
        router.push(`/ninexFoldServices${href}`);
        // Scroll after navigation
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    } else {
      // Regular page navigation
      router.push(href);
    }
  };

  const toggleMobileMenu = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleChildClick = (childHref: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenDropdownIndex(null);
    setIsMobileMenuOpen(false);
    handleLinkClick(-1, childHref, e);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdownIndex !== null) {
        const dropdownRef = dropdownRefs.current[openDropdownIndex];
        if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
          setOpenDropdownIndex(null);
          setHoveredCategoryIndex(null);
          setHoveredSubCategoryIndex(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdownIndex]);

  // Reset desktop dropdown when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenDropdownIndex(null);
    }
  }, [isMobileMenuOpen]);

  const MobileMenuItem = ({
    item,
    depth = 0,
  }: {
    item: NavigationItem;
    depth?: number;
  }) => {
    const hasChildren = item.children && item.children.length > 0;
    const [open, setOpen] = useState(false);

    return (
      <div>
        {/* Mobile Item Row */}
        <div
          className={`flex items-center justify-between py-2 cursor-pointer sticky top-0 z-50 bg-white
            text-[#4d4d4d] hover:text-[#1959FA]
            ${depth === 0
              ? "px-6 font-medium"
              : depth === 1
                ? "pl-10 pr-6 text-sm"
                : depth === 2
                  ? "pl-14 pr-6 text-sm"
                  : "pl-18 pr-6 text-sm"
            }
            `}
          onClick={(e) => {
            e.stopPropagation();
            if (hasChildren) {
              if (open) {
                handleLinkClick(-1, item.href);
              } else {
                setOpen(true);
              }
            } else {
              handleLinkClick(-1, item.href);
            }
          }}
        >
          <span>{item.label}</span>

          {hasChildren && (
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""
                }`}
            />
          )}
        </div>

        {/* Recursive Children */}
        {hasChildren && open && (
          <div className="bg-gray-50">
            {item.children!.map((child, index) => (
              <MobileMenuItem key={index} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 md:h-[72px] bg-white z-[60] shadow-sm">
      <div className="flex items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-[1920px] mx-auto">
        {/* Logo - Left aligned */}
        <div
          className="flex-shrink-0 flex items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            width={180}
            height={24}
            alt="NinexGroup Logo"
            src="/log.png"
            className="block h-6 md:h-7 w-auto"
            unoptimized
          />
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-6 xl:gap-8 h-full">
          {navigationItems.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const isDropdownOpen = openDropdownIndex === index;

            return (
              <div
                key={index}
                className="relative h-full flex items-center"
                ref={(el) => {
                  dropdownRefs.current[index] = el;
                }}
                onMouseEnter={() => {
                  if (hasChildren) {
                    handleOpenDropdown(index, item);
                  }
                }}
                onMouseLeave={() => {
                  if (!hasChildren) {
                    setOpenDropdownIndex(null);
                  }
                }}
              >
                <div className="flex items-center gap-1 cursor-pointer py-2">
                  <div
                    onClick={(e) => {
                      if (hasChildren) {
                        e.preventDefault();
                        if (openDropdownIndex === index) {
                          setOpenDropdownIndex(null);
                        } else {
                          handleOpenDropdown(index, item);
                        }
                      } else {
                        handleLinkClick(index, item.href, e);
                      }
                    }}
                    className="relative group text-sm font-medium text-[#4d4d4d] hover:text-[#1959FA] transition-colors duration-200"
                  >
                    {item.label}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full bg-gradient-to-r from-[#12D4FF] to-[#1959FA]" />
                  </div>
                  {hasChildren && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? "rotate-180 text-[#1959FA]" : "text-[#4d4d4d]"}`}
                    />
                  )}
                </div>

                {/* Desktop Mega-Menu Dropdown */}
                {hasChildren && (
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 md:top-[72px] left-0 w-full bg-[#F5F5F5] shadow-2xl z-50"
                        onMouseEnter={() => setOpenDropdownIndex(index)}
                        onMouseLeave={() => {
                          setOpenDropdownIndex(null);
                          setHoveredCategoryIndex(null);
                          setHoveredSubCategoryIndex(null);
                          setLevel3Items(null);
                        }}
                      >
                        {/* Gradient top border */}
                        <div
                          className="h-[3px] w-full"
                          style={{
                            background:
                              "linear-gradient(92deg, #12D4FF 22.22%, #1959FA 88.58%)",
                          }}
                        />
                        <div className="flex w-full">
                          {/* LEFT INFO PANEL */}
                          <div className="w-[360px] bg-white p-10 border-r border-[#E5E7EB]">
                            {item.leftPanel?.title && (
                              <h2 className="text-2xl font-semibold text-[#0A0A0A] mb-6">
                                {item.leftPanel.title}
                              </h2>
                            )}
                            {item.leftPanel?.stats && (
                              <div className="space-y-6">
                                {item.leftPanel.stats.map((stat, i) => (
                                  <div
                                    key={i}
                                    className="flex justify-between text-lg"
                                  >
                                    <span className="bg-[linear-gradient(127deg,#12D4FF,#1959FA)] text-transparent bg-clip-text font-semibold">
                                      {stat.value}
                                    </span>
                                    <span>{stat.label}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {item.leftPanel?.description && (
                              <p className="text-gray-700 leading-relaxed">
                                {item.leftPanel.description}
                              </p>
                            )}

                            {item.leftPanel?.hashtag && (
                              <p className="mt-4 font-medium">
                                {item.leftPanel.hashtag}
                              </p>
                            )}
                          </div>
                          {/* RIGHT MENU — CENTERED */}
                          <div className="flex flex-1 justify-center">
                            <div className="max-w-[1200px] flex w-full">
                              {/* Column 1: Main Categories */}
                              <div className="w-[260px] border-r border-gray-300 p-6">
                                {item.children?.map((child, childIndex) => {
                                  const hasSubChildren =
                                    child.children && child.children.length > 0;
                                  const isCategoryHovered =
                                    hoveredCategoryIndex === childIndex;

                                  return (
                                    <div
                                      key={childIndex}
                                      className={
                                        childIndex <
                                          (item.children?.length || 0) - 1
                                          ? "pb-3 mb-3 border-b border-gray-300"
                                          : ""
                                      }
                                      onMouseEnter={() => {
                                        setHoveredCategoryIndex(childIndex);
                                        setHoveredSubCategoryIndex(null);
                                        setLevel3Items(null);
                                      }}
                                    >
                                      <div
                                        onClick={(e) => {
                                          handleChildClick(child.href, e);
                                        }}
                                        className={`flex items-center justify-between cursor-pointer transition-colors ${isCategoryHovered
                                          ? "text-[#1959FA]"
                                          : "text-[#0A0A0A] hover:text-[#1959FA]"
                                          }`}
                                      >
                                        <span
                                          className={`text-sm font-medium ${isCategoryHovered ? "underline decoration-2 underline-offset-4" : ""}`}
                                        >
                                          {child.label}
                                        </span>
                                        {hasSubChildren && (
                                          <ChevronRight
                                            className={`w-4 h-4 transition-transform ${isCategoryHovered ? "text-[#1959FA]" : "text-[#4d4d4d]"}`}
                                          />
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Column 2: Sub-Categories */}
                              <div className="w-[320px] border-r border-gray-300 p-6">
                                {hoveredCategoryIndex !== null &&
                                  item.children &&
                                  item.children[hoveredCategoryIndex] &&
                                  item.children[hoveredCategoryIndex]
                                    .children && (
                                    <div className="space-y-0">
                                      {(
                                        item.children[hoveredCategoryIndex]
                                          .children || []
                                      ).map(
                                        (
                                          subChild: NavigationItem,
                                          subIndex: number,
                                        ) => {
                                          const hasNestedChildren =
                                            subChild.children &&
                                            subChild.children.length > 0;
                                          const isSubHovered =
                                            hoveredSubCategoryIndex?.parent ===
                                            hoveredCategoryIndex &&
                                            hoveredSubCategoryIndex?.child ===
                                            subIndex;

                                          return (
                                            <div
                                              key={subIndex}
                                              className="relative group"
                                              onMouseEnter={() => {
                                                setHoveredSubCategoryIndex({
                                                  parent: hoveredCategoryIndex,
                                                  child: subIndex,
                                                });
                                                setLevel3Items(
                                                  hasNestedChildren
                                                    ? subChild.children || null
                                                    : null,
                                                );
                                              }}
                                            >
                                              <div
                                                onClick={(e) => {
                                                  if (!hasNestedChildren) {
                                                    handleChildClick(
                                                      subChild.href,
                                                      e,
                                                    );
                                                  }
                                                }}
                                                className={`flex items-center justify-between py-2 px-3 cursor-pointer transition-colors rounded ${isSubHovered
                                                  ? "bg-white text-[#1959FA] shadow-sm"
                                                  : "text-[#0A0A0A] hover:bg-white hover:text-[#1959FA]"
                                                  }`}
                                              >
                                                <span className="text-sm">
                                                  {subChild.label}
                                                </span>
                                                {hasNestedChildren && (
                                                  <ChevronRight
                                                    className={`w-4 h-4 ${isSubHovered ? "text-[#1959FA]" : "text-[#4d4d4d]"}`}
                                                  />
                                                )}
                                              </div>
                                            </div>
                                          );
                                        },
                                      )}
                                    </div>
                                  )}
                              </div>
                              {/* Column 3: Sub-Sub Categories + Blogs card */}
                              <div className="flex-1 p-6 flex flex-col">
                                {level3Items ? (
                                  level3Items.map((item, index) => (
                                    <div
                                      key={index}
                                      onClick={(e) =>
                                        handleChildClick(item.href, e)
                                      }
                                      className="px-3 py-2 text-sm cursor-pointer rounded
                                              text-[#0A0A0A] hover:bg-gray-50 hover:text-[#1959FA]
                                              transition-colors"
                                    >
                                      {item.label}
                                    </div>
                                  ))
                                ) : (
                                  <div className="text-sm text-gray-400" />
                                )}
                                {/* Blogs section: title + 2 cards */}
                                <div className="mt-4 flex flex-col gap-3">
                                  <Link
                                    href="/blogs"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setOpenDropdownIndex(null);
                                    }}
                                    className="block"
                                  >
                                    <p className="font-semibold text-[#0A0A0A] hover:text-[#1959FA] transition-colors">
                                      Blogs
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                      Insights and updates
                                    </p>
                                  </Link>
                                  <div className="grid grid-cols-1 gap-2">
                                    {navBlogs === null ? (
                                      /* Optimistic placeholders while loading */
                                      [1, 2].map((i) => (
                                        <div
                                          key={i}
                                          className="flex gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white animate-pulse"
                                        >
                                          <div className="w-16 h-16 rounded-lg bg-slate-200 shrink-0" />
                                          <div className="flex-1 min-w-0 space-y-2">
                                            <div className="h-3.5 bg-slate-200 rounded w-4/5" />
                                            <div className="h-3 bg-slate-100 rounded w-full" />
                                          </div>
                                        </div>
                                      ))
                                    ) : navBlogs.length > 0 ? (
                                      navBlogs.map((blog) => (
                                        <Link
                                          key={blog.slug}
                                          href={`/blogs/${blog.slug}`}
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setOpenDropdownIndex(null);
                                          }}
                                          className="flex gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#1959FA]/30 hover:shadow-md transition-all group"
                                        >
                                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                                            {blog.coverImageUrl ? (
                                              <Image
                                                src={blog.coverImageUrl}
                                                alt=""
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform"
                                                sizes="64px"
                                                unoptimized
                                              />
                                            ) : (
                                              <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                                                <span className="text-xs">
                                                  No image
                                                </span>
                                              </div>
                                            )}
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <p className="font-medium text-sm text-[#0A0A0A] group-hover:text-[#1959FA] transition-colors line-clamp-1">
                                              {blog.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                                              {blog.excerpt || "Read more"}
                                            </p>
                                          </div>
                                        </Link>
                                      ))
                                    ) : (
                                      <Link
                                        href="/blogs"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setOpenDropdownIndex(null);
                                        }}
                                        className="flex gap-3 p-3 rounded-xl border border-[#E5E7EB] bg-white hover:border-[#1959FA]/30 hover:shadow-md transition-all"
                                      >
                                        <p className="font-medium text-sm text-[#0A0A0A]">
                                          View all posts
                                        </p>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop Get a quote button - Right aligned */}
        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            router.push("/legal/contact-us");
          }}
          className="hidden lg:flex flex-shrink-0 items-center justify-center h-10 px-5 text-sm font-medium text-white rounded-md bg-[#0057B8] hover:shadow-[0_0_15px_rgba(0,87,184,0.6)] transition-all duration-300 hover:opacity-90"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          Get a Free Consultation
        </motion.button>

        {/* Mobile Hamburger Icon */}
        <button
          type="button"
          onClick={(e) => toggleMobileMenu(e)}
          className="lg:hidden flex-shrink-0 flex items-center justify-center w-10 h-10 text-[#4d4d4d] hover:text-[#1959FA] transition-colors duration-200 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
              }}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <Image
                      width={140}
                      height={20}
                      alt="NinexGroup Logo"
                      src="/log.png"
                      className="h-5 w-auto"
                      unoptimized
                    />
                  </div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-10 h-10 flex items-center justify-center text-[#4d4d4d] hover:text-[#1959FA] transition-colors rounded-md hover:bg-gray-100"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="flex flex-col">
                    {navigationItems.map((item, index) => (
                      <MobileMenuItem key={index} item={item} />
                    ))}
                  </div>
                </div>

                {/* Mobile Get a quote button */}
                <div className="p-4 border-t border-gray-200">
                  <motion.button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      router.push("/legal/contact-us");
                    }}
                    className="w-full text-white px-6 py-3 rounded-md text-sm font-medium bg-[#0057B8] hover:shadow-[0_0_15px_rgba(0,87,184,0.6)] transition-all duration-300 hover:opacity-90"
                    whileHover={buttonHover}
                    whileTap={buttonTap}
                  >
                    Get a Free Consultation
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
