import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";
import Link from "app/components/Link";
import Counter from "app/components/Counter";
export const Index = ({ router }) => (React.createElement("div", null,
    React.createElement(Helmet, null,
        React.createElement("title", null, "Home")),
    React.createElement("h1", null, router.path),
    React.createElement(Link, { to: "/blog" }, "Blog"),
    React.createElement(Link, { to: "/about" }, "About"),
    React.createElement(Counter, null)));
export default connect(({ router }) => ({ router }))(Index);
//# sourceMappingURL=index.js.map