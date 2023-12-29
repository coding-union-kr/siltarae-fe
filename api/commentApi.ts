/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

const loginToken = process.env.NEXT_PUBLIC_LOGIN_TOKEN;

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
export async function createComments(mistakeId: string, content: string) {
  try {
    const response = await api.post(
      `/comment`,
      { mistakeId, content },
      {
        headers: {
          Authorization: `Bearer ${loginToken}`,
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
        Authorization: `Bearer ${loginToken}`,
      },
    });
    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}
