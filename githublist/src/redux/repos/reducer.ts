import initialState from "./states";
import { AnyAction } from "redux";

import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

interface Repo {
  node: {
    id: number;
    description: string;
    updatedAt: string;
    languages: {};
    forkCount: number;
    name: string;
    openGraphImageUrl: string;
    url: string;
    stargazerCount: number;
  };
}

interface RepoState {
  reposList: Repo[];
  isLoading: boolean;
  loadingError: string;
}

const ReposReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_REPOS:
      console.log(action.payload);
      return {
        ...state,
        reposList: action.payload,
      };

    default:
      return state;
  }
};

export default ReposReducer;
