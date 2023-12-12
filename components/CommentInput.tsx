import React from "react";
import Avatar from "./Avatar";

function CommentInput() {
  return (
    <div className="border-t-[0.3px] border-[#A4A9B7]">
      <div className="flex items-center mx-6">
        <Avatar />
        <input
          type="text"
          placeholder="댓글을 입력해주세요."
          className="ml-3 input input-bordered border-2 w-full max-w-xs border-[#9CC490] focus:border-[#9CC490]  rounded-2xl"
        />
      </div>
    </div>
  );
}

export default CommentInput;
