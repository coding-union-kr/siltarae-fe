/* eslint-disable react-hooks/rules-of-hooks */
import api from "./api";

export default async function fetchComments(
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
