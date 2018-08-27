import { HistoryAction, HistoryActionType } from "./types";

export function pop(payload: string): HistoryAction {
  return {
    type: HistoryActionType.POP,
    payload
  };
}

export function push(payload: string): HistoryAction {
  return {
    type: HistoryActionType.PUSH,
    payload
  };
}
