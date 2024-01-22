import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function Dropdown() {
  return (
    // daisy UI - 드롭다운 적용
    <div className="dropdown dropdown-end">
      <FontAwesomeIcon
        icon={faEllipsis}
        style={{ color: "#856E69" }}
        role="button"
        size="xl"
        className="bg-transparent border-none hover:scale-[1.1] active:scale-[0.9] hover:transition-transform active:transition-transform"
        tabIndex={0}
      />
      <ul className="dropdown-content p-3 w-20 h-auto z-[1] menu bg-base-100 rounded-box flex-column align-center justify-evenly font-bold text-[#856E69]">
        <li className="text-center p-2 rounded-box hover:bg-[#EBE2DD] hover:transition-colors cursor-not-allowed">
          수정
        </li>
        <li className="text-center p-2 rounded-box hover:bg-[#EBE2DD] hover:transition-colors cursor-pointer">
          삭제
        </li>
      </ul>
    </div>
  );
}
