import numReducer from "./numReducer";
import numberReducer from "./numberReducer";
import { combineReducers } from "redux";
export const rootReducer = combineReducers({
  num2: numReducer,
  numb: numberReducer,
});
