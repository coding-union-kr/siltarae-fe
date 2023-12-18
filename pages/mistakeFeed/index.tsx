// import AddPostButton from "@/components/AddPostButton";
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import React, { useState } from "react";

const mistakeFeed = () => {
  const SORT_POPULAR = "인기순";
  const SORT_RECENT = "최신순";
  // 리액트는 무조건 컴포넌트 함수 내에서 호출할 수 있는데
  // 파일명이 파스칼케이스가 아니라서 컴포넌트라고 인식을 안한다고 하네요 ㅠ ㅋ
  // https://legacy.reactjs.org/docs/hooks-rules.html
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectSort, setSelectSort] = useState(SORT_POPULAR);

  const toggleSort = (sort: string) => {
    setSelectSort(sort);
  };

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
        <button
          type="button"
          className={`${
            selectSort === SORT_POPULAR ? "text-primary" : "text-secondary"
          } font-semibold xs:text-lg text-base`}
          onClick={() => toggleSort(SORT_POPULAR)}
        >
          인기순
        </button>
        <div className="border-r-2 xs:h-6 h-4 mx-2 border-[#856E69]" />
        <button
          type="button"
          className={`${
            selectSort === SORT_RECENT
              ? "text-primary"
              : "text-secondary xs:text-lg text-base"
          } font-semibold xs:text-lg text-base`}
          onClick={() => toggleSort(SORT_RECENT)}
        >
          최신순
        </button>
      </div>
      {posts.map((post) => (
        <ContentCard
          author={post.author}
          content={post.content}
          comments={post.comments}
          like={post.like}
        />
      ))}
      <AddPostButton />
    </div>
  );
};

export default mistakeFeed;
