import React, { SFC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { AppState } from "@app/models";

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

const increment = () => ({ type: "INC" });
const decrement = () => ({ type: "DEC" });

export default connect(
  ({ counter }: AppState) => counter,
  dispatch => bindActionCreators({ inc: increment, dec: decrement }, dispatch)
)(Counter);
