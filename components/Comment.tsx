import React from "react";
import Avatar from "./Avatar";

function Comment() {
  return (
    <div className="flex flex-row gap-2 items-start px-8 py-5">
      <Avatar />
      <div className="ml-2 mt-1">
        <h3 className="text-lg text-[#856E69] font-bold mb-2">고라파덕</h3>
        <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify max-w-[500px] ">
          로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피,
          레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준
          채우기 텍스트
        </p>
      </div>
    </div>
  );
}

export default Comment;
