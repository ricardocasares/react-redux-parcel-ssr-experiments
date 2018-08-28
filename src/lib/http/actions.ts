import { HttpAction, HttpActionType } from "./types";

export function http<T>(
  url: string,
  action: (payload?: any) => T,
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
