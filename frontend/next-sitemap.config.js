/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ninex-group.com",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 50000,
  exclude: ["/admin", "/admin/*", "/api", "/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/admin", "/api"] }],
  },
  additionalPaths: async () => {
    const fs = require("fs");
    const path = require("path");
    const file = path.join(process.cwd(), ".sitemap-urls.json");
    if (!fs.existsSync(file)) return [];
    const raw = fs.readFileSync(file, "utf-8");
    const entries = JSON.parse(raw);
    return entries.map((e) => ({
      loc: e.loc,
      lastmod: e.lastmod,
      changefreq: e.changefreq,
      priority: e.priority,
    }));
  },
};
