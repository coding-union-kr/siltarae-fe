import React from "react";
import { motion } from "framer-motion";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchTags } from "@/api/tagApi";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function TagList() {
  type Tag = {
    id: number;
    name: string;
  };

  const {
    data: tags,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: () => fetchTags(),
  });

  return (
    <div className="h-full p-5">
      <ul className="bg-white h-auto text-2xl rounded-[10px] overflow-hidden shadow-md">
        {isPending && (
          <span className="loading loading-dots loading-lg text-secondary" />
        )}
        {isError && (
          <span>
            {error instanceof AxiosError
              ? error?.response?.data.message
              : "태그를 불러오는데 실패했습니다. 다시 시도해보세요."}
          </span>
        )}
        {tags?.map((tag: Tag) => (
          <motion.li
            key={tag.id}
            whileHover={{ backgroundColor: "#DDDEDF" }}
            className="p-5 flex flex-row justify-between"
          >
            <p>{tag.name}</p>
            <div>
              <FontAwesomeIcon icon={faEllipsis} size="sm" />
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
