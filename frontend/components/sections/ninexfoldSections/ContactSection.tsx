"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import SectionContainer from "@/components/ui/SectionContainer";

export default function ContactSection() {
    const router = useRouter();

    return (
        <section className="relative w-full flex items-center justify-center overflow-hidden py-10 sm:py-12 lg:py-14">
            <div className="absolute inset-0" aria-hidden>
                <Image
                    src="/consultancy.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Light wash: keeps the collage readable; image stays visible */}
            <div
                className="pointer-events-none absolute inset-0 bg-slate-950/40"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/35 to-slate-950/50"
                aria-hidden
            />

            <SectionContainer className="relative z-10 flex justify-center">
            <div className="w-full max-w-xl text-center text-white">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium uppercase tracking-[0.12em] text-[13px] sm:text-[14px] text-white mb-4 [text-shadow:0_1px_12px_rgba(0,0,0,0.65)]">
                    Consultancy
                </p>

                <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-semibold tracking-[-0.02em] leading-[1.1] mb-4 text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.55)]">
                    Strategy, delivery, and a single team alongside yours.
                </h1>

                <p className="text-[15px] sm:text-[16px] md:text-[17px] leading-[1.65] tracking-[-0.01em] mb-8 max-w-md mx-auto text-zinc-100 [text-shadow:0_1px_14px_rgba(0,0,0,0.7)]">
                    Tell us what you are trying to change. We will respond with a clear next step—whether that is a
                    short discovery call or a structured engagement.
                </p>

                <button
                    type="button"
                    onClick={() => router.push("/legal/contact-us")}
                    className="inline-flex items-center justify-center border border-white/90 bg-white/95 text-slate-900 text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white transition-colors"
                >
                    Contact us &rarr;
                </button>
            </div>
            </SectionContainer>
        </section>
    );
}
