import { http, HttpAction } from "@app/lib/http";
import { Post, BlogAction, BlogActionType } from "./types";

export function fetchPostsPending(): BlogAction {
  return {
    type: BlogActionType.POSTS_FETCH_PENDING,
    payload: []
  };
}

export function fetchPostsSuccess(payload: Post[]): BlogAction {
  return {
    type: BlogActionType.POSTS_FETCH_SUCCESS,
    payload
  };
}

export function fetchPosts(): HttpAction<BlogAction, Post[]> {
  return http<BlogAction, Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    posts => fetchPostsSuccess(posts)
  );
}
