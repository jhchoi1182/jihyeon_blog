"use client";

import { categoryAtom } from "@/libs/atoms";
import { useRecoilState } from "recoil";

type CategoryTagProps = {
  category: string;
};

export default function CategoryTag({ category }: CategoryTagProps) {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryAtom);

  const bgColor = (category: string) => {
    return selectedCategory === category ? "bg-teal-400" : "";
  };

  return (
    <button
      className={`border rounded-xl px-2 mr-1.5 my-2 ${bgColor(category)}`}
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  );
}
