import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

import { testGetRepos } from "../../api";

export const fetchAllRepos = () => {
  return (dispatch: any) => {
    dispatch(setLoading());
    testGetRepos()
      .then((res) => {
        dispatch(setRepos(res.data.data.user.repositories.edges));
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setRepos = (repos: any) => {
  return {
    type: SET_REPOS,
    payload: repos,
  };
};

export const setError = (err: any) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
