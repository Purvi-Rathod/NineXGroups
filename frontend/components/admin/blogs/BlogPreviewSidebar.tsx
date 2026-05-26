"use client";

import React from "react";
import Image from "next/image";
import BlogBlockRenderer from "@/components/blogs/BlogBlockRenderer";
import type { BlogContentBlock, BlogServiceTag } from "@/types/blog";
import { SERVICE_TAGS } from "@/lib/blog-templates";

export interface BlogPreviewData {
  title: string;
  excerpt: string;
  author: string;
  coverImageUrl: string;
  contentBlocks: BlogContentBlock[];
  tags?: BlogServiceTag[];
}

interface BlogPreviewSidebarProps {
  data: BlogPreviewData;
}

export default function BlogPreviewSidebar({ data }: BlogPreviewSidebarProps) {
  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <aside className="hidden xl:block w-[380px] shrink-0 self-start">
      <div className="sticky top-[7rem] z-20 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col max-h-[calc(100vh-7.5rem)]">
        <div className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center gap-2 shrink-0">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-sm font-medium text-slate-700">Live preview</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4 text-sm">
          <h2 className="text-lg font-bold text-slate-900 font-manrope mb-1 line-clamp-2">
            {data.title || "Untitled"}
          </h2>
          <p className="text-xs text-slate-500 mb-4">
            {data.author || "Author"} · {dateStr}
          </p>
          {data.coverImageUrl ? (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-slate-100">
              <Image
                src={data.coverImageUrl}
                alt={data.title || "Cover"}
                fill
                className="object-cover"
                sizes="380px"
                unoptimized
              />
            </div>
          ) : (
            <div className="aspect-video rounded-lg bg-slate-100 flex items-center justify-center mb-4 text-slate-400 text-xs">
              No cover
            </div>
          )}
          {data.excerpt && (
            <p className="text-slate-600 mb-3 border-l-2 border-[#1959FA] pl-3 py-1 text-xs">
              {data.excerpt}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {data.tags.map((tag) => {
                const s = SERVICE_TAGS.find((t) => t.value === tag);
                if (!s) return null;
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-[#1959FA]/10 text-[#1959FA]"
                  >
                    {s.label}
                  </span>
                );
              })}
            </div>
          )}
          {data.contentBlocks && data.contentBlocks.length > 0 ? (
            <BlogBlockRenderer
              blocks={data.contentBlocks}
              className="font-lato text-slate-700 text-sm space-y-3 [&>*]:my-0"
            />
          ) : (
            <p className="text-slate-400 italic text-xs py-4">No content yet.</p>
          )}
        </div>
      </div>
    </aside>
  );
}
