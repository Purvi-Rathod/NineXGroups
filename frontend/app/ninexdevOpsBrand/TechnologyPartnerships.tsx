"use client";

export default function TechnologyPartnerships() {
  const firstRow = [
    {
      name: "AWS",
      subtitle: "Premier Consulting Partner | 15 Competencies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Google Cloud",
      subtitle: "Premier Partner | 500+ Certifications",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Microsoft Azure",
      subtitle: "Gold Partner | 12 Specializations",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "Oracle Cloud",
      subtitle: "Platinum Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },

    // duplicate
    {
      name: "AWS",
      subtitle: "Premier Consulting Partner | 15 Competencies",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "Google Cloud",
      subtitle: "Premier Partner | 500+ Certifications",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Microsoft Azure",
      subtitle: "Gold Partner | 12 Specializations",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
    },
    {
      name: "Oracle Cloud",
      subtitle: "Platinum Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
  ];

  const secondRow = [
    {
      name: "OpenAI",
      subtitle: "Premier Enterprise Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Anthropic",
      subtitle: "Strategic Implementation Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    },
    {
      name: "Google AI",
      subtitle: "AI Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "NVIDIA",
      subtitle: "Elite Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg",
    },

    // duplicate
    {
      name: "OpenAI",
      subtitle: "Premier Enterprise Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
    },
    {
      name: "Anthropic",
      subtitle: "Strategic Implementation Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg",
    },
    {
      name: "Google AI",
      subtitle: "AI Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "NVIDIA",
      subtitle: "Elite Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/NVIDIA_logo.svg",
    },
  ];

  const thirdRow = [
    {
      name: "Palo Alto",
      subtitle: "Global Strategic Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/PaloAltoNetworks_2020_Logo.svg",
    },
    {
      name: "CrowdStrike",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/CrowdStrike_logo.svg",
    },
    {
      name: "Okta",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Okta_logo.svg",
    },
    {
      name: "SailPoint",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/SailPoint_logo.svg",
    },

    // duplicate
    {
      name: "Palo Alto",
      subtitle: "Global Strategic Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/PaloAltoNetworks_2020_Logo.svg",
    },
    {
      name: "CrowdStrike",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/CrowdStrike_logo.svg",
    },
    {
      name: "Okta",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Okta_logo.svg",
    },
    {
      name: "SailPoint",
      subtitle: "Premier Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5d/SailPoint_logo.svg",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Card = ({ partner }: any) => (
    <div className="group flex h-[64px] w-[310px] min-w-[310px] items-center overflow-hidden border border-[#e7e4ec] bg-white pl-[14px] pr-[14px] transition-all duration-300 hover:border-[#8b5cf6]/40 sm:h-[66px] sm:w-[330px] sm:min-w-[330px] md:h-[70px] md:w-[350px] md:min-w-[350px]">
      {/* LOGO */}
      <div className="flex w-[72px] min-w-[72px] items-center justify-center">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-auto max-h-[28px] max-w-[90px] w-auto object-contain"
        />
      </div>

      {/* DIVIDER */}
      <div className="mx-[10px] h-[22px] w-[1px] bg-[#8b5cf6]/40" />

      {/* TEXT */}
      <div className="flex min-w-0 flex-1 flex-col justify-center overflow-hidden">
        <h3 className="truncate text-[13px] font-[500] leading-none tracking-[-0.12px] text-[#101828] sm:text-[14px]">
          {partner.name}
        </h3>

        <p className="mt-[4px] truncate text-[10px] font-[400] leading-none tracking-[-0.01px] text-[#667085] sm:text-[11px]">
          {partner.subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#f6f4f8] py-[56px] sm:py-[70px] md:py-[86px]">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(246,244,248,1))]" />

      <div className="relative mx-auto flex w-full max-w-full flex-col items-center px-[12px]">
        {/* LABEL */}
        <div className="mb-[14px] flex items-center justify-center gap-[8px] sm:mb-[16px] md:mb-[18px] md:gap-[10px]">
          <div className="h-[10px] w-[10px] bg-[#8b5cf6]" />

          <span className="text-[11px] font-[500] uppercase tracking-[3px] text-[#8b5cf6] sm:text-[12px] sm:tracking-[4px] md:text-[14px] md:tracking-[5px]">
            Technology Partnerships
          </span>
        </div>

        {/* HEADING */}
        <h2 className="mx-auto max-w-[95%] text-center text-[28px] font-[400] leading-[1.15] tracking-[-1px] text-[#07111f] sm:text-[36px] sm:tracking-[-1.5px] md:text-[44px] md:tracking-[-2px]">
          Trusted by leading technology partners
        </h2>

        {/* TEXT */}
        <p className="mx-auto mt-[14px] max-w-[92%] text-center text-[13px] font-[400] leading-[1.6] tracking-[-0.05px] text-[#667085] sm:mt-[16px] sm:text-[14px] md:mt-[20px] md:max-w-[760px] md:text-[16px]">
          We collaborate with world-class cloud, AI, and cybersecurity
          partners to deliver scalable, intelligent, and secure digital
          transformation solutions.
        </p>

        {/* ROWS */}
        <div className="mt-[34px] w-full space-y-[10px] overflow-hidden sm:mt-[44px] md:mt-[58px] md:space-y-[12px]">
          {/* ROW 1 */}
          <div className="relative overflow-hidden">
            <div className="marquee flex w-max gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {firstRow.map((partner, index) => (
                <Card key={`first-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="relative overflow-hidden mt-4">
            <div className="marquee-reverse flex w-max gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {secondRow.map((partner, index) => (
                <Card key={`second-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          {/* ROW 3 */}
          <div className="relative overflow-hidden mt-4">
            <div className="marquee flex w-max gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {thirdRow.map((partner, index) => (
                <Card key={`third-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        {/* ANIMATION */}
        <style jsx>{`
          .marquee {
            animation: marquee 28s linear infinite;
          }

          .marquee-reverse {
            animation: marqueeReverse 28s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes marqueeReverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </section>
  );
}