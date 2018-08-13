import { Store } from "redux";
import createBrowserHistory from "history/createBrowserHistory";
import createMemoryHistory from "history/createMemoryHistory";

const UPDATE_LOCATION = "@@location/update";
const updateLocation = (payload: any) => ({ type: UPDATE_LOCATION, payload });
const isServer = typeof window === "undefined";

export const history = isServer
  ? createMemoryHistory()
  : createBrowserHistory();

export function connectHistory(store: Store) {
  history.listen(({ pathname }) => {
    store.dispatch(updateLocation({ pathname }));
  });
}
