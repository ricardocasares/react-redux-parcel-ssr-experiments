import React from "react";
import { connect } from "react-redux";
// @todo: get typings for libreact
import { Switch, Router, Route } from "libreact/lib/route";
import Index from "app/containers/index";
import Blog from "app/containers/blog";
import About from "app/containers/about";
const RoutedApp = ({ router }) => (React.createElement(Router, { route: router.path },
    React.createElement(Switch, null,
        React.createElement(Route, { match: "/about" },
            React.createElement(About, null)),
        React.createElement(Route, { exact: true, match: "/blog" },
            React.createElement(Blog, null)),
        React.createElement(Route, { match: "/" },
            React.createElement(Index, null)))));
const mapStateToProps = ({ router }) => ({ router });
const ConnectedApp = connect(mapStateToProps)(RoutedApp);
export default ConnectedApp;
//# sourceMappingURL=App.js.map