import { configureStore } from "@reduxjs/toolkit"; // pehele configure krna hai is procedure ka use krn hai..
import todoReducer from "../features/todo/TodoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
