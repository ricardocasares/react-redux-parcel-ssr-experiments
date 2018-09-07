import { Reducer } from "redux";
import { CounterState } from "@app/models";
import { CounterAction, CounterType } from "./types";

export const reducer: Reducer<CounterState, CounterAction> = function(
  state = { count: 0 },
  action
) {
  switch (action.type) {
    case CounterType.INCREMENT:
      return { count: state.count + action.payload };
    case CounterType.DECREMENT:
      return { count: state.count - action.payload };
    default:
      return state;
  }
};
