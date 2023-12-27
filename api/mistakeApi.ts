/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

export async function fetchFeedPosts(
  size: number,
  page: number,
  feedType: string,
) {
  try {
    const response = await api.get("/feed", {
      params: { size, page, feedType },
    });
    return response.data.feeds;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchPersonalPosts(
  page: number,
  size: number,
  tag: string,
) {
  try {
    const response = await api.get("/mistakes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU1MjQzLCJleHAiOjE3MDM2NTcwNDN9.__pqZAkZAUCkx6nK-ze-aBRj7lR-1FQxJEiRTRDu08w`,
      },
      params: { page, size, tag },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchDetailedPost(id: string) {
  try {
    const response = await api.get(`/mistakes/${id}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU1MjQzLCJleHAiOjE3MDM2NTcwNDN9.__pqZAkZAUCkx6nK-ze-aBRj7lR-1FQxJEiRTRDu08w`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createMistakePost(content: string, tags: number[]) {
  try {
    const response = await api.post("/mistakes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU1MjQzLCJleHAiOjE3MDM2NTcwNDN9.__pqZAkZAUCkx6nK-ze-aBRj7lR-1FQxJEiRTRDu08w`,
      },
      data: {
        tagIds: tags,
        content,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function likePost(id: number) {
  try {
    const response = await api.post("/like", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU1MjQzLCJleHAiOjE3MDM2NTcwNDN9.__pqZAkZAUCkx6nK-ze-aBRj7lR-1FQxJEiRTRDu08w`,
      },
      params: {
        mistakeId: id,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
