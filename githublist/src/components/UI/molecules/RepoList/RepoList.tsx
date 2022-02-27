import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";
import RepoCard from "../../atoms/RepoCard";
import SearchResults from "../SearchResults";

export default function RepoList() {
  const repos = useAppSelector((state: RootState) => {
    return state.repos;
  });
  const filters = useAppSelector((state: RootState) => {
    return state.filters;
  });
  const search = filters.search;
  return (
    <div className="flex flex-col gap-y-2 w-full sm:w-1/1 md:w-1/1 max-w-sm rounded-lg p-2 shadow-md bg-gray-100 text-left characters">
      {search.lenth > 0 && <SearchResults />}

      <ul className="w-full">
        {repos.reposList.map((repo: any) => {
          return (
            <li key={repo.node.id} className="border-b">
              <RepoCard
                name={repo.node.name}
                description={repo.node.description}
                url={repo.node.url}
                updatedAt={repo.node.updatedAt}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
