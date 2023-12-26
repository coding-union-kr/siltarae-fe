import React, { useEffect } from "react";
import axios from "axios";

export default function GoogleLoading() {
  useEffect(() => {
    async function loading() {
      const authCode = new URL(window.location.href).searchParams.get("code");
      try {
        const response = await axios.post(
          `https://api-siltarae.store/api/v1/login/google`,
          { authCode },
        );

        // 엑세스 토큰 받아오기
        const { accessToken } = response.data;
        localStorage.setItem("access_token", accessToken);

        // 사용자 정보 요청
        const userInfo = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo`,
          {
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          },
        );
        return console.log(userInfo);
      } catch (err) {
        return console.log("err=", err);
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
