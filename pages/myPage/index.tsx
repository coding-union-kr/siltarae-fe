/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable react-hooks/rules-of-hooks */

import {
  faArrowRightFromBracket,
  faPencil,
  faTag,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfileNickname } from "@/api/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialLoginModal from "@/components/SocialLoginModal";
import ProfileAvatar from "@/components/ProfileAvatar";
import React, { useEffect, useState } from "react";
import { logoutApi } from "@/api/authApi";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import setCookie from "@/util/cookie";
import Link from "next/link";
import { logOut } from "@/features/auth/authReducer";

const myPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState<string>("비어 있음");
  const [nicknameEditMode, setNicknameEditMode] = useState<boolean>(false);
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  // 유저 프로필 사진, 닉네임 가져오기
  // TODO: isLoggedIn이 아닐때는 불러오지 않도록 해야한다.
  const userInfo = useQuery({
    queryKey: ["user_Info"],
    queryFn: () => getUserProfile(),
  });
  const userProfileImg = userInfo.data?.imageUrl;
  const userNickname = userInfo.data?.nickname;

  // 프로필 닉네임 변경하기 훅
  const { mutate: profileMutate } = useMutation({
    mutationFn: () => updateProfileNickname(nickname),
  });
  // 로그아웃 mutation
  const { mutate: logoutMutate } = useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      localStorage.clear();
      setCookie("accessToken", "", 0);
      queryClient.invalidateQueries();
      dispatch(logOut());
      // eslint-disable-next-line no-alert
      alert("로그아웃 되었습니다.");
      router.push("/");
    },
  });

  useEffect(() => {
    setNickname(userNickname);
  }, [userNickname]);

  const handleNicknameEdit = () => {
    setNicknameEditMode(true);
  };
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      setNicknameEditMode(false);
      profileMutate();
    }
  };
  const onClickLogout = () => {
    logoutMutate();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full pt-16 pb-20 gap-10">
      {isLoggedIn ? (
        <>
          <section className="flex flex-col items-center gap-3">
            <ProfileAvatar userImageUrl={userProfileImg} />
            <button
              type="button"
              className="font-semibold text-2xl my-4 flex items-center justify-center"
              onClick={handleNicknameEdit}
            >
              닉네임:
              {nicknameEditMode ? (
                <input
                  type="text"
                  value={nickname}
                  onChange={handleNicknameChange}
                  onKeyDown={handleKeyUp}
                  placeholder=""
                  className="font-bold text-2xl my-4 ml-2 p-2 bg-transparent outline-[#EFEAE6] w-2/4"
                  autoFocus
                />
              ) : (
                <>
                  <p className="mx-2 font-bold text-2xl my-4 w-fit">
                    {nickname}
                  </p>
                  <FontAwesomeIcon
                    icon={faPencil}
                    size="xs"
                    className="hidden xs:visible hover:text-amber-800"
                  />
                </>
              )}
            </button>
          </section>
          <section className="flex  items-center flex-col gap-3 my-5">
            <Link href="/tagList">
              <button
                className="btn xs:w-96 w-80 xs:h-16 h-10 text-lg bg-white"
                type="button"
              >
                <FontAwesomeIcon icon={faTag} />
                태그 편집
              </button>
            </Link>
            <button
              className="btn xs:w-96 w-80 xs:h-16 text-lg bg-white"
              type="button"
              // eslint-disable-next-line no-alert
              onClick={onClickLogout}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              로그아웃
            </button>
            <button
              className="btn xs:w-96 w-80 text-lg xs:h-16 h-10 bg-red-200 hover:bg-red-300 hover:border-red-300"
              type="button"
              // eslint-disable-next-line no-alert
              onClick={() => alert("추가 예정입니다 🥹")}
            >
              <FontAwesomeIcon icon={faTrash} />
              회원탈퇴
            </button>
          </section>
        </>
      ) : (
        <SocialLoginModal />
      )}
    </div>
  );
};

export default myPage;
