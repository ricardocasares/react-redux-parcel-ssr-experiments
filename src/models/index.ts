export interface Action<T, P> {
  readonly type: T;
  readonly payload: P;
}

export interface Effect<T, E> extends Action<T, void> {
  readonly meta: E;
}

export interface Post {
  readonly id: number;
  readonly userId: number;
  readonly title: string;
  readonly body: string;
}

export interface Counter {
  readonly count: number;
}

export interface Blog {
  readonly posts: Post[];
  readonly selected?: Post;
}

export interface History {
  readonly path: string;
  readonly href?: string;
  readonly post?: string;
  readonly pathname?: string;
  readonly hostname?: string;
  readonly protocol?: string;
  readonly search?: Record<string, string>;
}

export interface State {
  readonly blog: Blog;
  readonly router: History;
  readonly counter: Counter;
}

export default State;
