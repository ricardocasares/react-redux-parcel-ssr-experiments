import React, { SFC } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";

import Link from "@app/components/Link";
import { AppState } from "@app/models";

export type About = Pick<AppState, "router">;

export const Index: SFC<About> = ({ router }) => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h1>{router.pathname}</h1>
    <Link to="/">Home</Link>
    <h2>Nothing here</h2>
  </div>
);

const mapStateToProps = ({ router }: AppState) => ({ router });

export default connect(mapStateToProps)(Index);
