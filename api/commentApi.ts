/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

// Comments 조회
export async function fetchComments(
  size: number,
  page: number,
  mistakeId: string,
) {
  try {
    const response = await api.get("/comment", {
      params: { size, page, mistakeId },
    });
    return response.data.comments;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}

// Comments 추가
export async function createCommentsPost(mistakeId: string, content: string) {
  try {
    const response = await api.post(
      `/comment`,
      { mistakeId, content },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjgzOTQ2LCJleHAiOjE3MDM4NjM5NDZ9.bzJB7QUNtXQpEZiMthw3z6_ZgB4ZDfk2yqFvRuo-VrI`,
        },
      },
    );
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}

// Comments 삭제
export async function deleteComments(commentId: number) {
  try {
    const response = await api.delete(`/comment/${commentId}`, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzAzNjgzOTQ2LCJleHAiOjE3MDM4NjM5NDZ9.bzJB7QUNtXQpEZiMthw3z6_ZgB4ZDfk2yqFvRuo-VrI`,
      },
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
