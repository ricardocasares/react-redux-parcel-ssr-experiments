import Pattern from "url-pattern";
import { Dispatch, Middleware } from "redux";

export interface Options {
  wait?: boolean;
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
      if (options.action.includes(action.type)) {
        let path;
        let result;
        let resolve;
        let route = 0;
        let match = false;

        do {
          path = routes[route].path;
          resolve = routes[route].resolve;
          match = path.match(action.payload);
          ++route;
        } while (!match && routes[route]);

        if (!options.wait) {
          result = next(action);
        }

        if (match) {
          await resolve(store.dispatch, match);
          if (options.wait) return next(action);
        }

        if (!options.wait) return result;
      }

      return next(action);
    };
  };

  return middleware;
};

export default factory;
