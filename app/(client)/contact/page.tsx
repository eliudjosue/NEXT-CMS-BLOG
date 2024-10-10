import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import PostSummary from "@/app/components/PostSummary";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

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

export default async function Contact() {
  const posts: Post[] = await getPosts();

  // Verificamos si hay al menos un post
  const firstPost = posts.length > 0 ? posts[0] : null;
  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 &&
          posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
    </div>
  );
}
