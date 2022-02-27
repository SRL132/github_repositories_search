import env from "react-dotenv";

export const GITHUB_API: string = "https://api.github.com/graphql";
export const AUTH_TOKEN: string = env.REACT_APP_AUTH_TOKEN;
export const GITHUB_USERNAME: string = "SRL132";

export const QUERY_HEADERS = {
  Authorization: `bearer ${AUTH_TOKEN}`,
  "Content-Type": "application/json",
};

export const GET_REPO_BODY = {
  query: `
    query{
      user(login: "SRL132") {
        repositories(orderBy: {field: UPDATED_AT, direction: DESC}, first: 100) {
          edges {
            node {
              id
              description
              updatedAt
              forkCount
              name
              openGraphImageUrl
              url
              stargazerCount
              description
              updatedAt
              primaryLanguage {
                id
                color
                name
              }
           
            }
          }
        }
      }
    }`,
};
