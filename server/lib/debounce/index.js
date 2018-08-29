export var DebounceActionType;
(function (DebounceActionType) {
    DebounceActionType["DEBOUNCE"] = "@fx/debounce";
})(DebounceActionType || (DebounceActionType = {}));
export function debounce(action, ms) {
    return {
        type: DebounceActionType.DEBOUNCE,
        meta: {
            effect: {
                ms,
                action
            }
        }
    };
}
function debouncer(fn, wait = 100) {
    var timeout;
    return function () {
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(null, args);
        }, wait);
    };
}
export const factory = function (config) {
    const middleware = function middleware(store) {
        const debouncers = config.reduce((debouncers, ms) => {
            debouncers[ms] = debouncer(store.dispatch, ms);
            return debouncers;
        }, {});
        return next => (action) => {
            const result = next(action);
            if (action.type === DebounceActionType.DEBOUNCE) {
                const { effect } = action.meta;
                const debouncer = debouncers[effect.ms];
                debouncer(effect.action());
            }
            return result;
        };
    };
    return middleware;
};
export default factory;
//# sourceMappingURL=index.js.map