import { parse } from "urlite";
import { Middleware } from "redux";

import { pop } from "./actions";
import { browser } from "@app/lib/util";
import { HistoryAction, HistoryActionType } from "./types";

export const middleware: Middleware = store => {
  if (browser()) {
    window.onpopstate = function() {
      store.dispatch(pop(parse(document.location.href).path));
    };
  }

  return next => (action: HistoryAction) => {
    const result = next(action);

    if (browser() && action.type === HistoryActionType.PUSH) {
      history.pushState(undefined, undefined, action.payload);
    }

    return result;
  };
};
