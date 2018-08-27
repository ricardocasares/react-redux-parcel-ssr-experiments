import { http } from "@app/lib/http";
import { debounce } from "@app/lib/debounce";
import { CounterAction, CounterActionTypes } from "./types";

const inc = (payload: number = 1): CounterAction => ({
  type: CounterActionTypes.INCREMENT,
  payload
});

const dec = (payload: number = 1): CounterAction => ({
  type: CounterActionTypes.DECREMENT,
  payload
});

export const increment = () => debounce(() => inc(), 250);
export const decrement = () =>
  debounce(
    () => http("https://jsonplaceholder.typicode.com/posts", () => dec()),
    250
  );
