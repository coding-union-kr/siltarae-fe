import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Tag() {
  // 임시 데이터
  const [tempTitle, setTempTitle] = useState([
    { id: 1, title: "포켓몬" },
    { id: 2, title: "마스터가" },
    { id: 3, title: "될래요" },
    { id: 4, title: "피카피카피카츄" },
  ]);

  const onClickDelete = (tag: { id: number; title: string }) => {
    setTempTitle(tempTitle.filter((work) => work.id !== tag.id));
  };

  return (
    <div className="flex flex-row flex-wrap gap-2 mt-4">
      {tempTitle.map((tag) => (
        <div
          key={tag.id}
          className="bg-[#9CC490] flex gap-2 items-center w-30 px-4 py-1 rounded-[20px] text-white text-sm font-semibold"
        >
          <span>{tag.title}</span>
          <div onClick={() => onClickDelete(tag)} className="cursor-pointer">
            <FontAwesomeIcon icon={faX} size="xs" />
          </div>
        </div>
      ))}
    </div>
  );
}
