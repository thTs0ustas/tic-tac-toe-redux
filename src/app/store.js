//import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "../redux/reducers";
import rootEpic from "../epic/epics";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";
const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

/* export default function configureStore() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  return store;
} */
