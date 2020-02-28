"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Button = function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className,
      type = props.type,
      shape = props.shape,
      block = props.block;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('xButton', 'ripple', type, shape, block ? 'block' : '', className),
    onClick: onClick
  }, children);
};

var _default = Button;
exports.default = _default;