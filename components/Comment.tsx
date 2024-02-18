import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteComments, fetchComments } from "@/api/commentApi";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "./Avatar";

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
      {comments?.map((comment) => (
        <div
          key={comment.commentId}
          className="relative flex flex-row gap-4 items-center px-5 py-5"
        >
          <Avatar />
          <div className="ml-2 mx-1">
            <h3 className="text-lg text-[#856E69] font-bold mb-2">
              {comment.memberName}
            </h3>
            <p className="text-base text-[#5C4F4D] leading-normal text-justify max-w-[500px] mb-1 mr-12">
              {comment.commentContent}
            </p>
          </div>
          <div className="absolute right-6 p-2">
            <FontAwesomeIcon
              icon={faX}
              size="xs"
              color="#856E69"
              onClick={() => onClickDelete(comment.commentId)}
              className="cursor-pointer hover:text-[#EBDDCC]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
