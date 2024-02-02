/* eslint-disable no-console */
import api from "./api";

// 태그 목록
export async function fetchTags() {
  try {
    const response = await api.get("/tags");
    return response.data.tags;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 태그 삭제
export async function deleteTag(id: number[]) {
  try {
    const response = await api.post("/tags/delete", id);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 태그 생성
export async function createTag(name: string) {
  try {
    const response = await api.post("/tags", {
      name,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
