import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SocialLoginModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

function SocialLoginModal({ isModalOpen, onClose }: SocialLoginModalProps) {
  // 구글에서 발급받는 클라이언트 아이디
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  // 코드를 전달받는 리다이렉트 웹페이지
  const googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;
  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=9210054985-pg16brdql4bni9r028inu8j6iu2u8m4l.apps.googleusercontent.com&redirect_uri=${googleRedirectUrl}&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=code`;

  const loginHandler = () => {
    // 구글 로그인 화면으로 이동 후 로딩화면으로 리다이렉트
    window.location.href = googleAuthUrl;
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <div>
          <h1 className="font-semibold">
            <p className="inline">실타래 🧶 </p>
            로그인
          </h1>
          <p className="text-sm">실수를 나누고 함께 성장해요! </p>
        </div>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            type="button"
          >
            ✕
          </button>
        </div>
        <button className="btn w-auto" type="button" onClick={loginHandler}>
          <FontAwesomeIcon icon={faGoogle} />
          구글 계정으로 계속하기
        </button>
      </div>
    </div>
  );
}

export default SocialLoginModal;
