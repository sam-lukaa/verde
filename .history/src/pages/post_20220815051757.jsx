import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";

import { Button, Modal } from "../components";

import { GetPost, DeletePost } from "../services";
import { useDispatch, useSelector } from "react-redux";

export const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userId } = useSelector((state) => state.post);

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
      <article className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[60%] m-auto lg:m-0">
        {/* navigation btn */}
        <div
          className="p-[.4rem] lg:ml-[4rem] flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <i
            className="fa fa-long-arrow-left mr-[0.4rem] bg-gray-300 hover:bg-gray-200 p-[.4rem] lg:p-[.5rem] rounded-full"
            aria-hidden="true"
          ></i>
          <p>Posts</p>
        </div>

        {/* card title */}
        <header className="font-[600] p-[.4rem] lg:py-[1rem] lg:px-[4rem] text-[1.4rem] lg:text-[1.4rem] capitalize">
          {post?.title}
        </header>

        {/* card content */}
        <article className="p-[.4rem] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 flex flex-col gap-[] lg:gap-[.8rem]">
          <p>{post?.body}</p>
        </article>

        {/* buttons */}
        {post.userId === userId && (
          <div className="flex gap-[.6rem] lg:gap-[1.5rem] justify-end p-[.4rem] lg:py-[1rem] lg:px-[4rem]">
            <Modal
              variant="danger"
              handler={handleDelete}
              handlerText="Proceed"
              header="Delete Post"
              text="You cannot reverse this process once initiated!"
            >
              <span>
                <i className="fa fa-trash-o mr-[.4rem]" aria-hidden="true"></i>
              </span>
              Delete
            </Modal>
            <Button variant="primary" onClick={handleClick}>
              <span>
                <i className="fa fa-pencil mr-[.4rem]" aria-hidden="true"></i>
              </span>
              Update
            </Button>
          </div>
        )}
      </article>
    </section>
  );
};
