import React from 'react';
import classNames from 'classnames';
import "./index.css";

var Tag = function Tag(props) {
  var children = props.children,
      closable = props.closable,
      onClose = props.onClose,
      color = props.color;
  var tag = React.createRef();

  var handleClose = function handleClose(e) {
    onClose && onClose(e);
    tag.current.style.display = 'none';
  };

  return React.createElement("div", {
    ref: tag,
    className: classNames('xTag', color ? 'xTagHasColor' : ''),
    style: {
      backgroundColor: color
    }
  }, children, closable && React.createElement("span", {
    className: 'closeBtn',
    onClick: handleClose
  }, "x"));
};

export default Tag;