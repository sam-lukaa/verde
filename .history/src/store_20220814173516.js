import { ConfigureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";

export default ConfigureStore({
  reducer: {
    post: postSlice,
  },
});
