import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface AvatarProps {
  userImageUrl?: string;
}

function Avatar({ userImageUrl }: AvatarProps) {
  return (
    <div className="avatar ">
      <div className="flex items-center justify-center xs:w-11 w-9 rounded-full shadow-md shadow-slate-300 border-solid xs:border-4 border-[3px] border-white bg-white">
        {userImageUrl ? (
          <Image src={userImageUrl} alt="Profile" />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size="2x"
            className="text-center w-full h-full xs:mt-1 text-[#9CC490] bg-white"
          />
        )}
      </div>
    </div>
  );
}

export default Avatar;
