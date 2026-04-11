const fs = require("fs");
const path = require("path");

const domain = "https://bestpackersandmover.in";

const today = new Date().toISOString().split("T")[0];

// Static routes
const routes = [
  "/",
  "/about",
  "/services",
  "/gallery",
  "/contact",
];

// Dynamic services
const serviceSlugs = [
  "household-shifting",
  "office-relocation",
  "vehicle-transportation",
  "packing-unpacking",
  "loading-unloading",
  "local-shifting"
];




const serviceRoutes = serviceSlugs.map((slug) => `/services/${slug}`);




const allRoutes = [...routes, ...serviceRoutes];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;




const publicPath = path.resolve(__dirname, "public", "sitemap.xml");

fs.writeFileSync(publicPath, sitemap);

console.log("✅ Sitemap generated successfully!");