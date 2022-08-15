import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "../components";

import { GetPost, DeletePost } from "../services";
import {useDispatch, useSelector} from 'react-redux';


export const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userId } = useSelector((state) => state.post);

  const [post, setPost] = useState({});

  // fetch post
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await dispatch(GetPost(id)).unwrap();
        setPost(res);
      } catch (err) {
        toast.error(err);
      }
    }

    fetchPost();
  }, [id, dispatch]);

  const handleClick = () => {
    navigate(`/edit/${post.id}`);
  };

  // delete post
  const handleDelete = async () => {
    try {
      const res = await dispatch(DeletePost(id), {
        userId: userId,
      });

      if (res.meta.requestStatus === "fulfilled") navigate("/");
      toast.success("Post Deleted");
    } catch (err) {
      toast.error(err);
    }
  };

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
          <p>{post?.body}</p>
        </article>

        {/* buttons */}
        {post.userId === 1 && (
          <div className="flex gap-[.6rem] lg:gap-[1.5rem] justify-end p-[.4rem] lg:py-[1rem] lg:px-[4rem]">
            <Button variant="danger" onClick={() => handleDelete()}>
              Delete
            </Button>
            <Button variant="primary" onClick={handleClick}>
              Edit
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};
