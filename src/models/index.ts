export interface AppState {
  router: {
    path: string;
    href: string;
    pathname: string;
    search?: {
      [x: string]: string;
    };
  };
  counter: { count: number };
}
