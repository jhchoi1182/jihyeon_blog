import { getPublicPosts } from "@/api/posts";
import Categories from "./Categories";
import Profile from "./Profile";

export default async function Sidebar() {
  const posts = await getPublicPosts();
  const categories = [
    ...new Set(posts.map(({ categories }) => categories).flat()),
  ];

  return (
    <section className="sticky flex flex-col items-center lg:hidden top-[68px] left-0 w-80 h-screen overflow-x-hidden border-r shadow-sm pointer-events-none hover:pointer-events-auto dark:border-lightDark">
      <div className="w-[80%]">
        <div className="mt-10">
          <Profile />
        </div>
        <div className="mt-14">
          <h2 className="text-xl font-bold border-b pb-3 border-river mb-2 dark:border-slate-100">
            Category
          </h2>
          <Categories categories={categories} />
        </div>
      </div>
    </section>
  );
}
