import { createStore, combineReducers } from "redux";
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
// @todo: no any
function router(state = {}, { type, payload }: any) {
  switch (type) {
    case "@@location/update":
      return { ...state, ...payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ counter, router });

export default function configureStore(state = {}) {
  return createStore(rootReducer, state);
}
