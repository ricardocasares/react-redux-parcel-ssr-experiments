import { Store } from "redux";
import createMemoryHistory from "history/createMemoryHistory";
import createBrowserHistory from "history/createBrowserHistory";

const UPDATE_LOCATION = "@@location/update";
const updateLocation = (payload: any) => ({ type: UPDATE_LOCATION, payload });
const isServer = typeof window === "undefined";

export const history = isServer
  ? createMemoryHistory()
  : createBrowserHistory();

export function connectHistory(store: Store) {
  history.listen(state => {
    store.dispatch(updateLocation(state));
  });
}
