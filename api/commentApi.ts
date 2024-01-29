/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

type CommentDataType = {
  memberId: number;
  memberName: string;
  commentId: number;
  commentContent: string;
};

// Comments 조회
export async function fetchComments(
  size: number,
  page: number,
  mistakeId: string,
) {
  try {
    const response = await api.get<{ comments: CommentDataType[] }>(
      "/comment",
      {
        params: { size, page, mistakeId },
      },
    );
    return response.data.comments;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Comments 추가
export async function createComments(mistakeId: string, content: string) {
  try {
    const response = await api.post(`/comment`, { mistakeId, content });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// Comments 삭제
export async function deleteComments(commentId: number) {
  try {
    const response = await api.delete(`/comment/${commentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
