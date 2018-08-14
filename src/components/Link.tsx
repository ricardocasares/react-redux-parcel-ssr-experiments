import React, { SFC } from "react";
import { history } from "../lib/history";

type Link = {
  to: string;
  className?: string;
};

function onClick(e: React.MouseEvent<HTMLElement>, to: string) {
  history.push(to);
  e.preventDefault();
}

const Link: SFC<Link> = ({ to, children, className }) => (
  <a href={to} onClick={e => onClick(e, to)} className={className}>
    {children}
  </a>
);

export default Link;
