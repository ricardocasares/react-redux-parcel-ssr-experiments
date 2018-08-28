import React from "react";
import express from "express";
import { Provider } from "react-redux";
import { push } from "./lib/history";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Request, Response } from "express";

let assets: any;
const RAZZLE_PUBLIC_DIR = process.env.RAZZLE_PUBLIC_DIR || "";

const syncLoadAssets = () => {
  assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

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
        ${ctx.helmet.title.toString()}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${
          assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ""
        }
        ${
          process.env.NODE_ENV === "production"
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`
        }
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>__REDUX_STATE = ${JSON.stringify(store.getState())}</script>
      </body>
    </html>`);
}

const app = express()
  .disable("x-powered-by")
  .use(express.static(RAZZLE_PUBLIC_DIR))
  .get("*", renderRoute);

export default app;
