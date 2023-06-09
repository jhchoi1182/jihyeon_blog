"use client";

import { useEffect, useRef, useState } from "react";

type CategoriesProps = {
  category: string;
};

const minX = 56;
const maxX = window.innerWidth - 140;
const minY = 25;
const maxY = 295;

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function Categories({ category }: CategoriesProps) {
  const x = getRandomNumber(minX, maxX);
  const y = getRandomNumber(minY, maxY);

  const [XY, setXY] = useState({ x, y });
  const categoryRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const viewportMaxX = window.innerWidth - 140;
      const viewportX = getRandomNumber(minX, viewportMaxX);
      setXY({ x: viewportX, y });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (categoryRef.current) {
      const categoryWidth = categoryRef.current.offsetWidth;
      const categoryHeight = categoryRef.current.offsetHeight;
      const maxSize = Math.max(categoryWidth, categoryHeight);
      categoryRef.current.style.height = `${maxSize}px`;
    }
  }, []);

  return (
    <button
      ref={categoryRef}
      className="absolute -top-[82px] left-0 rounded-full  text-slate-600 text font-bold shadow-sm px-1 cursor-grab bg-gradient-to-tr from-sky-400 to-sky-100"
      style={{
        transform: `translate(${XY.x}px, -${XY.y}px)`,
        textShadow: "2px 2px 7px rgba(0, 0, 0, 0.2)",
      }}
    >
      {category}
    </button>
  );
}
