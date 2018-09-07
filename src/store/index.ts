import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// reducers
import blog from "./blog";
import counter from "./counter";
import router from "@app/lib/history";

// middleware
import delay from "@app/lib/delay";
import { middleware as history } from "@app/lib/history";
import { errors, http, debounce, resolver } from "./middleware";

const middleware = [errors, resolver, delay, debounce, history, http];

const enhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const reducer = combineReducers({ router, blog, counter });
const enhancer = enhancers(applyMiddleware(...middleware));

export default function configureStore(state = {}) {
  return createStore(reducer, state, enhancer);
}
