import { BlogActionType } from "./types";
export const reducer = function (state = { fetching: false, error: false, posts: [] }, action) {
    switch (action.type) {
        case BlogActionType.POSTS_FETCH_PENDING:
            return { ...state, error: false, fetching: true };
        case BlogActionType.POSTS_FETCH_FAILURE:
            return { ...state, error: true, fetching: false };
        case BlogActionType.POSTS_FETCH_SUCCESS:
            return {
                ...state,
                error: false,
                fetching: false,
                posts: action.payload
            };
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.js.map