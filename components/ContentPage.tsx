import React, { useState } from "react";
import { motion } from "framer-motion";
import { AxiosError } from "axios";
import { likePost } from "@/api/mistakeApi";
import { useMutation } from "@tanstack/react-query";
import Avatar from "./Avatar";
import LikeButton from "./LikeButton";
// import Tag from "./Tag";
interface ContentPageProps {
  data: any;
  isPending: any;
  isError: any;
  error: any;
}

function ContentPage({ data, isPending, isError, error }: ContentPageProps) {
  const { mutate } = useMutation({
    mutationFn: () => likePost(data.id),
  });
  const [likeCount, setLikeCount] = useState<number>(data?.likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const imgUrl = data?.memberImageUrl;

  const handleLikeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
    mutate();
  };

  return (
    <article className=" relative w-auto min-h-[25vh] h-auto bg-white text-neutral-content px-5 py-3">
      <div className="flex items-center mb-3">
        <Avatar userImageUrl={imgUrl} />
        <h3 className="ml-2 text-lg text-[#856E69] font-bold">
          {data?.memberName}
        </h3>
      </div>
      <div className="flex flex-wrap">{/* <Tag /> */}</div>
      <div>
        <p className="text-base text-[#5C4F4D] leading-relaxed text-justify my-3 pb-16">
          {isPending && (
            <span className="loading loading-dots loading-lg text-secondary" />
          )}
          {isError && (
            <span className="text-red-600 font-semibold">
              {error instanceof AxiosError
                ? error?.response?.data.message
                : "게시글을 불러오는데 실패했습니다. 다시 시도해보세요."}
            </span>
          )}
          {data?.content}
        </p>
        <motion.button
          className="absolute bottom-8"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.2 }}
        >
          <LikeButton
            count={likeCount}
            onLikeClick={(e) => handleLikeClick(e)}
            isLiked={isLiked}
          />
        </motion.button>
      </div>
    </article>
  );
}

export default ContentPage;
