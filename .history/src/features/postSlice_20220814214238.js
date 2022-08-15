import { createSlice } from "@reduxjs/toolkit";
import {
  GetPosts,
  GetPost,
  CreatePost,
  EditPost,
  DeletePost,
} from "../services";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {},
    loading: false,
    error: null,
    userId: 1,
  },
  extraReducers: {
    // get posts
    [GetPosts.fulfilled]: (state, { payload }) => {
      state.posts = payload;
      state.loading = false;
    },
    [GetPosts.pending]: (state) => {
      state.posts = [];
      state.loading = true;
    },
    [GetPosts.rejected]: (state, { payload }) => {
      state.posts = [];
      state.loading = false;
      state.error = payload.message;
    },

    // get post
    [GetPost.fulfilled]: (state, { payload }) => {
      state.post = payload;
    },
    [GetPost.pending]: (state) => {
      state.post = {};
      state.loading = true;
    },
    [GetPost.rejected]: (state, { payload }) => {
      state.post = {};
      state.loading = false;
      state.error = payload.message;
    },

    // create post
    [CreatePost.fulfilled]: (state, { payload }) => {
      state.posts.unshift(payload);
      state.loading = false;
    },
    [CreatePost.pending]: (state) => {
      state.loading = true;
    },
    [CreatePost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    },

    // edit post
    [EditPost.fulfilled]: (state, { payload, meta }) => {
       const {
         args: { id },
       } = meta;

      //  console.log(meta);
       state.loading = false;


      // if (id) {
      //   state.posts = state.posts.map((post) =>
      //     post.id === id ? payload : post
      //   );
      // }

    },
    [EditPost.pending]: (state) => {
      state.loading = true;
    },
    [EditPost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    },

    // delete post
    [DeletePost.fulfilled]: (state, { payload, meta }) => {
      const {
        args: { id },
      } = meta;
      state.loading = false;

      if (id) {
        state.posts = state.posts.filter((post) => post.id !== id);
      }
    },
    [DeletePost.pending]: (state) => {
      state.loading = true;
    },
    [DeletePost.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload.message;
    },
  },
});

export default postSlice.reducer;
