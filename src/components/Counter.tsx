import React, { SFC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AppState } from "@app/models";
import * as actions from "@app/store/counter/actions";

type Counter = {
  increment: typeof actions.increment;
  decrement: typeof actions.decrement;
};

type Count = {
  count: number;
};

const Count: SFC<Count> = ({ count }) => <span>{count}</span>;

const Counter: SFC<Counter> = ({ increment, decrement }) => (
  <div>
    <h1>
      Clicks so far: <ConnectedCount />
    </h1>
    <button onClick={() => increment()}>inc</button>
    <button onClick={() => decrement()}>dec</button>
  </div>
);

const ConnectedCount = connect(({ counter }: AppState) => ({
  count: counter.count
}))(Count);

export default connect(
  null,
  dispatch => bindActionCreators(actions, dispatch)
)(Counter);
