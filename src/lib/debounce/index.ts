import { Action, Middleware } from "redux";

export enum DebounceActionType {
  DEBOUNCE = "@fx/debounce"
}

export interface DebouncedAction<T> extends Action<DebounceActionType> {
  meta: {
    effect: {
      ms: number;
      action: T;
    };
  };
}

export function debounce<T>(action: T, ms: number): DebouncedAction<T> {
  return {
    type: DebounceActionType.DEBOUNCE,
    meta: {
      effect: {
        ms,
        action
      }
    }
  };
}

function debouncer(fn: any, wait: number = 100): (action: any) => void {
  let timeout: any;

  return function() {
    const args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(function() {
      fn.apply(null, args);
    }, wait);
  };
}

export const factory = function(config: number[]) {
  const middleware: Middleware = function middleware(store) {
    const debouncers = config.reduce((debouncers: any, ms) => {
      debouncers[ms] = debouncer(store.dispatch, ms);
      return debouncers;
    }, {});

    return next => (action: DebouncedAction<any>) => {
      const result = next(action);

      if (action.type === DebounceActionType.DEBOUNCE) {
        const { effect } = action.meta;
        const debouncer = debouncers[effect.ms];

        debouncer(effect.action());
      }

      return result;
    };
  };

  return middleware;
};

export default factory;
