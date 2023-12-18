import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function AddPostButton() {
  return (
    <div className="fixed bottom-16 w-full max-w-[500px]">
      <Link
        href="/"
        className="absolute bottom-5 right-5 h-[3.5rem] w-[3.5rem] flex justify-center items-center rounded-full bg-[#9CC491] shadow-md hover:scale-[1.1]"
      >
        <FontAwesomeIcon icon={faPlus} size="2xl" color="white" />
      </Link>
    </div>
  );
}

export default AddPostButton;
