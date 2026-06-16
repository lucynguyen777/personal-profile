import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://lucynguyen777.github.io/personal-profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
