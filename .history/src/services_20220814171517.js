import { instance } from "./utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetPosts = createAsyncThunk(
  "post/getposts",
  async () => await (await instance.get("posts")).data
);

export const CreatePost = createAsyncThunk('post/create', async () => a