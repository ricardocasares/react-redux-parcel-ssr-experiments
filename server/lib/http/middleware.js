import "isomorphic-unfetch";
import { HttpActionType } from "./types";
export const middleware = function middleware() {
    return next => async (action) => {
        const result = next(action);
        if (action.type === HttpActionType.HTTP) {
            const { effect } = action.meta;
            const { url, options = {} } = effect;
            await fetch(url, options)
                .then(checkResponse)
                .then((data) => data.json())
                .then((payload) => next(effect.action(payload)));
        }
        return result;
    };
};
export function checkResponse(response) {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}
//# sourceMappingURL=middleware.js.map