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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
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
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createMistakePost(content: string, tags: string) {
  try {
    const response = await api.post("/mistakes", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
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
