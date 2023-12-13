import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Avatar from "./Avatar";

function ContentCard() {
  return (
    <article className="card w-96 h-64 bg-white text-neutral-content shadow-md shadow-slate-300 p-5">
      <section className="flex items-center mb-3">
        <Avatar />
        <h3 className="ml-2 text-lg text-[#856E69] font-bold">고라파덕</h3>
      </section>
      <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify">
        로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도
      </p>
      <section className="flex items-center justify-between text-sm mt-3">
        {/* FIXME:  href 나중에 변경 */}
        <Link href="/">댓글 17개 모두 보기</Link>
        <div>
          <span className="mr-2">42</span>
          <FontAwesomeIcon
            icon={faHeart}
            size="lg"
            className="cursor-pointer text-[#F3685F]"
          />
        </div>
      </section>
      <div />
    </article>
  );
}

export default ContentCard;
