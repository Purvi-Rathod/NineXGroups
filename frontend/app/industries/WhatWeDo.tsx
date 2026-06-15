"use client";

const cardStyles = [
    "diamond",
    "line-arrow",
    "circle-flow",
    "line-arrow",
    "bars",
    "diamond",
    "connected",
    "pill-bars",
];

interface CardItem {
    title: string;
    highlight: string;
    description: string;
}

interface WhatWeDoSectionProps {
    cards: CardItem[];
}

function CardIcon({ type }: { type: string }) {
    switch (type) {
        case "diamond":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
                    <div className="relative w-[58px] h-[58px] rotate-45 border border-[#0A1633]">
                        <div className="absolute inset-[10px] border border-[#d7d7d7]" />
                    </div>
                </div>
            );

        case "line-arrow":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] relative flex items-center">
                    <div className="w-full border-t border-[#0A1633]" />
                    <div className="absolute right-0 text-[#0A1633] text-[18px] lg:text-[20px]">
                        →
                    </div>
                </div>
            );

        case "circle-flow":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center justify-between">
                    <div className="w-[40px] h-[1px] bg-[#cccccc]" />

                    <div className="w-[50px] h-[50px] rounded-full border border-[#0A1633]" />

                    <div className="text-[#bbbbbb] text-[18px] lg:text-[20px]">
                        →
                    </div>
                </div>
            );

        case "bars":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-end gap-4">
                    <div className="w-[2px] h-[20px] bg-[#0A1633]" />
                    <div className="w-[2px] h-[34px] bg-[#0A1633]" />
                    <div className="w-[2px] h-[48px] bg-[#0A1633]" />
                    <div className="w-[2px] h-[64px] bg-[#0A1633]" />
                </div>
            );

        case "connected":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center justify-between">
                    <div className="w-[42px] h-[42px] rounded-full border border-[#0A1633]" />

                    <div className="w-[42px] h-[1px] bg-[#0A1633]" />

                    <div className="w-[14px] h-[14px] rounded-full bg-[#0A1633]" />
                </div>
            );

        case "pill-bars":
            return (
                <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-end gap-[10px]">
                    <div className="w-[14px] h-[14px] rounded-full border border-[#0A1633]" />
                    <div className="w-[14px] h-[28px] rounded-full border border-[#0A1633]" />
                    <div className="w-[14px] h-[42px] rounded-full border border-[#0A1633]" />
                    <div className="w-[14px] h-[58px] rounded-full border border-[#0A1633]" />
                </div>
            );

        default:
            return null;
    }
}

export default function WhatWeDoSection({
    cards,
}: WhatWeDoSectionProps) {
    return (
        <div
            className="min-h-screen bg-[#f7f5f3] px-4 sm:px-5 md:px-8 lg:px-12 xl:px-14 py-[40px] md:py-[56px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
        >

            <div className="w-full max-w-[1220px] mx-auto">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 gap-0 mb-[42px] lg:mb-[58px]">

                    <div className="lg:col-span-3 flex items-start pt-[4px] lg:pt-[10px]">

                        <div className="flex items-center gap-2">

                            <div className="w-[8px] h-[8px] bg-[#0A1633]" />

                            <p className="text-[13px] tracking-[1.4px] font-semibold text-[#0A1633] uppercase">
                                What We Do
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-9 lg:ml-[100px]">

                        <h2 className="max-w-full lg:max-w-[760px] text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] tracking-[-2.4px] font-normal text-[#0A1633]">
                            We help businesses transform and thrive in the digital era by providing strategy, architecture, implementation, and optimization services.
                        </h2>
                    </div>
                </div>

                {/* CARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[8px] lg:gap-[6px]">

                    {/* INTRO CARD */}
                    <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] text-[#0A1633] mb-8">
                            NineXGroups is a global technology consulting and services company that helps businesses transform and thrive in the digital era. We bring together strategy, architecture, implementation, and optimization services to help businesses build scalable, intelligent, and future-ready systems.
                        </p>

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2.05] text-[#343434] mb-10 max-w-[240px]">
                            We bring together strategy, architecture, implementation, and
                            optimization services to help businesses build scalable,
                            intelligent, and future-ready systems.
                        </p>

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] font-semibold text-[#0A1633]">
                            One partner. Six practice areas.
                            <br />
                            Endless impact.
                        </p>
                    </div>

                    {/* REUSABLE CARDS */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] border border-[#dddddd] bg-[#faf9f7] px-[20px] sm:px-[24px] lg:px-[28px] pt-[22px] sm:pt-[24px] lg:pt-[28px] pb-[22px] sm:pb-[24px] lg:pb-[28px] flex flex-col"
                        >

                            {/* ICON */}
                            <CardIcon type={cardStyles[index % cardStyles.length]} />

                            {/* FEATURE LABEL */}
                            <div className="mb-[18px]">

                                <span className="text-[11px] tracking-[2px] uppercase text-[#0A1633] font-semibold">
                                    Feature {index + 1}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[22px] sm:text-[24px] leading-[1.08] tracking-[-1.2px] text-[#0A1633] font-normal mb-[18px] max-w-[320px]">
                                {card.title}
                            </h3>

                            {/* HIGHLIGHT */}
                            <p className="text-[15px] sm:text-[16px] leading-[1.7] tracking-[-0.2px] text-[#0A1633] mb-[22px] max-w-[340px]">
                                {card.highlight}
                            </p>

                            {/* DESCRIPTION */}
                            <p className="text-[13px] sm:text-[14px] leading-[2] tracking-[-0.1px] text-[#444] mt-auto">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}