import { createSlice } from "@reduxjs/toolkit";
import { GetPosts, CreatePost, EditPost, DeletePost } from "../services";


const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  extraReducer(builder) {
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.posts = state.posts.unshift(action.payload);
    })
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
