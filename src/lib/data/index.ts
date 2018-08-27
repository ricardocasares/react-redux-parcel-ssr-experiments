import Pattern from "url-pattern";
import { Dispatch, Middleware } from "redux";

export interface Options {
  action: string;
  routes: {
    [x: string]: (store: Dispatch, params: any) => any;
  };
}

export const resolver = function(options: Options) {
  const routes = Object.keys(options.routes).map(route => ({
    path: new Pattern(route),
    resolve: options.routes[route]
  }));

  const middleware: Middleware = function middleware(store) {
    return next => async action => {
      if (action.type === options.action) {
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
          try {
            await resolve(store.dispatch, match);
          } catch (error) {
            console.error(error);
          }
        }
      }

      return next(action);
    };
  };

  return middleware;
};

export default resolver;
