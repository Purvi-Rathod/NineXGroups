"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AdminHeader from "@/components/admin/layout/AdminHeader";
import { BLOG_TEMPLATES } from "@/lib/blog-templates";
import { SERVICE_BLOG_SEED } from "@/lib/seed-service-blogs";
import { BlogPost } from "@/types/blog";
import { FileText, Plus, ExternalLink, Edit2, Trash2, Eye, EyeOff, Building2 } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [toggling, setToggling] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [seedingService, setSeedingService] = useState(false);

  const load = () => {
    setLoading(true);
    fetch("/api/admin/blogs")
      .then((r) => r.json())
      .then((data) => setBlogs(Array.isArray(data) ? data : []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  };

  useEffect(() => load(), []);

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this post? This cannot be undone.")) return;
    const res = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
    if (res.ok) load();
  };

  const handleSeedTemplates = async () => {
    if (!confirm("Create sample blog posts from templates? This will add " + BLOG_TEMPLATES.length + " new posts.")) return;
    setSeeding(true);
    try {
      const coverImg = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80";
      for (const t of BLOG_TEMPLATES) {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: t.title,
            slug: t.id,
            excerpt: t.excerpt,
            contentBlocks: JSON.parse(JSON.stringify(t.contentBlocks)),
            coverImageUrl: coverImg,
            author: "NineX Team",
            published: true,
            tags: t.id === "marketing-tips" ? ["ninexFold"] : t.id === "tech-insights" ? ["ninexDevOps"] : t.id === "growth-strategy" ? ["ninexScale"] : t.id === "customer-support" ? ["ninexConnect"] : [],
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          if (data.error?.includes("Slug already exists")) continue;
          throw new Error(data.error);
        }
      }
      load();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to create sample posts");
    } finally {
      setSeeding(false);
    }
  };

  const handleSeedServiceBlogs = async () => {
    if (
      !confirm(
        "Add 8 blog posts about NineXFold, NineXDevOps, NineXConnect, and NineXScale services? Existing slugs will be skipped."
      )
    )
      return;
    setSeedingService(true);
    try {
      for (const post of SERVICE_BLOG_SEED) {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            contentBlocks: JSON.parse(JSON.stringify(post.contentBlocks)),
            coverImageUrl: post.coverImageUrl,
            author: post.author,
            published: post.published,
            tags: post.tags,
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          if (data.error?.includes("Slug already exists")) continue;
          throw new Error(data.error);
        }
      }
      load();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Failed to add service blogs");
    } finally {
      setSeedingService(false);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    setToggling(post.slug);
    try {
      const res = await fetch(`/api/blogs/${post.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...post,
          published: !post.published,
          updatedAt: new Date().toISOString(),
        }),
      });
      if (res.ok) load();
    } finally {
      setToggling(null);
    }
  };

  const publishedCount = blogs.filter((b) => b.published).length;
  const draftCount = blogs.filter((b) => !b.published).length;

  return (
    <>
      <AdminHeader title="Blogs" />
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Manage posts</h2>
            <p className="text-sm text-slate-500 mt-0.5">
              Create and edit blog posts. Published posts appear on the public blog.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <button
              type="button"
              onClick={handleSeedServiceBlogs}
              disabled={seedingService}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-70 transition-colors"
            >
              {seedingService ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                  Adding…
                </>
              ) : (
                <>
                  <Building2 className="w-4 h-4" />
                  Add 8 service blogs
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleSeedTemplates}
              disabled={seeding}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 disabled:opacity-70 transition-colors"
            >
              {seeding ? (
                <>
                  <span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                  Creating…
                </>
              ) : (
                <>
                  <FileText className="w-4 h-4" />
                  Add sample posts
                </>
              )}
            </button>
            <Link
              href="/admin/blogs/create"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90 shadow-md shadow-[#1959FA]/25 transition-opacity"
            >
              <Plus className="w-4 h-4" />
              New post
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="bg-white rounded-xl border border-slate-200 p-16 text-center">
            <div className="inline-block w-10 h-10 border-2 border-[#1959FA] border-t-transparent rounded-full animate-spin" />
            <p className="text-slate-500 mt-4 font-medium">Loading posts…</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="bg-white rounded-xl border border-slate-200 p-16 text-center max-w-lg mx-auto">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 mb-5">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">No posts yet</h3>
            <p className="text-slate-500 mb-6">Create your first blog post or add posts from templates or service-focused content to get started.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/admin/blogs/create"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-[#12D4FF] to-[#1959FA] hover:opacity-90"
              >
                <Plus className="w-4 h-4" />
                Create post
              </Link>
              <button
                type="button"
                onClick={handleSeedServiceBlogs}
                disabled={seedingService}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-70"
              >
                {seedingService ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                    Adding…
                  </>
                ) : (
                  <>
                    <Building2 className="w-4 h-4" />
                    Add 8 service blogs
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleSeedTemplates}
                disabled={seeding}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 disabled:opacity-70"
              >
                {seeding ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-500 border-t-transparent rounded-full animate-spin" />
                    Creating…
                  </>
                ) : (
                  "Add sample posts"
                )}
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <p className="text-2xl font-bold text-slate-900">{blogs.length}</p>
                <p className="text-sm text-slate-500">Total posts</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <p className="text-2xl font-bold text-emerald-600">{publishedCount}</p>
                <p className="text-sm text-slate-500">Published</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-4">
                <p className="text-2xl font-bold text-amber-600">{draftCount}</p>
                <p className="text-sm text-slate-500">Drafts</p>
              </div>
            </div>

            {/* Posts list */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="divide-y divide-slate-100">
                {blogs.map((post) => (
                  <div
                    key={post.slug}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <Link
                          href={`/blogs/${post.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-slate-900 hover:text-[#1959FA] transition-colors truncate"
                        >
                          {post.title}
                        </Link>
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            post.published
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {post.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                          {post.published ? "Published" : "Draft"}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 truncate">
                        {post.author} · {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleTogglePublish(post)}
                        disabled={toggling === post.slug}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-60 ${
                          post.published
                            ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                            : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        {toggling === post.slug ? (
                          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        ) : post.published ? (
                          <>
                            <EyeOff className="w-4 h-4" />
                            Unpublish
                          </>
                        ) : (
                          <>
                            <Eye className="w-4 h-4" />
                            Publish
                          </>
                        )}
                      </button>
                      <Link
                        href={`/blogs/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View
                      </Link>
                      <Link
                        href={`/admin/blogs/${post.slug}/edit`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-[#1959FA] bg-[#1959FA]/10 hover:bg-[#1959FA]/20 transition-colors"
                      >
                        <Edit2 className="w-4 h-4" />
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => handleDelete(post.slug)}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
