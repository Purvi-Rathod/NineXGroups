"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type {
  BlogContentBlock,
  BlogBlockHeading,
  BlogBlockImage,
  BlogBlockList,
  BlogBlockCode,
  BlogBlockCallout,
  BlogBlockCarousel,
  BlogBlockImageContent,
  CalloutVariant,
} from "@/types/blog";

interface BlogBlockRendererProps {
  blocks: BlogContentBlock[];
  className?: string;
}

export default function BlogBlockRenderer({ blocks, className = "" }: BlogBlockRendererProps) {
  if (!blocks?.length) return null;
  return (
    <div className={`space-y-6 ${className}`}>
      {blocks.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </div>
  );
}

function Block({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "heading":
      return <RenderHeading block={block} />;
    case "paragraph":
      return (
        <p className="text-gray-700 leading-relaxed font-lato">
          {block.text}
        </p>
      );
    case "image":
      return <RenderImage block={block} />;
    case "quote":
      return (
        <blockquote className="border-l-4 border-[#1959FA] pl-4 py-2 my-4 italic text-gray-700 bg-gray-50/80 rounded-r-lg">
          <p className="font-lato">&ldquo;{block.text}&rdquo;</p>
          {block.author && (
            <cite className="block mt-2 text-sm text-gray-500 not-italic">— {block.author}</cite>
          )}
        </blockquote>
      );
    case "list":
      return <RenderList block={block} />;
    case "code":
      return <RenderCode block={block} />;
    case "divider":
      return <hr className="border-gray-200 my-6" />;
    case "callout":
      return <RenderCallout block={block} />;
    case "carousel":
      return <RenderCarousel block={block} />;
    case "imageContent":
      return <RenderImageContent block={block} />;
    default:
      return null;
  }
}

function RenderCarousel({ block }: { block: BlogBlockCarousel }) {
  const slides = block.images.filter((img) => img.url);
  if (slides.length === 0) return null;
  if (slides.length === 1) {
    return (
      <figure className="my-6">
        <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video w-full">
          <Image
            src={slides[0].url}
            alt={slides[0].alt || "Blog image"}
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>
        {slides[0].caption && (
          <figcaption className="text-sm text-gray-500 mt-2 text-center font-lato">
            {slides[0].caption}
          </figcaption>
        )}
      </figure>
    );
  }
  return (
    <div className="my-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="rounded-xl overflow-hidden"
      >
        {slides.map((img, i) => (
          <SwiperSlide key={i}>
            <figure>
              <div className="relative aspect-video w-full bg-gray-100">
                <Image
                  src={img.url}
                  alt={img.alt || `Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  unoptimized
                />
              </div>
              {img.caption && (
                <figcaption className="text-sm text-gray-500 mt-2 text-center font-lato">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function RenderImageContent({ block }: { block: BlogBlockImageContent }) {
  if (!block.imageUrl) return null;
  const isReversed = !!block.reverse;
  return (
    <div
      className={`my-8 flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-6 md:gap-8 items-stretch rounded-xl overflow-hidden border border-slate-200/80 bg-white`}
    >
      <div className="relative w-full md:w-[45%] aspect-video md:aspect-auto md:min-h-[240px] flex-shrink-0">
        <Image
          src={block.imageUrl}
          alt={block.imageAlt || block.heading}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 45vw"
          unoptimized
        />
      </div>
      <div className="flex flex-col justify-center p-6 md:p-8 flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 font-manrope mb-3">
          {block.heading}
        </h3>
        <p className="text-slate-600 leading-relaxed font-lato">
          {block.description}
        </p>
      </div>
    </div>
  );
}

function RenderHeading({ block }: { block: BlogBlockHeading }) {
  const common = "font-manrope font-bold text-gray-900 mt-8 mb-3";
  if (block.level === 1)
    return <h1 className={`text-2xl md:text-3xl ${common}`}>{block.text}</h1>;
  if (block.level === 2)
    return <h2 className={`text-xl md:text-2xl ${common}`}>{block.text}</h2>;
  return <h3 className={`text-lg md:text-xl ${common}`}>{block.text}</h3>;
}

function RenderImage({ block }: { block: BlogBlockImage }) {
  if (!block.url) return null;
  return (
    <figure className="my-6">
      <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-video w-full">
        <Image
          src={block.url}
          alt={block.alt || "Blog image"}
          fill
          className="object-contain"
          sizes="100vw"
          unoptimized
        />
      </div>
      {block.caption && (
        <figcaption className="text-sm text-gray-500 mt-2 text-center font-lato">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
}

function RenderList({ block }: { block: BlogBlockList }) {
  const ListTag = block.ordered ? "ol" : "ul";
  const listClass = block.ordered
    ? "list-decimal list-inside space-y-1 font-lato text-gray-700"
    : "list-disc list-inside space-y-1 font-lato text-gray-700";
  return (
    <ListTag className={listClass}>
      {block.items.filter(Boolean).map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ListTag>
  );
}

function RenderCode({ block }: { block: BlogBlockCode }) {
  return (
    <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto text-sm font-mono my-4">
      <code>{block.code}</code>
    </pre>
  );
}

const calloutStyles: Record<CalloutVariant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-900",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
  success: "bg-emerald-50 border-emerald-200 text-emerald-900",
};

function RenderCallout({ block }: { block: BlogBlockCallout }) {
  return (
    <div
      className={`rounded-lg border-l-4 p-4 font-lato ${calloutStyles[block.variant]}`}
      role="note"
    >
      {block.text}
    </div>
  );
}
