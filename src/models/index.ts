export type AppState = {
  blog: BlogState;
  router: HistoryState;
  counter: CounterState;
};

export type BlogState = {
  posts: Post[];
  selected?: Post;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type CounterState = {
  count: number;
};

export type HistoryState = {
  path: string;
  href?: string;
  post?: string;
  pathname?: string;
  hostname?: string;
  protocol?: string;
  search?: Record<string, string>;
};

export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface Effect<T, E> extends Action<T, void> {
  readonly meta: E;
}
