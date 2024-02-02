/* eslint-disable no-console */
import React, { useState } from "react";
import RegisterPostModal from "@/components/RegisterPostModal";
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import { fetchPersonalPosts } from "@/api/mistakeApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import Tag from "@/components/Tag";
import { fetchTags } from "@/api/tagApi";

export default function PersonalMistake() {
  type Post = {
    id: number;
    content: string;
    memberName: string;
    commentCount: number;
    likeCount: number;
    tags: Tag[];
  };

  type Tag = {
    id: number;
    name: string;
  };

  const [showRegisterPostModal, setShowRegisterModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const toggleRegisterPostModal = () => {
    setShowRegisterModal((prev) => !prev);
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["personal_posts"],
    queryFn: () =>
      fetchPersonalPosts(0, 5, selectedTags.map((tag) => tag.id).join()),
  });

  const { data: tagData } = useQuery({
    queryKey: ["tags_get"],
    queryFn: () => fetchTags(),
  });

  const handleTagClick = (tag: Tag) => {
    setSelectedTags((prevSelectedTags) => {
      const isTagSelected = prevSelectedTags.some(
        (selectedTag) => selectedTag.id === tag.id,
      );
      if (isTagSelected) {
        return prevSelectedTags.filter(
          (selectedTag) => selectedTag.id !== tag.id,
        );
      }
      return [...prevSelectedTags, { id: tag.id, name: tag.name }];
    });
  };

  return (
    <div className="bg-[#FDF8F3] w-full mt-2 mr-16 mb-20">
      <div className="ml-6 flex">
        <div className="flex flex-row flex-wrap gap-2 mt-4 mr-2">
          {tagData &&
            tagData?.tags?.map((tag: Tag) => (
              <Tag
                key={tag.id}
                name={tag.name}
                handleTagClick={() => handleTagClick(tag)}
                isSelected={selectedTags.some(
                  (selectedTag) => selectedTag.id === tag.id,
                )}
                showDeleteOption
              />
            ))}
        </div>
      </div>
      {/* 내 실수 피드 List */}
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
            <ContentCard
              tags={post.tags}
              id={post.id}
              key={post.id}
              content={post.content}
              comments={post.commentCount}
              like={post.likeCount}
            />
          ))}
      </div>
      {/* 실수 피드 등록 부분 */}
      <AddPostButton toggleModal={toggleRegisterPostModal} />
      {showRegisterPostModal ? (
        <RegisterPostModal toggleModal={toggleRegisterPostModal} />
      ) : null}
    </div>
  );
}
