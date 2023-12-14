import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";

export default function TagListItem() {
  const [tag] = useState([
    { id: 1, title: "피카츄 진화" },
    { id: 2, title: "라이츄" },
    { id: 3, title: "파이리는 빨개" },
    { id: 4, title: "꼬북이는 이연수" },
    { id: 5, title: "버터풀파워" },
    { id: 6, title: "야도란은 게을러" },
    { id: 7, title: "피존투치킨" },
    { id: 8, title: "또가스또또또가스" },
  ]);

  return (
    <ul className="border rounded-md m-5 shadow-md">
      {tag.map((list) => (
        <li
          key={list.id}
          className="flex flex-row  px-5 py-2 justify-between  hover:bg-gray-100"
        >
          <span className="cursor-pointer">
            <Link href="/">{list.title}</Link>
          </span>
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </li>
      ))}
    </ul>
  );
}
