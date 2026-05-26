"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface OverviewSectionProps {
    eyebrow: string;
    leftTitle: string[];
    title: string;
    description: string;
    implementationTitle: string;
    implementations: string[];
    image: string;
}

export default function OverviewSection({
    eyebrow,
    leftTitle,
    title,
    description,
    implementationTitle,
    implementations,
    image,
}: OverviewSectionProps) {
    return (
        <section className="relative overflow-hidden bg-[#f3f3f1]">

            {/* LEFT GLOW */}
            <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#ff5b2e]/18 blur-[120px]" />

            {/* CONTAINER */}
            <div className="relative z-10 max-w-[1220px] mx-auto px-5 sm:px-6 lg:px-8 pt-[70px] pb-0">

                <div className="grid lg:grid-cols-[360px_1fr] gap-[70px] items-start">

                    {/* LEFT SIDE */}
                    <div className="relative min-h-[520px] flex items-center">

                        <div className="absolute left-0 top-[70%] -translate-y-1/2">

                            {leftTitle.map((item, index) => (
                                <div key={index} className="mb-[8px]">

                                    <h2 className="text-[54px] sm:text-[60px] lg:text-[70px] leading-[0.88] tracking-[-3px] font-bold text-gray-800 uppercase gap-[10px] py-[6px]">
                                        {item}
                                    </h2>

                                    {index !== leftTitle.length - 1 && (
                                        <div className="w-[230px] h-[3px] bg-gray-500/30" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="pt-[6px]">

                        {/* EYEBROW */}
                        <div className="flex items-center gap-[10px] mb-[34px]">

                            <div className="w-[7px] h-[7px] bg-[#ff5b2e]" />

                            <span className="uppercase tracking-[3px] text-[11px] font-medium text-[#ff5b2e]">
                                {eyebrow}
                            </span>
                        </div>

                        {/* TITLE */}
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-[14px] sm:text-[20px] lg:text-[24px] leading-[1.3] tracking-[-0.5px] font-light text-[#111111] max-w-[760px] mb-[14px]"
                        >
                            {title}
                        </motion.h2>

                        {/* DESCRIPTION */}
                        <p className="text-[13px] leading-[1.8] text-black/68 max-w-[720px] mb-[14px]">
                            {description}
                        </p>

                        {/* IMPLEMENT TITLE */}
                        <h3 className="text-[#ff5b2e] text-[16px] leading-none tracking-[-0.5px] font-light mb-[14px]">
                            {implementationTitle}
                        </h3>

                        {/* LIST */}
                        <div className="mb-0">

                            {implementations.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-[6px] py-[2px]"
                                >

                                    <span className="w-[4px] h-[4px] rounded-full bg-black mt-[9px] shrink-0" />

                                    <p className="text-[13px] leading-[1.25] text-black/84">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* IMAGE */}
                        <div className="relative overflow-hidden mt-0 mb-0 leading-none">

                            <Image
                                src={image}
                                alt="overview"
                                width={1200}
                                height={800}
                                className="w-full h-[350px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}