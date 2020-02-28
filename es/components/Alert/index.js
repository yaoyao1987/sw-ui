import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState } from 'react';
import classNames from 'classnames';
import "./index.css";

var Alert = function Alert(props) {
  var style = props.style,
      closable = props.closable,
      closeText = props.closeText,
      message = props.message,
      description = props.description,
      type = props.type,
      onClose = props.onClose;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleClose = function handleClose(e) {
    setVisible(false);
    onClose && onClose(e);
  };

  return visible ? React.createElement("div", {
    className: classNames('xAlertWrap', type || 'warning'),
    style: _objectSpread({
      opacity: visible ? '1' : '0'
    }, style)
  }, React.createElement("div", {
    className: "alertMes"
  }, message), React.createElement("div", {
    className: "alertDesc"
  }, description), !!closable && React.createElement("span", {
    className: "closeBtn",
    onClick: handleClose
  }, closeText ? closeText : 'x')) : null;
};

export default Alert;