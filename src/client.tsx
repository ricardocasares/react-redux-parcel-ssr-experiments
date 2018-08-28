import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import App from ".";
import configureStore from "app/store";

const store = configureStore(window.__REDUX_STATE);

hydrate(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>,
  document.querySelector("#root")
);
