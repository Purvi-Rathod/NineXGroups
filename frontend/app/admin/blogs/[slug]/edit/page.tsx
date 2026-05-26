"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import BlockEditor from "@/components/admin/blocks/BlockEditor";
import BlogPreviewSidebar from "@/components/admin/blogs/BlogPreviewSidebar";
import { BLOG_TEMPLATES, SERVICE_TAGS } from "@/lib/blog-templates";
import type { BlogPost, BlogContentBlock, BlogServiceTag } from "@/types/blog";

const inputClass =
  "w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1959FA] focus:border-[#1959FA] outline-none transition-shadow";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function AdminBlogEditPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slugVal, setSlugVal] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [contentBlocks, setContentBlocks] = useState<BlogContentBlock[]>([]);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [author, setAuthor] = useState("Admin");
  const [published, setPublished] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [uploading, setUploading] = useState(false);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [ogImage, setOgImage] = useState("");
  const [tags, setTags] = useState<BlogServiceTag[]>([]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then((r) => r.json())
      .then((p) => {
        setPost(p);
        setTitle(p.title);
        setSlugVal(p.slug);
        setExcerpt(p.excerpt || "");
        if (p.contentBlocks && Array.isArray(p.contentBlocks) && p.contentBlocks.length > 0) {
          setContentBlocks(p.contentBlocks);
        } else if (p.content && String(p.content).trim()) {
          setContentBlocks([{ type: "paragraph", text: p.content }]);
        } else {
          setContentBlocks([]);
        }
        setCoverImageUrl(p.coverImageUrl || "");
        setAuthor(p.author || "Admin");
        setPublished(!!p.published);
        setMetaTitle(p.metaTags?.metaTitle || "");
        setMetaDescription(p.metaTags?.metaDescription || "");
        setOgImage(p.metaTags?.ogImage || "");
        setTags(Array.isArray(p.tags) ? p.tags : []);
      })
      .catch(() => setPost(null))
      .finally(() => setLoading(false));
  }, [slug]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    try {
      const res = await fetch("/api/blogs/upload", { method: "POST", body: form });
      const data = await res.json();
      if (data.url) setCoverImageUrl(data.url);
    } finally {
      setUploading(false);
    }
  };

  const loadTemplate = (templateId: string) => {
    const t = BLOG_TEMPLATES.find((x) => x.id === templateId);
    if (!t) return;
    setContentBlocks(JSON.parse(JSON.stringify(t.contentBlocks)));
  };

  const toggleTag = (tag: BlogServiceTag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleBlockImageUpload = async (file: File): Promise<string | null> => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/blogs/upload", { method: "POST", body: form });
    const data = await res.json();
    return data.url ?? null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (contentBlocks.length === 0) {
      setError("Add at least one content block.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/blogs/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slugVal,
          excerpt,
          contentBlocks,
          content: undefined,
          coverImageUrl: coverImageUrl || undefined,
          author,
          published,
          metaTags:
            metaTitle || metaDescription || ogImage
              ? {
                  metaTitle: metaTitle || undefined,
                  metaDescription: metaDescription || undefined,
                  ogImage: ogImage || undefined,
                }
              : undefined,
          tags: tags.length > 0 ? tags : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update");
      router.push("/admin/blogs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update");
    } finally {
      setSaving(false);
    }
  };

  if (loading || !post) {
    return (
      <>
        <AdminHeader title="Edit Post" />
        <div className="p-8 flex items-center justify-center">
          <div className="inline-block w-8 h-8 border-2 border-[#1959FA] border-t-transparent rounded-full animate-spin" />
          <span className="ml-3 text-slate-500">Loading…</span>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminHeader title="Edit Blog Post" />
      <div className="min-h-screen bg-slate-50/80">
        {/* Top bar */}
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/admin/blogs"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1959FA] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blogs
            </Link>
            <div className="flex items-center gap-2">
              <a
                href={`/blogs/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 font-medium text-sm"
              >
                View post
              </a>
              <button
                type="submit"
                form="blog-edit-form"
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90 disabled:opacity-70 text-sm shadow-sm"
              >
                {saving ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Saving…
                  </>
                ) : (
                  "Save changes"
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Form + Preview side by side */}
        <div className="flex gap-6 px-4 sm:px-6 lg:px-8 py-6">
        <form id="blog-edit-form" onSubmit={handleSubmit} className="flex-1 min-w-0 space-y-6 max-w-3xl">
          {error && (
            <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Template */}
          <section className="bg-gradient-to-br from-[#1959FA]/5 to-[#12D4FF]/5 rounded-2xl border border-[#1959FA]/20 overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-white/50">
              <h3 className="font-semibold text-slate-800">Load template content</h3>
              <p className="text-xs text-slate-500 mt-0.5">Replace content blocks with a template.</p>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {BLOG_TEMPLATES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => loadTemplate(t.id)}
                    className="px-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-[#1959FA]/10 hover:border-[#1959FA]/30 font-medium text-sm transition-colors"
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Basics */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Basics</h3>
              <p className="text-xs text-slate-500 mt-0.5">Title, URL slug, and excerpt.</p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className={labelClass}>Title *</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Slug *</label>
                <input
                  type="text"
                  value={slugVal}
                  onChange={(e) => setSlugVal(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className={labelClass}>Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={2}
                  className={inputClass + " resize-none"}
                />
              </div>
            </div>
          </section>

          {/* Cover image */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Cover image</h3>
              <p className="text-xs text-slate-500 mt-0.5">Main image shown at the top of the post.</p>
            </div>
            <div className="p-5 space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#1959FA]/10 file:text-[#1959FA] file:font-medium"
              />
              {uploading && <p className="text-sm text-slate-500">Uploading…</p>}
              <input
                type="url"
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                placeholder="Image URL"
                className={inputClass + " text-sm"}
              />
            </div>
          </section>

          {/* Meta tags */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Meta tags (SEO)</h3>
              <p className="text-xs text-slate-500 mt-0.5">Override for search and social sharing.</p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className={labelClass}>Meta title</label>
                <input
                  type="text"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  className={inputClass}
                  placeholder="Leave empty to use post title"
                />
              </div>
              <div>
                <label className={labelClass}>Meta description</label>
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={2}
                  className={inputClass + " resize-none"}
                  placeholder="Leave empty to use excerpt"
                />
              </div>
              <div>
                <label className={labelClass}>OG image URL</label>
                <input
                  type="url"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  className={inputClass + " text-sm"}
                  placeholder="Leave empty to use cover image"
                />
              </div>
            </div>
          </section>

          {/* Service tags */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Service tags</h3>
              <p className="text-xs text-slate-500 mt-0.5">Link this post to NineX services.</p>
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-4">
                {SERVICE_TAGS.map((s) => (
                  <label key={s.value} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={tags.includes(s.value)}
                      onChange={() => toggleTag(s.value)}
                      className="w-4 h-4 rounded border-slate-300 text-[#1959FA] focus:ring-[#1959FA]"
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-[#1959FA]">
                      {s.label}
                    </span>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-slate-400 hover:text-[#1959FA]"
                    >
                      ↗
                    </a>
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Content blocks */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Content *</h3>
              <p className="text-xs text-slate-500 mt-0.5">Add and reorder blocks: carousel, image+content, and more.</p>
            </div>
            <div className="p-5">
              <BlockEditor
                blocks={contentBlocks}
                onChange={setContentBlocks}
                onImageUpload={handleBlockImageUpload}
              />
            </div>
          </section>

          {/* Author & publish */}
          <section className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 bg-slate-50/50">
              <h3 className="font-semibold text-slate-800">Author & visibility</h3>
              <p className="text-xs text-slate-500 mt-0.5">Publish makes the post visible on the public blog.</p>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className={labelClass}>Author</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className={inputClass}
                />
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#1959FA] focus:ring-[#1959FA]"
                />
                <span className="text-sm font-medium text-slate-700">Published (visible on public blog)</span>
              </label>
            </div>
          </section>

          <Link
            href="/admin/blogs"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 text-sm"
          >
            Cancel
          </Link>
        </form>

        {/* Live preview - right side */}
        <BlogPreviewSidebar
          data={{
            title: title || "Untitled",
            excerpt,
            author,
            coverImageUrl,
            contentBlocks,
            tags,
          }}
        />
        </div>
      </div>
    </>
  );
}
