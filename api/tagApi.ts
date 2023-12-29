import api from "./api";

const loginToken = process.env.NEXT_PUBLIC_LOGIN_TOKEN;

export async function fetchTags() {
  try {
    const response = await api.get("/tags", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return response.data.tags;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteTag(id: number[]) {
  try {
    const response = await api.post("/tags/delete", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
      data: { id },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createTag(name: string) {
  try {
    const response = await api.post("/tags", {
      headers: {
        Authorization: `Bearer ${loginToken}`,
      },
      data: { name },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
