import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";

interface SocialLoginModalProps {
  toggleModal?: (event: React.MouseEvent<HTMLElement>) => void;
}

function SocialLoginModal({ toggleModal }: SocialLoginModalProps) {
  const router = useRouter();
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const googleRedirectUrl = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL;
  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${googleRedirectUrl}&response_type=code&scope=email profile`;

  const loginHandler = () => {
    window.location.href = googleLoginUrl;
  };

  const onClickBack = () => {
    router.push("/");
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/30 z-50 flex justify-center items-center"
      onClick={toggleModal}
    >
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
              onClick={onClickBack}
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
    </div>
  );
}

export default SocialLoginModal;
