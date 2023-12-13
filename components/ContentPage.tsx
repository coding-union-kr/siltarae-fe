import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

function ContentPage() {
  return (
    <article className="w-96 min-h-72 bg-white text-neutral-content p-5 border-y border-slate-200">
      <section className="flex items-center mb-3">
        <Avatar />
        <h3 className="ml-2 text-lg text-[#856E69] font-bold">고라파덕</h3>
      </section>
      <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify mb-3">
        로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도
      </p>
      <section className="flex overflow-x-auto my-4 custom-scrollbar">
        {/* FIXME: 나중에 tag 컴포넌트 추가 */}
        {/* NOTE: DaisyUI badge 한국어 지원 안하는 걸 발견 -_- */}
        <div className="badge badge-outline mr-2 mb-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
        <div className="badge badge-outline mr-2">default</div>
      </section>
      <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.3 }}>
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          className="cursor-pointer text-[#F3685F]"
        />
        <span className="ml-2 text-sm">42</span>
      </motion.button>
      <div />
    </article>
  );
}

export default ContentPage;
