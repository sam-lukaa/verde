import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, EditPost, DeletePost } from "../services";
import { instance } from "../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/getPosts", async () => {
  const res = await instance.get("posts");
  return res.data;
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducer(builder) {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = state.posts.unshift(action.payload);
    });
  }
  // extraReducer: {
  //   [GetPosts.fulfilled]: (state, action) => {
  //     state.posts = action.payload;
  //   },
  //   [GetPosts.rejected]: (state, action) => {
  //     state.posts = [];
  //   },
  //   [CreatePost.fulfilled]: (state, action) => {
  //     state.posts.unshift(action.payload);
  //     state.loading = false;
  //   },
  //   [EditPost.fulfilled]: (state, action) => {
  //     state.posts.unshift(action.payload);
  //     state.loading = false;
  //   },
  //   [DeletePost.fulfilled]: (state, action) => {
  //     state.posts.unshift(action.payload);
  //     state.loading = false;
  //   },
  // },
});

export default postSlice.reducer;
