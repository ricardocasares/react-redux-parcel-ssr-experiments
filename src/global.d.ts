import { AppState } from "./models";

declare global {
  interface Window {
    __REDUX_STATE: AppState;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
