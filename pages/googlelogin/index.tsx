import React, { useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { loginWithGoogle } from "@/api/authApi";
import router from "next/router";
import axiosInstance from "@/api/api";
import { useDispatch } from "react-redux";
import { logIn } from "@/features/auth/authReducer";

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
      const expiryDays = 1;
      const date = new Date();
      date.setTime(date.getTime() + expiryDays * 24 * 60 * 60 * 1000);
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `accessToken=${accessToken};${expires};path=/`;
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      dispatch(logIn());
      router.push("/");
    },
  });

  useEffect(() => {
    mutate();
  }, [mutate]);

  return (
    <div className="flex justify-center h-screen">
      <div className="mt-32 text-xl font-bold italic text-center">
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
