import React, { SFC } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";

import Link from "@app/components/Link";
import Counter from "@app/components/Counter";
import { AppState } from "@app/models";

export type Index = Pick<AppState, "router">;

export const Index: SFC<Index> = ({ router }) => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>{router.path}</h1>
    <Link to="/blog">Blog</Link>
    <Link to="/about">About</Link>

    <Counter />
  </div>
);

export default connect(({ router }: AppState) => ({ router }))(Index);
