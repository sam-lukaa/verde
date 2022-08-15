import { ConfigureStore } from "@reduxjs/toolkit";
import postSlice from './features/postSlice';

export default configureStore({
  reduce: {
    post: postSlice
  }
})