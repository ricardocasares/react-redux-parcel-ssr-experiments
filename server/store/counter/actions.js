import { debounce } from "app/lib/debounce";
import { CounterActionType } from "./types";
const inc = (payload = 1) => ({
    type: CounterActionType.INCREMENT,
    payload
});
const dec = (payload = 1) => ({
    type: CounterActionType.DECREMENT,
    payload
});
export const increment = () => debounce(() => inc(), 250);
export const decrement = () => debounce(() => dec(), 250);
//# sourceMappingURL=actions.js.map