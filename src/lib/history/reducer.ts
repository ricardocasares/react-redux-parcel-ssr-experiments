import { Reducer } from "redux";
import { parse } from "urlite/extra";
import { HistoryState } from "@app/models";
import { HistoryAction, HistoryType } from "./types";

export const reducer: Reducer<HistoryState, HistoryAction> = function(
  state = { path: "/" },
  action
) {
  switch (action.type) {
    case HistoryType.POP:
    case HistoryType.PUSH:
      return { ...parse(action.payload) };
    default:
      return state;
  }
};
