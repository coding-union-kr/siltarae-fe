/* eslint-disable jsx-a11y/anchor-is-valid */
import { faAngleLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouter } from "next/router";

export default function PostHeader() {
  const router = useRouter();
  return (
    <section className="fixed top-0 bg-white h-16 p-5 w-full max-w-[500px] border-b border-b-gray-300 z-50">
      <div className="flex flex-row justify-between items-center h-full">
        <div onClick={() => router.back()} className="cursor-pointer">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="lg"
            style={{ color: "#856E69" }}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faEllipsis}
            size="xl"
            style={{ color: "#856E69" }}
          />
        </div>
      </div>
    </section>
  );
}
