import React from "react";
// import Image from "next/image";
// 더 나은 이미지 최적화를 위해서 next에서 제공하는 Image 태그를 사용하는 것이 옳으나,
// 아직 API 서버가 없으므로 임의적으로 img 태그를 사용하겠습니다!
// https://nextjs.org/docs/messages/next-image-unconfigured-host

interface AvatarProps {
  size?: string;
  authorName?: string;
}

function Avatar({ size = "w-24", authorName = "" }: AvatarProps) {
  return (
    <div className="flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        alt="Profile"
        className={`avatar ${size} rounded-full`}
      />
      {authorName && <span className="ml-2">{authorName}</span>}
    </div>
  );
}

export default Avatar;
