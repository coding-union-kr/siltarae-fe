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
<<<<<<< HEAD
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU5MTY2LCJleHAiOjE4MDM2NTkxNjZ9.uNGzulSDuv3poCc4-5qGoItS3puDyPsEtFFBq_4jNkw`,
=======
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
>>>>>>> develop
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
<<<<<<< HEAD
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU5MTY2LCJleHAiOjE4MDM2NTkxNjZ9.uNGzulSDuv3poCc4-5qGoItS3puDyPsEtFFBq_4jNkw`,
=======
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
>>>>>>> develop
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

<<<<<<< HEAD
export async function createMistakePost(content: string, tags: number[]) {
  try {
    const response = await api.post("/mistakes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU5MTY2LCJleHAiOjE4MDM2NTkxNjZ9.uNGzulSDuv3poCc4-5qGoItS3puDyPsEtFFBq_4jNkw`,
=======
export async function createMistakePost(content: string, tags: string) {
  try {
    const response = await api.post("/mistakes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
>>>>>>> develop
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjU5MTY2LCJleHAiOjE4MDM2NTkxNjZ9.uNGzulSDuv3poCc4-5qGoItS3puDyPsEtFFBq_4jNkw`,
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
