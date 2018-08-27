import "isomorphic-fetch";
import { Middleware, Action } from "redux";

export enum HttpActionType {
  HTTP = "@fx/http"
}

export interface HttpAction<T> extends Action<HttpActionType> {
  meta: {
    effect: {
      url: string;
      action: T;
      options?: any;
    };
  };
}

export function http<T>(
  url: string,
  action: T,
  options: any = {}
): HttpAction<T> {
  return {
    type: HttpActionType.HTTP,
    meta: {
      effect: {
        url,
        action,
        options
      }
    }
  };
}

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

export default middleware;
