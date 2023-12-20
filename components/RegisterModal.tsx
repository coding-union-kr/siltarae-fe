import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Tag from "./Tag";

interface RegisterModalProps {
  toggleModal: () => void;
}

export default function RegisterModal({ toggleModal }: RegisterModalProps) {
  // 버블링 방지 함수 어떻게 써야하지...?
  const WrapperClick = (e: MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <motion.section
      className="fixed flex justify-center items-end top-0 left-0 right-0 mx-auto w-full h-full bg-black/50 z-50"
      onClick={toggleModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col justify-between w-full max-w-[500px] h-[80vh] gap-10 rounded-t-[20px] bg-[#FDF8F3] px-5 py-10"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
        exit={{ y: 1000 }}
      >
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-[#856E69]">
            태그 선택
          </span>
          <div className="relative">
            <input
              className="w-full border-2 border-[#9CC490] mt-5 focus:border-[#9CC490] rounded-[25px] px-4 py-2 text-sm"
              placeholder="태그를 검색하세요."
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-5 top-8 text-[#9CC490]"
            />
          </div>
          <Tag />
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-xl font-semibold text-[#856E69]">
            내용 입력
          </span>
          <input
            className="border-2 border-[#9CC490] mt-5 focus:border-[#9CC490] rounded-[25px] px-4 py-2 h-full max-h-[300px] text-sm"
            placeholder="내용을 입력해주세요."
          />
          <div className="flex gap-5 justify-end mt-5">
            <button
              type="button"
              className="px-10 py-3 bg-white rounded-[25px] shadow-lg text-[#856E69] font-semibold"
            >
              취소
            </button>
            <button
              type="button"
              className="px-10 py-3 bg-[#88BC79] rounded-[25px] shadow-lg text-white font-semibold"
            >
              등록
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
