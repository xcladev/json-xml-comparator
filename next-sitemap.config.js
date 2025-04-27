/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://jsonxmlcompare.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/api/*", "/admin/*"],
  additionalPaths: async () => {
    const result = [];

    result.push({
      loc: "/", // Página principal
      changefreq: "weekly",
      priority: 1.0,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/json-comparator", // Herramienta JSON
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/xml-comparator", // Herramienta XML
      changefreq: "weekly",
      priority: 0.9,
      lastmod: new Date().toISOString(),
    });

    result.push({
      loc: "/privacy", // Página de privacidad
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = config;
