import { parse } from "urlite";
import { Store, Middleware } from "redux";

import { pop } from "./actions";
import { browser } from "@app/lib/util";
import { HistoryAction, HistoryActionType } from "./types";

export const middleware: Middleware = (store: Store) => {
  if (browser()) {
    window.onpopstate = function() {
      store.dispatch(pop(parse(document.location.href).path));
    };
  }

  return next => (action: HistoryAction) => {
    if (browser() && action.type === HistoryActionType.PUSH) {
      history.pushState(undefined, undefined, action.payload);
    }

    return next(action);
  };
};
