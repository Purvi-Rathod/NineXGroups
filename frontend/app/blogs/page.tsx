"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { BlogPost } from "@/types/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(Array.isArray(data) ? data : []);
      })
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#f8fafc] pb-20 md:-mt-16">
        {/* Hero - full width */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-16 sm:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
          <div className="relative w-full px-4 sm:px-6 lg:px-10 xl:px-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-manrope tracking-tight">
              Blog
            </h1>
            <p className="mt-3 text-lg text-slate-300 w-full sm:w-[32rem]">
              Insights, updates, and stories from NineX Group.
            </p>
          </div>
        </section>

        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 -mt-6 relative z-10">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm h-[380px] animate-pulse"
                >
                  <div className="h-48 bg-slate-200" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-slate-200 rounded w-3/4" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                    <div className="h-4 bg-slate-100 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-16 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-slate-800 mb-2">No posts yet</h2>
              <p className="text-slate-500 w-full sm:w-96 mx-auto">
                We&apos;re preparing new content. Check back soon.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              {/* Featured post - large horizontal card */}
              <Link
                href={`/blogs/${blogs[0].slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#1959FA]/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[260px] lg:max-h-[320px] overflow-hidden order-2 lg:order-1">
                    {blogs[0].coverImageUrl ? (
                      <Image
                        src={blogs[0].coverImageUrl}
                        alt={blogs[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        unoptimized
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#12D4FF]/15 to-[#1959FA]/15 flex items-center justify-center">
                        <svg className="w-16 h-16 text-[#1959FA]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#1959FA] rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 lg:p-8 flex flex-col justify-between order-1 lg:order-2 min-h-[200px] lg:min-h-[260px]">
                    <div>
                      <span className="hidden lg:inline-block px-3 py-1 text-xs font-semibold text-[#1959FA] bg-[#1959FA]/10 rounded-full w-fit mb-4">
                        Featured
                      </span>
                      <p className="text-xs font-medium text-[#1959FA] uppercase tracking-wider mb-2">
                        {blogs[0].author}
                      </p>
                      <h2 className="font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900 group-hover:text-[#1959FA] transition-colors mb-3 line-clamp-2">
                        {blogs[0].title}
                      </h2>
                      <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
                        {blogs[0].excerpt || "Read the full article."}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400 pt-4 mt-auto">
                      {formatDate(blogs[0].updatedAt)}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Grid cards - consistent image-on-top layout, date pinned to bottom */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {blogs.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-[#1959FA]/20 transition-all duration-300"
                  >
                    <div className="relative aspect-[16/10] w-full flex-shrink-0 overflow-hidden">
                      {post.coverImageUrl ? (
                        <Image
                          src={post.coverImageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                          unoptimized
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-[#12D4FF]/15 to-[#1959FA]/15 flex items-center justify-center">
                          <svg className="w-10 h-10 text-[#1959FA]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1 min-h-[140px]">
                      <p className="text-xs font-medium text-[#1959FA] uppercase tracking-wider mb-1">
                        {post.author}
                      </p>
                      <h2 className="font-semibold text-base text-slate-900 group-hover:text-[#1959FA] transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed flex-1 min-h-0">
                        {post.excerpt || "No excerpt."}
                      </p>
                      <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100">
                        {formatDate(post.updatedAt)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
