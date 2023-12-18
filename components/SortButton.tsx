import React from "react";

type SortType = "인기순" | "최신순";

interface SortButtonProps {
  sortType: SortType;
  currentSort: string;
  onToggleSort: (sort: SortType) => void;
}

function SortButton({ sortType, currentSort, onToggleSort }: SortButtonProps) {
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
      {sortType}
    </button>
  );
}

export default SortButton;
