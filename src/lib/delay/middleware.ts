import { Middleware } from "redux";
import { DelayType, DelayAction } from "./types";

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const middleware: Middleware = function middleware() {
  return next => async (action: DelayAction<any>) => {
    const result = next(action);

    if (action.type === DelayType.DELAY) {
      await sleep(action.meta.effect.ms);
      return next(action.meta.effect.action());
    }

    return result;
  };
};

export default middleware;
