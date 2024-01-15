/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

export async function getUserProfile() {
  try {
    const response = await api.get("/member");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function uploadProfileImage(file: File) {
  try {
    const response = await api.post(
      "/member/image",
      {
        file,
      },
      { headers: { "Content-Type": "multipart/form-data" } },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserProfile(nickname: string) {
  try {
    const response = await api.put("/member", {
      data: {
        nickname,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteAccount() {
  try {
    const response = await api.delete("/member");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
