"use client";  // Indica que este archivo es un Componente Cliente

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";

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

export default function Contact() {
  const [posts, setPosts] = useState<Post[]>([]);

  // Asumiendo que quieres hacer el fetch de los posts en el cliente
  useEffect(() => {
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    }
    fetchPosts();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Número de posts por página

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div  className="py-4">
      <Header title="Articles" tags />
      <div>
        {currentPosts?.length > 0 &&
          currentPosts?.map((post) => <PostComponent key={post?._id} post={post} />)}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700 hover:bg-gray-400"}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
