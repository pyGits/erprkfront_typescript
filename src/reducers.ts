import { combineReducers } from "redux";
import aplicationReducer from "./Store/Reducers/application";

const rootReducer = combineReducers({
  application: aplicationReducer,
});

export default rootReducer;
