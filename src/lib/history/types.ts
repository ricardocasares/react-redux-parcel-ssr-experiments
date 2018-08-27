import { Action } from "redux";

export enum HistoryActionType {
  POP = "@app/history/pop",
  PUSH = "@app/history/push"
}

export interface HistoryAction extends Action<HistoryActionType> {
  payload: string;
}

export interface HistoryState {
  path: string;
  href?: string;
  post?: string;
  pathname?: string;
  hostname?: string;
  protocol?: string;
  search?: Record<string, string>;
}
