import React from "react";
import { motion } from "framer-motion";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const exData = [
  { num: 1, title: "태그1" },
  { num: 2, title: "태그2" },
  { num: 3, title: "태그3" },
  { num: 4, title: "태그4" },
  { num: 5, title: "태그5" },
  { num: 6, title: "태그6" },
  { num: 7, title: "태그7" },
  { num: 8, title: "태그8" },
  { num: 9, title: "태그9" },
  { num: 10, title: "서비" },
  { num: 11, title: "람쥐님" },
  { num: 12, title: "파덕님" },
  { num: 13, title: "매니님" },
];

export default function TagList() {
  const router = useRouter();

  const selectTag = () => {
    router.push("/personalMistake");
  };
  return (
    <div className="h-full p-5">
      <ul className="bg-white h-auto text-2xl rounded-[10px] overflow-hidden shadow-md">
        {exData.map((data) => (
          <motion.li
            key={data.num}
            whileHover={{ backgroundColor: "#DDDEDF" }}
            className="p-5 flex flex-row justify-between"
            onClick={selectTag}
          >
            <p>{data.title}</p>
            <div>
              <FontAwesomeIcon icon={faEllipsis} size="sm" />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
