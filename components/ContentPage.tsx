import React from "react";
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

  return (
    <article className="w-auto min-h-72 bg-white text-neutral-content px-5 py-8">
      <section className="flex items-center mb-3">
        <Avatar />
        <h3 className="ml-2 text-lg text-[#856E69] font-bold">
          {data?.memberName}
        </h3>
      </section>
      <section className="flex flex-wrap">{/* <Tag /> */}</section>
      <p className="text-base text-[#5C4F4D] leading-normal break-keep text-justify my-3">
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

      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }}>
        <LikeButton count={data?.likeCount} onLikeClick={mutate} />
      </motion.button>
      <div />
    </article>
  );
}

export default ContentPage;
