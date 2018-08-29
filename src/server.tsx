import React from "react";
import express from "express";
import { Provider } from "react-redux";
import { push } from "./lib/history";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Request, Response } from "express";

import App from "./App";
import configureStore from "app/store";

async function renderRoute(req: Request, res: Response) {
  const ctx: any = {};
  const store = configureStore();
  await store.dispatch(push(req.url));

  const markup = renderToString(
    <Provider store={store}>
      <HelmetProvider context={ctx}>
        <App />
      </HelmetProvider>
    </Provider>
  );

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
  .use(express.static("dist"))
  .use(express.static("static"))
  .get("*", renderRoute);

export default app;
