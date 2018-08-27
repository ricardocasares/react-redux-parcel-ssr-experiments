import "isomorphic-fetch";
import { Middleware, Action } from "redux";

export enum HttpActionType {
  REQUEST = "@http/request"
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

export function request<T>(
  url: string,
  action: T,
  options: any = {}
): HttpAction<T> {
  return {
    type: HttpActionType.REQUEST,
    meta: {
      effect: {
        url,
        action,
        options
      }
    }
  };
}

export const middleware: Middleware = function middleware(store) {
  return next => async (action: HttpAction<any>) => {
    const result = next(action);

    if (action.type === HttpActionType.REQUEST) {
      const { effect } = action.meta;
      const { url, options = {} } = effect;

      throw new Error("Fun!");

      await fetch(url, options)
        .then((data: any) => data.json())
        .then((payload: any) => store.dispatch(effect.action(payload)));
    }

    return result;
  };
};

export default middleware;
