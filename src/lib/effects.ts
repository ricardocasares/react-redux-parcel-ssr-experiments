import "isomorphic-unfetch";
import { Store, Middleware } from "redux";

const noop = (x: any) => x;

export const EFFECT_HTTP = "@app/effect/http";

export function createActionTypes(type: string) {
  return [`${type}/pending`, `${type}/success`, `${type}/failure`];
}

export interface EffectHttpActionCreator<T> {
  (payload?: any): EffectHttpAction<T>;
}

export type EffectHttpAction<T> = {
  type: typeof EFFECT_HTTP;
  error?: boolean;
  payload?: any;
  meta: {
    type: T;
    resource: string;
    transform?: (data: any) => any;
  };
};

export const middleware: Middleware = (store: Store) => next => async (
  action: EffectHttpAction<any>
) => {
  if (action.type === EFFECT_HTTP) {
    try {
      store.dispatch({ type: `${action.meta.type}/pending` });

      const data = checkStatus(await fetch(action.meta.resource));
      const payload = await data.json();
      const transform = action.meta.transform || noop;

      store.dispatch({
        type: `${action.meta.type}/success`,
        payload: transform(payload)
      });
    } catch (error) {
      console.log(error);
      store.dispatch({
        type: `${action.meta.type}/failure`,
        error: true,
        payload: { ...error }
      });
    }
  }

  return next(action);
};

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(response.statusText);
  }
}

export default middleware;
