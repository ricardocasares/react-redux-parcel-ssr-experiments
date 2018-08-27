import { Reducer } from "redux";
import { parse } from "urlite/extra";

import { HistoryState, HistoryAction, HistoryActionType } from "./types";

export const reducer: Reducer<HistoryState, HistoryAction> = function(
  state = { path: "/" },
  action
) {
  switch (action.type) {
    case HistoryActionType.POP:
    case HistoryActionType.PUSH:
      return { ...parse(action.payload) };
    default:
      return state;
  }
};
