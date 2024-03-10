/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import RegisterPostModal from "@/components/RegisterPostModal";
import SocialLoginModal from "@/components/SocialLoginModal";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import { fetchFeedPosts } from "@/api/mistakeApi";
import SortButton from "@/components/SortButton";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { AxiosError } from "axios";
import error from "next/error";

const SORT_POPULAR = "POPULAR";
const SORT_RECENT = "FASTEST";
type Post = {
  id: number;
  memberName: string;
  memberImageUrl: string;
  content: string;
  commentCount: number;
  likeCount: number;
};

const mistakeFeed = () => {
  const [selectSort, setSelectSort] = useState(SORT_RECENT);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSocialLoginModal, setShowSocialLoginModal] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const toggleSort = (sort: string) => {
    setSelectSort(sort);
  };

  const toggleRegisterModal = () => {
    if (!isLoggedIn) {
      setShowSocialLoginModal((prev) => !prev);
    } else {
      setShowRegisterModal((prev) => !prev);
    }
  };

  const toggleSocialLoginModal = (event: React.MouseEvent<HTMLElement>) => {
    if (!isLoggedIn) {
      event.preventDefault();
      event.stopPropagation();
      setShowSocialLoginModal((prev) => !prev);
    }
  };

  const { ref, inView } = useInView();
  const {
    data, // 요청 데이터
    isPending,
    isError,
    isFetchingNextPage, // 다음 페이지를 가져오는 중
    hasNextPage,
    fetchNextPage, // 다음 페이지를 불러오는 실행 함수
  } = useInfiniteQuery({
    queryKey: ["posts", selectSort],
    queryFn: ({ pageParam }) => fetchFeedPosts(4, pageParam, selectSort),
    initialPageParam: 0,
    // getNextPageParam에서 리턴값은 "무한스크롤 실행함수의 pageParam"로 들어간다.
    getNextPageParam: (lastPage, allPages) => {
      const pageParamData = lastPage.length === 4 ? allPages.length : undefined;
      return pageParamData;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);

  return (
    <div className="flex justify-center items-center flex-col my-4 mt-16 mb-20 relative">
      {/* 로그인 모달 창 */}
      {showSocialLoginModal ? (
        <SocialLoginModal toggleModal={toggleSocialLoginModal} />
      ) : null}

      {/* 최신순, 인기순 버튼 */}
      <div className="flex justify-end items-center w-full mt-2 mr-16 ">
        <SortButton
          sortType={SORT_RECENT}
          currentSort={selectSort}
          onToggleSort={toggleSort}
          content="최신순"
        />
        <div className="border-r-2 xs:h-6 h-4 mx-2 border-[#856E69]" />
        <SortButton
          sortType={SORT_POPULAR}
          currentSort={selectSort}
          onToggleSort={toggleSort}
          content="인기순"
        />
      </div>
      {isError && (
        <span>
          {error instanceof AxiosError
            ? error?.response?.data.message
            : "게시글을 불러오는데 실패했습니다. 다시 시도해보세요."}
        </span>
      )}
      {data?.pages.map((posts: Post[]) =>
        posts.map(
          (post: Post) => (
            // posts.length === index + 1 ? (
            <ContentCard
              innerRef={ref}
              key={post.id}
              id={post.id}
              author={post.memberName}
              content={post.content}
              comments={post.commentCount}
              imageUrl={post.memberImageUrl}
              like={post.likeCount}
              onClick={(event) => toggleSocialLoginModal(event)}
            />
          ),
          // ) : (
          //   <ContentCard
          //     key={post.id}
          //     id={post.id}
          //     author={post.memberName}
          //     content={post.content}
          //     comments={post.commentCount}
          //     imageUrl={post.memberImageUrl}
          //     like={post.likeCount}
          //     onClick={(event) => toggleSocialLoginModal(event)}
          //   />
          // ),
        ),
      )}
      {isPending ||
        (isFetchingNextPage && (
          <span className="loading loading-dots loading-lg text-secondary" />
        ))}

      {/* Feed 추가 버튼 */}
      <AddPostButton toggleModal={toggleRegisterModal} />
      <AnimatePresence>
        {showRegisterModal ? (
          <RegisterPostModal toggleModal={toggleRegisterModal} />
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default mistakeFeed;
