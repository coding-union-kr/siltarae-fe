import { faAngleLeft, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function PostHeader() {
  return (
    <section className="fixed top-0 bg-white h-16 p-5 w-full max-w-[500px] border-b border-b-gray-300 z-50">
      <div className="flex flex-row justify-between items-center h-full">
        <Link href="/">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="lg"
            style={{ color: "#856E69" }}
          />
        </Link>
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
