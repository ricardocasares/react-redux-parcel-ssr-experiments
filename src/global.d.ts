import { AppState } from "./models";

declare global {
  interface Window {
    __REDUX_STATE: AppState;
  }
}
