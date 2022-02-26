import React from "react";

import GitHubButton from "react-github-btn";

export default function RepoCard(props: {
  name: string;
  description: string;
  url: string;
  updatedAt: string;
  // openGraphImageUrl: string;
  // stargazerCount: number;
  // forkCount: number;
}) {
  return (
    <div className="grid grid-cols-2">
      <div>
        <div className="d-inline-block mb-1">
          <h3 className="wb-break-all">
            <a
              className="hover:underline font-bold text-blue-600"
              href={props.url}
            >
              {props.name}
            </a>
            {/* <span></span>
          <span className="Label Label--secondary v-align-middle ml-1 mb-1">
            Private
          </span> */}
          </h3>
        </div>
        <div>
          <p className="col-9 d-inline-block color-fg-muted mb-2 pr-4">
            {props.description}
          </p>
        </div>
        <div className="f6 color-fg-muted mt-2">
          <span className="ml-0 mr-3">
            <span
              className="repo-language-color bg-#2b7489"
              // style="background-color: #2b7489"
            ></span>
            <span>TypeScript</span>
          </span>
          Updated{props.updatedAt}
          {/* <relative-time
          datetime="2022-02-25T13:04:02Z"
          className="no-wrap"
          title="25 feb 2022, 14:04 CET"
        >
          yesterday
        </relative-time> */}
        </div>
      </div>
      <div>
        <div className="right-0">
          <GitHubButton
            // href="https://github.com/ntkme/github-buttons"
            data-icon="octicon-star"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
          {/* <button>
            <span className="text-gray-700">
              <svg
                className="h-4 mr-1"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
            </span>
            <div>Star</div>
            <span>
              <svg
                className="h-2 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 386.257 386.257"
                // xml:space="preserve"
              >
                <polygon points="0,96.879 193.129,289.379 386.257,96.879 " />
              </svg>
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
