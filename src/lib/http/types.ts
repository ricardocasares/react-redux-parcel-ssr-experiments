import { Effect } from "@app/models";

export enum HttpType {
  HTTP = "@fx/http"
}

export interface Http<A, P> {
  effect: {
    url: string;
    action: (payload: P) => A;
    options?: any;
  };
}

export type HttpAction<A, P> = Effect<HttpType.HTTP, Http<A, P>>;
