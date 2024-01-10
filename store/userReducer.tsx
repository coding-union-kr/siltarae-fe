/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

// TODO: 리덕스 구현 필요(현재는 test 코드)
interface InitialState {
  value: number;
}

const initialState: InitialState = {
  // 초기 상태 정의
  value: 0,
};

const userSlice = createSlice({
  name: "myReducer",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
