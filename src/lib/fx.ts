import fetch from "isomorphic-fetch";
import { Middleware, Action } from "redux";

export enum FetchActionTypes {
  FETCH = "@fetcher/fetch"
}

export interface FetcherAction extends Action<FetchActionTypes> {
  meta: {
    url: string;
    options: any;
    reject: (error: Error) => void;
    resolve: (data: any) => void;
  };
}

export const fetcher: Middleware = function fetcher(store) {
  return next => async (action: FetcherAction) => {
    if (action.type === FetchActionTypes.FETCH) {
      const { url, options, resolve, reject } = action.meta;

      await fetch(url, options)
        .then(data => data.json())
        .then(resolve)
        .catch(reject);
    }

    return next(action);
  };
};
