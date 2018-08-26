import { Store, Middleware } from "redux";

import { pop } from "./actions";
import { browser } from "@app/lib/util";
import { HistoryAction, HistoryActionTypes } from "./types";

export const middleware: Middleware = (store: Store) => {
  if (browser()) {
    window.onpopstate = function() {
      store.dispatch(pop(document.location.href));
    };
  }

  return next => (action: HistoryAction) => {
    if (browser() && action.type === HistoryActionTypes.PUSH) {
      history.pushState(undefined, undefined, action.payload);
    }

    return next(action);
  };
};
