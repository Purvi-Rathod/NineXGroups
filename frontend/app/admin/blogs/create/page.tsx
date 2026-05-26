"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import Link from "next/link";
import BlockEditor from "@/components/admin/blocks/BlockEditor";
import BlogPreviewSidebar from "@/components/admin/blogs/BlogPreviewSidebar";
import { BLOG_TEMPLATES, SERVICE_TAGS } from "@/lib/blog-templates";
import type { BlogContentBlock, BlogServiceTag } from "@/types/blog";

const inputClass =
  "w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1959FA]/30 focus:border-[#1959FA] outline-none transition-all text-sm";
const labelClass = "block text-sm font-medium text-slate-700 mb-1.5";

export default function AdminBlogCreatePage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
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
  const [showAdvanced, setShowAdvanced] = useState(false);

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

  const handleBlockImageUpload = async (file: File): Promise<string | null> => {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/blogs/upload", { method: "POST", body: form });
    const data = await res.json();
    return data.url ?? null;
  };

  const loadTemplate = (templateId: string) => {
    const t = BLOG_TEMPLATES.find((x) => x.id === templateId);
    if (!t) return;
    setTitle(t.title);
    setExcerpt(t.excerpt);
    setContentBlocks(JSON.parse(JSON.stringify(t.contentBlocks)));
  };

  const toggleTag = (tag: BlogServiceTag) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (contentBlocks.length === 0) {
      setError("Add at least one content block to your post.");
      return;
    }
    setSaving(true);
    try {
      const metaTags =
        metaTitle || metaDescription || ogImage
          ? { metaTitle: metaTitle || undefined, metaDescription: metaDescription || undefined, ogImage: ogImage || undefined }
          : undefined;
      const res = await fetch("/api/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug: slug || undefined,
          excerpt,
          contentBlocks,
          coverImageUrl: coverImageUrl || undefined,
          author,
          published,
          metaTags,
          tags: tags.length > 0 ? tags : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create");
      router.push("/admin/blogs");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <AdminHeader title="New Blog Post" />
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
            <button
              type="submit"
              form="blog-create-form"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90 disabled:opacity-70 text-sm shadow-sm"
            >
              {saving ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating…
                </>
              ) : (
                "Create Post"
              )}
            </button>
          </div>
        </div>

        {/* Form + Preview side by side */}
        <div className="flex gap-6 px-4 sm:px-6 lg:px-8 py-6">
        <form id="blog-create-form" onSubmit={handleSubmit} className="flex-1 min-w-0">
          {error && (
            <div className="mb-6 rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700 flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}

          <div className="flex gap-8">
            {/* Main content - form fields */}
            <div className="flex-1 min-w-0 space-y-6 max-w-2xl">
              {/* Quick start template */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <span className="text-sm text-slate-500">Quick start:</span>
                <div className="flex flex-wrap gap-2">
                  {BLOG_TEMPLATES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => loadTemplate(t.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 bg-slate-100 hover:bg-[#1959FA]/10 hover:text-[#1959FA] transition-colors"
                    >
                      {t.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Post details card */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">Post details</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Title, summary, and cover image</p>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className={labelClass}>Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className={inputClass}
                      placeholder="Enter your post title"
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
                      placeholder="Short summary (shown on cards and in search)"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Cover image</label>
                    <div className="flex gap-3">
                      <label className="flex-shrink-0 px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 cursor-pointer text-sm font-medium transition-colors">
                        {uploading ? "Uploading…" : "Upload"}
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                      </label>
                      <input
                        type="url"
                        value={coverImageUrl}
                        onChange={(e) => setCoverImageUrl(e.target.value)}
                        placeholder="Or paste image URL"
                        className={inputClass + " flex-1"}
                      />
                    </div>
                    {coverImageUrl && (
                      <p className="text-xs text-emerald-600 mt-1.5">✓ Cover image set</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>URL slug <span className="text-slate-400 font-normal">(optional)</span></label>
                    <input
                      type="text"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="my-post-url"
                      className={inputClass}
                    />
                    <p className="text-xs text-slate-400 mt-1">Leave empty to auto-generate from title</p>
                  </div>
                </div>
              </div>

              {/* Content blocks */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">Content</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Add blocks below. Click a block type to add it.</p>
                </div>
                <div className="p-5">
                  <BlockEditor
                    blocks={contentBlocks}
                    onChange={setContentBlocks}
                    onImageUpload={handleBlockImageUpload}
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">Publish</h2>
                </div>
                <div className="p-5 space-y-4">
                  <div>
                    <label className={labelClass}>Author</label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className={inputClass}
                      placeholder="Author name"
                    />
                  </div>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-slate-50/50 cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={published}
                      onChange={(e) => setPublished(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#1959FA] focus:ring-[#1959FA]"
                    />
                    <span className="text-sm font-medium text-slate-700">Publish immediately</span>
                  </label>
                  <p className="text-xs text-slate-500">Published posts appear on the public blog.</p>
                </div>
              </div>

              {/* Service tags */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-800">Service tags</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Link to NineX services</p>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_TAGS.map((s) => (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => toggleTag(s.value)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          tags.includes(s.value)
                            ? "bg-[#1959FA]/15 text-[#1959FA] border border-[#1959FA]/30"
                            : "bg-slate-100 text-slate-600 border border-transparent hover:bg-slate-200"
                        }`}
                      >
                        {s.label}
                        {tags.includes(s.value) && (
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advanced - collapsible */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50/50 transition-colors"
                >
                  <div>
                    <h2 className="font-semibold text-slate-800">Advanced</h2>
                    <p className="text-xs text-slate-500 mt-0.5">SEO meta tags</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${showAdvanced ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {showAdvanced && (
                  <div className="px-5 pb-5 pt-0 space-y-4 border-t border-slate-100">
                    <div>
                      <label className={labelClass}>Meta title</label>
                      <input
                        type="text"
                        value={metaTitle}
                        onChange={(e) => setMetaTitle(e.target.value)}
                        className={inputClass}
                        placeholder="Defaults to post title"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Meta description</label>
                      <textarea
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        rows={2}
                        className={inputClass + " resize-none"}
                        placeholder="Defaults to excerpt"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>OG image URL</label>
                      <input
                        type="url"
                        value={ogImage}
                        onChange={(e) => setOgImage(e.target.value)}
                        className={inputClass}
                        placeholder="Defaults to cover image"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Cancel */}
              <Link
                href="/admin/blogs"
                className="block w-full text-center px-4 py-2.5 rounded-lg font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel
              </Link>
            </div>

          </div>
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
