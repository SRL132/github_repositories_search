import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

import { testGetRepos } from "../../api";

export const fetchAllRepos = (search: string) => {
  return (dispatch: any) => {
    dispatch(setLoading());
    testGetRepos()
      .then((res) => {
        const repos = res.data.data.user.repositories.edges;
        if (search.length > 0) {
          const filteredRepos = repos.filter((repo: any) => {
            return repo.node.name
              .toLowerCase()
              .startsWith(search.toLowerCase());
          });
          dispatch(setRepos(filteredRepos));
        } else {
          dispatch(setRepos(repos));
        }
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
