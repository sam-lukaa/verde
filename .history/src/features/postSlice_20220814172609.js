import {createSlice} from '@reduxjs/toolkit';
import {GetPosts, }

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  extraReducer: {
    []
  }
})