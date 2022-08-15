import {createSlice} from '@reduxjs/toolkit';
import { GetPosts, CreatePost, EditPost, DeletePost } from '../services';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  extraReducer: {
    [GetPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
    }, 
    [CreatePost.fulfilled]: (state, action) => {
      state.posts.unshift(action.payload);
      state.loading = false
    },
  }
})