import React from 'react';
import classNames from 'classnames';
import "./index.css";

var Button = function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type,
      shape = props.shape,
      block = props.block;
  return React.createElement("div", {
    className: classNames('xButton', 'ripple', type, shape, block ? 'block' : '', className),
    onClick: onClick
  }, children);
};

export default Button;