import {createSlice} from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
    loading: false,
    error: null
  },
  extraReducer
})