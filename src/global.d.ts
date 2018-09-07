import State from "./models";

declare global {
  interface Window {
    __REDUX_STATE: State;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
