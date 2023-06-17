"use client";

import { CategoryContext } from "@/context/CategoryContext";
import { categoryAtom } from "@/libs/atoms";
import Link from "next/link";
import { useContext } from "react";

type CategoryTagProps = {
  category: string;
};

export default function CategoryTag({ category }: CategoryTagProps) {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const bgColor = (category: string) => {
    return selectedCategory === category ? "bg-teal-400" : "";
  };

  return (
    <Link
      className={`border rounded-xl px-2 mr-1.5 my-2 ${bgColor(category)}`}
      href="/"
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </Link>
  );
}
