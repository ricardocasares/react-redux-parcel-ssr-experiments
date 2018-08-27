import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// import blog from "./blog";
import counter from "./counter";
import delay from "@app/lib/delay";
import debouncer from "@app/lib/debounce";
import http from "@app/lib/http";
import router, { middleware as history } from "@app/lib/history";
import resolver from "./resolver";
import configureErrorHandler from "@app/lib/errors";
import { AppState } from "@app/models";

const debounce = debouncer([100, 500, 1000]);
const errors = configureErrorHandler<AppState>(
  (error, state, action, dispatch) => {
    console.log(error);
    console.log(state);
    console.log(action);
  }
);

const enhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({ counter, router });
const enhancer = enhancers(
  applyMiddleware(errors, resolver, http, delay, debounce, history)
);

export default function configureStore(state = {}) {
  return createStore(reducer, state, enhancer);
}
