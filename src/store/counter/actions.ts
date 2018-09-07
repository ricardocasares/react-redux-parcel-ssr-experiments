import { debounce } from "@app/lib/debounce";
import { CounterAction, CounterType } from "./types";

const inc = (payload: number = 1): CounterAction => ({
  type: CounterType.INCREMENT,
  payload
});

const dec = (payload: number = 1): CounterAction => ({
  type: CounterType.DECREMENT,
  payload
});

export const increment = () => debounce(() => inc(), 250);
export const decrement = () => debounce(() => dec(), 250);
