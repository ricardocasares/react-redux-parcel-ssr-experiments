import { Action } from "redux";

export interface CounterState {
  count: number;
}

export interface CounterAction extends Action<CounterActionTypes> {
  payload: number;
}

export enum CounterActionTypes {
  INCREMENT = "@app/counter/increment",
  DECREMENT = "@app/counter/decrement"
}
