import { Action } from "redux";

export interface CounterState {
  count: number;
}

export interface CounterAction extends Action<CounterActionType> {
  payload: number;
}

export enum CounterActionType {
  INCREMENT = "@app/counter/increment",
  DECREMENT = "@app/counter/decrement"
}
