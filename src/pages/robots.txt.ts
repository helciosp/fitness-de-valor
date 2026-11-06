import type { APIRoute } from "astro";
import config from "@/config/config.json";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site?.href || config.site.base_url).replace(/\/$/, "");
  const robotsTxt = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${baseUrl}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
