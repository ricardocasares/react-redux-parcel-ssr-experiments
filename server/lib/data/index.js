import Pattern from "url-pattern";
export const factory = function (options) {
    const routes = Object.keys(options.routes).map(route => ({
        path: new Pattern(route),
        resolve: options.routes[route]
    }));
    const middleware = function middleware(store) {
        return next => async (action) => {
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
//# sourceMappingURL=index.js.map