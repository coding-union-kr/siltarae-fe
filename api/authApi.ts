/* eslint-disable import/prefer-default-export */
import api from "./api";

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;

export const loginWithGoogle = async (authCode: string | null) => {
  const response = await api.post("/login/google", { authCode, redirectUri });
  return response.data;
};
