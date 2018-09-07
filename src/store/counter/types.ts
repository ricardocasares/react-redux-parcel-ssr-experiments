import { Action } from "@app/models";

export enum CounterType {
  INCREMENT = "@app/counter/increment",
  DECREMENT = "@app/counter/decrement"
}

export type CounterIncrementAction = Action<CounterType.INCREMENT, number>;
export type CounterDecrementAction = Action<CounterType.DECREMENT, number>;
export type CounterAction = CounterIncrementAction | CounterDecrementAction;
