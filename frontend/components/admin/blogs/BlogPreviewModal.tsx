"use client";

import React, { useEffect } from "react";
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

interface BlogPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BlogPreviewData;
}

export default function BlogPreviewModal({ isOpen, onClose, data }: BlogPreviewModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const dateStr = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-3xl my-8 mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-slate-800 text-white">
          <span className="text-sm font-medium">Preview</span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close preview"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8 max-h-[calc(100vh-120px)] overflow-y-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-manrope mb-2">
            {data.title || "Untitled"}
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            {data.author || "Author"} · {dateStr}
          </p>
          {data.coverImageUrl ? (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={data.coverImageUrl}
                alt={data.title || "Cover"}
                fill
                className="object-cover"
                sizes="800px"
                unoptimized
              />
            </div>
          ) : (
            <div className="aspect-video rounded-xl bg-slate-100 flex items-center justify-center mb-6 text-slate-400 text-sm">
              No cover image
            </div>
          )}
          {data.excerpt && (
            <p className="text-slate-600 mb-4 border-l-4 border-[#1959FA] pl-4 py-1">
              {data.excerpt}
            </p>
          )}
          {data.tags && data.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {data.tags.map((tag) => {
                const s = SERVICE_TAGS.find((t) => t.value === tag);
                if (!s) return null;
                return (
                  <a
                    key={tag}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-[#1959FA]/10 text-[#1959FA] hover:bg-[#1959FA]/20"
                  >
                    {s.label}
                  </a>
                );
              })}
            </div>
          )}
          {data.contentBlocks && data.contentBlocks.length > 0 ? (
            <BlogBlockRenderer
              blocks={data.contentBlocks}
              className="font-lato text-slate-700"
            />
          ) : (
            <p className="text-slate-500 italic">No content blocks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
