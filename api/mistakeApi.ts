/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
import api from "./api";

// 실수 피드 조회 get
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

// 개인 실수 피드 get
export async function fetchPersonalPosts(
  page: number,
  size: number,
  tag: string,
) {
  try {
    const response = await api.get("/mistakes", {
      params: { page, size, tag },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 상세 실수 조회 get
export async function fetchDetailedPost(id: string) {
  try {
    const response = await api.get(`/mistakes/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 실수 등록 post
export async function createPost(content: string, tags: number[]) {
  try {
    const response = await api.post("/mistakes", {
      tagIds: tags,
      content,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 실수 삭제
export async function deletePost(mistakeId: number) {
  try {
    const response = await api.post("/mistakes/delete", {
      mistakeId,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 좋아요 등록/삭제 post
export async function likePost(id: number) {
  try {
    const response = await api.post(`/like`, null, {
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
