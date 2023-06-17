import { getPublicPosts } from "@/api/posts";
import Categories from "./Categories";
import Profile from "./Profile";

export default async function Sidebar() {
  const posts = await getPublicPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="fixed top-[68px] left-0 w-80 h-screen px-10 border-r shadow-sm pointer-events-none hover:pointer-events-auto">
      <div className="mt-10">
        <Profile />
      </div>
      <div className="mt-16">
        <h2 className="text-xl font-bold border-b pb-3 border-river mb-2">Category</h2>
        <Categories categories={categories} />
      </div>
    </section>
  );
}
