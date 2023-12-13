import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Tag() {
  return (
    <div className="flex flex-row flex-nowrap gap-3">
      {["포캣몬", "마스터", "될래요"].map((tagTitle) => (
        <div className="bg-[#9CC490] flex gap-2 items-center w-30 px-4 py-1 rounded-[20px] text-white text-sm font-semibold">
          <span>{tagTitle}</span>
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faX} size="xs" />
          </div>
        </div>
      ))}
    </div>
  );
}
