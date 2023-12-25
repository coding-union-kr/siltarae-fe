import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TypeProps {
  name: string;
}

export default function Tag({ name }: TypeProps) {
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-4 mr-2">
      <div className="bg-[#9CC490] flex gap-2 items-center w-30 px-4 py-1 rounded-[20px] text-white text-sm font-semibold">
        <span>{name}</span>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faX} size="xs" />
        </div>
      </div>
    </div>
  );
}
