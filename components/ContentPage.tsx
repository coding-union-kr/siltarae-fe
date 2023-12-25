import React from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { AxiosError } from "axios";
import Avatar from "./Avatar";
// import Tag from "./Tag";
interface ContentPageProps {
  data: any;
  isPending: any;
  isError: any;
  error: any;
}

function ContentPage({ data, isPending, isError, error }: ContentPageProps) {
  return (
    <article className="w-auto min-h-72 bg-white text-neutral-content px-5 py-8">
      <section className="flex items-center mb-3">
        <Avatar />
        {/* TODO: API에서 Author 값을 보내주지 않음 */}
        <h3 className="ml-2 text-lg text-[#856E69] font-bold">고라파덕</h3>
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

      <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 1.3 }}>
        <FontAwesomeIcon
          icon={faHeart}
          size="lg"
          className="cursor-pointer text-[#F3685F] ml-1"
        />
        <span className="ml-2 text-sm">{data?.likeCount}</span>
      </motion.button>
      <div />
    </article>
  );
}

export default ContentPage;
