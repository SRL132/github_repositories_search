import initialState from "../repos/states";

const FilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export default FilterReducer;
