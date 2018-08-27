import { CounterAction, CounterActionTypes } from "./types";
import { delay } from "@app/lib/delay";
import { request } from "@app/lib/http";
import { debounce } from "@app/lib/debounce";

export const increment = (payload: number = 1): CounterAction => ({
  type: CounterActionTypes.INCREMENT,
  payload
});

const dec = (payload: number = 1): CounterAction => ({
  type: CounterActionTypes.DECREMENT,
  payload
});

// const fun = (n: number) => debounce<typeof dec>(() => dec(n), 1000);
// export const decrement = (n: number, ms: number) => delay(() => fun(n), ms);
const receive = (payload: any) => ({
  type: "@app/fetch/posts/success",
  payload
});
export const posts = () =>
  request("https://jsonplaceholder.typicode.com/posts", receive);

export const decrement = () => debounce(posts, 500);
