import "isomorphic-unfetch";
import { Middleware } from "redux";
import { HttpAction, HttpActionType } from "./types";

export const middleware: Middleware = function middleware() {
  return next => async (action: HttpAction<any>) => {
    const result = next(action);

    if (action.type === HttpActionType.HTTP) {
      const { effect } = action.meta;
      const { url, options = {} } = effect;

      await fetch(url, options)
        .then(checkResponse)
        .then((data: any) => data.json())
        .then((payload: any) => next(effect.action(payload)));
    }

    return result;
  };
};

export function checkResponse(response: Response): Response {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
