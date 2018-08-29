import { http } from "app/lib/http";
import { BlogActionType } from "./types";
export function fetchPostsPending() {
    return {
        type: BlogActionType.POSTS_FETCH_PENDING,
        payload: []
    };
}
export function fetchPostsSuccess(payload) {
    return {
        type: BlogActionType.POSTS_FETCH_SUCCESS,
        payload
    };
}
export function fetchPosts() {
    return http("https://jsonplaceholder.typicode.com/posts", posts => fetchPostsSuccess(posts));
}
//# sourceMappingURL=actions.js.map