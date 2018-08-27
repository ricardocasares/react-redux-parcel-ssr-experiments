import { Action, AnyAction, Middleware } from "redux";

export enum DelayActionType {
  DELAY = "@fx/delay"
}

export interface DelayedAction<T> extends Action<DelayActionType> {
  meta: {
    effect: {
      ms: number;
      action: T;
    };
  };
}

export function delay<T>(action: T, ms: number): DelayedAction<T> {
  return {
    type: DelayActionType.DELAY,
    meta: {
      effect: {
        ms,
        action
      }
    }
  };
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const middleware: Middleware = function middleware(store) {
  return next => async (action: DelayedAction<any>) => {
    const result = next(action);

    if (action.type === DelayActionType.DELAY) {
      await sleep(action.meta.effect.ms);
      store.dispatch(action.meta.effect.action());
    }

    return result;
  };
};

export default middleware;
