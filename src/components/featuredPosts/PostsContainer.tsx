"use client";

import { useContext } from "react";
import PostCard from "./PostCard";
import { Post } from "@/api/posts";
import { CategoryContext } from "@/context/CategoryContext";
import { PostsProps } from ".";

export default function PostsContainer({ posts }: PostsProps) {
  const { selectedCategory } = useContext(CategoryContext);

  const data = selectedCategory === "ALL" ? posts : posts.filter((post) => post.category === selectedCategory);

  return (
    <ul className="grid gap-4 grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data.map((post) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
