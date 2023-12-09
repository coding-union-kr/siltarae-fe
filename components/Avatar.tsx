import React from "react";
// import Image from "next/image";
// 더 나은 이미지 최적화를 위해서 next에서 제공하는 Image 태그를 사용하는 것이 옳으나,
// 아직 API 서버가 없으므로 임의적으로 img 태그를 사용하겠습니다!
// https://nextjs.org/docs/messages/next-image-unconfigured-host

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AvatarProps {
  size?: string;
  userImageUrl?: string;
}

function Avatar({ size = "w-24", userImageUrl = "" }: AvatarProps) {
  return (
    <div
      className={`flex items-center avatar ${size} rounded-full shadow-md shadow-slate-500`}
    >
      {userImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={userImageUrl} alt="Profile" />
      ) : (
        <FontAwesomeIcon icon="fa-solid fa-user" />
      )}
    </div>
  );
}

export default Avatar;
