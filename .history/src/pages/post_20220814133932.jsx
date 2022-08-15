import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from "../components";
import { instance } from "../utils/axios";

export const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  // fetch posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await instance.get(`posts/${id}`);
        console.log(res.data);

        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, [id]);

  const handleClick = () => {
    navigate(`/edit/${post.id}`)
  }

  return (
    <section className="bg-white my-[] lg:my-[2rem] py-[] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto">
        {/* card title */}
        <header className="font-[600] p-[.4rem] lg:py-[1rem] lg:px-[4rem] text-[1.4rem] lg:text-[1.4rem] capitalize">
          {post?.title}
        </header>

        {/* card content */}
        <article className="p-[.4rem] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 flex flex-col gap-[] lg:gap-[.8rem]">
          <p>
            {post?.body}
          </p>
          
        </article>

        {/* buttons */}
        {post.userId === 1 &&
          <div className="flex gap-[] lg:gap-[1.5rem] justify-end p-[.4rem] lg:py-[1rem] lg:px-[4rem]">
            <Button variant="primary" onClick={handleClick}>Edit</Button>
          </div>
        }
      </article>
    </section>
  );
};
