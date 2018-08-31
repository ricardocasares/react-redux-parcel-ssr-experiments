import React from "react";

type Props = {
  component: () => Promise<any>;
  [x: string]: any;
};

type State = {
  Component: any;
};

export default class Dynamic extends React.Component<Props, State> {
  state: State = {
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
    const { component, ...props } = this.props;

    return Component ? <Component {...props} /> : null;
  }
}
