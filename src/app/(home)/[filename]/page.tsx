import { getPublicPosts, getPostData } from "@/api/posts";
import DetailPost from "@/components/detailPost";

type DetailSlug = {
  params: {
    filename: string;
  };
};

export default async function Detail({ params: { filename } }: DetailSlug) {
  const post = await getPostData(filename);
  const { title, path, nextPost, prevPost } = post;

  return (
    <article className="overflow-hidden my-10 mx-32">
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
