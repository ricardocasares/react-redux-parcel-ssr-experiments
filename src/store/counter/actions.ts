import { debounce } from "app/lib/debounce";
import { CounterAction, CounterActionType } from "./types";

const inc = (payload: number = 1): CounterAction => ({
  type: CounterActionType.INCREMENT,
  payload
});

const dec = (payload: number = 1): CounterAction => ({
  type: CounterActionType.DECREMENT,
  payload
});

export const increment = () => debounce(() => inc(), 250);
export const decrement = () => debounce(() => dec(), 250);
