import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import { slugify } from "../utils/helpers";

interface PostProps {
  slug: string;
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    body
  }
  `;

  const post = await client.fetch(query);
  return post;
}

const PostSummary: React.FC<PostProps> = async ({ slug }) => {
  const post: Post = await getPost(slug);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-summary">
      {post?.mainImage && (
        <Image
          src={urlForImage(post.mainImage).url()}
          alt={post.title}
          width={700}
          height={400}
          className="rounded-lg"
        />
      )}
      {/* <p className="mt-4 text-lg text-gray-700">{post?.excerpt}</p> */}

      {/* <Toc headings={post?.headings} /> */}
        <div className={richTextStyles}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>
    </div>
  );
};

export default PostSummary;

const myPortableTextComponents = {
    types: {
      image: ({ value }: any) => (
        <Image
          src={urlForImage(value).url()}
          alt="Post"
          width={700}
          height={700}
        />
      ),
    },
    block: {
      h2: ({ value }: any) => (
        <h2
          id={slugify(value.children[0].text)}
          className="text-3xl font-bold mb-3"
        >
          {value.children[0].text}
        </h2>
      ),
      h3: ({ value }: any) => (
        <h3
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h3>
      ),
      h4: ({ value }: any) => (
        <h4
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h4>
      ),
      h5: ({ value }: any) => (
        <h5
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h5>
      ),
      h6: ({ value }: any) => (
        <h6
          id={slugify(value.children[0].text)}
          className="text-xl font-bold mb-3"
        >
          {value.children[0].text}
        </h6>
      ),
    },
  };
  

  const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
