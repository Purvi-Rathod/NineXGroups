"use client";

import {
  Cloud,
  BrainCircuit,
  Shield,
  Code2,
  Infinity,
  Network,
  Bot,
  Users,
  Layers,
  Database,
  Cpu,
  Workflow,
} from "lucide-react";

const cardStyles = [
    "cloud",
    "brain-circuit",
    "shield",
    "code2",
    "infinity",
    "network",
    "bot",
    "users",
    "layers",
    "database",
    "cpu",
    "workflow",
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
    const className =
  "h-[64px] w-[64px] text-[#22D3EE] sm:h-[72px] sm:w-[72px]";
    const strokeWidth = 1.5;

    const iconMap: Record<string, React.ReactNode> = {
        "cloud":         <Cloud strokeWidth={strokeWidth} className={className} />,
        "brain-circuit": <BrainCircuit strokeWidth={strokeWidth} className={className} />,
        "shield":        <Shield strokeWidth={strokeWidth} className={className} />,
        "code2":         <Code2 strokeWidth={strokeWidth} className={className} />,
        "infinity":      <Infinity strokeWidth={strokeWidth} className={className} />,
        "network":       <Network strokeWidth={strokeWidth} className={className} />,
        "bot":           <Bot strokeWidth={strokeWidth} className={className} />,
        "users":         <Users strokeWidth={strokeWidth} className={className} />,
        "layers":        <Layers strokeWidth={strokeWidth} className={className} />,
        "database":      <Database strokeWidth={strokeWidth} className={className} />,
        "cpu":           <Cpu strokeWidth={strokeWidth} className={className} />,
        "workflow":      <Workflow strokeWidth={strokeWidth} className={className} />,
    };

    const icon = iconMap[type];
    if (!icon) return null;

    return (
        <div className="h-[64px] sm:h-[72px] lg:h-[82px] mb-[26px] flex items-center">
            {icon}
        </div>
    );
}

export default function WhatWeDoSection({
    cards,
}: WhatWeDoSectionProps) {
    return (
        <div className="min-h-screen bg-[#f6f4f8] px-4 sm:px-5 md:px-8 lg:px-12 xl:px-14 py-[40px] md:py-[56px]">

            <div className="w-full max-w-[1220px] mx-auto">

                {/* TOP SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 gap-0 mb-[42px] lg:mb-[58px]">

                    <div className="lg:col-span-3 flex items-start pt-[4px] lg:pt-[10px]">

                        <div className="flex items-center gap-2">

                            <div className="w-[8px] h-[8px] bg-[#22D3EE]" />

                            <p className="text-[13px] tracking-[1.4px] font-semibold text-[#22D3EE] uppercase">
                                What We Do
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-9 lg:ml-[100px]">

                        <h2 className="max-w-full text-[30px] sm:text-[40px] md:text-[46px] lg:text-[52px] leading-[1.02] tracking-[-1.5px] sm:tracking-[-2px] lg:tracking-[-2.4px] font-normal text-black">
                            NineXFold brings together strategy, architecture,
                            implementation, and optimization services across six core
                            practice areas:
                        </h2>
                    </div>
                </div>

                {/* CARD GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px] sm:gap-[8px] lg:gap-[6px]">

                    {/* INTRO CARD */}
                    <div className="min-h-[300px] sm:min-h-[320px] lg:min-h-[336px] px-[18px] sm:px-[22px] lg:px-[24px] pt-[18px] sm:pt-[20px] lg:pt-[22px] pb-[16px] sm:pb-[18px]">

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] text-[#0b0d39] mb-8">
                            NineXFold - Enterprise Systems
                        </p>

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2.05] text-[#343434] mb-10 max-w-[240px]">
                            We bring together strategy, architecture, implementation, and
                            optimization services to help businesses build scalable,
                            intelligent, and future-ready systems.
                        </p>

                        <p className="text-[13px] sm:text-[14px] leading-[1.9] sm:leading-[2] font-semibold text-[#22D3EE]">
                            One partner. Six practice areas.
                            <br />
                            Endless impact.
                        </p>
                    </div>

                    {/* REUSABLE CARDS */}
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="min-h-[420px] sm:min-h-[460px] lg:min-h-[520px] border border-[#e7e4ec] bg-white px-[20px] sm:px-[24px] lg:px-[28px] pt-[22px] sm:pt-[24px] lg:pt-[28px] pb-[22px] sm:pb-[24px] lg:pb-[28px] flex flex-col"
                        >

                            {/* ICON */}
                            <CardIcon type={cardStyles[index % cardStyles.length]} />

                            {/* FEATURE LABEL */}
                            <div className="mb-[18px]">

                                <span className="text-[11px] tracking-[2px] uppercase text-[#22D3EE] font-semibold">
                                    Feature {index + 1}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h3 className="text-[22px] sm:text-[24px] leading-[1.08] tracking-[-1.2px] text-[#0b0d39] font-normal mb-[18px] max-w-[320px]">
                                {card.title}
                            </h3>

                            {/* HIGHLIGHT */}
                            <p className="text-[15px] sm:text-[16px] leading-[1.7] tracking-[-0.2px] text-[#22D3EE] mb-[22px] max-w-[340px]">
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