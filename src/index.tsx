import React, { SFC } from "react";
import { connect } from "react-redux";
// @todo: get typings for libreact
import { Switch, Router, Route } from "libreact/lib/route";

import Index from "@app/containers/index";
import { AppState } from "@app/models";
import Dynamic from "@app/components/Dynamic";

const Blog = () => import("@app/containers/Blog");
const About = () => import("@app/containers/About");

type RoutedApp = Pick<AppState, "router">;

const RoutedApp: SFC<RoutedApp> = ({ router }) => (
  <Router route={router.path}>
    <Switch>
      <Route match={"/blog"} component={() => <Dynamic component={Blog} />} />
      <Route match={"/about"} component={() => <Dynamic component={About} />} />
      <Route match={"/"} component={Index} />
    </Switch>
  </Router>
);

const mapStateToProps = ({ router }: AppState) => ({ router });
const ConnectedApp = connect(mapStateToProps)(RoutedApp);

export default ConnectedApp;
