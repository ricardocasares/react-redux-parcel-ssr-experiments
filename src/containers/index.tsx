import React, { SFC } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Link from "../components/Link";
import Counter from "../components/Counter";
import { AppState } from "../models";

const increment = () => ({ type: "INC" });
const decrement = () => ({ type: "DEC" });

export type Index = {
  inc: (e: React.MouseEvent<HTMLButtonElement>) => void;
  dec: (e: React.MouseEvent<HTMLButtonElement>) => void;
} & Pick<AppState, "router" | "counter">;

export const Index: SFC<Index> = ({ router, counter, inc, dec }) => (
  <div>
    <h1>{router.pathname}</h1>
    <Link to="/about">About</Link>
    <Counter count={counter.count} inc={inc} dec={dec} />
  </div>
);

const mapStateToProps = ({ router, counter }: AppState) => ({
  router,
  counter
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ inc: increment, dec: decrement }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
