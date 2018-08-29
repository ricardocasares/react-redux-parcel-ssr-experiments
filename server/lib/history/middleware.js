import { parse } from "urlite";
import { pop } from "./actions";
import { browser } from "app/lib/util";
import { HistoryActionType } from "./types";
export const middleware = store => {
    if (browser()) {
        window.onpopstate = function () {
            store.dispatch(pop(parse(document.location.href).path));
        };
    }
    return next => (action) => {
        const result = next(action);
        if (browser() && action.type === HistoryActionType.PUSH) {
            history.pushState(undefined, undefined, action.payload);
        }
        return result;
    };
};
//# sourceMappingURL=middleware.js.map