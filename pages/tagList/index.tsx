import React from "react";
import { motion } from "framer-motion";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

const exData = [
  "태그1",
  "태그2",
  "태그3",
  "태그4",
  "태그5",
  "태그6",
  "태그7",
  "태그8",
  "태그9",
  "서비",
  "람쥐님",
  "파덕님",
  "매니님",
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
            whileHover={{ backgroundColor: "#DDDEDF" }}
            className="p-5 flex flex-row justify-between"
            onClick={selectTag}
          >
            <p>{data}</p>
            <div>
              <FontAwesomeIcon icon={faEllipsis} size="sm" />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
