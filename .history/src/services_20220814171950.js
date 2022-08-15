import { instance } from "./utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPosts = createAsyncThunk(
  "post/getposts",
  async () => await (await instance.get("posts")).data
);

export const CreatePost = createAsyncThunk('post/create', async (post) => await (await instance.post('posts', {
  headers: {
    id: 1,
    post
  }
})).data);

export const EditPost = createAsyncThunk('post/edit', )