import { NextResponse } from "next/server";
import { getBlogsFromS3, saveBlogsToS3 } from "@/lib/s3-blogs";
import { BlogPost } from "@/types/blog";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export async function GET() {
  const blogs = await getBlogsFromS3();
  const published = blogs.filter((b) => b.published).sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return NextResponse.json(published);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, excerpt, content, contentBlocks, coverImageUrl, author, published, metaTags, tags } = body;
    const hasContent = (content && String(content).trim()) || (contentBlocks && Array.isArray(contentBlocks) && contentBlocks.length > 0);
    if (!title || !hasContent) {
      return NextResponse.json({ error: "Title and at least one content block (or legacy content) required" }, { status: 400 });
    }
    const slug = body.slug || slugify(title);
    const blogs = await getBlogsFromS3();
    if (blogs.some((b) => b.slug === slug)) {
      return NextResponse.json({ error: "Slug already exists" }, { status: 400 });
    }
    const now = new Date().toISOString();
    const newPost: BlogPost = {
      slug,
      title: title || "",
      excerpt: excerpt || "",
      content: content || undefined,
      contentBlocks: Array.isArray(contentBlocks) ? contentBlocks : undefined,
      coverImageUrl: coverImageUrl || undefined,
      author: author || "Admin",
      published: !!published,
      createdAt: now,
      updatedAt: now,
      metaTags: metaTags && typeof metaTags === "object" ? metaTags : undefined,
      tags: Array.isArray(tags) ? tags : undefined,
    };
    blogs.push(newPost);
    const ok = await saveBlogsToS3(blogs);
    if (!ok) return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    return NextResponse.json(newPost);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
