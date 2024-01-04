import React from "react";

type SortType = "POPULAR" | "FASTEST";

interface SortButtonProps {
  sortType: SortType;
  currentSort: string;
  content: string;
  onToggleSort: (sort: SortType) => void;
}

function SortButton({
  sortType,
  currentSort,
  onToggleSort,
  content,
}: SortButtonProps) {
  return (
    <button
      type="button"
      className={`${
        currentSort === sortType
          ? "text-primary"
          : "text-secondary xs:text-lg text-base"
      } font-semibold xs:text-lg text-base`}
      onClick={() => onToggleSort(sortType)}
    >
      {content}
    </button>
  );
}

export default SortButton;
