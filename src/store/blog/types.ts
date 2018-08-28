import { Action } from "redux";

export enum BlogActionType {
  POSTS_FETCH_PENDING = "@app/blog/posts/fetch/pending",
  POSTS_FETCH_SUCCESS = "@app/blog/posts/fetch/success",
  POSTS_FETCH_FAILURE = "@app/blog/posts/fetch/failure"
}

export interface BlogAction extends Action<BlogActionType> {
  payload: Post[];
}

export interface BlogState {
  posts: Post[];
  error: boolean;
  fetching: boolean;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
