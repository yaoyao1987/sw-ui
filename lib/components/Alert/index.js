"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./index.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Alert = function Alert(props) {
  var style = props.style,
      closable = props.closable,
      closeText = props.closeText,
      message = props.message,
      description = props.description,
      type = props.type,
      onClose = props.onClose;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var handleClose = function handleClose(e) {
    setVisible(false);
    onClose && onClose(e);
  };

  return visible ? _react.default.createElement("div", {
    className: (0, _classnames.default)('xAlertWrap', type || 'warning'),
    style: _objectSpread({
      opacity: visible ? '1' : '0'
    }, style)
  }, _react.default.createElement("div", {
    className: "alertMes"
  }, message), _react.default.createElement("div", {
    className: "alertDesc"
  }, description), !!closable && _react.default.createElement("span", {
    className: "closeBtn",
    onClick: handleClose
  }, closeText ? closeText : 'x')) : null;
};

var _default = Alert;
exports.default = _default;