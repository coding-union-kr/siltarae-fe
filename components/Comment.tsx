import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchComments from "@/api/commentApi";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import Avatar from "./Avatar";

type CommentDataType = {
  memberId: number;
  memberName: string;
  commentId: number;
  commentContent: string;
};

function Comment() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: comments,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments_get", id],
    queryFn: () => fetchComments(10, 0, id as string),
  });

  return (
    <div className="flex flex-row gap-2 items-start px-8 py-5">
      {isPending && (
        <span className="loading loading-dots loading-lg text-secondary" />
      )}
      {isError && (
        <span>
          {error instanceof AxiosError
            ? error?.message
            : "댓글을 불러오는데 실패했습니다. 새로고침 해주세요."}
        </span>
      )}
      {comments?.map((comment: CommentDataType) => (
        <div key={comment.memberId}>
          <Avatar />
          <div className="ml-2 mt-1">
            <h3 className="text-lg text-[#856E69] font-bold mb-2">
              {comment.memberName}
            </h3>
            <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify max-w-[500px] ">
              {comment.commentContent}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
