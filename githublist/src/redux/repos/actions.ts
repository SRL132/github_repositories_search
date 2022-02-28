import { FETCH_ALL_REPOS, SET_LOADING, SET_ERROR, SET_REPOS } from "./types";

import { fetchRepos } from "../../api";

/**
 * Function that gets the repos data from the github api and filters depending on the search.
 * @param {search} string a string to filter the results if search is used.
 * @return {reducer state update} lists for all the repos and filtered repos according to the search
 */

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

/**
 * Function that gets the repos data from the github api and filters depending on the search.
 * @param {repo []} list of repos according to search string
 * @return {reducer state update} for filtered repos
 */
export const setRepos = (filteredRepos: []) => {
  return {
    type: SET_REPOS,
    payload: filteredRepos,
  };
};
/**
 * Function that updates the state with a list of all the repos from the github api
 * @param {repo []} list of all repos from the github api
 * @return {reducer state update} for all repos from the github api
 */
export const setAllReposList = (repos: []) => {
  return {
    type: FETCH_ALL_REPOS,
    payload: repos,
  };
};

export const setError = (err: any) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
