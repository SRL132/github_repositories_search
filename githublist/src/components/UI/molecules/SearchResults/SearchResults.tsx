import React from "react";

import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

export default function SearchResults() {
  const repos = useAppSelector((state: RootState) => {
    return state.repos;
  });
  const SearchCount = repos.reposList.length;

  return <div>{SearchCount} Repo(s) found. </div>;
}
