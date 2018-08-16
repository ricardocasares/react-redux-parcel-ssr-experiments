import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import express, { static as assets, Request, Response } from "express";

import App from "@app/index";
import configureStore from "@app/store";

function renderRoute(req: Request, res: Response) {
  const ctx: any = {};
  const store = configureStore({ router: { pathname: req.url } });
  const application = renderToString(
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
      </head>
      <body>
        <div id="root">${application}</div>
        <script>__REDUX_STATE = ${JSON.stringify(store.getState())}</script>
        <script async src="/client.js"></script>
      </body>
    </html>`);
}

express()
  .use(assets("./dist"))
  .use(assets("./static"))
  .get("*", renderRoute)
  .listen(3000, () => console.log("> Listening on port 3000"));
