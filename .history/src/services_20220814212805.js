import { instance } from "./utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPosts = createAsyncThunk(
  "posts/getPosts",
  async () => { 
    const res = await instance.get("posts");
    return res.data;
  }
);

export const GetPost = createAsyncThunk(
  "posts/getPost",
  async (id) => { 
    const res = await instance.get(`posts/${id}`);
    return res.data;
  }
);

export const CreatePost = createAsyncThunk(
  "posts/createPost",
  async (post) => {
    const res = await instance.post('posts', {
      header: {
        post
      },
    });

    return res.data;
  }
);

export const EditPost = createAsyncThunk(
  "posts/editPost",
  async (id, post) => {
    const res = await instance.put(`posts/${id}`, {
      header: {
        post
      },
    });

    return res.data;
  }
);

export const DeletePost = createAsyncThunk(
  "posts/deletePost",
  async (id, post) => {
    const res = await instance.delete(`posts/${id}`, {
      header: {
        post,
      },
    })
  }
);
