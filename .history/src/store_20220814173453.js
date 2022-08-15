import { ConfigureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";

export default ({
  reducer: {
    post: postSlice,
  },
});
