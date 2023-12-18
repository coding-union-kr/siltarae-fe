import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function AddPostButton() {
  return (
    // fixed를 가운데 정렬로 사용하는 방법
    <div className="fixed bottom-16 left-0 right-0 mx-auto w-full max-w-[500px]">
      <Link
        href="/"
        className="absolute bottom-6 right-5 h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full bg-[#9CC491] shadow-md"
      >
        <FontAwesomeIcon icon={faPlus} size="2xl" color="white" />
      </Link>
    </div>
  );
}

export default AddPostButton;
