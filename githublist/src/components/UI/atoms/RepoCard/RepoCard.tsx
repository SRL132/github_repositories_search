import React from "react";

import GitHubButton from "react-github-btn";

interface RepoProps {
  name: string;
  description: string;
  url: string;
  language: string;
  languageColor: string;
  updatedAt: string;
}

/**
   * Returns a Card which displays the data in props.
   * @param obj props: {
   * name: string;
   * description: string;
   * url: string;
     updatedAt: string;
   * language: string;
   * languageColor: string;
   * }  - The object to display in the card.
   * 
   */

export default function RepoCard(props: RepoProps) {
  const updatedAt = props.updatedAt;
  const updatedDaysAgo = Math.floor(
    (new Date().getTime() - new Date(updatedAt).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="flex flex-row justify-between ">
      <div>
        <div className="d-inline-block mb-1">
          <a
            className="hover:underline font-bold text-lg text-blue-600"
            href={props.url}
          >
            {props.name}
          </a>
        </div>
        <div>
          <p className="col-9 d-inline-block text-base mb-2 pr-4">
            {props.description}
          </p>
        </div>
        <div className="f6 color-fg-muted mt-2">
          <span className=" flex text-sm">{props.language}</span>
          <span className="text-xs"> Updated {updatedDaysAgo} days ago</span>
        </div>
      </div>

      <div className="right-0">
        <GitHubButton
          href="#"
          data-icon="octicon-star"
          aria-label="Star ntkme/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </div>
  );
}
