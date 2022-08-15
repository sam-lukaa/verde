import { useState } from "react";
import {  useNavigate } from "react-router-dom";

import { Button } from "../components";
import { instance } from "../utils/axios";

import {CreatePost} from '../services';
import {useDispatch, useSelector} from 'react-redux';

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {userId} = useSelector(state => state.post)
  console.log(userId);

  const initialData = {
    title: "",
    body: "",
  };

  const [newPost, setNewPost] = useState(initialData);

  const handleNewPost = (e) => {
    const { name, value } = e.target;

    setNewPost({ ...newPost, [name]: value });
  };

  const { title, body } = newPost;
  console.log(title);

  // create post
  const handleCreatePost = async (e) => {
    e.preventDefault();

    if (!title || !body) return;

    try {

      const res = await dispatch(CreatePost, {
        headers: {
          userId: 1,
          title: `${title}`,
          body: `${body}`,
        },
      });

      console.log(res);

      // if(res.status === 201) navigate('/');
    } catch (err) {
      return err;
    }
  };

  return (
    <section className="bg-white my-[] lg:my-[2rem] p-[1rem] lg:py-[2.5rem]">
      {/* card */}
      <form
        onSubmit={handleCreatePost}
        className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto"
      >
        {/* card title */}
        <textarea
          className="font-[600] bg-gray-300 p-[.4rem] lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md placeholder:italic"
          placeholder="Post header"
          defaultValue={title}
          name="title"
          onChange={handleNewPost}
        ></textarea>

        {/* card content */}
        <textarea
          className="bg-gray-300 p-[.4rem] lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md placeholder:italic"
          placeholder="Enter your post here"
          defaultValue={body}
          name="body"
          onChange={handleNewPost}
        ></textarea>

        {/* buttons */}
        <div className="flex gap-[.6rem] lg:gap-[1.5rem] justify-end">
          <Button variant="danger">Delete</Button>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </div>
      </form>
    </section>
  );
};
