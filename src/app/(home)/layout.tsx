import Sidebar from "@/components/sidebar";
import CategoryContextProvider from "@/context/CategoryContext";
import { Metadata } from "next";

type HomeLayout = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "All Posts",
  description: "jihyeon 블로그의 모든 글",
};

export default async function HomeLayout({ children }: HomeLayout) {
  return (
    <main className="flex">
      <CategoryContextProvider>
        <Sidebar />
        <section className="ml-80 w-full ">{children}</section>
      </CategoryContextProvider>
    </main>
  );
}
