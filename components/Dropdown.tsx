import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { deletePost } from "@/api/mistakeApi";
import { useRouter } from "next/router";

export default function Dropdown() {
  const router = useRouter();
  const pageId = Number(router.query?.id); // 게시물 Id
  const [showDropdown, setShowDropdown] = useState(false);

  // 게시물 삭제 훅
  const { mutate } = useMutation({
    mutationFn: () => deletePost(pageId),
    onSuccess: () => {
      router.back();
    },
  });

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const onDeleteFeed = () => {
    mutate();
    setShowDropdown(false);
  };

  const editFeed = () => {
    setShowDropdown(false);
    // eslint-disable-next-line no-alert
    alert("이후 만들 예정입니다.");
    // TODO: 이후 제작 예쩡
  };

  return (
    // daisy UI - 드롭다운 적용
    <section className="relative">
      <FontAwesomeIcon
        icon={faEllipsis}
        style={{ color: "#856E69" }}
        size="xl"
        className="hover:scale-[1.2] active:scale-[0.9] hover:transition-transform active:transition-transform cursor-pointer"
        onClick={toggleDropdown}
      />
      {showDropdown && (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute right-0 top-[4vh] p-3 w-24 h-auto z-[1] bg-[#F0EEED] shadow rounded-[15px] flex-column align-center gap-1 justify-evenly font-semibold text-[#856E69]"
        >
          <li>
            <span
              onClick={editFeed}
              className="block w-full p-2 rounded-md text-center cursor-pointer hover:bg-[#F9F9F8] hover:transition-all"
            >
              수정
            </span>
          </li>
          <li>
            <span
              onClick={onDeleteFeed}
              className="block w-full p-2 rounded-md text-center cursor-pointer hover:bg-[#F9F9F8] hover:transition-colors"
            >
              삭제
            </span>
          </li>
        </motion.ul>
      )}
    </section>
  );
}
