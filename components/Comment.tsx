import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteComments, fetchComments } from "@/api/commentApi";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";

type CommentDataType = {
  memberId: number;
  memberName: string;
  commentId: number;
  commentContent: string;
};

function Comment() {
  const queryCilent = useQueryClient();
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

  const { mutate } = useMutation({
    mutationFn: (commentId: number) => deleteComments(commentId),
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log("삭제 성공");
    },
    onError: () => {
      // eslint-disable-next-line no-console
      console.log("실패");
    },
    onSettled: () => {
      queryCilent.invalidateQueries();
    },
  });
  const onClickDelete = (commentId: number) => {
    mutate(commentId);
  };

  return (
    <div>
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
        <div
          key={comment.commentId}
          className="relative flex flex-row gap-2 items-center px-8 py-5"
        >
          <Avatar />
          <div className="ml-2 mt-1">
            <h3 className="text-lg text-[#856E69] font-bold mb-2">
              {comment.memberName}
            </h3>
            <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify max-w-[500px]">
              {comment.commentContent}
            </p>
          </div>
          <FontAwesomeIcon
            icon={faX}
            size="xs"
            color="#856E69"
            onClick={() => onClickDelete(comment.commentId)}
            className="absolute right-10 cursor-pointer hover:text-[#EBDDCC]"
          />
        </div>
      ))}
    </div>
  );
}

export default Comment;
