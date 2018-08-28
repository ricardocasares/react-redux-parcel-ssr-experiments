import { Reducer } from "redux";
import { CounterState, CounterAction, CounterActionType } from "./types";

export const reducer: Reducer<CounterState, CounterAction> = function(
  state = { count: 0 },
  action
) {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { count: state.count + action.payload };
    case CounterActionType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
