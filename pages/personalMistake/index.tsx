import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import Tag from "@/components/Tag";
import React from "react";

export default function PersonalMistake() {
  return (
    <div className="bg-[#FDF8F3] px-5 pb-5">
      <div className="flex flex-col gap-5">
        <Tag />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      <AddPostButton />
    </div>
  );
}
