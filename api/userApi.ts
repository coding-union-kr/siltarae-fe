/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

// 프로필(이미지, 별명) 불러오기
export async function getUserProfile() {
  try {
    const response = await api.get("/member");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 프로필 이미지 업로드
// *트러블슈팅 : file을 data: {}로 씌우면 안된다.
export async function uploadProfileImage(file: FormData) {
  try {
    const response = await api.post("/member/image", file);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 프로필 별명 변경
export async function updateProfileNickname(nickname: string) {
  try {
    const response = await api.put("/member", { nickname });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 계정 삭제
export async function deleteAccount() {
  try {
    const response = await api.delete("/member");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
