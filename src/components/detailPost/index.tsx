import { PostData } from "@/api/posts";
import { AiTwotoneCalendar } from "react-icons/ai";
import PostContent from "./PostContent";

type PostContentProps = {
  post: PostData;
};

export default function DetailPost({ post }: PostContentProps) {
  const { title, date, content } = post;

  return (
    <section className="flex flex-col w-full">
      <div className="flex items-center self-end text-sky-600 text-xl">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <div className="self-start">
        <h1 className="text-4xl font-bold px-4">{title}</h1>
        <hr className="border-2 border-sky-600 mt-6 mb-12" />
      </div>
      <PostContent content={content} />
    </section>
  );
}
