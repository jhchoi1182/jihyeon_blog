"use client";

import { CategoryContext } from "@/context/CategoryContext";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export const ScrollToTop = () => {
  const { selectedCategory } = useContext(CategoryContext);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [selectedCategory, pathname]);

  return <></>;
};