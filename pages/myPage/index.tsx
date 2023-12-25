/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react-hooks/rules-of-hooks */
import ProfileAvatar from "@/components/ProfileAvatar";
import {
  faArrowRightFromBracket,
  faPencil,
  faTag,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

const myPage = () => {
  const [nicknameEditMode, setNicknameEditMode] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");

  const handleNicknameEdit = () => {
    setNicknameEditMode(true);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setNicknameEditMode(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-full xs:my-10 my-5">
      <ProfileAvatar />
      <button
        type="button"
        className="font-bold text-2xl my-4 flex items-center justify-center"
        onClick={handleNicknameEdit}
      >
        닉네임:
        {nicknameEditMode ? (
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            onKeyDown={handleKeyDown}
            placeholder=""
            className="font-bold text-2xl my-4 ml-2 p-2 bg-transparent outline-[#EFEAE6] w-2/4"
            autoFocus
          />
        ) : (
          <>
            <p className="mx-2 font-bold text-2xl my-4 w-fit">{nickname}</p>
            <FontAwesomeIcon
              icon={faPencil}
              className="hidden xs:visible hover:text-amber-800"
            />
          </>
        )}
      </button>
      <section className="flex justify-center items-center h-full flex-col gap-3 my-5">
        <Link href="/tagList">
          <button
            className="btn xs:w-96 w-80 xs:h-16 h-10 text-lg bg-white"
            type="button"
          >
            <FontAwesomeIcon icon={faTag} />
            태그 편집
          </button>
        </Link>
        <button
          className="btn xs:w-96 w-80 xs:h-16 text-lg bg-white"
          type="button"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          로그아웃
        </button>
        <button
          className="btn xs:w-96 w-80 text-lg xs:h-16 h-10 bg-red-200 hover:bg-red-300 hover:border-red-300"
          type="button"
        >
          <FontAwesomeIcon icon={faTrash} />
          회원탈퇴
        </button>
      </section>
    </div>
  );
};

export default myPage;
