import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, EditPost, DeletePost } from "../services";
import { instance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
  const res = await instance.get("posts");
  return res.data} catch(err) {
    return err;
  }
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchPosts.fulfilled]: (state, {payload}) => {
      state.posts = payload;
    },
  },
});

export default postSlice.reducer;
