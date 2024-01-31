/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { likePost } from "@/api/mistakeApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import Avatar from "./Avatar";
import LikeButton from "./LikeButton";
import Tag from "./Tag";

interface ContentCardProps {
  innerRef?: React.Ref<HTMLParagraphElement>;
  author?: string;
  content: string;
  comments: number;
  like: number;
  id: number;
  tags?: TagType[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type TagType = {
  id?: number;
  name: string;
};

function ContentCard({
  innerRef,
  author,
  content = "내용 없음",
  comments = 0,
  like = 0,
  id,
  tags,
  onClick,
}: ContentCardProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => likePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const [likeCount, setLikeCount] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
    mutate();
  };

  return (
    <Link href={`/detailedMistakeFeed/${id}`}>
      <article
        className="card w-[20rem] xs:w-[28rem] bg-white text-neutral-content shadow-md shadow-slate-300 xs:p-6 p-5 my-3"
        ref={innerRef}
        onClick={onClick}
      >
        {author && (
          <section className="flex items-center mb-3">
            <Avatar />
            <h3 className="ml-2 text-base xs:text-lg text-[#856E69] font-bold">
              {author}
            </h3>
          </section>
        )}
        {tags && (
          <div className="flex mb-4">
            {tags?.map((tag) => <Tag key={tag?.id} name={tag.name} />)}
          </div>
        )}
        <p className="text-sm xs:text-base text-[#5C4F4D] leading-normal break-keep">
          {content}
        </p>
        <section className="flex items-center justify-between text-sm xs:text-base mt-3 text-slate-400">
          댓글 {comments} 개
          <LikeButton
            count={likeCount}
            onLikeClick={(e) => handleLikeClick(e)}
            isLiked={isLiked}
          />
        </section>
        <div />
      </article>
    </Link>
  );
}

export default ContentCard;
