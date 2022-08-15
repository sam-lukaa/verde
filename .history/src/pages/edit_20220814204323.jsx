import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Button } from "../components";

import { GetPost, EditPost, DeletePost } from "../services";
import { useDispatch, useSelector } from "react-redux";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [post, setPost] = useState({});

  const { title, body } = post;

  const { loading, userId } = useSelector((state) => state.post);

  // fetch post
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await dispatch(GetPost(id)).unwrap();
        setPost(res);
      } catch (err) {
        return err;
      }
    }

    fetchPost();
  }, [id, dispatch]);

  // input handler
  const handleNewPost = (e) => {
    const { name, value } = e.target;

    setPost({ ...post, [name]: value });
  };

  // delete post
  const handleDelete = async () => {
    try {
      const res = await dispatch(DeletePost(id), {
        userId: userId,
      });

      if (res.meta.requestStatus === "fulfilled") navigate("/");
    } catch (err) {
      return err;
    }
  };

  // edit post
  const handleEditPost = async (e) => {
    e.preventDefault();

    try {
      const res = await dispatch(EditPost(id), {
        id: id,
        userId: userId,
        title: `${post.title}`,
        body: `${post.body}`,
      });

      if (res.meta.requestStatus === "fulfilled") navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="bg-white my-[] lg:my-[2rem] px-[1rem] lg:py-[2.5rem]">
      {/* card */}
      <form
        onSubmit={handleEditPost}
        className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto"
      >
        {/* new post */}
        <div className="flex justify-end">
          <Button variant="primary">New Post</Button>
        </div>

        {/* card title */}
        <textarea
          className="font-[600] bg-gray-300 p-[.4rem] resize-none lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md placeholder:italic"
          placeholder="Post title"
          defaultValue={title}
          name="title"
          onChange={handleNewPost}
        />

        {/* card content */}
        <textarea
          className="bg-gray-300 p-[.4rem] resize-none lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md placeholder:italic"
          placeholder="Enter your post here"
          defaultValue={body}
          name="body"
          onChange={handleNewPost}
        />

        {/* buttons */}
        {post.userId && (
          <div className={` flex gap-[.6rem] lg:gap-[1.5rem] justify-end`}>
            <Button variant="danger" onClick={() => handleDelete()}>
              Delete
            </Button>
            <Button variant="primary" type="submit">
              Edit Post
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};
