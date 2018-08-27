import { Middleware, Dispatch, AnyAction } from "redux";

export interface ErrorHandler<T> {
  (error: Error, state: T, action: AnyAction, dispatch: Dispatch): void;
}

export default function<T>(errorHandler: ErrorHandler<T>): Middleware {
  return store => next => async (action: AnyAction) => {
    try {
      return await next(action);
    } catch (error) {
      errorHandler(error, store.getState(), action, store.dispatch);
      return error;
    }
  };
}
