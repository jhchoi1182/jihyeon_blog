"use client";

import { useState } from "react";

function SearchSvg() {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const showSearchInputHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        className={`absolute ${isOpen ? "top-[2.5px] left-1" : "top-[2.5px] left-0"} w-7 h-7 cursor-pointer`}
        onClick={showSearchInputHandler}
      >
        <SearchSvg />
      </div>
      <input
        className={`${
          isOpen ? "w-56 border placeholder-white" : "w-0 border-none placeholder-transparent"
        } transition-all duration-300 pl-8 py-1 bg-transparent rounded-lg focus:outline-none focus:ring-1 focus:ring-white`}
        placeholder="검색어를 입력해주세요."
      />
    </div>
  );
}
