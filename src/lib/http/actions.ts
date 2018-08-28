import { HttpAction, HttpActionType } from "./types";

export function http<T, K>(
  url: string,
  action: (payload: K) => T,
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
