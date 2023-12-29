import React from "react";
import { likePost } from "@/api/mistakeApi";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import Avatar from "./Avatar";
import LikeButton from "./LikeButton";

interface ContentCardProps {
  author?: string;
  content: string;
  comments: number;
  like: number;
  id: number;
}

function ContentCard({
  author,
  content = "내용 없음",
  comments = 0,
  like = 0,
  id,
}: ContentCardProps) {
  const { mutate } = useMutation({
    mutationFn: () => likePost(id),
  });

  return (
    <Link href={`/detailedMistakeFeed/${id}`}>
      <article className="card w-[20rem] xs:w-[28rem] bg-white text-neutral-content shadow-md shadow-slate-300 xs:p-6 p-5 my-3">
        <section className="flex items-center mb-3">
          <Avatar />
          <h3 className="ml-2 text-base xs:text-lg text-[#856E69] font-bold">
            {author}
          </h3>
        </section>

        <p className="text-sm xs:text-base text-[#5C4F4D] leading-normal break-keep">
          {content}
        </p>
        <section className="flex items-center justify-between text-sm xs:text-base mt-3 text-slate-400">
          댓글 {comments} 개
          <LikeButton count={like} onLikeClick={mutate} />
        </section>
        <div />
      </article>
    </Link>
  );
}

export default ContentCard;
