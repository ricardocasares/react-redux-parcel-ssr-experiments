export var DelayActionType;
(function (DelayActionType) {
    DelayActionType["DELAY"] = "@fx/delay";
})(DelayActionType || (DelayActionType = {}));
export function delay(action, ms) {
    return {
        type: DelayActionType.DELAY,
        meta: {
            effect: {
                ms,
                action
            }
        }
    };
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export const middleware = function middleware() {
    return next => async (action) => {
        const result = next(action);
        if (action.type === DelayActionType.DELAY) {
            await sleep(action.meta.effect.ms);
            next(action.meta.effect.action());
        }
        return result;
    };
};
export default middleware;
//# sourceMappingURL=index.js.map