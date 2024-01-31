/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import RegisterPostModal from "@/components/RegisterPostModal";
import SortButton from "@/components/SortButton";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchFeedPosts } from "@/api/mistakeApi";
import { AxiosError } from "axios";
import SocialLoginModal from "@/components/SocialLoginModal";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useInView } from "react-intersection-observer";
import error from "next/error";

const SORT_POPULAR = "POPULAR";
const SORT_RECENT = "FASTEST";
type Post = {
  id: number;
  memberName: string;
  content: string;
  commentCount: number;
  likeCount: number;
};

const mistakeFeed = () => {
  const [selectSort, setSelectSort] = useState(SORT_POPULAR);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showSocialLoginModal, setShowSocialLoginModal] = useState(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const toggleSort = (sort: string) => {
    setSelectSort(sort);
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal((prev) => !prev);
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
    data,
    isPending,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["posts", selectSort],
    queryFn: async ({ pageParam }) => fetchFeedPosts(4, pageParam, selectSort),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, refetch]);

  return (
    <div className="flex justify-center items-center flex-col my-4 mb-20 relative">
      {showSocialLoginModal ? (
        <SocialLoginModal toggleModal={toggleSocialLoginModal} />
      ) : null}
      <div className="flex justify-end items-center w-full mt-2 mr-16 ">
        <SortButton
          sortType={SORT_POPULAR}
          currentSort={selectSort}
          onToggleSort={toggleSort}
          content="인기순"
        />
        <div className="border-r-2 xs:h-6 h-4 mx-2 border-[#856E69]" />
        <SortButton
          sortType={SORT_RECENT}
          currentSort={selectSort}
          onToggleSort={toggleSort}
          content="최신순"
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
        posts.map((post: Post, index) =>
          posts.length === index + 1 ? (
            <ContentCard
              innerRef={ref}
              key={post.id}
              id={post.id}
              author={post.memberName}
              content={post.content}
              comments={post.commentCount}
              like={post.likeCount}
              onClick={(event) => toggleSocialLoginModal(event)}
            />
          ) : (
            <ContentCard
              key={post.id}
              id={post.id}
              author={post.memberName}
              content={post.content}
              comments={post.commentCount}
              like={post.likeCount}
              onClick={(event) => toggleSocialLoginModal(event)}
            />
          ),
        ),
      )}
      {isPending ||
        (isFetchingNextPage && (
          <span className="loading loading-dots loading-lg text-secondary" />
        ))}
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
