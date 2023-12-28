import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCommentsPost } from "@/api/commentApi";
import { useRouter } from "next/router";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";

function CommentInput() {
  const queryCilent = useQueryClient();
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState("");
  // 댓글 추가기능
  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: () => createCommentsPost(id as string, content),
    // 자동으로 리프레쉬 되도록 해주는 코드
    onSuccess: () => {
      queryCilent.invalidateQueries();
      return setContent("");
    },
  });

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="fixed bottom-0 border-t-[0.1px] border-[#DFE2E9] py-5 px-5 w-full max-w-[500px] backdrop-blur-md">
      <div className="absolute flex justify-center items-center right-0 left-0 mx-auto w-auto top-[-50px]">
        {isPending && (
          <span className="flex justify-center items-center bg-[#9CC490]/60 w-[70%] h-16 rounded-xl">
            Loading...
          </span>
        )}
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
      <div className="flex items-center">
        <Avatar />
        <input
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="댓글을 입력해주세요."
          className="flex-1 ml-3 input input-bordered border-2 border-[#9CC490] focus:border-[#9CC490] rounded-2xl"
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
          size="xl"
          className="absolute right-8 text-[#9CC490] cursor-pointer"
          onClick={() => mutate()}
        />
      </div>
    </div>
  );
}

export default CommentInput;
