import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCamera } from "@fortawesome/free-solid-svg-icons";

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

function ProfileAvatar({
  avatarSize = "w-24",
  iconSize = "5x",
  userImageUrl,
}: AvatarProps) {
  const [userImageUrlState, setUserImageUrlState] = useState<
    string | undefined
  >(userImageUrl);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) {
      setUserImageUrlState(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
<<<<<<< HEAD
      className="avatar relative cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <div
        className={`flex items-center justify-center ${avatarSize} rounded-full shadow-md shadow-slate-300 border-solid border-[5px] border-white`}
=======
      className="avatar relative"
      onClick={() => fileInputRef.current?.click()}
    >
      <div
        className={`flex items-center justify-center ${avatarSize} rounded-full shadow-md shadow-slate-500`}
>>>>>>> develop
      >
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {userImageUrlState ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={userImageUrlState} alt="Profile" />
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
      <FontAwesomeIcon
        icon={faCamera}
<<<<<<< HEAD
        className="absolute text-slate-700 bottom-1 right-0 cursor-pointer "
=======
        className="absolute text-slate-700 bottom-1 right-0 cursor-pointer"
>>>>>>> develop
      />
    </div>
  );
}

export default ProfileAvatar;
