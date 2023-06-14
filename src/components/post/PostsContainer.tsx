"use client";

import PostCard from "./PostCard";
import { Post } from "@/api/posts";

type PostsContainerProps = {
  posts: Post[];
};

export default function PostsContainer({ posts }: PostsContainerProps) {
  // const data = category === "ALL" ? posts : posts.filter((post) => post.category === category);

  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
