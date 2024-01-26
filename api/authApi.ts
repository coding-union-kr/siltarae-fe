/* eslint-disable import/prefer-default-export */
import api from "./api";

export const loginWithGoogle = async (authCode: string | null) => {
  const response = await api.post("/login/google", { authCode });
  return response.data;
};
