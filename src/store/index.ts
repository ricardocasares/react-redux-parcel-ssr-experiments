import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as router, middleware as history } from "@app/lib/history";

// @todo: no any
function counter(state = { count: 0 }, { type }: any) {
  switch (type) {
    case "INC":
      return { ...state, count: state.count + 1 };
    case "DEC":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

const rootReducer = combineReducers({ counter, router });

export default function configureStore(state = {}) {
  return createStore(rootReducer, state, applyMiddleware(history));
}
