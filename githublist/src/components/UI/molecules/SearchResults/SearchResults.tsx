import React from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

export default function SearchResults() {
  const repos = useAppSelector((state: RootState) => {
    return state.repos;
  });
  const SearchCount = repos.reposList.length;

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      {SearchCount} Repo(s) found.{" "}
      <button className="font-bold" onClick={handleClick}>
        X Clear Results
      </button>
    </div>
  );
}
