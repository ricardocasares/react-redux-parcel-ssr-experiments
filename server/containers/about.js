import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";
import Link from "app/components/Link";
export const Index = ({ router }) => (React.createElement("div", null,
    React.createElement(Helmet, null,
        React.createElement("title", null, "About")),
    React.createElement("h1", null, router.path),
    React.createElement(Link, { to: "/?test=5&move=1" }, "Home"),
    React.createElement(Link, { to: "/blog" }, "Blog"),
    React.createElement("h2", null, "About")));
const mapStateToProps = ({ router }) => ({ router });
export default connect(mapStateToProps)(Index);
//# sourceMappingURL=about.js.map