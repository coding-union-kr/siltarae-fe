import api from "./api";

// TODO: 다른 함수 또 적을 때 지워주기
// eslint-disable-next-line import/prefer-default-export
export async function fetchTags() {
  try {
    const response = await api.get("/tags", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTE2MjM5MDIyLCJleHBpcmF0aW9uIjoxODE4MDM5MDIyfQ.4S2FuDbdZyESn8YeE3rNnq1bx_RgrcLWCpbymAP5t5w`,
      },
    });
    return response.data.tags;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
