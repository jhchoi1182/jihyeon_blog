import { getPublicPosts } from "@/api/posts";
import { MetadataRoute } from "next";

interface Sitemap extends MetadataRoute.Sitemap {
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export default async function sitemap(): Promise<Sitemap> {
  const posts = await getPublicPosts();
  const pages = posts.map((post) => ({
    url: `https://www.jihyeon-blog.shop/${encodeURIComponent(post.path)}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.5,
  }));

  return [
    {
      url: "https://www.jihyeon-blog.shop/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...pages,
  ];
}
