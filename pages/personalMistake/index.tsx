/* eslint-disable no-console */
import { fetchPersonalPosts } from "@/api/mistakeApi";
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import RegisterPostModal from "@/components/RegisterPostModal";
import Tag from "@/components/Tag";
// import Tag from "@/components/Tag";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import React, { useState } from "react";

export default function PersonalMistake() {
  type Post = {
    id: number;
    content: string;
    // memberName: string;
    commentCount: number;
    likeCount: number;
  };

  type Tag = {
    id: number;
    name: string;
  };

  const [showRegisterPostModal, setShowRegisterModal] = useState(false);

  const toggleRegisterPostModal = () => {
    setShowRegisterModal((prev) => !prev);
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["personal_posts"],
    queryFn: () => fetchPersonalPosts(0, 5, "1,2"),
  });

  console.log(data, "data");

  return (
    <div className="bg-[#FDF8F3] w-full mt-2 mr-16 mb-20">
      <div className="ml-4 flex">
        {data &&
          data?.tags?.map((tag: Tag) => <Tag key={tag.id} name={tag.name} />)}
      </div>
      <div className="flex flex-col justify-end items-center ">
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
        {data &&
          data.mistakes?.map((post: Post) => (
            // FIXME: 유저명을 알 때, author 값을 바꾸기
            <ContentCard
              key={post.id}
              author="OAuth구현 뒤 받아올 값"
              content={post.content}
              comments={post.commentCount}
              like={post.likeCount}
            />
          ))}
      </div>
      <AddPostButton toggleModal={toggleRegisterPostModal} />
      {showRegisterPostModal ? (
        <RegisterPostModal toggleModal={toggleRegisterPostModal} />
      ) : null}
    </div>
  );
}
