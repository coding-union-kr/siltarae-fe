import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useRouter } from "next/router";
import Dropdown from "./Dropdown";

export default function PostHeader() {
  const router = useRouter();
  return (
    <section className="fixed top-0 bg-white h-16 p-5 w-full max-w-[500px] border-b border-b-gray-300 z-50">
      <div className="flex flex-row justify-between items-center h-full">
        <div
          onClick={() => router.back()}
          className="hover:scale-[1.2] active:scale-[0.9] hover:transition-transform active:transition-transform cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="lg"
            style={{ color: "#856E69" }}
          />
        </div>
        <Dropdown />
      </div>
    </section>
  );
}
