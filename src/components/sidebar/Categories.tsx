"use client";

import { useRecoilState } from "recoil";
import { categoryAtom } from "@/libs/atoms";
import Link from "next/link";
import { usePathname } from "next/navigation";

type CategoriesProps = {
  categories: string[];
};

export default function Categories({ categories }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useRecoilState(categoryAtom);
  const pathname = usePathname();
  // const test = pathname.startsWith("/React");
  console.log(selectedCategory);

  const bgColor = (category: string) => {
    return selectedCategory === category ? "bg-teal-400" : "";
  };

  return (
    <div className="text-center my-10">
      <button
        className={`border rounded-xl px-2 mr-1.5 my-2 ${bgColor("ALL")}`}
        onClick={() => setSelectedCategory("ALL")}
      >
        ALL
      </button>
      {categories.sort().map((category, i) => (
        <button
          key={i}
          className={`border rounded-xl px-2 mr-1.5 my-2 ${bgColor(category)}`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
