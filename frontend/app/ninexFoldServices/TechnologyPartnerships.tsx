"use client";

export default function TechnologyPartnerships() {
  const partners = [
    {
      name: "Salesforce",
      subtitle: "Platinum Partner | 2,000+ certifications",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
    {
      name: "SAP",
      subtitle: "Global Strategic Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
    },
    {
      name: "Oracle",
      subtitle: "Platinum Cloud | Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    },
    {
      name: "Microsoft",
      subtitle: "Gold Dynamics Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Adobe",
      subtitle: "Gold Solution Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
    },
    {
      name: "HubSpot",
      subtitle: "Diamond Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg",
    },
    {
      name: "Snowflake",
      subtitle: "Elite Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg",
    },
    {
      name: "Tableau",
      subtitle: "Gold Partner",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png",
    },
  ];

  const firstRow = [...partners.slice(0, 4), ...partners.slice(0, 4)];
  const secondRow = [...partners.slice(4, 8), ...partners.slice(4, 8)];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Card = ({ partner }: any) => (
    <div className="group flex h-[62px] w-[300px] min-w-[300px] items-center overflow-hidden border border-[#ececec] bg-white pl-[12px] pr-[12px] sm:h-[64px] sm:w-[320px] sm:min-w-[320px] md:h-[66px] md:w-[340px] md:min-w-[340px]">
      <div className="flex w-[56px] min-w-[56px] items-center justify-center sm:w-[62px] sm:min-w-[62px] md:w-[70px] md:min-w-[70px]">
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-auto max-h-[20px] max-w-[54px] w-auto object-contain sm:max-h-[22px] sm:max-w-[58px] md:max-h-[26px] md:max-w-[68px]"
        />
      </div>

      <div className="mx-[8px] h-[18px] w-[1px] bg-[#ffb37c] sm:mx-[9px] sm:h-[20px] md:mx-[10px] md:h-[22px]" />

      <div className="flex min-w-0 flex-1 flex-col justify-center overflow-hidden">
        <h3 className="mt-[2px] whitespace-nowrap text-[12px] font-[500] leading-none tracking-[-0.12px] text-[#101828] sm:text-[13px] md:mt-[3px] md:text-[14px]">
          {partner.name}
        </h3>

        <p className="mt-[2px] whitespace-nowrap text-[9.5px] font-[400] leading-none tracking-[-0.01px] text-[#667085] sm:text-[10px] md:mt-[3px] md:text-[11.5px]">
          {partner.subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f7] py-[56px] sm:py-[70px] md:py-[86px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.95),rgba(245,245,245,1))]" />

      <div className="relative mx-auto flex w-full max-w-full flex-col items-center px-[12px]">
        <div className="mb-[14px] flex items-center justify-center gap-[8px] sm:mb-[16px] md:mb-[18px] md:gap-[10px]">
          <div className="h-[10px] w-[10px]  bg-[#ff7a1a]" />

          <span className="text-[11px] font-[500] uppercase tracking-[3px] text-[#ff7a1a] sm:text-[12px] sm:tracking-[4px] md:text-[14px] md:tracking-[5px]">
            Technology Partnerships
          </span>
        </div>

        <h2 className="mx-auto max-w-[95%] text-center text-[28px] font-[400] leading-[1.15] tracking-[-1px] text-[#07111f] sm:text-[36px] sm:tracking-[-1.5px] md:whitespace-nowrap md:text-[44px] md:tracking-[-2px]">
          Trusted by leading technology partners
        </h2>

        <p className="mx-auto mt-[14px] max-w-[92%] text-center text-[13px] font-[400] leading-[1.6] tracking-[-0.05px] text-[#667085] sm:mt-[16px] sm:text-[14px] md:mt-[20px] md:max-w-[760px] md:text-[16px]">
          We collaborate with industry-leading technology partners<br />to deliver innovative, scalable, and future-ready solutions.
        </p>

        <div className="mt-[34px] w-full space-y-[10px] overflow-hidden sm:mt-[44px] md:mt-[58px] md:space-y-[12px]">
          <div className="relative overflow-hidden">
            <div className="marquee flex w-max gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {firstRow.map((partner, index) => (
                <Card key={`first-${index}`} partner={partner} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="marquee-reverse flex w-max gap-[10px] sm:gap-[12px] md:gap-[14px]">
              {secondRow.map((partner, index) => (
                <Card key={`second-${index}`} partner={partner} />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .marquee {
            animation: marquee 24s linear infinite;
          }

          .marquee-reverse {
            animation: marqueeReverse 24s linear infinite;
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
