import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// import Image from "next/image";
// 더 나은 이미지 최적화를 위해서 next에서 제공하는 Image 태그를 사용하는 것이 옳으나,
// 아직 API 서버가 없으므로 임의적으로 img 태그를 사용하겠습니다!
// https://nextjs.org/docs/messages/next-image-unconfigured-host

type IconSize = "1x" | "2x" | "3x" | "4x" | "5x" | "6x";
interface AvatarProps {
  avatarSize?: string;
  userImageUrl?: string;
  iconSize?: IconSize;
}

function Avatar({
  avatarSize = "w-11",
  userImageUrl,
  iconSize = "2x",
}: AvatarProps) {
  return (
    <div className="avatar ">
      <div
<<<<<<< HEAD
        className={`flex items-center justify-center ${avatarSize} rounded-full shadow-md shadow-slate-300 border-solid border-4 border-white`}
=======
        className={`flex items-center justify-center ${avatarSize} rounded-full shadow-md shadow-slate-500`}
>>>>>>> develop
      >
        {userImageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={userImageUrl} alt="Profile" />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size={iconSize}
<<<<<<< HEAD
            className="text-center w-full h-full mt-1 text-[#9CC490] bg-white"
=======
            className="text-center w-full h-full mt-3"
>>>>>>> develop
          />
        )}
      </div>
    </div>
  );
}

export default Avatar;
