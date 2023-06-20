import { Post } from "@/api/posts";
import PostsContainer from "./PostsContainer";

export type PostsProps = {
  posts: Post[];
};

export default async function FeaturedPosts({ posts }: PostsProps) {
  return (
    <section className="mt-12 mb-24 px-14">
      <h2 className="text-2xl font-bold mb-14">Featured Posts</h2>
      {posts.length === 0 ? <div>검색 결과 없음</div> : <PostsContainer posts={posts} />}
    </section>
  );
}
