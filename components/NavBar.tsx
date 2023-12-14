import {
  faBars,
  faHouse,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <section className="fixed bottom-0 h-[10vh] w-[500px] bg-white backdrop-blur-md">
      <div className="h-full flex flex-row justify-evenly items-center">
        <Link href="/" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faHouse} size="2x" />
          <p className="text-xs">홈</p>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faRectangleList} size="2x" />
          <p className="text-xs">나의실수</p>
        </Link>
        <Link href="/" className="flex flex-col items-center">
          <FontAwesomeIcon icon={faBars} size="2x" />
          <p className="text-xs">마이페이지</p>
        </Link>
      </div>
    </section>
  );
}
