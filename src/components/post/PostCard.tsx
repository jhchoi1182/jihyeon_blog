import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post: { title, date, category, path } }: PostCardProps) {
  const pathname = usePathname();
  const params = pathname.split("/")[1] + "/" + path;

  return (
    <Link href={`${params}`}>
      <article className="rounded-md overflow-hidden shadow-md hover:shadow-xl">
        <Image className="w-full" src={`/images/posts/${path}.png`} alt={title} width={300} height={200} />
        <div className="flex flex-col items-center p-4">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <span className="self-start text-sm rounded-2xl bg-teal-400 px-[10px] py-[3px] mt-3 mb-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
