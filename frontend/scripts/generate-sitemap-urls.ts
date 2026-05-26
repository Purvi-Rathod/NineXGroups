/**
 * Build-time script: fetches dynamic routes (blogs, industries, jobs) and writes
 * URLs for next-sitemap. Run before next-sitemap in postbuild.
 */
import { writeFileSync } from "fs";
import { join } from "path";
import { getBlogsFromS3 } from "../lib/s3-blogs";
import { getJobsFromS3 } from "../lib/s3-jobs";
import { industriesData } from "../data/industries";

interface SitemapEntry {
  loc: string; // path e.g. /blogs/my-post (next-sitemap prepends siteUrl)
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
}

async function main() {
  const entries: SitemapEntry[] = [];

  // Industries (static data)
  for (const industry of industriesData) {
    entries.push({
      loc: `/industries/${industry.slug}`,
      changefreq: "monthly",
      priority: 0.8,
    });
  }

  // Blogs (from S3; may be empty if env not set at build time)
  try {
    const blogs = await getBlogsFromS3();
    const published = blogs.filter((b) => b.published);
    for (const post of published) {
      entries.push({
        loc: `/blogs/${post.slug}`,
        lastmod: post.updatedAt,
        changefreq: "weekly",
        priority: 0.7,
      });
    }
  } catch {
    // S3 may not be available at build time
  }

  // Job detail pages (from S3)
  try {
    const jobs = await getJobsFromS3();
    for (const job of jobs) {
      entries.push({
        loc: `/ninexFold/careers/find-a-job/${job.id}`,
        lastmod: job.updatedAt,
        changefreq: "weekly",
        priority: 0.6,
      });
    }
  } catch {
    // S3 may not be available at build time
  }

  const outPath = join(process.cwd(), ".sitemap-urls.json");
  writeFileSync(outPath, JSON.stringify(entries, null, 0), "utf-8");
  console.log("Wrote", entries.length, "dynamic URLs to", outPath);
}

main().catch((err) => {
  console.error("generate-sitemap-urls failed:", err);
  process.exit(1);
});
