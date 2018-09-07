import { Effect } from "@app/models";

export enum DebounceType {
  DEBOUNCE = "@fx/debounce"
}

export interface Debounce<T> {
  effect: {
    ms: number;
    action: T;
  };
}

export type DebounceAction<T> = Effect<DebounceType.DEBOUNCE, Debounce<T>>;
