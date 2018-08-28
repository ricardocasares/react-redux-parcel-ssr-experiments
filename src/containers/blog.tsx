import React, { SFC } from "react";
import { connect } from "react-redux";
import Helmet from "react-helmet-async";

import Link from "app/components/Link";
import { AppState } from "app/models";

export type Blog = Pick<AppState, "router" | "blog">;

export const Blog: SFC<Blog> = ({ router, blog }) => (
  <div>
    <Helmet>
      <title>Blog</title>
    </Helmet>
    <h1>{router.path}</h1>
    <Link to="/?test=5&move=1">Home</Link>
    <Link to="/about">About</Link>
    <h2>Blog</h2>
    {blog.posts.map(post => (
      <h3 key={post.id}>{post.title}</h3>
    ))}
  </div>
);

const mapStateToProps = ({ router, blog }: AppState) => ({ router, blog });

export default connect(mapStateToProps)(Blog);
