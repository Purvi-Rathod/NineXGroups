import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BlogBlockRenderer from "@/components/blogs/BlogBlockRenderer";
import { getBlogsFromS3 } from "@/lib/s3-blogs";
import { SERVICE_TAGS } from "@/lib/blog-templates";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ninexgroup.com";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogs = await getBlogsFromS3();
  const post = blogs.find((b) => b.slug === slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  const description =
    post.metaTags?.metaDescription || post.excerpt || `${post.title} - Read on NineX Group Blog`;
  const pageTitle = post.metaTags?.metaTitle || post.title;
  const rawImage = post.metaTags?.ogImage || post.coverImageUrl;
  const imageUrl = rawImage
    ? rawImage.startsWith("http")
      ? rawImage
      : `${BASE_URL}${rawImage}`
    : undefined;

  return {
    title: `${pageTitle} | NineX Group Blog`,
    description,
    authors: [{ name: post.author }],
    openGraph: {
      title: pageTitle,
      description,
      type: "article",
      publishedTime: post.updatedAt,
      authors: [post.author],
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
      url: `${BASE_URL}/blogs/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: `${BASE_URL}/blogs/${post.slug}`,
    },
    robots: {
      index: post.published,
      follow: true,
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const blogs = await getBlogsFromS3();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const dateStr = new Date(post.updatedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.coverImageUrl || undefined,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "NineX Group",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blogs/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#f8fafc] pt-8 sm:pt-10 pb-20">
        <article className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full max-w-4xl mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1959FA] hover:underline mb-8"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <header className="mb-8 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-manrope leading-tight mb-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                <span className="font-medium text-slate-700">{post.author}</span>
                <span>·</span>
                <time dateTime={post.updatedAt}>{dateStr}</time>
                {post.tags && post.tags.length > 0 && (
                  <>
                    <span>·</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => {
                        const s = SERVICE_TAGS.find((t) => t.value === tag);
                        if (!s) return null;
                        return (
                          <Link
                            key={tag}
                            href={s.href}
                            className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-[#1959FA]/10 text-[#1959FA] hover:bg-[#1959FA]/20 transition-colors"
                          >
                            {s.label}
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </header>

            {post.coverImageUrl && (
              <div className="relative w-full aspect-[21/9] sm:aspect-[2/1] max-h-[320px] sm:max-h-[380px] rounded-2xl overflow-hidden mb-10 bg-slate-100 shadow-md">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 896px) 100vw, 896px"
                  priority
                  unoptimized
                />
              </div>
            )}

            <div className="prose prose-slate prose-lg w-full max-w-none">
              {post.contentBlocks && post.contentBlocks.length > 0 ? (
                <BlogBlockRenderer
                  blocks={post.contentBlocks}
                  className="font-lato text-slate-700 leading-relaxed"
                />
              ) : post.content ? (
                <div
                  className="font-lato text-slate-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : null}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
