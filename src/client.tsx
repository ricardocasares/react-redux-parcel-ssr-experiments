import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";

import App from "./";
import configureStore from "./store";
import { connectHistory } from "./lib/history";

const store = configureStore(window.__REDUX_STATE);
connectHistory(store);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
