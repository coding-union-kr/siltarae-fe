import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TypeProps {
  name: string;
  isSelected: boolean;
  handleTagClick: () => void;
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
      className={`flex gap-2 items-center w-30 px-4 py-1 rounded-[20px] text-white text-sm font-semibold cursor-pointer ${
        isSelected ? "bg-[#617b5a]" : "bg-[#9CC490]"
      }`}
      onClick={handleTagClick}
    >
      <span>{name}</span>
      {showDeleteOption ? (
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faX} size="xs" />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
