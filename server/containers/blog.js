import React from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";
import Link from "app/components/Link";
export const Blog = ({ router, blog }) => (React.createElement("div", null,
    React.createElement(Helmet, null,
        React.createElement("title", null, "Blog")),
    React.createElement("h1", null, router.path),
    React.createElement(Link, { to: "/?test=5&move=1" }, "Home"),
    React.createElement(Link, { to: "/about" }, "About"),
    React.createElement("h2", null, "Blog"),
    blog.posts.map(post => (React.createElement("h3", { key: post.id }, post.title)))));
const mapStateToProps = ({ router, blog }) => ({ router, blog });
export default connect(mapStateToProps)(Blog);
//# sourceMappingURL=blog.js.map