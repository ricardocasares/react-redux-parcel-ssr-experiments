import { parse } from "urlite/extra";
import { Store, Middleware, Action, Reducer } from "redux";

export enum HistoryActionTypes {
  POP = "@app/history/pop",
  PUSH = "@app/history/push"
}

export interface HistoryAction extends Action<HistoryActionTypes> {
  payload: string;
}

export interface HistoryState {
  path: string;
  href?: string;
  post?: string;
  pathname?: string;
  hostname?: string;
  protocol?: string;
  search?: Record<string, string>;
}

export function browser(): boolean {
  return typeof window !== "undefined";
}

export function pop(payload: string): HistoryAction {
  return {
    type: HistoryActionTypes.POP,
    payload
  };
}

export function push(payload: string): HistoryAction {
  return {
    type: HistoryActionTypes.PUSH,
    payload
  };
}

export const reducer: Reducer<HistoryState, HistoryAction> = function(
  state = { path: "/" },
  action
) {
  switch (action.type) {
    case HistoryActionTypes.POP:
    case HistoryActionTypes.PUSH:
      return { ...parse(action.payload) };
    default:
      return state;
  }
};

export const middleware: Middleware = (store: Store) => {
  if (browser()) {
    window.onpopstate = function() {
      store.dispatch(pop(document.location.href));
    };
  }

  return function(next) {
    return function(action: HistoryAction) {
      if (browser() && action.type === HistoryActionTypes.PUSH) {
        history.pushState(undefined, undefined, action.payload);
      }

      return next(action);
    };
  };
};
