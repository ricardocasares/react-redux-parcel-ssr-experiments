import { CounterAction, CounterActionTypes } from "./types";

export const increment = (): CounterAction => ({
  type: CounterActionTypes.INCREMENT
});

export const decrement = (): CounterAction => ({
  type: CounterActionTypes.DECREMENT
});
