import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import Tag from "@/components/Tag";
import React from "react";

export default function PersonalMistake() {
  return (
    <div className="bg-[#FDF8F3]">
      <div className="flex flex-col items-center gap-2">
        <Tag />
        {/* CHECK: div를 씌우지 않으면 layer가 틀어짐, 이유는 모르겠음.. */}
        <div>
          <ContentCard
            author="람쥐"
            content="엄청 피곤해여.."
            comments={12352}
            like={34352}
          />
          <ContentCard
            author="진섭"
            content="일찍 운동도 갔다오고, 아침 카페가서 한잔하고 여유있게 하루를 시작했습니다."
            comments={1000}
            like={1000}
          />
          <ContentCard
            author="매니"
            content="점심 순대국밥!"
            comments={30}
            like={35}
          />
          <ContentCard
            author="파덕"
            content="졸립니다..."
            comments={50}
            like={50}
          />
        </div>
      </div>
      <AddPostButton />
    </div>
  );
}
