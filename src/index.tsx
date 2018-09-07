import React, { SFC } from "react";
import { connect } from "react-redux";
// @todo: get typings for libreact
import { Switch, Router, Route } from "libreact/lib/route";

import Index from "@app/containers/index";
import Blog from "@app/containers/blog";
import About from "@app/containers/about";
import State from "@app/models";

type RoutedApp = Pick<State, "router">;

const RoutedApp: SFC<RoutedApp> = ({ router }) => (
  <Router route={router.path}>
    <Switch>
      <Route match={"/about"}>
        <About />
      </Route>
      <Route exact match={"/blog"}>
        <Blog />
      </Route>
      <Route match={"/"}>
        <Index />
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = ({ router }: State) => ({ router });
const ConnectedApp = connect(mapStateToProps)(RoutedApp);

export default ConnectedApp;
