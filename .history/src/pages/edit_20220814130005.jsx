import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import { Button } from "../components";
import { instance } from "../utils/axios";

export const Edit = () => { 
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [newPost, setNewPost] = useState(initialState)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await instance.get(`posts/${id}`);
        setPost(res.data);

        const data = {
          title: res.data.title,
          body: res.data.body,
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchPosts();
  }, []);

  const initialState = {
    title: post.title,
    body: post.body,
  }

  

  const handleNewPost = (e) => {
    // const {name, value} = e.target;

    // setNewPost({...newPost, [name]: value});
  }

  const {title, body} = newPost;

  console.log(newPost);

  // edit post
  const handleEditPost = async () => {
    console.info('hello chief');

    try {
      const res = await instance.put(`posts/${id}`, {
        headers: {
          id: `${id}`,
          userId: `${post.userId}`,
          title: `${newPost.title}`,
          body: `${newPost.body}`
        }
      });

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <section className="bg-white my-[] lg:my-[2rem] px-[1rem] lg:py-[2.5rem]">
      {/* card */}
      <article className="flex flex-col gap-[.8rem] lg:gap-[2rem] lg:w-[75%] m-auto">
        {/* new post */}
        <div className='flex justify-end'>
        <Button variant='primary'>New Post</Button>
        </div>

        {/* card title */}
        <textarea className="font-[600] bg-gray-300 p-[.4rem] resize-none lg:py-[1rem] lg:px-[4rem] text-[] lg:text-[1.4rem] rounded-[6px] shadow-md placeholder:italic" placeholder='Post title' defaultValue={title} name='title'/>

        {/* card content */}
        <textarea className="bg-gray-300 p-[.4rem] resize-none lg:py-[1rem] lg:px-[4rem] lg:pb-[3rem] text-gray-600 rounded-[6px] shadow-md placeholder:italic" placeholder='Enter your post here' defaultValue={body} name='body'/>

        {/* buttons */}
        <div className={` ${post.userId === 1 ? 'flex' : 'hidden'} gap-[.6rem] lg:gap-[1.5rem] justify-end`}>
          <Button variant="danger">Delete</Button>
          <Button variant="primary" onClick = {() => {handleEditPost()}}>Edit</Button>
        </div>
      </article>
    </section>
  );
};
