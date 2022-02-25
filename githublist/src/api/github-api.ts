import axios from "axios";

import {
  GITHUB_API,
  QUERY_HEADERS,
  GET_REPO_BODY,
  QUERY_TO_TEST,
} from "./api-constants";

export const getRepos = () => {
  return axios.post(GITHUB_API, GET_REPO_BODY, {
    headers: QUERY_HEADERS,
  });
};

export const testGetRepos = () => {
  return axios.post(GITHUB_API, JSON.stringify(QUERY_TO_TEST), {
    headers: QUERY_HEADERS,
  });
};
