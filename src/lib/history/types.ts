import { Action } from "@app/models";

export enum HistoryType {
  POP = "@app/history/pop",
  PUSH = "@app/history/push"
}

export type HistoryPopAction = Action<HistoryType.POP, string>;
export type HistoryPushAction = Action<HistoryType.PUSH, string>;
export type HistoryAction = HistoryPopAction | HistoryPushAction;
