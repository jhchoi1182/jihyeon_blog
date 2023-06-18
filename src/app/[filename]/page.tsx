import { getPublicPosts, getPostData } from "@/api/posts";
import DetailPost from "@/components/detailPost";
import { Metadata } from "next";

type DetailSlug = {
  params: {
    filename: string;
  };
};

export async function generateMetadata({ params: { filename } }: DetailSlug): Promise<Metadata> {
  const { title, description } = await getPostData(filename);
  return {
    title,
    description,
  };
}

export default async function Detail({ params: { filename } }: DetailSlug) {
  const post = await getPostData(filename);
  return (
    <article className="flex justify-center overflow-hidden mt-14 mb-36">
      <DetailPost post={post} />
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getPublicPosts();
  return posts.map((post) => ({
    filename: post.path,
  }));
}
