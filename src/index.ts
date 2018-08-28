import express from "express";
import app from "./server";

if (module.hot) {
  module.hot.accept("./server", () => {
    console.log("reloading");
  });
}

const port = process.env.PORT || 3000;

export default express()
  .use(app)
  .listen(port, (err: Error) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });
