import React from "react";
import Avatar from "./Avatar";

function CommentInput() {
  return (
    <div>
      <Avatar />
      <input
        type="text"
        placeholder="댓글을 입력해주세요."
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
}

export default CommentInput;
