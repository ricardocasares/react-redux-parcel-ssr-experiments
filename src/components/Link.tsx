import React, { SFC } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "app/lib/history/actions";

type Link = {
  to: string;
  push: Function;
  className?: string;
};

const Link: SFC<Link> = ({ to, children, className, push }) => (
  <a
    href={to}
    onClick={e => {
      e.preventDefault();
      push(to);
    }}
    className={className}
  >
    {children}
  </a>
);

export default connect(
  null,
  dispatch => bindActionCreators({ push }, dispatch)
)(Link);
