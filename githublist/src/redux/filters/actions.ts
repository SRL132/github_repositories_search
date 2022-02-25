import { SET_SEARCH } from "./types";

export const setSearch = (value: string) => {
  return {
    type: SET_SEARCH,
    payload: value,
  };
};
