import ContentCard from "@/components/ContentCard";
import React from "react";

const mistakeFeed = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex justify-end items-center w-full mt-2 mr-16">
        <button type="button" className="text-[#856E69] font-semibold">
          인기순
        </button>
        <div className="border-r-2 h-6 mx-2 border-[#856E69]" />
        <button type="button" className=" text-primary font-semibold">
          최신순
        </button>
      </div>
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
      <ContentCard />
    </div>
  );
};

export default mistakeFeed;
