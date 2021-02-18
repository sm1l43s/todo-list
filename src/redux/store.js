import {combineReducers, createStore} from "redux";
import itemReducer from "./itemReducer";

let reducer = combineReducers( {
    toDoItems: itemReducer
});

let store = createStore(reducer);

export default store;