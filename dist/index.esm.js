import React, { useState } from 'react';
import classNames from 'classnames';

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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
    style: _objectSpread2({
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

export { Alert, Button, Empty, Tag };
