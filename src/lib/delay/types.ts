import { Effect } from "@app/models";

export enum DelayType {
  DELAY = "@fx/delay"
}

export interface Delay<T> {
  effect: {
    ms: number;
    action: T;
  };
}

export type DelayAction<T> = Effect<DelayType.DELAY, Delay<T>>;
