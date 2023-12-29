import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface AvatarProps {
  userImageUrl?: string;
}

function ProfileAvatar({ userImageUrl }: AvatarProps) {
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
      className="avatar relative cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <div className="flex items-center justify-center w-24 rounded-full shadow-md shadow-slate-300 border-solid border-[5px] border-white bg-white">
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
          <Image
            src={userImageUrlState}
            alt="Profile"
            width={100}
            height={100}
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size="5x"
            className="text-center w-full h-full mt-1 text-[#9CC490] bg-white"
          />
        )}
      </div>
      <FontAwesomeIcon
        icon={faCamera}
        className="absolute text-slate-700 bottom-1 right-0 cursor-pointer "
      />
    </div>
  );
}

export default ProfileAvatar;
