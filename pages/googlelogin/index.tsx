import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "@/features/auth/authReducer";
import { loginWithGoogle } from "@/api/authApi";
import { useDispatch } from "react-redux";
import axiosInstance from "@/api/api";
import setCookie from "@/util/cookie";
import router from "next/router";

export default function GoogleLoading() {
  const dispatch = useDispatch();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => {
      const authCode = new URL(window.location.href).searchParams.get("code");
      if (!authCode) {
        throw new Error("authCode 가 정확하지 않습니다.");
      }
      return loginWithGoogle(authCode);
    },
    onSuccess: (data) => {
      const { accessToken } = data;
      // 쿠키 생성 후 accessToken이라는 이름으로 저장
      setCookie("access-token", accessToken, 1);
      // 이부분은 좀 더 공부하기
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      dispatch(logIn());
      router.push("/");
    },
  });

  useEffect(() => {
    mutate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="mt-32 text-xl font-semibold text-center animate-pulse">
        {isPending && <p>Google Login...중</p>}
        {isError && (
          <p>
            에러가 발생했습니다. <br />
            {error.message}
          </p>
        )}
      </div>
    </div>
  );
}
