
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface IndustryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return industriesData.map((industry) => ({
        slug: industry.slug,
    }));
}

export default async function IndustryPage(props: IndustryPageProps) {
    const params = await props.params;
    const industry = industriesData.find((i) => i.slug === params.slug);

    if (!industry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container text-center text-white">
                        <h1 className="mb-4 text-4xl font-bold md:text-6xl">{industry.title}</h1>
                        <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-200">
                            {industry.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                        {/* Left Column: Description */}
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">Overview</h2>
                            <p className="text-lg leading-relaxed text-gray-600">
                                {industry.longDescription}
                            </p>
                            <div className="pt-6">
                                <Link href="/legal/contact-us">
                                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                                        Partner With Us
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Features */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Solutions</h3>
                            <ul className="space-y-4">
                                {industry.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                                            <svg
                                                className="h-4 w-4 text-blue-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {industry.galleryImages.map((imgUrl, index) => (
                            <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={imgUrl}
                                    alt={`${industry.title} ${index + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Industries / Quick Links */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore Other Industries</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {industriesData
                            .filter((ind) => ind.slug !== industry.slug)
                            .slice(0, 4)
                            .map((relatedIndustry) => (
                                <Link
                                    key={relatedIndustry.slug}
                                    href={`/industries/${relatedIndustry.slug}`}
                                    className="group"
                                >
                                    <div className="relative h-48 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow">
                                        <Image
                                            src={relatedIndustry.image}
                                            alt={relatedIndustry.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4">
                                            <h3 className="text-white font-semibold text-lg">{relatedIndustry.title}</h3>
                                            <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                                                {relatedIndustry.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray-900 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                        Ready to transform your {industry.title.toLowerCase()} business?
                    </h2>
                    <p className="mb-8 text-xl text-gray-300">
                        Let&apos;s discuss how our digital solutions can drive your growth.
                    </p>
                    <Link href="/legal/contact-us">
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8">
                            Get in Touch
                        </Button>
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
