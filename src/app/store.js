import { configureStore } from "@reduxjs/toolkit";
//import { applyMiddleware, createStore } from "redux";
import { reducer } from "../redux/reducers";
import rootEpic from "../epic/epics";
import { createEpicMiddleware } from "redux-observable";
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);
