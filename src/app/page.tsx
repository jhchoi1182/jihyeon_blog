import Profile from "@/components/Profile";
import FeaturedPosts from "@/components/post/FeaturedPosts";

export default function Home() {
  return (
    <main>
      <Profile />
      {/* @ts-expect-error Server Component */}
      <FeaturedPosts />
    </main>
  );
}
