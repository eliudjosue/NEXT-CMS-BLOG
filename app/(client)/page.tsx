import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import PostSummary from "../components/PostSummary";
import Link from "next/link";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts: Post[] = await getPosts();

  // Verificamos si hay al menos un post
  const firstPost = posts.length > 0 ? posts[0] : null;

  return (
    <div>
      <Header title="Articles" tags />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {posts?.length > 0 &&
          posts
            .slice(0, 3) // Limitamos a los tres primeros posts
            .map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
      <div className="flex justify-center items-center h-full  text-pink-500">
        <Link href={`/posts-list`}>Ver más posts</Link>
      </div>

      {firstPost && (
        <PostSummary key={firstPost._id} slug={firstPost.slug.current} />
      )}
    </div>
  );
}
