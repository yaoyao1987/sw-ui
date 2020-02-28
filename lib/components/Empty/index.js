"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

var Empty = function Empty(props) {
  var text = props.text,
      className = props.className;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)("emptyWrap", className)
  }, _react.default.createElement("div", {
    className: "emptyInner"
  }, _react.default.createElement("span", {
    className: "icon-finder"
  }), _react.default.createElement("p", null, text ? text : '空空如也')));
};

var _default = Empty;
exports.default = _default;