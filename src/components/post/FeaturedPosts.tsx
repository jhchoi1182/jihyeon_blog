import { getAllPosts, getPublicPosts } from "@/api/posts";
import PostsContainer from "./PostsContainer";

export default async function FeaturedPosts() {
  const posts = await getPublicPosts();

  return (
    <section className="mt-12 mb-24 px-14">
      <h2 className="text-2xl font-bold mb-14">Featured Posts</h2>
      <PostsContainer posts={posts} />
    </section>
  );
}
