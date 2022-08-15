import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { instance } from "../utils/axios";
import { Button } from "../components";

export const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  // fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await instance.get(`posts/${id}`);
        console.log(res);

        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto">
        {/* card title */}
        <header className="font-[600] p-[] lg:py-[1rem] lg:px-[4rem] text-[1.4rem] lg:text-[1.4rem capitalize]">
          {post?.title}
        </header>

        {/* card content */}
        <article className="p-[] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 flex flex-col gap-[] lg:gap-[.8rem]">
          <p>
            {post?.body}
          </p>
          
        </article>

        {/* buttons */}
        <div className="flex gap-[] lg:gap-[1.5rem] justify-end">
          <Button variant="primary">Edit</Button>
        </div>
      </article>
    </section>
  );
};
