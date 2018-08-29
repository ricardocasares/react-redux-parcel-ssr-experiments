import express from "express";
import server from "./server";

if (module.hot) {
  module.hot.accept("./server", () => {
    console.log("reloading");
  });
}

const port = process.env.PORT || 3000;

export default express()
  .use(server)
  .listen(port, (err: Error) => {
    if (err) return console.error(err);

    console.log(`> Started on port ${port}`);
  });
