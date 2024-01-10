import React, { useEffect } from "react";
import axios from "axios";

export default function GoogleLoading() {
  useEffect(() => {
    async function loading() {
      const authCode = new URL(window.location.href).searchParams.get("code");
      try {
        const response = await axios.post(
          `https://api-siltarae.me/api/v1/login/google`,
          { authCode },
        );
        console.log(response);
        // 엑세스 토큰 받아오기
        const { accessToken } = response.data;
        console.log(accessToken);
        // localStorage.setItem("access_token", accessToken);
        // TODO : 백엔드에서 accessToken을 받아온걸 쿠키로 저장해야합니다.

        // TODO : 다 완성 되면 router 추가해야함
      } catch (err) {
        console.log("에러발생 :", err);
      }
    }
    loading();
  }, []);

  return (
    <div className="flex justify-center h-screen">
      <div className="mt-32 text-3xl font-bold italic text-center text-blue-400">
        <p>Google Login...중</p>
      </div>
    </div>
  );
}
