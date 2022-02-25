import initialState from "./states";
import { AnyAction } from "redux";

import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

const ReposReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        reposList: action.payload,
      };

    default:
      return state;
  }
};

export default ReposReducer;
