import { DelayType, DelayAction } from "./types";

export function delay<T>(action: T, ms: number): DelayAction<T> {
  return {
    type: DelayType.DELAY,
    payload: undefined,
    meta: {
      effect: {
        ms,
        action
      }
    }
  };
}
