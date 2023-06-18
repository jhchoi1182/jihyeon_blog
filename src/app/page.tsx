import { getPublicPosts } from "@/api/posts";
import FeaturedPosts from "@/components/post";

export default async function Home() {
  const posts = await getPublicPosts();
  return <FeaturedPosts posts={posts} />;
}
