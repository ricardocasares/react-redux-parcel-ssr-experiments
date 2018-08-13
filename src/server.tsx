import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import express, { Request, Response } from "express";

import App from "./";
import configureStore from "./store";

function renderRoute(req: Request, res: Response) {
  const store = configureStore({ router: { pathname: req.url } });

  const str = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const html = `<html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="root">${str}</div>
        <script>__REDUX_STATE = ${JSON.stringify(store.getState())}</script>
        <script src="/client.js"></script>
      </body>
    </html>`;

  res.send(html);
}

express()
  .use(express.static("./dist"))
  .get("*", renderRoute)
  .listen(3000, () => console.log("> Listening on port 3000"));
