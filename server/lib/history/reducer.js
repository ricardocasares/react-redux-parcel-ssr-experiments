import { parse } from "urlite/extra";
import { HistoryActionType } from "./types";
export const reducer = function (state = { path: "/" }, action) {
    switch (action.type) {
        case HistoryActionType.POP:
        case HistoryActionType.PUSH:
            return { ...parse(action.payload) };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map