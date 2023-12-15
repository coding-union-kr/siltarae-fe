import AddPostButton from "@/components/AddPostButton";
import ContentCard from "@/components/ContentCard";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Tag from "@/components/Tag";
import React from "react";

export default function PersonalMistake() {
  return (
    <div className="bg-[#FDF8F3]">
      <Header />
      <div className="flex flex-col gap-5 py-20 px-5">
        <Tag />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
        <ContentCard />
      </div>
      <NavBar />
      <AddPostButton />
    </div>
  );
}
