export default function robots() {
  const baseUrl = process.env.BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
