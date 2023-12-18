import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SocialLoginModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

function SocialLoginModal({ isModalOpen, onClose }: SocialLoginModalProps) {
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
        <button className="btn w-auto" type="button">
          <FontAwesomeIcon icon={faGoogle} />
          구글 계정으로 계속하기
        </button>
      </div>
    </div>
  );
}

export default SocialLoginModal;
