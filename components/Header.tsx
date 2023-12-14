import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Header() {
  return (
    <section className="fixed bg-[#FDF8F3]/50 backdrop-blur-md h-[8vh] w-full border-b border-b-gray-300">
      <div className="flex flex-row h-full justify-between items-center px-5">
        <div>
          <Link href="/">
            {/* FIXME : 로고 확정되면 다음에 변경 */}
            <FontAwesomeIcon icon={faAppleWhole} size="2x" />
          </Link>
        </div>
      </div>
    </section>
  );
}
