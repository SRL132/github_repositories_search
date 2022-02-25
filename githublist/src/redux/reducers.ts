import { combineReducers } from "redux";
import FilterReducer from "./filters/reducer";
import ReposReducer from "./repos/reducer";

const reducers = combineReducers({
  repos: ReposReducer,
  filters: FilterReducer,
});

export default reducers;
