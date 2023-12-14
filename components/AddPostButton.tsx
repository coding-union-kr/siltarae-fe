import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function AddPostButton() {
  return (
    <Link
      href="/"
      className="fixed translate-x-48 translate-y-32 h-12 w-12  flex justify-center items-center rounded-full bg-white shadow-md hover:scale-[1.1]"
    >
      <FontAwesomeIcon icon={faPlus} size="xl" color="#9CC490" />
    </Link>
  );
}

export default AddPostButton;
