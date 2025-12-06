const deployedUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
const siteUrl = deployedUrl && deployedUrl.length > 0 ? deployedUrl : "https://yeasindev.me";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: "./out",
  changefreq: "weekly",
  priority: 0.8,
  sitemapSize: 5000,
  exclude: ["/_not-found"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, path) => ({
    loc: `${config.siteUrl}${path}`,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
    lastmod: new Date().toISOString(),
  }),
};
