"use client";

import { CategoryContext } from "@/context/CategoryContext";
import Link from "next/link";
import { useContext } from "react";

type CategoryTagProps = {
  category: string;
};

export default function CategoryTag({ category }: CategoryTagProps) {
  const { selectedCategory, setSelectedCategory } = useContext(CategoryContext);

  const bgColor = (category: string) => {
    return selectedCategory === category ? "bg-teal-400 dark:border-teal-400 dark:text-dark" : "";
  };

  return (
    <Link
      className={`border rounded-xl px-2 mr-1.5 my-1 ${bgColor(
        category
      )} hover:bg-teal-400 hover:text-dark hover:border-teal-400`}
      href="/"
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </Link>
  );
}
