import { HistoryActionType } from "./types";
export function pop(payload) {
    return {
        type: HistoryActionType.POP,
        payload
    };
}
export function push(payload) {
    return {
        type: HistoryActionType.PUSH,
        payload
    };
}
//# sourceMappingURL=actions.js.map