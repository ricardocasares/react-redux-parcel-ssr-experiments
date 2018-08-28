import Pattern from "url-pattern";
import { Dispatch, Middleware } from "redux";

export interface Options {
  action: string[];
  routes: {
    [x: string]: (store: Dispatch, params: any) => any;
  };
}

export const factory = function(options: Options) {
  const routes = Object.keys(options.routes).map(route => ({
    path: new Pattern(route),
    resolve: options.routes[route]
  }));

  const middleware: Middleware = function middleware(store) {
    return next => async action => {
      const result = next(action);

      if (options.action.includes(action.type)) {
        let path;
        let resolve;
        let next = 0;
        let match = false;
        do {
          path = routes[next].path;
          resolve = routes[next].resolve;
          match = path.match(action.payload);
          ++next;
        } while (!match && routes[next]);

        if (match) {
          await resolve(store.dispatch, match);
        }
      }

      return result;
    };
  };

  return middleware;
};

export default factory;
