import { HttpAction, HttpActionType } from "./types";

export function http<A, P>(
  url: string,
  action: (payload: P) => A,
  options: any = {}
): HttpAction<A, P> {
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
