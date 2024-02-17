import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage를 사용할 경우는 이 경로로
import authReducer from "../features/auth/authReducer";

// 1) persistReducer의 두 번째 인자
export const reducers = combineReducers({
  auth: authReducer,
});

// 2) persistReducer의 첫 번째 인자
const persistConfig = {
  key: "root", // localStorage key
  storage, // localStorage
  // whitelist: ['항목'] // 유지하고 싶은 항목
};

// 3) 지속되는 리듀서 만들기 ⭐️
const persistedReducer = persistReducer(persistConfig, reducers);

// 4) 지속되는 리듀서 넣어주기
const store = configureStore({
  reducer: persistedReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
