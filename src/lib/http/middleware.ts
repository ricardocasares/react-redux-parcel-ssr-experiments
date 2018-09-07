import "isomorphic-unfetch";
import { Middleware } from "redux";
import { HttpAction, HttpType } from "./types";

export function checkResponse(res: Response): Response {
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  return res;
}

export const middleware: Middleware = function middleware() {
  return next => async (action: HttpAction<any, any>) => {
    const result = next(action);

    if (action.type === HttpType.HTTP) {
      const { effect } = action.meta;
      const { url, options = {} } = effect;

      return await fetch(url, options)
        .then(checkResponse)
        .then((data: any) => data.json())
        .then((payload: any) => next(effect.action(payload)));
    }

    return result;
  };
};
