import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";

import App from "@app/index";
import configureStore from "@app/store";
import { connectHistory } from "@app/lib/history";

const store = configureStore(window.__REDUX_STATE);
connectHistory(store);

hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
