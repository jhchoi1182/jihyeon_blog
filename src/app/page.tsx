import Sidebar from "@/components/sidebar/Sidebar";
import FeaturedPosts from "@/components/post/FeaturedPosts";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <FeaturedPosts />
    </main>
  );
}
