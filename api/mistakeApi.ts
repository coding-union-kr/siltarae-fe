/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

const loginToken = process.env.LOGIN_TOKEN;

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
        Authorization: loginToken,
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
        Authorization: loginToken,
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
<<<<<<< HEAD
        Authorization: loginToken,
=======
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU5MTY2LCJleHAiOjE4MDM2NTkxNjZ9.uNGzulSDuv3poCc4-5qGoItS3puDyPsEtFFBq_4jNkw`,
>>>>>>> develop
      },
      data: JSON.stringify({
        tagIds: tags,
        content,
      }),
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
        Authorization: loginToken,
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
