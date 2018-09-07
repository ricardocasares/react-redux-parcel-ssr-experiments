import { Post } from "@app/models";
import { http } from "@app/lib/http";
import { delay } from "@app/lib/delay";
import { BlogAction, BlogType } from "./types";

export function postsPending(): BlogAction {
  return {
    type: BlogType.POSTS_PENDING,
    payload: undefined
  };
}

export function postsSuccess(payload: Post[]): BlogAction {
  return {
    type: BlogType.POSTS_SUCCESS,
    payload
  };
}

export function postsFailure(): BlogAction {
  return {
    type: BlogType.POSTS_FAILURE,
    payload: undefined
  };
}

export function postPending(): BlogAction {
  return {
    type: BlogType.POST_PENDING,
    payload: undefined
  };
}

export function postSuccess(payload: Post): BlogAction {
  return {
    type: BlogType.POST_SUCCESS,
    payload
  };
}

export function postFailure(): BlogAction {
  return {
    type: BlogType.POST_FAILURE,
    payload: undefined
  };
}

export function fetchPost(id: number) {
  return http<BlogAction, Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    post => postSuccess(post)
  );
}

export function fetchPosts() {
  return delay(
    () =>
      http<BlogAction, Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
        posts => postsSuccess(posts)
      ),
    250
  );
}
