import { HistoryAction, HistoryType } from "./types";

export function pop(payload: string): HistoryAction {
  return {
    type: HistoryType.POP,
    payload
  };
}

export function push(payload: string): HistoryAction {
  return {
    type: HistoryType.PUSH,
    payload
  };
}
