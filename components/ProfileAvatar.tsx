import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCamera } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadProfileImage } from "@/api/userApi";

interface AvatarProps {
  userImageUrl?: string;
}

function ProfileAvatar({ userImageUrl }: AvatarProps) {
  const [userImageUrlState, setUserImageUrlState] = useState<
    string | undefined
  >(userImageUrl);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (formData: FormData) => uploadProfileImage(formData),
    onSuccess: () => {
      // eslint-disable-next-line no-console
      console.log("사진 업로드 성공, 프로필 사진이 변경됩니다.");
    },
    onSettled: () => {
      // 자동으로 리프레쉬 되도록 해주는 코드
      queryClient.invalidateQueries();
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target?.files?.[0]) {
      const uploadFile = e.target.files[0];
      // formData로 변환해서 백엔드로 post 보내기
      const formData = new FormData();
      formData.append("file", uploadFile);
      mutate(formData);
    }
  };

  useEffect(() => {
    setUserImageUrlState(userImageUrl);
  }, [userImageUrl]);

  return (
    <div
      className="avatar relative cursor-pointer"
      onClick={() => fileInputRef.current?.click()}
    >
      <div className="flex items-center justify-center w-24 rounded-full shadow-md shadow-slate-300 border-solid border-[5px] border-white bg-white">
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
        {userImageUrlState ? (
          <Image
            src={userImageUrlState}
            alt="Profile"
            width={100}
            height={100}
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            size="5x"
            className="text-center w-full h-full mt-1 text-[#9CC490] bg-white"
          />
        )}
      </div>
      <FontAwesomeIcon
        icon={faCamera}
        className="absolute text-slate-700 bottom-1 right-0 cursor-pointer "
      />
    </div>
  );
}

export default ProfileAvatar;
