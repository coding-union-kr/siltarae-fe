import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComments } from "@/api/commentApi";
import { useRouter } from "next/router";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";

function CommentInput() {
  const queryCilent = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [showToast, setShowToast] = useState(false);
  const [content, setContent] = useState("");

  // 댓글 추가하기 기능
  const { mutate, isError, error, isSuccess } = useMutation({
    mutationFn: () => createComments(id as string, content),
    onSuccess: () => {
      setContent("");
      // Toast 사라지게 하는 코드
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    },
    onSettled: () => {
      // 자동으로 리프레쉬 되도록 해주는 코드
      queryCilent.invalidateQueries();
    },
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleClick = () => {
    setShowToast(true);
    mutate();
  };

  // 댓글 엔터기능
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      setShowToast(true);
      mutate();
    }
  };

  return (
    <div className="fixed bottom-0 border-t-[0.1px] border-[#DFE2E9] py-5 px-5 w-full max-w-[500px] backdrop-blur-md">
      {showToast && (
        <div className="absolute flex justify-center items-center right-0 left-0 mx-auto w-auto top-[-50px]">
          {isSuccess && (
            <span className="flex justify-center items-center bg-[#9CC490]/60 w-[70%] h-16 rounded-xl">
              댓글이 성공적으로 달렸습니다.
            </span>
          )}
          {isError && (
            <span className="flex justify-center items-center bg-[#9CC490]/60 w-[70%] h-16 rounded-xl">
              댓글달기 실패했습니다 : {error.message}
            </span>
          )}
        </div>
      )}
      <div className="flex items-center">
        <Avatar />
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="댓글을 입력해주세요."
          className="flex-1 ml-3 input input-bordered border-2 border-[#9CC490] focus:border-[#9CC490] rounded-2xl"
          onKeyUp={handleKeyUp}
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="xl"
          className="absolute right-8 text-[#9CC490] cursor-pointer"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default CommentInput;
