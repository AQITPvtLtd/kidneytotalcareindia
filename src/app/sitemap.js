// import { getBlog } from "@/services/getBlog";

export default async function sitemap() {
  const baseUrl = process.env.BASE_URL;
  // const response = await getBlog();
  // const blogPosts = response.result?.map((post) => {
  //   return {
  //     url: `${baseUrl}/blog/${post?.url}`,
  //     lastModified: post?.date,
  //   };
  // });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    // ...blogPosts,
  ];
}
