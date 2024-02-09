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
    <section className="fixed bottom-0 left-0 right-0 mx-auto h-16 w-full max-w-[500px] bg-white/50 backdrop-blur-md">
      <div className="h-full flex flex-row justify-around items-center text-[#5C4F4D]">
        <Link href="/" className="flex flex-col gap-1 items-center">
          <FontAwesomeIcon
            icon={faHouse}
            size="xl"
            style={{ color: "#5C4F4D" }}
          />
          <p className="text-xs">홈</p>
        </Link>
        <Link
          href="/personalMistake"
          className="flex flex-col gap-1 items-center"
        >
          <FontAwesomeIcon
            icon={faRectangleList}
            size="xl"
            style={{ color: "#5C4F4D" }}
          />
          <p className="text-xs">나의실수</p>
        </Link>
        <Link href="/myPage" className="flex flex-col gap-1 items-center">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            style={{ color: "#5C4F4D" }}
          />
          <p className="text-xs">마이페이지</p>
        </Link>
      </div>
    </section>
  );
}
