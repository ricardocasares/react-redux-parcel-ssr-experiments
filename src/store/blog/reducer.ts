import { Reducer } from "redux";
import { BlogState, BlogAction, BlogActionType } from "./types";

export const reducer: Reducer<BlogState, BlogAction> = function(
  state = { fetching: false, error: false, posts: [] },
  action
) {
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
        posts: action.payload.posts
      };
    default:
      return state;
  }
};
