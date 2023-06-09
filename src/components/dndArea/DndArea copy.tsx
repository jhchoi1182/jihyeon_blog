"use client";

import React, { useState, useRef, useEffect } from "react";
import Profile from "./Profile";

export default function DndArea() {
  const profileRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      //클릭 좌표 - //왼쪽 거리
      setDragOffset({ x: offsetX });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const newX = e.clientX - dragOffset.x;
    //클릭 좌표 - //요소 내 클릭 좌표
    if (profileRef.current) {
      profileRef.current.style.transform = `translateX(${newX}px)`;
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // useEffect(() => {
  //   // 초기 렌더링 시 실행될 함수
  //   if (profileRef.current) {
  //     const rect = profileRef.current.getBoundingClientRect();
  //     const containerWidth = profileRef.current.parentElement?.offsetWidth || 0;
  //     const newX = containerWidth / 2 - rect.width / 2;
  //     profileRef.current.style.transform = `translateX(${newX}px)`;
  //   }
  // }, []);

  return (
    <section className="relative bg-black">
      <div
        ref={profileRef}
        className="w-56 bg-teal-500 cursor-grab select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Profile />
      </div>
    </section>
  );
}
