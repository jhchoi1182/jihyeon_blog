"use client";

import { RecoilRoot } from "recoil";

type HomeLayout = {
  children: React.ReactNode;
};

export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <main>
      <RecoilRoot>{children}</RecoilRoot>
    </main>
  );
}
