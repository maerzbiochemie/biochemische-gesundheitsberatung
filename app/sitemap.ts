import type { MetadataRoute } from "next";

const baseUrl = "https://biochemische-gesundheitsberatung.com";

const routes = [
  "",
  "/leistungen",
  "/privatkunden",
  "/unternehmen",
  "/ueber-mich",
  "/kontakt",
  "/faq",
  "/impressum",
  "/datenschutz",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
