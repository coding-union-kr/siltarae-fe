import { fetchDetailedPost } from "@/api/mistakeApi";
import Comment from "@/components/Comment";
import CommentInput from "@/components/CommentInput";
import ContentPage from "@/components/ContentPage";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRouter } from "next/router";
import PostHeader from "@/components/PostHeader";

export default function DetailedMistakeFeed() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["detailed_post", id],
    queryFn: () => fetchDetailedPost(id as string),
    enabled: !!id,
  });

  return (
    <div className="w-full h-full bg-white pt-16 pb-20">
      <PostHeader />
      <ContentPage
        data={data}
        isPending={isPending}
        isError={isError}
        error={error}
      />
      <section className="border-t-[0.3px] border-[#DFE2E9]">
        <span className="block px-5 pt-5 font-semibold text-[#856E69]">
          댓글 {data?.commentCount}개
        </span>
        <Comment />
        <CommentInput />
      </section>
    </div>
  );
}
