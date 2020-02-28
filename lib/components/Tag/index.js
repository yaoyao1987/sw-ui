"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Tag = function Tag(props) {
  var children = props.children,
      closable = props.closable,
      onClose = props.onClose,
      color = props.color;

  var tag = _react.default.createRef();

  var handleClose = function handleClose(e) {
    onClose && onClose(e);
    tag.current.style.display = 'none';
  };

  return _react.default.createElement("div", {
    ref: tag,
    className: (0, _classnames.default)('xTag', color ? 'xTagHasColor' : ''),
    style: {
      backgroundColor: color
    }
  }, children, closable && _react.default.createElement("span", {
    className: 'closeBtn',
    onClick: handleClose
  }, "x"));
};

var _default = Tag;
exports.default = _default;