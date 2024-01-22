import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";
import Dropdown from "./Dropdown";

export default function PostHeader() {
  return (
    <section className="fixed top-0 bg-white h-16 p-5 w-full max-w-[500px] border-b border-b-gray-300 z-50">
      <div className="flex flex-row justify-between items-center h-full">
        <Link
          href="/"
          className="hover:scale-[1.1] active:scale-[0.9] hover:transition-transform active:transition-transform"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="lg"
            style={{ color: "#856E69" }}
          />
        </Link>
        <Dropdown />
      </div>
    </section>
  );
}
