import { Action, AnyAction, Middleware } from "redux";

export const enum DelayActionTypes {
  DELAY = "@fx/delay"
}

export interface DelayedAction<T> extends Action<DelayActionTypes> {
  meta: {
    effect: {
      delay: number;
      action: T;
    };
  };
}

export function delay<T>(action: T, delay: number): DelayedAction<T> {
  return {
    type: DelayActionTypes.DELAY,
    meta: {
      effect: {
        delay,
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
    if (action.type === DelayActionTypes.DELAY) {
      await sleep(action.meta.effect.delay);
      store.dispatch(action.meta.effect.action());
    }

    return next(action);
  };
};

export default middleware;
