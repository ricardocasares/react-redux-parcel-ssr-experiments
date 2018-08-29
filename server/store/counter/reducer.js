import { CounterActionType } from "./types";
export const reducer = function (state = { count: 0 }, action) {
    switch (action.type) {
        case CounterActionType.INCREMENT:
            return { count: state.count + action.payload };
        case CounterActionType.DECREMENT:
            return { count: state.count - action.payload };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map