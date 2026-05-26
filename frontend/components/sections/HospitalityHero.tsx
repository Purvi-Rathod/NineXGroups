"use client";

import { headingStyleHeading1 } from "@/lib/sharedStyles";

export default function HospitalityHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:h-[calc(100vh-89px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ninexfoldImages/hospitalityHero.png')" }}
      />
      

      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:h-[710px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[104px] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-[135px] relative z-10 text-center">
        <h1 style={{ ...headingStyleHeading1, color: "#FFF" }} className="animate-fade-in text-2xl md:text-[65.495px] mb-2 sm:mb-3 md:mb-4">
          Hospitality
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-4xl leading-[1.5] sm:leading-[1.6] md:leading-[1.7] px-2 sm:px-4">
          We power branding, technology, operations & global scaling so you can focus on growth.
        </p>
      </div>
    </section>
  );
}

