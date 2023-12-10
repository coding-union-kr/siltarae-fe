import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import React from "react";
// import Image from "next/image";
// 더 나은 이미지 최적화를 위해서 next에서 제공하는 Image 태그를 사용하는 것이 옳으나,
// 아직 API 서버가 없으므로 임의적으로 img 태그를 사용하겠습니다!
// https://nextjs.org/docs/messages/next-image-unconfigured-host

type IconSize = "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "4x" | "5x" | "6x";
interface AvatarProps {
  avatarSize?: string;
  userImageUrl?: string;
  iconSize?: IconSize;
}

function Avatar({
  avatarSize = "w-24",
  userImageUrl,
  iconSize = "5x",
}: AvatarProps) {
  return (
    <div className="avatar">
      <div
        className={`flex items-center justify-center ${avatarSize} rounded-full shadow-md shadow-slate-500`}
      >
        {userImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={userImageUrl} alt="Profile" />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size={iconSize}
            className="text-center w-full h-full mt-2"
          />
        )}
      </div>
    </div>
  );
}

export default Avatar;
