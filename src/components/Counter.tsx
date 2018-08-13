import React, { SFC } from "react";

type Counter = {
  count: number;
  inc: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dec: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Counter: SFC<Counter> = ({ count, inc, dec }) => (
  <div>
    <h1>Clicks so far: {count}</h1>
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
  </div>
);

export default Counter;
