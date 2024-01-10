/* eslint-disable @typescript-eslint/no-shadow */
import React, { MouseEvent, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/api/mistakeApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { AxiosError } from "axios";
import { createTag, fetchTags } from "@/api/tagApi";
import Tag from "./Tag";

interface RegisterPostModalProps {
  toggleModal: () => void;
}

export default function RegisterPostModal({
  toggleModal,
}: RegisterPostModalProps) {
  type Tag = {
    id: number;
    name: string;
  };

  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
  const queryClient = useQueryClient();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const WrapperClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  // 선택된 태그를 핸들링하는 함수
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

  const { data: tags } = useQuery({
    queryKey: ["tags"],
    queryFn: () => fetchTags(),
  });

  // 새로운 포스트 작성하는 함수
  // 포스트 작성 후, 최신순으로 재정렬
  const {
    mutate: newPost,
    isPending,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: () =>
      createPost(
        content,
        selectedTags.map((tag) => tag.id),
      ),
    onSuccess: () => {
      setTimeout(() => {
        toggleModal();
      }, 500);
      queryClient.invalidateQueries({
        queryKey: ["posts", "FASTEST"],
      });
    },
  });

  // 새로운 태그를 생성하면 바로 선택된 태그로 전환하고 전체 태그를 불러오는 API 다시호출
  const { mutate: newTag } = useMutation({
    mutationFn: (tagName: string) => createTag(tagName),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["tags"],
      });
      const newTag: Tag = data;
      setSelectedTags((prevSelectedTags) => [...prevSelectedTags, newTag]);
    },
  });

  // input 이 바뀔 때마다, 태그 필터링
  // input 이 비어있으면, 빈 배열 값으로 설정
  // input 이 있으면, 필터링된 배열 값으로 설정
  const handleTagSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value;

    if (searchText === "") {
      setFilteredTags([]);
    } else {
      const filtered = tags?.filter(
        (tag: Tag) =>
          tag.name.startsWith(searchText) &&
          !selectedTags.some((selectedTag) => selectedTag.id === tag.id),
      );
      setFilteredTags(filtered || []);
    }
  };

  // 선택한 태그들이 앞에 가고 검색어로 필터링 된 태그는 뒤로 보여주는 함수
  const getRenderTags = () => {
    const uniqueFilteredTags = filteredTags.filter(
      (filteredTag) =>
        !selectedTags.some((selectedTag) => selectedTag.id === filteredTag.id),
    );

    return [...selectedTags, ...uniqueFilteredTags];
  };

  return (
    <motion.section
      className="fixed flex justify-center items-end top-0 left-0 right-0 mx-auto w-full h-full bg-black/50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={toggleModal}
    >
      <motion.div
        className="flex flex-col justify-between w-full max-w-[500px] h-[80vh] gap-10 rounded-t-[20px] bg-[#FDF8F3] px-5 py-10"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "tween" }}
        exit={{ y: 1000 }}
        onClick={WrapperClick}
      >
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-[#856E69]">
            태그 선택
          </span>
          <div className="relative">
            <input
              className="w-full border-2 border-[#9CC490] mt-5 focus:border-[#9CC490] rounded-[25px] px-4 py-2 text-sm"
              placeholder="태그를 검색하세요."
              onChange={handleTagSearchChange}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  newTag(e.currentTarget.value);
                }
              }}
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute right-5 top-8 text-[#9CC490]"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-2 mt-4 mr-2">
            {getRenderTags().map((tag: Tag) => (
              <Tag
                key={tag.id}
                name={tag.name}
                handleTagClick={() => handleTagClick(tag)}
                isSelected={selectedTags.some(
                  (selectedTag) => selectedTag.id === tag.id,
                )}
                showDeleteOption={selectedTags.some(
                  (selectedTag) => selectedTag.id === tag.id,
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="text-xl font-semibold text-[#856E69]">
            내용 입력
          </span>
          <textarea
            className="border-2 border-[#9CC490] mt-5 focus:border-[#9CC490] rounded-[25px] px-4 py-5 h-full max-h-[300px] text-sm resize-none"
            placeholder="내용을 입력해주세요."
            onChange={handleContentChange}
            minLength={10}
            maxLength={280}
          />
          {isSuccess && <span>게시글 작성이 완료되었습니다.</span>}
          {isPending && <span>로딩중...</span>}
          {isError && (
            <span className="pl-2 pt-2 text-red-600 font-semibold">
              {error instanceof AxiosError
                ? error?.response?.data.message
                : "게시글 작성에 실패했습니다. 다시 시도해보세요."}
            </span>
          )}
          <div className="flex gap-5 justify-end mt-5">
            <button
              type="button"
              className="px-10 py-3 bg-white rounded-[25px] shadow-lg text-[#856E69] font-semibold"
              onClick={toggleModal}
            >
              취소
            </button>
            <button
              id="register-button"
              type="button"
              className="px-10 py-3 bg-[#88BC79] rounded-[25px] shadow-lg text-white font-semibold"
              onClick={() => newPost()}
            >
              등록
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
