// import { faX } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TypeProps {
  name: string;
  isSelected?: boolean;
  handleTagClick?: () => void;
}

export default function Tag({ name, handleTagClick, isSelected }: TypeProps) {
  return (
    <div
      className={`bg-[#9CC490] flex gap-2 items-center w-30 px-4 py-1 rounded-[20px] text-white text-sm font-semibold cursor-pointer ${
        isSelected ? "bg-[#617b5a]" : ""
      }`}
      onClick={handleTagClick}
    >
      <span>{name}</span>
      {/* <div className="cursor-pointer"> */}
      {/* <FontAwesomeIcon icon={faX} size="xs" /> */}
      {/* </div> */}
    </div>
  );
}
