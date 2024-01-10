import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TypeProps {
  name: string;
  isSelected?: boolean;
  handleTagClick?: () => void;
  showDeleteOption?: boolean;
}

export default function Tag({
  name,
  handleTagClick,
  isSelected,
  showDeleteOption,
}: TypeProps) {
  return (
    <div
      className={`flex gap-2 items-center  px-4 py-1 mr-2 rounded-[20px] text-white text-sm font-semibold cursor-pointer ${
        isSelected
          ? "border-primary border bg-[#f5faf3]"
          : "border-[#A4A9B7] border bg-white"
      }`}
      onClick={handleTagClick}
    >
      <span className={`${isSelected ? "text-primary" : "text-[#A4A9B7]"}`}>
        {name}
      </span>
      {showDeleteOption ? (
        <div className={`cursor-pointer ${isSelected ? "text-primary" : ""}`}>
          <FontAwesomeIcon icon={faX} size="xs" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
