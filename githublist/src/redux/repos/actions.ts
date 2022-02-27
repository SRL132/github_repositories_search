import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

import { fetchRepos } from "../../api";

export const fetchAllRepos = (search: string) => {
  return (dispatch: any) => {
    dispatch(setLoading(true));
    fetchRepos()
      .then((res) => {
        const repos = res.data.data.user.repositories.edges;
        if (search.length > 0) {
          dispatch(setAllReposList(repos));
          const filteredRepos = repos.filter((repo: any) => {
            dispatch(setLoading(false));
            return repo.node.name
              .toLowerCase()
              .startsWith(search.toLowerCase());
          });

          dispatch(setRepos(filteredRepos));
        } else {
          dispatch(setLoading(false));
          dispatch(setAllReposList(repos));
          dispatch(setRepos(repos));
        }
      })
      .catch((err) => {
        dispatch(setError(err));
      });
  };
};

export const setLoading = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

export const setRepos = (repos: []) => {
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

export const setAllReposList = (repos: any) => {
  return {
    type: FETCH_ALL_REPOS,
    payload: repos,
  };
};


