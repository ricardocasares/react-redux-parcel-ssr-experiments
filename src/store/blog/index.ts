// import {
//   EFFECT_HTTP,
//   EffectHttpAction,
//   createActionTypes,
//   EffectHttpActionCreator
// } from "@app/lib/effects";

// export const FETCH_POSTS = "@app/fetch/posts";
// export const [
//   FETCH_POSTS_PENDING,
//   FETCH_POSTS_SUCCESS,
//   FETCH_POSTS_FAILURE
// ] = createActionTypes(FETCH_POSTS);

// export const fetchPosts: EffectHttpActionCreator<typeof FETCH_POSTS> = () => ({
//   type: EFFECT_HTTP,
//   meta: {
//     type: FETCH_POSTS,
//     resource: "https://jsonplaceholder.typicode.com/posts",
//     transform: (data = []) => data.slice(0, 4)
//   }
// });

// export type FetchPendingAction = EffectHttpAction<typeof FETCH_POSTS_PENDING>;
// export type FetchSuccessAction = EffectHttpAction<typeof FETCH_POSTS_SUCCESS>;
// export type FetchFailureAction = EffectHttpAction<typeof FETCH_POSTS_FAILURE>;
// export type FetchPostsAction =
//   | FetchPendingAction
//   | FetchSuccessAction
//   | FetchFailureAction;

// export default function reducer(
//   state = { fetching: false, error: false, posts: [] },
//   { type, payload }: FetchPostsAction
// ) {
//   switch (type) {
//     case FETCH_POSTS_PENDING:
//       return { ...state, error: false, fetching: true };
//     case FETCH_POSTS_SUCCESS:
//       return { ...state, error: false, fetching: false, posts: payload };
//     case FETCH_POSTS_FAILURE:
//       return { ...state, error: true, payload, fetching: false };
//     default:
//       return state;
//   }
// }
