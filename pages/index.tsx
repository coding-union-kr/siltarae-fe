/* eslint-disable react-hooks/rules-of-hooks */
// import AddPostButton from "@/components/AddPostButton";
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import RegisterModal from "@/components/RegisterModal";
import SocialLoginModal from "@/components/SocialLoginModal";
import SortButton from "@/components/SortButton";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const mistakeFeed = () => {
  const SORT_POPULAR = "인기순";
  const SORT_RECENT = "최신순";
  const [selectSort, setSelectSort] = useState(SORT_POPULAR);
  const [view, setView] = useState(false);

  const toggleSort = (sort: string) => {
    setSelectSort(sort);
  };

  const toggleRegisterModal = () => {
    setView((prev) => !prev);
  };

  const onClose = () => {};

  const posts = [
    {
      author: "람쥐",
      content: "테스트해봅니다 하하",
      comments: 5,
      like: 392,
    },
    {
      author: "서비",
      content: `로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도`,
      comments: 3,
      like: 10,
    },
    {
      author: "파덕",
      content: `로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도`,
      comments: 3,
      like: 10,
    },
    {
      author: "매니",
      content: `로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃
        같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기
        텍스트로, 최종 결과물에 들어가는 실제적인 문장 내용이 채워지기 전에 시각
        디자인 프로젝트 모형의 채움 글로도`,
      comments: 3,
      like: 10,
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col my-4 mb-4 relative">
      <div className="flex justify-end items-center w-full mt-2 mr-16 ">
        <SortButton
          sortType={SORT_POPULAR}
          currentSort={selectSort}
          onToggleSort={toggleSort}
        />
        <div className="border-r-2 xs:h-6 h-4 mx-2 border-[#856E69]" />
        <SortButton
          sortType={SORT_RECENT}
          currentSort={selectSort}
          onToggleSort={toggleSort}
        />
      </div>
      {posts.map((post) => (
        <ContentCard
          author={post.author}
          content={post.content}
          comments={post.comments}
          like={post.like}
        />
      ))}
      {/* <SocialLoginModal /> */}
      <AddPostButton toggleModal={toggleRegisterModal} />
      <AnimatePresence>
        {view ? <RegisterModal toggleModal={toggleRegisterModal} /> : null}
      </AnimatePresence>
      <SocialLoginModal isModalOpen onClose={onClose} />
    </div>
  );
};

export default mistakeFeed;
