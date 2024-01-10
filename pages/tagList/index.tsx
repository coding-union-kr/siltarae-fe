import React from "react";
import { motion } from "framer-motion";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteTag, fetchTags } from "@/api/tagApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function TagList() {
  type Tag = {
    id: number;
    name: string;
  };

  const queryClient = useQueryClient();

  const {
    data: tags,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: () => fetchTags(),
  });

  const [activeTooltip, setActiveTooltip] = React.useState<number | null>(null);
  const { mutate } = useMutation({
    mutationFn: (ids: number[]) => deleteTag(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
  const toggleTooltip = (tagId: number) => {
    setActiveTooltip((prev) => (prev === tagId ? null : tagId));
  };

  const handleDelete = (tagId: number[]) => {
    mutate(tagId);
    setActiveTooltip(null);
  };

  return (
    <div className="h-full p-5 ">
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
            <div className="relative">
              <FontAwesomeIcon
                icon={faEllipsis}
                size="sm"
                className="cursor-pointer"
                onClick={() => toggleTooltip(tag.id)}
              />
              {activeTooltip === tag.id && (
                <button
                  type="button"
                  aria-label="삭제하기"
                  className="absolute -right-1 w-16 p-1 -bottom-4 text-xs flex items-center justify-center bg-slate-100 shadow-md rounded-md"
                  onClick={() => handleDelete([tag.id])}
                >
                  삭제하기
                </button>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
