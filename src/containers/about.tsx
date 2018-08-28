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
    <h1>{router.path}</h1>
    <Link to="/?test=5&move=1">Home</Link>
    <Link to="/blog">Blog</Link>
    <h2>About</h2>
  </div>
);

const mapStateToProps = ({ router }: AppState) => ({ router });

export default connect(mapStateToProps)(Index);
