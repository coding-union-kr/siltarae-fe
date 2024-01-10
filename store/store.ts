import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./userReducer";

// TODO: 리덕스 구현 필요(현재는 test 코드)
export const store = configureStore({
  reducer: { myReducer },
});

export default store;
