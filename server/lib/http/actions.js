import { HttpActionType } from "./types";
export function http(url, action, options = {}) {
    return {
        type: HttpActionType.HTTP,
        meta: {
            effect: {
                url,
                action,
                options
            }
        }
    };
}
//# sourceMappingURL=actions.js.map