import { HttpAction, HttpType } from "./types";

export function http<A, P>(
  url: string,
  action: (payload: P) => A,
  options: any = {}
): HttpAction<A, P> {
  return {
    type: HttpType.HTTP,
    payload: undefined,
    meta: {
      effect: {
        url,
        action,
        options
      }
    }
  };
}
