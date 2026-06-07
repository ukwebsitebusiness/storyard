import { MetadataRoute } from "next";
import { operators } from "@/src/data/operators";
import { locations } from "@/src/data/locations";
import { storageTypes } from "@/src/data/storageTypes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://storyard.im";

  const staticRoutes = [
    "/",
    "/storage/",
    "/storage-size-helper/",
    "/request-quote/",
    "/operators/",
    "/claim-listing/",
    "/list-your-storage-business/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/",
    "/thank-you/",
    "/admin-lite/",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));

  const locationEntries: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: `${base}/storage/${loc.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const operatorEntries: MetadataRoute.Sitemap = operators.map((op) => ({
    url: `${base}/storage/${op.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const typeEntries: MetadataRoute.Sitemap = storageTypes.map((st) => ({
    url: `${base}/${st.slug}/`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...locationEntries, ...operatorEntries, ...typeEntries];
}
