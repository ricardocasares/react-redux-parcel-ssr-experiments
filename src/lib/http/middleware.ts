import "isomorphic-fetch";
import { Middleware } from "redux";
import { HttpAction, HttpActionType } from "./types";

export const middleware: Middleware = function middleware() {
  return next => async (action: HttpAction<any>) => {
    if (action.type === HttpActionType.HTTP) {
      const { effect } = action.meta;
      const { url, options = {} } = effect;

      await fetch(url, options)
        .then((data: any) => data.json())
        .then((payload: any) => next(effect.action(payload)));
    }

    return next(action);
  };
};
