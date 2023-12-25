import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface LikeButtonProps {
  count: number;
}

function LikeButton({ count }: LikeButtonProps) {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(325);

  const toggleLikeButton = () => {
    if (!isLike) {
      setCount((prev) => prev + 1);
      setIsLike(true);
    } else {
      setCount((prev) => prev - 1);
      setIsLike(false);
    }
  };
  return (
    <div className="select-none">
      <span className="mr-2 ">{count}</span>
      {isLike ? (
        <FontAwesomeIcon
          onClick={toggleLikeButton}
          icon={fasHeart}
          size="xl"
          className="cursor-pointer text-[#F3685F]"
        />
      ) : (
        <FontAwesomeIcon
          onClick={toggleLikeButton}
          icon={farHeart}
          size="xl"
          className="cursor-pointer text-[#F3685F]"
        />
      )}
    </div>
  );
}

export default LikeButton;
