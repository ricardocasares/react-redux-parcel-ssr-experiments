import { Action } from "redux";

export enum HttpActionType {
  HTTP = "@fx/http"
}

export interface HttpAction<A, P> extends Action<HttpActionType> {
  meta: {
    effect: {
      url: string;
      action: (payload: P) => A;
      options?: any;
    };
  };
}
