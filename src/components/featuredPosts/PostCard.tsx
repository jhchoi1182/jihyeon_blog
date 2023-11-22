import { Post } from "@/api/posts";
import { preloadImage } from "@/utils/preloadImage";
import Image from "next/image";
import Link from "next/link";

type PostCardProps = {
  post: Post;
};

const img: { [key: string]: string } = {
  그래프: "graph.webp",
  "동적 계획법": "DP.webp",
  스택: "stack.webp",
  "일반 구현": "default.webp",
  재귀: "recursion.webp",
  정렬: "sort.webp",
  큐: "queue.webp",
  탐색: "search.webp",
  트리: "tree.webp",
  해시: "hash.webp",
};

export default function PostCard({
  post: { title, date, categories, path, images },
}: PostCardProps) {
  return (
    <Link href={`/${path}`} onMouseEnter={() => preloadImage(images)}>
      <article className="rounded-md h-96 overflow-hidden shadow-md hover:shadow-xl dark:border border-lightDark">
        <Image
          className="w-full h-52"
          src={`/images/${img[categories[0]]}`}
          alt={title}
          width={300}
          height={208}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700 dark:text-slate-100">
            {date.toString()}
          </time>
          <h3 className="flex items-center text-center h-16 text-lg font-bold">
            {title}
          </h3>
          <div className="flex self-start gap-2">
            {categories.map((category, i) => (
              <span
                key={i}
                className="text-sm rounded-2xl bg-teal-400 px-[10px] py-[3px] mt-3 mb-2 dark:text-dark"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
