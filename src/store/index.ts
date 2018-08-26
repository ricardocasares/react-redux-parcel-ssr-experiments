import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import counter from "./counter";
import router, { middleware as history } from "@app/lib/history";

const enhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({ counter, router });
const enhancer = enhancers(applyMiddleware(history));

export default function configureStore(state = {}) {
  return createStore(reducer, state, enhancer);
}
