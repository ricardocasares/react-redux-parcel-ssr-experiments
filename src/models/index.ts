export interface AppState {
  router: {
    key?: string;
    hash?: string;
    state?: any;
    search?: string;
    pathname: string;
  };
  counter: { count: number };
}
