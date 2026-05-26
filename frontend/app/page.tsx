import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import FAQSection from "@/components/sections/ninexfoldSections/FAQSection";
import FutureReadySection from "@/components/sections/ninexfoldSections/FutureReadySection";
import WhatWeDoSection from "@/components/sections/ninexfoldSections/WhatWeDoSection";
import WhoWeAreSection from "@/components/sections/ninexfoldSections/WhoWeAreSection";
import ContactSection from "@/components/sections/ninexfoldSections/ContactSection";
import HeroSection from "@/components/sections/ninexfoldSections/HeroSection";
import ReportSection from "@/components/sections/ninexfoldSections/ReportSection";
import FounderNoteSection from "@/components/sections/ninexfoldSections/FounderNoteSection";
import CareerSection from "@/components/sections/ninexfoldSections/CareerSection";
import AISection from "@/components/sections/ninexfoldSections/AISection";



export default function NinexFoldPage() {
    return (
        <div className="font-sans">
            <HeroSection />
            <ReportSection />
            <WhoWeAreSection />
            <FounderNoteSection />
            <WhatWeDoSection />
            <AISection />
            {/* <PerformanceDrivenSection /> */}
            {/* <WorkWithUsSection /> */}
            {/* <FutureReadySection />  */}
            <CareerSection />
            {/* <FAQSection /> */}
            <ContactSection />
        </div>
    );
}



