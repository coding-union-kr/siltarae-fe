/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

const loginToken = process.env.NEXT_PUBLIC_LOGIN_TOKEN;

export async function getUserProfile() {
  try {
    const response = await api.get("/member", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function uploadProfileImage(file: File) {
  try {
    const response = await api.post("/member/image", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
      data: {
        file,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateUserProfile(nickname: string) {
  try {
    const response = await api.put("/member", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
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
    const response = await api.delete("/member", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
