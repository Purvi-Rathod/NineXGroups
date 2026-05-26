import { NextResponse } from "next/server";
import { getBlogsFromS3, saveBlogsToS3 } from "@/lib/s3-blogs";
import { SERVICE_BLOG_SEED } from "@/lib/seed-service-blogs";
import type { BlogPost } from "@/types/blog";

export async function POST() {
  try {
    const existing = await getBlogsFromS3();
    const initialCount = existing.length;
    const existingSlugs = new Set(existing.map((b) => b.slug));
    const now = new Date().toISOString();

    for (const seed of SERVICE_BLOG_SEED) {
      if (existingSlugs.has(seed.slug)) continue;
      const post: BlogPost = {
        slug: seed.slug,
        title: seed.title,
        excerpt: seed.excerpt,
        contentBlocks: JSON.parse(JSON.stringify(seed.contentBlocks)),
        coverImageUrl: seed.coverImageUrl,
        author: seed.author,
        published: seed.published,
        createdAt: now,
        updatedAt: now,
        tags: seed.tags,
      };
      existing.push(post);
      existingSlugs.add(seed.slug);
    }

    const ok = await saveBlogsToS3(existing);
    if (!ok) return NextResponse.json({ error: "Failed to save to storage" }, { status: 500 });
    return NextResponse.json({
      ok: true,
      message: "Service blogs seeded",
      total: existing.length,
      added: existing.length - initialCount,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
