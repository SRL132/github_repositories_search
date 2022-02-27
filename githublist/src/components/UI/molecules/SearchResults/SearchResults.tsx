import React from "react";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const repos = useSelector((state: any) => {
    return state.repos;
  });
  const SearchCount = repos.reposList.length;

  return <div>{SearchCount} Repo(s) found. </div>;
}
