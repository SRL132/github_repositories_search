import axios from "axios";

import { GITHUB_API, QUERY_HEADERS, GET_REPO_BODY } from "./api-constants";

/**
 * Function which gets the repos data from the github api.
 *@return {Promise}
 *
 */

export const fetchRepos = () => {
  /**
   * @param {GITHUB_API} string - The url of the github api.
   * @param {GET_REPO_BODY}  query: string - graphql query object.
   * @param {QUERY_HEADERS} headers: object - headers for the request.
   * 
   * @return object - response from the github api:
   * {
  "node": {
    "id": string,
    "description": string,
    "updatedAt": "2022-02-25T13:13:09Z",
    "name": "string",
    "url": "string",
    "primaryLanguage": {
    name: string,
    color: string
    }
  }
}
   */
  return axios.post(GITHUB_API, GET_REPO_BODY, {
    headers: QUERY_HEADERS,
  });
};
