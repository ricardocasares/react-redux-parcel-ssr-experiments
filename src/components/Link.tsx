import React, { SFC } from "react";
import { history } from "../lib/history";

type Link = {
  to: string;
};

const Link: SFC<Link> = ({ to, children }) => (
  <div onClick={() => history.push(to)}>{children}</div>
);

export default Link;
