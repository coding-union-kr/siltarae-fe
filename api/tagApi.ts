import api from "./api";

export async function fetchTags() {
  try {
    const response = await api.get("/tags", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjgzOTQ2LCJleHAiOjE3MDM4NjM5NDZ9.bzJB7QUNtXQpEZiMthw3z6_ZgB4ZDfk2yqFvRuo-VrI`,
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjgzOTQ2LCJleHAiOjE3MDM4NjM5NDZ9.bzJB7QUNtXQpEZiMthw3z6_ZgB4ZDfk2yqFvRuo-VrI`,
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjgzOTQ2LCJleHAiOjE3MDM4NjM5NDZ9.bzJB7QUNtXQpEZiMthw3z6_ZgB4ZDfk2yqFvRuo-VrI`,
      },
      name,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
