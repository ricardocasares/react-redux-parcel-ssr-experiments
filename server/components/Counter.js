import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "app/store/counter/actions";
const Count = ({ count }) => React.createElement("span", null, count);
const Counter = ({ increment, decrement }) => (React.createElement("div", null,
    React.createElement("h1", null,
        "Clicks so far: ",
        React.createElement(ConnectedCount, null)),
    React.createElement("button", { onClick: () => increment() }, "inc"),
    React.createElement("button", { onClick: () => decrement() }, "dec")));
const ConnectedCount = connect(({ counter }) => ({
    count: counter.count
}))(Count);
export default connect(null, dispatch => bindActionCreators(actions, dispatch))(Counter);
//# sourceMappingURL=Counter.js.map