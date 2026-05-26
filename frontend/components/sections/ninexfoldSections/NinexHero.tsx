"use client";

import { headingStyleHeading1 } from "@/lib/sharedStyles";

export default function NinexHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:h-[calc(100vh-89px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/ninexfoldImages/port2.jpg')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Content */}
      <div className="section-container flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] xl:h-[710px] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-[104px] relative z-10 text-center">
        <h1 style={{ ...headingStyleHeading1, color: "#FFF" }} className="animate-fade-in text-2xl md:text-[65.495px] mb-2 sm:mb-3 md:mb-4">
          Nine X
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/95 max-w-3xl leading-[1.5] sm:leading-[1.6] md:leading-[1.7]">
          A specialised AI division delivering digital transformation across businesses.
        </p>
      </div>
    </section>
  );
}

