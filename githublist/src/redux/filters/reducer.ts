import initialState from "./states";
import { AnyAction } from "@reduxjs/toolkit";

import { SET_SEARCH } from "./types";

const FilterReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
