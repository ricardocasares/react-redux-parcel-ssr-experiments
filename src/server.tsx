import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import express, { static as assets, Request, Response } from "express";

import App from "@app/index";
import configureStore from "@app/store";

function renderRoute(req: Request, res: Response) {
  const store = configureStore({ router: { pathname: req.url } });

  res.send(`<html>
      <head>
        <title>Hello</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="root">${renderToString(
          <Provider store={store}>
            <App />
          </Provider>
        )}</div>
        <script>__REDUX_STATE = ${JSON.stringify(store.getState())}</script>
        <script async src="/client.js"></script>
      </body>
    </html>`);
}

express()
  .use(assets("./dist"))
  .get("*", renderRoute)
  .listen(3000, () => console.log("> Listening on port 3000"));
