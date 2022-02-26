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
    <div>
      {search.lenth > 0 && <SearchResults />}

      <ul>
        {repos.reposList.map((repo: any) => {
          return (
            <li key={repo.node.id} className="border-b">
              <RepoCard
                name={repo.node.name}
                description={repo.node.description}
                url={repo.node.url}
                updatedAt={repo.node.updatedAt}
              />
              {/* {repo.node.description} {repo.node.url} */}
              {/* <img ref={repo.node.openGraphImageUrl} /> */}
              {/* {repo.node.stargazerCount} */}
              {/* {repo.node.forkCount} */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
