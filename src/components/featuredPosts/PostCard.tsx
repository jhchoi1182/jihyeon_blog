import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post: { title, date, category, path } }: PostCardProps) {
  return (
    <Link href={`/${path}`}>
      <article className="rounded-md h-96 overflow-hidden shadow-md hover:shadow-xl dark:border border-lightDark">
        <Image className="w-full h-52" src={`/images/posts/${path}.png`} alt={title} width={300} height={208} />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700 dark:text-slate-100">{date.toString()}</time>
          <h3 className="flex items-center text-center h-16 text-lg font-bold">{title}</h3>
          <span className="self-start text-sm rounded-2xl bg-teal-400 px-[10px] py-[3px] mt-3 mb-2 dark:text-dark">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
