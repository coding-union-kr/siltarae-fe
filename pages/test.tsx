import React, { useEffect } from "react";
import axios from "axios";

export default function GoogleLoading() {
  useEffect(() => {
    async function loading() {
      const authCode = new URL(window.location.href).searchParams.get("code");
      console.log(authCode);
      try {
        const response = await axios.post(
          `https://api-siltarae.store/api/v1/login/google`,
          { authCode },
        );
        console.log("성공했어요");
        return response;
      } catch (err) {
        return console.log("에러났어요");
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
