import React from "react";
import Avatar from "./Avatar";

function CommentInput() {
  return (
    <div className=" border-t-[0.1px] border-[#DFE2E9] py-5 px-5 w-full max-w-[500px] backdrop-blur-md">
      <div className="flex items-center">
        <Avatar />
        <input
          type="text"
          placeholder="댓글을 입력해주세요."
          className="flex-1 ml-3 input input-bordered border-2 border-[#9CC490] focus:border-[#9CC490] rounded-2xl"
        />
      </div>
    </div>
  );
}

export default CommentInput;
