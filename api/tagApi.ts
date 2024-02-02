/* eslint-disable no-console */
import api from "./api";

export async function fetchTags() {
  try {
    const response = await api.get("/tags");
    return response.data.tags;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTag(id: number[]) {
  try {
    const response = await api.post("/tags/delete", id);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

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
