import { configureStore } from "@reduxjs/toolkit";
import { /* combineReducers ,*/ reducer } from "../redux/reducers";

export default configureStore({
  reducer: reducer,
});
