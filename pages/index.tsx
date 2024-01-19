/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import RegisterPostModal from "@/components/RegisterPostModal";
import SortButton from "@/components/SortButton";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedPosts } from "@/api/mistakeApi";
import { AxiosError } from "axios";
import SocialLoginModal from "@/components/SocialLoginModal";
// import { getUserProfile } from "@/api/userApi";

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
  const [selectSort, setSelectSort] = useState(SORT_RECENT);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleSort = (sort: string) => {
    setSelectSort(sort);
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal((prev) => !prev);
  };

  const {
    data: posts,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", selectSort],
    queryFn: () => fetchFeedPosts(11, 0, selectSort),
  });

  // const { data: userInfo } = useQuery({
  //   queryKey: ["user_Info"],
  //   queryFn: () => getUserProfile(),
  // });
  // const userImageUrl = data?.imageUrl;

  // FIXME: 무한 스크롤? 페이지네이션?
  return (
    <div className="flex justify-center items-center flex-col my-4 mb-20 relative">
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
      {isPending && (
        <span className="loading loading-dots loading-lg text-secondary" />
      )}
      {isError && (
        <span>
          {error instanceof AxiosError
            ? error?.response?.data.message
            : "게시글을 불러오는데 실패했습니다. 다시 시도해보세요."}
        </span>
      )}
      {posts?.map((post: Post) => (
        <ContentCard
          key={post.id}
          id={post.id}
          author={post.memberName}
          content={post.content}
          comments={post.commentCount}
          like={post.likeCount}
        />
      ))}
      {/* FIXME: 로그인 토큰이 없을 시 로그인 모달이 올라오기 */}
      {/* <SocialLoginModal/> */}
      <AddPostButton toggleModal={toggleRegisterModal} />
      <AnimatePresence>
        {showRegisterModal ? (
          <RegisterPostModal toggleModal={toggleRegisterModal} />
        ) : null}
      </AnimatePresence>
      <SocialLoginModal />
    </div>
  );
};

export default mistakeFeed;
