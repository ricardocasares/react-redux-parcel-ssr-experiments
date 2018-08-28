import { BlogState } from "app/store/blog/types";
import { HistoryState } from "app/lib/history/types";
import { CounterState } from "app/store/counter/types";

export interface AppState {
  blog: BlogState;
  router: HistoryState;
  counter: CounterState;
}
