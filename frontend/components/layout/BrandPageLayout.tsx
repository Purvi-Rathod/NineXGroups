import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/sections/ninexfoldSections/FAQSection";
import WorkWithUsSection from "@/components/sections/ninexfoldSections/WorkWithUsSection";

interface BrandPageLayoutProps {
  children: React.ReactNode;
}

/**
 * Common layout wrapper for all brand pages
 * Includes Navigation, brand-specific content, WorkWithUsSection, FAQSection, and Footer
 */
export default function BrandPageLayout({ children }: BrandPageLayoutProps) {
  return (
    <div>
      <Navigation />
      {children}
      <WorkWithUsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

