import { readFile, readdir } from "fs/promises";
import path from "path";
import { Post, getPublicPosts } from "./posts";

async function getPostsMetadata() {
  const postsPath = path.join(process.cwd(), "data", "posts.json");
  const postsData = await readFile(postsPath, "utf-8");
  return JSON.parse(postsData);
}

export async function getResultPosts(keyword: string) {
  const decodedKeyword = decodeURIComponent(keyword);
  const filePath = path.join(process.cwd(), "data", "posts");
  const files = await readdir(filePath);
  const publicPosts = await getPublicPosts();
  const postsMetadata = await getPostsMetadata();

  let result = [];
  for (const file of files) {
    const postPath = path.join(filePath, file);
    const postContents = await readFile(postPath, "utf-8");
    const fileName = file.replace(/\.md$/, "");

    const isContentMatch = postContents.includes(decodedKeyword);
    const isTitleMatch = postsMetadata.some(
      (post: Post) =>
        post.path === fileName && post.title.includes(decodedKeyword),
    );

    if (isContentMatch || isTitleMatch) {
      result.push(...publicPosts.filter((post) => post.path === fileName));
    }
  }

  return result;
}
