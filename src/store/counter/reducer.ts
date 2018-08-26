import { Reducer } from "redux";
import { CounterState, CounterAction, CounterActionTypes } from "./types";

export const reducer: Reducer<CounterState, CounterAction> = function(
  state = { count: 0 },
  action
) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return { count: state.count + 1 };
    case CounterActionTypes.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
