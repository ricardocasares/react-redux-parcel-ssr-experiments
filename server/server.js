import React from "react";
import express from "express";
import compression from "compression";
import { Provider } from "react-redux";
import { push } from "./lib/history";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import configureStore from "app/store";
async function renderRoute(req, res) {
    const ctx = {};
    const store = configureStore();
    await store.dispatch(push(req.url));
    const markup = renderToString(React.createElement(Provider, { store: store },
        React.createElement(HelmetProvider, { context: ctx },
            React.createElement(App, null))));
    res.send(`<html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>__REDUX_STATE = ${JSON.stringify(store.getState())}</script>
        <script src="/vendor.js"></script>
        <script src="/client.js"></script>
        <script src="/runtime.client.js"></script>
      </body>
    </html>`);
}
const app = express()
    .disable("x-powered-by")
    .use(compression())
    .use(express.static("dist"))
    .use(express.static("static"))
    .get("*", renderRoute);
export default app;
//# sourceMappingURL=server.js.map