import { Action } from "redux";

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
