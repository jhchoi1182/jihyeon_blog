import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  categories: string[];
  path: string;
  public: boolean;
  images: string[];
};

export type PostData = Post & {
  content: string;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPublicPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.public));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const decodedFileName = decodeURIComponent(fileName);
  const filePath = path.join(
    process.cwd(),
    "data",
    "posts",
    `${decodedFileName}.md`,
  );
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === decodedFileName);

  if (!post)
    throw new Error(`${decodedFileName}에 해당하는 포스트를 찾을 수 없음`);

  const content = await readFile(filePath, "utf-8");
  return { ...post, content };
}
