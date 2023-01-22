import { combineReducers, createStore } from "redux";
import { userReducer } from "./UserState";

//Multiple catsReducer
const reducers = combineReducers({ userReducer: userReducer });
const store = createStore(reducers);

export default store;
