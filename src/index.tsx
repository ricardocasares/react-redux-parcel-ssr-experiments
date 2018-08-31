import React, { SFC } from "react";
import { connect } from "react-redux";
// @todo: get typings for libreact
import { Switch, Router, Route } from "libreact/lib/route";

import Index from "@app/containers/index";
import { AppState } from "@app/models";

const Blog = () => import("@app/containers/Blog");
const About = () => import("@app/containers/About");

type D = {
  component: any;
  [x: string]: any;
};

type S = {
  Component: any;
};

class Dynamic extends React.Component<D, S> {
  state: S = {
    Component: null
  };

  componentDidMount() {
    const { component } = this.props;

    component().then((x: any) => {
      this.setState({ Component: x.default });
    });
  }

  render() {
    const { Component } = this.state;

    return Component ? <Component {...this.props} /> : <p>Loading</p>;
  }
}

type RoutedApp = Pick<AppState, "router">;

const RoutedApp: SFC<RoutedApp> = ({ router }) => (
  <Router route={router.path}>
    <Switch>
      <Route match={"/blog"} component={() => <Dynamic component={Blog} />} />
      <Route match={"/about"} component={() => <Dynamic component={About} />} />
      <Route match={"/"}>
        <Index />
      </Route>
    </Switch>
  </Router>
);

const mapStateToProps = ({ router }: AppState) => ({ router });
const ConnectedApp = connect(mapStateToProps)(RoutedApp);

export default ConnectedApp;
