import { instance } from "./utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPosts = createAsyncThunk(
  "post/getPosts",
  async () => await (await instance.get("posts")).data
);

export const CreatePost = createAsyncThunk('post/createPost', async (post) => await (await instance.post('posts', {
  headers: {
    id: 1,
    post
  }
})).data);

export const EditPost = createAsyncThunk('post/editPost', async (id, post) => await (await instance.put(`posts/${id}`, {
  header: {
    id: 1,
    post
  }
})).data);

export const DeletePost = createAsyncThunk('post/deletePost', async (id, post) => await (await instance.delete(`posts/${id}`)) )