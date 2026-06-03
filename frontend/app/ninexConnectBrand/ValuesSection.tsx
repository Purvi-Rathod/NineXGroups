"use client";

import Image from "next/image";

interface ValuesSectionProps {
    eyebrow?: string;
    title: string;
    description: string;
    quote: string;
    quoteDescription: string;
    tags: string[];
    image: string;
}

export default function ValuesSection({
    eyebrow = "OUR VALUES",
    title,
    description,
    quote,
    quoteDescription,
    tags,
    image,
}: ValuesSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#f6f4f8]">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.18),_transparent_42%)]" />

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.10)_60%)]" />

            <div className="absolute bottom-[-180px] sm:bottom-[-220px] left-[-180px] sm:left-[-240px] w-[420px] sm:w-[720px] h-[420px] sm:h-[720px] bg-[#22D3EE]/25 blur-[120px] sm:blur-[165px]" />

            <div className="absolute top-[-120px] sm:top-[-180px] right-[-120px] sm:right-[-180px] w-[240px] sm:w-[420px] h-[240px] sm:h-[420px] bg-white/55 blur-[90px] sm:blur-[130px]" />

            <div className="absolute inset-0 bg-white/8" />

            {/* CONTAINER */}
            <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[34px] pt-[42px] sm:pt-[52px] lg:pt-[60px] pb-[46px] sm:pb-[56px]">

                {/* TOP */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[42px] sm:gap-[60px] lg:gap-[90px] items-start">

                    {/* LEFT */}
                    <div>

                        {/* EYEBROW */}
                        <div className="flex items-center gap-[10px] mb-[18px] sm:mb-[24px]">

                            <div className="w-[6px] h-[6px] bg-[#22D3EE]" />

                            <span className="uppercase tracking-[3px] sm:tracking-[4px] text-[9px] sm:text-[10px] font-semibold text-[#22D3EE]">
                                {eyebrow}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="max-w-[420px] text-[30px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.02] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.4px] font-normal text-black">
                            {title}
                        </h2>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="w-full lg:pt-[90px]">

                        <p className="text-[14px] sm:text-[15px] leading-[1.9] sm:leading-[2] tracking-[-0.1px] text-[#555555] max-w-full lg:max-w-[560px]">
                            {description}
                        </p>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[34px] sm:gap-[50px] lg:gap-[70px] mt-[34px] sm:mt-[42px] items-start">

                    {/* LEFT BOX */}
                    <div className="max-w-full sm:max-w-[320px] lg:pt-[90px]">

                        <div className="text-[#22D3EE] text-[42px] sm:text-[52px] leading-none font-semibold mb-[14px] sm:mb-[18px]">
                            &quot;
                        </div>

                        <h3 className="text-[24px] sm:text-[28px] leading-[1.04] tracking-[-1.2px] sm:tracking-[-2px] font-medium text-[#0b0d39] mb-[18px] sm:mb-[28px]">
                            {quote}
                        </h3>

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2.05] tracking-[-0.1px] text-black/68 mb-[22px] sm:mb-[30px]">
                            {quoteDescription}
                        </p>

                        <div className="flex flex-wrap gap-x-[8px] gap-y-[4px]">

                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-[12px] sm:text-[13px] font-semibold tracking-[-0.1px] text-[#0b0d39]"
                                >
                                    {tag}
                                    {index !== tags.length - 1 && " |"}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT BOX */}
                    <div className="relative overflow-hidden bg-[#efefef] w-full h-[260px] sm:h-[340px] md:h-[420px] lg:h-[420px]">

                        <Image
                            src={image}
                            alt="values"
                            width={900}
                            height={900}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}