/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

// 댓글 조회하기
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
    console.error(error);
    throw error;
  }
}

// 댓글 추가하기
export async function createCommentsPost(mistakeId: string, content: string) {
  try {
    const response = await api.post(
      `/comment`,
      { mistakeId, content },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
