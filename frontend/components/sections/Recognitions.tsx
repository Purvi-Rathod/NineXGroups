"use client";

import Image from "next/image";
import { headingStyleHeading1 } from "@/lib/sharedStyles";

export default function Recognitions() {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-white">
      <div className="container max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44.27px] leading-tight sm:leading-[1.1] md:leading-[50.5px]" style={headingStyleHeading1}>
            Recognitions
          </h2>
        </div>

        {/* Layered Panels Container */}
        <div className="relative flex items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[500px] py-5 sm:py-10">
          
          {/* Left Panel - Behind Center, Partially Visible */}
          <div 
            className="absolute z-0 hidden lg:block w-[350px] xl:w-[450px] 2xl:w-[550px] h-auto"
            style={{
              left: "5%",
              top: "50%",
              transform: "translateY(-50%)",
              maxHeight: "600px",
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "912/550" }}>
              <Image
                src="/images/recognition2.png"
                alt="Recognition Left Panel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 550px"
                unoptimized
              />
            </div>
          </div>

          {/* Right Panel - Behind Center, Partially Visible */}
          <div 
            className="absolute z-0 hidden lg:block w-[350px] xl:w-[450px] 2xl:w-[550px] h-auto"
            style={{
              right: "5%",
              top: "50%",
              transform: "translateY(-50%)",
              maxHeight: "600px",
            }}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl" style={{ aspectRatio: "912/550" }}>
              <Image
                src="/images/recognition3.png"
                alt="Recognition Right Panel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 550px"
                unoptimized
              />
            </div>
          </div>

          {/* Center Panel - Main Award Graphic */}
          <div 
            className="relative z-10 w-full max-w-[945px] px-4"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "945/532" }}>
              {/* Spotlight effects from top corners */}
              <div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-20"
                style={{
                  background: `
                    radial-gradient(ellipse at top left, rgba(255,255,255,0.5) 0%, transparent 50%),
                    radial-gradient(ellipse at top right, rgba(255,255,255,0.5) 0%, transparent 50%)
                  `,
                }}
              />
              
              <Image
                src="/images/recognition1.png"
                alt="Recognition Award"
                fill
                className="object-contain z-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 945px"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

