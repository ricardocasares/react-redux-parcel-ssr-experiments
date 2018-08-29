export default function (errorHandler) {
    return store => next => async (action) => {
        try {
            return await next(action);
        }
        catch (error) {
            errorHandler(error, store.getState(), action, store.dispatch);
            return error;
        }
    };
}
//# sourceMappingURL=index.js.map