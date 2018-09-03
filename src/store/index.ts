import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// state
import { AppState } from "@app/models";

// reducers
import blog from "./blog";
import counter from "./counter";
import router from "@app/lib/history";

// middleware
import http from "@app/lib/http";
import delay from "@app/lib/delay";
import debouncer from "@app/lib/debounce";
import configureErrorHandler from "@app/lib/errors";
import { middleware as history } from "@app/lib/history";
import resolver from "./resolver";

// debouncer configuration
const debounce = debouncer([250, 500, 1000]);

// error handler configuration
const errors = configureErrorHandler<AppState>((error, state, action) => {
  console.error(error);
  console.log(state);
  console.log(action);
});

const middleware = [errors, resolver, http, delay, debounce, history];

const enhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({ router, blog, counter });
const enhancer = enhancers(applyMiddleware(...middleware));

export default function configureStore(state = {}) {
  return createStore(reducer, state, enhancer);
}
