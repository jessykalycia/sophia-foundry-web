import { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";

const baseUrl = "https://sophiafoundry.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/products", "/contact"];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const prefix = locale === defaultLocale ? "" : `/${locale}`;
      entries.push({
        url: `${baseUrl}${prefix}${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
