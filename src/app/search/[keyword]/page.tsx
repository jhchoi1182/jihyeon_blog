import { getResultPosts } from "@/api/search";
import FeaturedPosts from "@/components/featuredPosts";

type ResultSlug = {
  params: {
    keyword: string;
  };
};

export default async function ResultPage({ params: { keyword } }: ResultSlug) {
  const result = await getResultPosts(keyword);

  return <FeaturedPosts posts={result} />;
}
