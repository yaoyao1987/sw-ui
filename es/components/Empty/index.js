import React from 'react';
import classNames from 'classnames';
import "./index.css";

var Empty = function Empty(props) {
  var text = props.text,
      className = props.className;
  return React.createElement("div", {
    className: classNames("emptyWrap", className)
  }, React.createElement("div", {
    className: "emptyInner"
  }, React.createElement("span", {
    className: "icon-finder"
  }), React.createElement("p", null, text ? text : '空空如也')));
};

export default Empty;