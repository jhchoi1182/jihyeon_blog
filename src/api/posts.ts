import { readFile } from "fs/promises";
import path from "path";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  public: boolean;
};

export type PostData = Post & {
  content: string;
  nextPost: Post | null;
  prevPost: Post | null;
};

export async function getPublicPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.public));
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);

  if (!post) throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);

  const index = posts.indexOf(post);
  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index < posts.length ? posts[index + 1] : null;
  const content = await readFile(filePath, "utf-8");

  return { ...post, content, nextPost, prevPost };
}
