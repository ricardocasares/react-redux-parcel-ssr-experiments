import { Middleware } from "redux";
import { DebounceAction, DebounceType } from "./types";

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

    return next => (action: DebounceAction<any>) => {
      const result = next(action);
      if (action.type === DebounceType.DEBOUNCE) {
        const { effect } = action.meta;
        const debounced = debouncers[effect.ms];

        return debounced(effect.action());
      }

      return result;
    };
  };

  return middleware;
};

export default factory;
