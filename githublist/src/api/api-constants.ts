import env from "react-dotenv";

export const GITHUB_API: string = "https://api.github.com/graphql";
export const AUTH_TOKEN = env.REACT_APP_AUTH_TOKEN;
export const GITHUB_USERNAME = "SRL132";
console.log(GITHUB_USERNAME);
console.log(AUTH_TOKEN);
export const QUERY_HEADERS = {
  Authorization: `bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

export const GITHUB_DATA = {
  token: AUTH_TOKEN,
  username: GITHUB_USERNAME,
};

export const GET_REPO_BODY = {
  query: `
    query{
        user(login:"${GITHUB_USERNAME}"){
            repositories(first:100, orderBy: {field: CREATED_AT, direction: DESC})


    }`,
};

export const QUERY_TO_TEST = {
  query: `query{
  user(login: "${GITHUB_USERNAME}"){
    repositories(last:10,orderBy: {field: CREATED_AT, direction: DESC}) {
      edges {
        node {
          id
          description
          updatedAt
          languages {
            edges {
              node {
                id
              }
            }
          }
          forkCount
          name
          openGraphImageUrl
          url
          stargazerCount
        }
      }
    }
  }
}`,
};
