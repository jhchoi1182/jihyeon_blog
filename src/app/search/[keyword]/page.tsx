import { getPublicPosts, getResultPosts } from "@/api/posts";
import FeaturedPosts from "@/components/post";

type ResultSlug = {
  params: {
    keyword: string;
  };
};

export default async function ResultPage({ params: { keyword } }: ResultSlug) {
  const result = await getResultPosts(keyword);

  return <FeaturedPosts posts={result} />;
}
