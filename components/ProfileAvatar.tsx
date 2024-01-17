import React, { useRef, useState } from "react";
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
    onSuccess: (imageUrl) => {
      // TODO: 이미지 post로 S3로 보내고 주소까지 받기 완료.
      // FIXME: imageUrl로 프로필 사진 업데이트 하기
      // eslint-disable-next-line no-console
      console.log("사진 보내기 성공!", imageUrl);
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
      // formData로 변환해서 백엔드로 보내기
      const formData = new FormData();
      formData.append("file", uploadFile);
      mutate(formData as any);
      setUserImageUrlState(URL.createObjectURL(uploadFile));
    }
  };

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
