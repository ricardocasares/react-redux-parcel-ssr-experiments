import React, { SFC } from "react";
import { connect } from "react-redux";

import Link from "../components/Link";
import { AppState } from "../models";

export type About = Pick<AppState, "router">;

export const Index: SFC<About> = ({ router }) => (
  <div>
    <h1>{router.pathname}</h1>
    <Link to="/">Home</Link>
    <h2>Nothing here</h2>
  </div>
);

const mapStateToProps = ({ router }: AppState) => ({ router });

export default connect(mapStateToProps)(Index);
