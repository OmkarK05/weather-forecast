import { combineReducers } from "redux";
import ApiReducer from "./Api/ApiReducer";

const RootReducer = combineReducers({ apiData: ApiReducer });

export default RootReducer;
