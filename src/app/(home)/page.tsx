import Sidebar from "@/components/sidebar/Sidebar";
import FeaturedPosts from "@/components/post/FeaturedPosts";

export default function Home() {
  return (
    <section className="flex">
      <Sidebar />
      <FeaturedPosts />
    </section>
  );
}
