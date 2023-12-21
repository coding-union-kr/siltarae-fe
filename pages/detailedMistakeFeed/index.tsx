import Comment from "@/components/Comment";
import CommentInput from "@/components/CommentInput";
import ContentPage from "@/components/ContentPage";
import React from "react";

export default function DetailedMistakeFeed() {
  return (
    <div className="w-full h-auto bg-white pb-16">
      <ContentPage />
      <section className="border-t-[0.3px] border-[#DFE2E9]">
        <span className="block px-5 pt-5 font-bold text-[#856E69] text-[20px]">
          댓글 17개
        </span>
        <Comment />
        <Comment />
        <Comment />
        <CommentInput />
      </section>
    </div>
  );
}
