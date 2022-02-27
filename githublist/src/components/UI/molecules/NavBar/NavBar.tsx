import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import SearchBar from "../../atoms/SearchBar";

export default function NavBar() {
  const repos = useSelector((state: any) => {
    return state.repos;
  });
  const reposCount = repos.reposList.length;

  return (
    <nav className="border-b px-3 sm:px-4 py-2.5">
      <ul className="flex flex-col sm:flex-row items-center text-sm justify-center">
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="flex items-center space-x-2 py-2 px-3 border-b-2 active:border-red-400 font-semibold hover:border-gray-400 transition ease-in-out duration-150"
          >
            <span className="text-gray-600">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-book UnderlineNav-octicon hide-sm"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                ></path>
              </svg>
            </span>
            <span>Overview</span>
          </a>
        </li>

        <li className="mx-4 my-6 md:my-0">
          <NavLink
            id="/"
            to="/"
            className={(isActive) =>
              `flex items-center space-x-2 py-2 px-3 border-b-2  hover:border-gray-400 transition ease-in-out duration-150 ${
                isActive ? "border-red-400" : undefined
              }`
            }
          >
            <span className="text-gray-600">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-repo UnderlineNav-octicon hide-sm"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
            </span>
            <span>Repositories</span>
            <span className="px-2 rounded-full bg-gray-300 text-gray-700">
              {reposCount}
            </span>
          </NavLink>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="flex items-center space-x-2 py-2 px-3 border-b-2 active:border-red-400 font-semibold hover:border-gray-400 transition ease-in-out duration-150"
          >
            <span className="text-gray-600">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-table UnderlineNav-octicon hide-sm"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"
                ></path>
              </svg>
            </span>
            <span>Projects</span>
          </a>
        </li>
      </ul>
    </nav>
    //   <nav className="bg-grey border-gray-200 px-3 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    //     <div className="container flex flex-wrap justify-center mx-auto">
    //       <NavLink to="#" className="flex">
    //         <svg
    //           height="32"
    //           aria-hidden="true"
    //           viewBox="0 0 16 16"
    //           version="1.1"
    //           width="32"
    //           data-view-component="true"
    //           className="octicon octicon-mark-github v-align-middle"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    //           ></path>
    //         </svg>
    //         <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
    //           GitHub Repos
    //         </span>
    //       </NavLink>
    //       <button
    //         data-collapse-toggle="mobile-menu"
    //         type="button"
    //         className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="mobile-menu-2"
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg
    //           className="w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //         <svg
    //           className="hidden w-6 h-6"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //             clip-rule="evenodd"
    //           ></path>
    //         </svg>
    //       </button>
    //       <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
    //         <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
    //           <li>
    //             <NavLink
    //               aria-current="page"
    //               className="UnderlineNav-item js-responsive-underlinenav-item selected"
    //               data-hydro-click='{"event_type":"user_profile.click","payload":{"profile_user_id":45389112,"target":"TAB_REPOSITORIES","user_id":45389112,"originating_url":"https://github.com/SRL132?tab=repositories"}}'
    //               data-hydro-click-hmac="d03aae4c0c9beeb00cefaebdd0c9749b1bfaad6cfd71a37fedc2496ab1efec16"
    //               data-tab-item="repositories"
    //               to="/"
    //             >
    //               <svg
    //                 aria-hidden="true"
    //                 height="16"
    //                 viewBox="0 0 16 16"
    //                 version="1.1"
    //                 width="16"
    //                 data-view-component="true"
    //                 className="octicon octicon-repo UnderlineNav-octicon hide-sm"
    //               >
    //                 <path
    //                   fill-rule="evenodd"
    //                   d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
    //                 ></path>
    //               </svg>
    //               Repositories
    //               <span title="52" data-view-component="true" className="Counter">
    //                 {reposCount}
    //               </span>
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // );
  );
}
