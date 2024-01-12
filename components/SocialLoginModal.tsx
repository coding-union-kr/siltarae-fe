import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// interface SocialLoginModalProps {
//   isModalOpen: boolean;
//   onClose: () => void;
// }
// { isModalOpen, onClose }: SocialLoginModalProps

function SocialLoginModal() {
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUrl}&response_type=code&scope=email profile`;

  const loginHandler = () => {
    window.location.href = googleLoginUrl;
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
