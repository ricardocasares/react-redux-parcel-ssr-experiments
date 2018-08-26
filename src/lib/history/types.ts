import { Action } from "redux";

export enum HistoryActionTypes {
  POP = "@app/history/pop",
  PUSH = "@app/history/push"
}

export interface HistoryAction extends Action<HistoryActionTypes> {
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
