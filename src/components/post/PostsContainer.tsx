"use client";

import { useContext } from "react";
import PostCard from "./PostCard";
import { Post } from "@/api/posts";
import { CategoryContext } from "@/context/CategoryContext";

type PostsContainerProps = {
  posts: Post[];
};

export default function PostsContainer({ posts }: PostsContainerProps) {
  const { selectedCategory } = useContext(CategoryContext);

  const data = selectedCategory === "ALL" ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <ul className="grid gap-4 grid-cols-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
