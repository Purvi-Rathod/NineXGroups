// "use client";

import { headingStyleHeading1 } from "@/lib/sharedStyles";

// export default function BrandValue() {
//   return (
//     <section className="bg-white py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-[135px]">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8 md:gap-12 lg:gap-20">
//           {/* Left Column - Heading */}
//           <div className="w-full md:max-w-[465px]">
//             <h1 
//               className="text-black"
//               style={{
//                 fontSize: "clamp(32px, 4vw, 44.397px)",
//                 lineHeight: "clamp(38px, 5vw, 53.3px)",
//                 fontWeight: 400,
//                 margin: "0",
//               }}
//             >
//               <span style={{ fontFamily: "'Manrope-Bold', Helvetica", fontWeight: 700 }}>Building Brands</span>
//               <span style={{ fontFamily: "'Manrope-SemiBold', Helvetica", fontWeight: 600 }}> That Influence, Connect & Scale</span>
//             </h1>
//           </div>

//           {/* Right Column - Content */}
//           <div className="w-full md:max-w-[565px]">
//             <p 
//               className="text-black"
//               style={{
//                 fontSize: "clamp(16px, 2vw, 19.775px)",
//                 lineHeight: "clamp(24px, 3vw, 29.662px)",
//                 fontWeight: 400,
//                 fontFamily: "'Lato-Regular', Helvetica",
//                 textAlign: "justify",
//                 margin: "0",
//               }}
//             >
//               Your brand isn't just how you look—it's how the world remembers you. At NinexFold, we build compelling brand identities rooted in strategy, creativity, and performance-driven marketing. We help companies attract the right audience, communicate with clarity, and convert loyal customers through data-backed campaigns.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function DataDrives() {
  return (
    <section className="px-[5%] py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 style={headingStyleHeading1} className="mb-4">Data That Drives Decisions</h2>
        </div>
        <div>
          <p className="text-gray-600 font-sans leading-relaxed">
            Our analytics uproot operational trends across your platform&apos;s sales 
            and customer journeys. With real-time dashboards and performance tracking, 
            you get the visibility needed to make smarter, faster business decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
