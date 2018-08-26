import { Reducer } from "redux";
import { parse } from "urlite/extra";

import { HistoryState, HistoryAction, HistoryActionTypes } from "./types";

export const reducer: Reducer<HistoryState, HistoryAction> = function(
  state = { path: "/" },
  action
) {
  switch (action.type) {
    case HistoryActionTypes.POP:
    case HistoryActionTypes.PUSH:
      return { ...parse(action.payload) };
    default:
      return state;
  }
};
