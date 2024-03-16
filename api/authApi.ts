/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import api from "./api";

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;

// 구글 로그인
export const loginWithGoogle = async (authCode: string | null) => {
  const response = await api.post("/login/google", { authCode, redirectUri });
  return response.data;
};

// 구글 로그아웃
export async function logoutApi() {
  try {
    const response = await api.delete("/logout");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
