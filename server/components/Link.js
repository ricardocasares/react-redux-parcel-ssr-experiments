import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { push } from "app/lib/history/actions";
const Link = ({ to, children, className, push }) => (React.createElement("a", { href: to, onClick: e => {
        e.preventDefault();
        push(to);
    }, className: className }, children));
export default connect(null, dispatch => bindActionCreators({ push }, dispatch))(Link);
//# sourceMappingURL=Link.js.map