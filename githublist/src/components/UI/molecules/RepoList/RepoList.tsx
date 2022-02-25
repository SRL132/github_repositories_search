import React from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { RootState } from "../../../../redux/store";

export default function RepoList() {
  const repos = useAppSelector((state: RootState) => {
    return state.repos;
  });

  return (
    <ul>
      {repos.reposList.map((repo: any) => {
        return (
          <li key={repo.node.id}>
            {repo.node.name}
            {repo.node.description} {repo.node.url}
            {repo.node.updatedAt}
            {/* <img ref={repo.node.openGraphImageUrl} /> */}
            {repo.node.stargazerCount}
            {repo.node.forkCount}
          </li>
        );
      })}
    </ul>
  );
}
