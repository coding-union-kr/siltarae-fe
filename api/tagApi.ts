import api from "./api";

const loginToken = process.env.LOGIN_TOKEN;

export async function fetchTags() {
  try {
    const response = await api.get("/tags", {
      headers: {
        Authorization: loginToken,
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
        Authorization: loginToken,
      },
      id,
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
        Authorization: loginToken,
      },
      name,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
