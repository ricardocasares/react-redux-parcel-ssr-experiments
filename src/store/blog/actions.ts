import { http, HttpAction } from "@app/lib/http";
import { Post, BlogAction, BlogActionType } from "./types";

export function fetchPostsPending(): BlogAction {
  return {
    type: BlogActionType.POSTS_FETCH_PENDING,
    payload: {
      posts: []
    }
  };
}

export function fetchPostsSuccess(posts: Post[]): BlogAction {
  return {
    type: BlogActionType.POSTS_FETCH_SUCCESS,
    payload: {
      posts
    }
  };
}

export function fetchPosts(): HttpAction<BlogAction> {
  return http<BlogAction>(
    "https://jsonplaceholder.typicode.com/posts",
    (posts: Post[]) => fetchPostsSuccess(posts)
  );
}
