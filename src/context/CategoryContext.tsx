"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
};

type CategoryContextType = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: "ALL",
  setSelectedCategory: () => {},
});

export default function CategoryContextProvider({ children }: ChildrenProps) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>{children}</CategoryContext.Provider>
  );
}
