import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, EditPost, DeletePost } from "../services";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducer(builder) {
    builder 
      .addCase
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
