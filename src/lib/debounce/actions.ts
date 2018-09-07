import { DebounceAction, DebounceType } from "./types";

export function debounce<T>(action: T, ms: number): DebounceAction<T> {
  return {
    type: DebounceType.DEBOUNCE,
    payload: undefined,
    meta: {
      effect: {
        ms,
        action
      }
    }
  };
}
