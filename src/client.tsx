import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import App from "@app/index";
import { dispatchOnPopState } from "@app/lib/history";
import configureStore from "@app/store";

const store = configureStore(window.__REDUX_STATE);
dispatchOnPopState(store);

(window as any).store = store;

hydrate(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  document.querySelector("#root")
);
