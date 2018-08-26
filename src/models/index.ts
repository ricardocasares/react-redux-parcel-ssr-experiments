import { HistoryState } from "@app/lib/history/types";
import { CounterState } from "@app/store/counter/types";

export interface AppState {
  router: HistoryState;
  counter: CounterState;
}
