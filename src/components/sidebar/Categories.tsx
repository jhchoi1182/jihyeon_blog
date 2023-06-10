import React from "react";

const categories = [
  "웹 개발 기초",
  "미분류 오류",
  "React Native",
  "Javascript",
  "Typescript",
  "라이브러리",
  "GitHub",
  "Next.js",
  "React",
  "일지",
  "기타",
  "CS",
  "코딩 테스트",
];

export default function Categories() {
  return (
    <div className="text-center mt-10">
      {categories.sort().map((category, i) => (
        <button key={i} className="border rounded-xl px-2 mr-1.5 my-2 focus:bg-teal-400">
          {category}
        </button>
      ))}
    </div>
  );
}
