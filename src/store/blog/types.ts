import { Action, Post } from "@app/models";

export enum BlogType {
  POST_PENDING = "@app/blog/post/pending",
  POST_SUCCESS = "@app/blog/post/success",
  POST_FAILURE = "@app/blog/post/failure",
  POSTS_PENDING = "@app/blog/posts/pending",
  POSTS_SUCCESS = "@app/blog/posts/success",
  POSTS_FAILURE = "@app/blog/posts/failure"
}

export type PostPendingAction = Action<BlogType.POST_PENDING, void>;
export type PostSuccessAction = Action<BlogType.POST_SUCCESS, Post>;
export type PostFailureAction = Action<BlogType.POST_FAILURE, void>;
export type PostsPendingAction = Action<BlogType.POSTS_PENDING, void>;
export type PostsSuccessAction = Action<BlogType.POSTS_SUCCESS, Post[]>;
export type PostsFailureAction = Action<BlogType.POSTS_FAILURE, void>;

export type BlogAction =
  | PostPendingAction
  | PostSuccessAction
  | PostFailureAction
  | PostsPendingAction
  | PostsSuccessAction
  | PostsFailureAction;
