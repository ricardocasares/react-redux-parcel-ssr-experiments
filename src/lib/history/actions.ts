import { HistoryAction, HistoryActionTypes } from "./types";

export function pop(payload: string): HistoryAction {
  return {
    type: HistoryActionTypes.POP,
    payload
  };
}

export function push(payload: string): HistoryAction {
  return {
    type: HistoryActionTypes.PUSH,
    payload
  };
}
