import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://jsonxmlcompare.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://jsonxmlcompare.com/sitemap.xml"],
  },
  // Cambia la frecuencia según tus necesidades
  changefreq: "weekly",
  priority: 0.7,
  // No indexar estas rutas
  exclude: ["/api/*", "/admin/*"],
};

export default config;
