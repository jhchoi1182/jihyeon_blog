import { getPublicPosts } from "@/api/posts";
import Categories from "./Categories";
import Profile from "./Profile";

export default async function Sidebar() {
  const posts = await getPublicPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return (
    <section className="w-80 px-10 border-r shadow-sm">
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
