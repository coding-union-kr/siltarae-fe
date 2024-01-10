import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface LikeButtonProps {
  count: number;
  onLikeClick: (e: React.MouseEvent<SVGSVGElement>) => void;
  isLiked: boolean;
}

function LikeButton({ count, onLikeClick, isLiked }: LikeButtonProps) {
  return (
    <div className="select-none">
      <span className="mr-2 ">{count}</span>
      <FontAwesomeIcon
        onClick={onLikeClick}
        icon={isLiked ? fasHeart : farHeart}
        size="xl"
        className="cursor-pointer text-[#F3685F]"
      />
    </div>
  );
}

export default LikeButton;
