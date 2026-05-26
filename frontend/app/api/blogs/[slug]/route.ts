import { NextResponse } from "next/server";
import { getBlogsFromS3, saveBlogsToS3 } from "@/lib/s3-blogs";
import { BlogPost } from "@/types/blog";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const blogs = await getBlogsFromS3();
  const post = blogs.find((b) => b.slug === slug);
  if (!post) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(post);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await req.json();
    const blogs = await getBlogsFromS3();
    const index = blogs.findIndex((b) => b.slug === slug);
    if (index === -1) return NextResponse.json({ error: "Not found" }, { status: 404 });
    const existing = blogs[index];
    const updated: BlogPost = {
      ...existing,
      ...body,
      slug: body.slug ?? existing.slug,
      title: body.title ?? existing.title,
      content: body.content !== undefined ? body.content : existing.content,
      contentBlocks: body.contentBlocks !== undefined ? body.contentBlocks : existing.contentBlocks,
      excerpt: body.excerpt ?? existing.excerpt,
      author: body.author ?? existing.author,
      published: body.published ?? existing.published,
      coverImageUrl: body.coverImageUrl !== undefined ? body.coverImageUrl : existing.coverImageUrl,
      metaTags: body.metaTags !== undefined ? body.metaTags : existing.metaTags,
      tags: body.tags !== undefined ? body.tags : existing.tags,
      updatedAt: new Date().toISOString(),
    };
    if (updated.slug !== slug) {
      if (blogs.some((b) => b.slug === updated.slug && b.slug !== slug)) {
        return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
      }
    }
    blogs[index] = updated;
    const ok = await saveBlogsToS3(blogs);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(updated);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const blogs = await getBlogsFromS3();
    const filtered = blogs.filter((b) => b.slug !== slug);
    if (filtered.length === blogs.length) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const ok = await saveBlogsToS3(filtered);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
