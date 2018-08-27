import { CounterAction, CounterActionTypes } from "./types";
import { DelayedAction, delay } from "@app/lib/delay";

export const increment = (): CounterAction => ({
  type: CounterActionTypes.INCREMENT
});

// export const decrement = (): CounterAction => ({
//   type: CounterActionTypes.DECREMENT
// });

export const decrement = () => delay<typeof increment>(increment, 3000);
