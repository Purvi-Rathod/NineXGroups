"use client";

import { imageCardTextOverlayStyle } from "@/lib/sharedStyles";

export default function ServiceCards() {
  const services = [
    {
      title: "Vacation Ownership",
      image: "/images/ninexfoldImages/automative2.png",
    },
    {
      title: "Leisure Experiences",
      image: "/images/ninexfoldImages/port.png",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-white">
      <div className="container max-w-[1200px] mx-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl w-full max-w-[391px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[241px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/15 group-hover:from-black/70 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col p-5 sm:p-6 md:p-7 lg:p-8">
                {/* Title - Bottom Left */}
                <div className="mt-auto">
                  <div className="inline-block relative">
                    <h3 
                      style={imageCardTextOverlayStyle}
                    >
                      {service.title}
                    </h3>
                    <div className="relative mt-[10px]">
                      {/* Default white underline */}
                      <div className="h-[2px] w-full bg-white/30 group-hover:opacity-0 transition-opacity duration-300" />
                      {/* Blue gradient underline - only visible on hover */}
                      <div
                        className="h-[4px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-[1px] left-0"
                        style={{
                          background: "linear-gradient(90deg, #12D4FF 3.33%, #1959FA 95.41%)",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Arrow Button - Bottom Right */}
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 xl:bottom-8 right-4 sm:right-5 md:right-6 lg:right-7 xl:right-8">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="63" height="27" viewBox="0 0 63 27" fill="none" className="hover:bg-gradient-to-b from-[#12D4FF] to-[#1959FA] hover:overflow-hidden rounded-full" >
                          <rect x="0.5" y="0.5" width="62" height="26" rx="13" fill="url(#paint0_linear_1_1258)" stroke="white" />
                          <path d="M44.3536 14.3536C44.5488 14.1583 44.5488 13.8417 44.3536 13.6464L41.1716 10.4645C40.9763 10.2692 40.6597 10.2692 40.4645 10.4645C40.2692 10.6597 40.2692 10.9763 40.4645 11.1716L43.2929 14L40.4645 16.8284C40.2692 17.0237 40.2692 17.3403 40.4645 17.5355C40.6597 17.7308 40.9763 17.7308 41.1716 17.5355L44.3536 14.3536ZM17 14V14.5H44V14V13.5H17V14Z" fill="white" />
                          
                        </svg>
                      
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

