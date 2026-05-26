#!/usr/bin/env node
/**
 * Seed 8 service blogs (NineXFold, NineXDevOps, NineXConnect, NineXScale) into the blog store.
 * Requires the Next.js dev server to be running (e.g. npm run dev) and S3 configured for blogs.
 *
 * Usage: node scripts/seed-service-blogs.mjs
 *        BASE_URL=http://localhost:3000 node scripts/seed-service-blogs.mjs
 */
const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const url = `${BASE_URL}/api/admin/blogs/seed-service`;

async function main() {
  try {
    const res = await fetch(url, { method: "POST" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      console.error("Seed failed:", data.error || res.statusText);
      process.exit(1);
    }
    console.log("Seed OK:", data.message || "Done");
    if (data.added != null) console.log("Added:", data.added, "posts");
    if (data.total != null) console.log("Total posts:", data.total);
  } catch (err) {
    console.error("Request failed:", err.message);
    console.error("Make sure the dev server is running (npm run dev).");
    process.exit(1);
  }
}

main();
