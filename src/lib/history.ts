import { parse } from "urlite/extra";
import { Store, Middleware, AnyAction } from "redux";

export const HISTORY_POP = "@app/history/pop";
export const HISTORY_PUSH = "@app/history/push";

export function browser(): boolean {
  return typeof window !== "undefined";
}

export function pop(payload: string) {
  return {
    type: HISTORY_POP as typeof HISTORY_POP,
    payload
  };
}

export function push(payload: string) {
  return {
    type: HISTORY_PUSH as typeof HISTORY_PUSH,
    payload
  };
}

export type PopAction = ReturnType<typeof pop>;
export type PushAction = ReturnType<typeof push>;
export type HistoryActions = PopAction | PushAction;

export function reducer(state = {}, action: HistoryActions) {
  switch (action.type) {
    case HISTORY_POP:
    case HISTORY_PUSH:
      const { search, ...payload } = parse(action.payload);
      return { query: search, ...payload };
    default:
      return state;
  }
}

export const middleware: Middleware = (store: Store) => {
  if (browser()) {
    window.onpopstate = function() {
      const { path } = parse(document.location.href);
      store.dispatch(pop(path));
    };
  }

  return function(next) {
    return function(action: AnyAction) {
      if (browser() && action.type === HISTORY_PUSH) {
        history.pushState(null, "undefined", action.payload);
      }

      return next(action);
    };
  };
};
