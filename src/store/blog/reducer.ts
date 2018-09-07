import { Reducer } from "redux";
import { BlogState } from "@app/models";
import { BlogAction, BlogType } from "./types";

export const reducer: Reducer<BlogState, BlogAction> = (
  state = { posts: [] },
  action
) => {
  switch (action.type) {
    case BlogType.POST_SUCCESS:
      return {
        ...state,
        selected: action.payload
      };
    case BlogType.POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};
